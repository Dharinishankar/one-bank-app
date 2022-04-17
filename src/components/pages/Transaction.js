import { render } from '@testing-library/react';
import React from 'react';
import '../../App.css';
import { useParams,useLocation } from "react-router-dom";
import { useState,useEffect,useContext } from 'react';
//import Table from 'react-bootstrap/Table'
import { Context } from "../../Context";


const Transaction = () =>{
    
    //const [TransData, setTransData] = useState([{"availablebalance":10000,"accountid":5,"branchcode":"01-SBI-Madurai","accountnumber":3456789011,"isactive":true,"custid":2,"accounttype":"Savings","activefrom":"21-Mar-2010","ledgerbalance":0},{"availablebalance":120000,"accountid":6,"branchcode":"01-SBI-Redhills","accountnumber":5678901234,"isactive":true,"custid":2,"accounttype":"Credit Card","activefrom":"21-Mar-2020","ledgerbalance":0}]);
    const [TransData, setTransData] =useState([]);
    //const { custId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const { custId, setCustId } = useContext(Context);

    const getTransactionList  = async () => {
        setIsLoading(true); 
        var req = {custId}
        const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req)}
        console.log({req})

        const url = 'https://7vv4vu7wb5.execute-api.ap-south-1.amazonaws.com/onecard/gettransactions';

        const response = await fetch (url,settings);
                try {
                    const data = await response.json();
                    ;
                    //const data = (responseJson.);
                    console.log("111111111111111111");
                    console.log(data);
console.log("2222222222222222222222222222");
                 // setTransData([...TransData, JSON.parse(data)])
                    setTransData(JSON.parse(data));
                    console.log("33333333333333333333");
                    console.log(TransData);
                    setIsLoading(false); 
                    
                } catch (err) {
                    console.error(err);
                }

    };

    useEffect (()=> {
       
     getTransactionList();
    }, setTransData);

    return (
        <>
        {isLoading ? (
        <p>Loading Transaction details ...</p>
      ) : (
          <div>
        <h1>FromTransacr</h1>
        <h1>6565</h1>
        <table>
  <thead class="thead-dark">
    <tr>
      <th scope="col">Account Number</th>
      <th scope="col">Branch</th>
      <th scope="col">Amount</th>
      <th scope="col">Date&Time</th>
      <th scope="col">Settled?</th>
    </tr>
  </thead>
<tbody>
    {TransData.map( (acc,index)=>
       (
          <tr>
            <td>{acc.accountnumber}</td>
			  <td>{acc.branchcode}</td>
			  <td>{acc.amount}</td>
			  <td>{acc.txndatetime}</td>   
			  <td>{acc.settled?(<p>Yes</p>):(<p>No</p>)}</td>
          </tr>
			


    ))}
    </tbody>
</table>
    </div>
    )}
    </>

       );

            
              
        }
export default Transaction;