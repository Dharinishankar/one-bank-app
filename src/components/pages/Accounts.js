import { render } from '@testing-library/react';
import React from 'react';
import '../../App.css';
import { useParams,useLocation } from "react-router-dom";
import { useState,useEffect } from 'react';
//import Table from 'react-bootstrap/Table'


const Accounts = () =>{
    
    //const [accountData, setAccountData] = useState([{"availablebalance":10000,"accountid":5,"branchcode":"01-SBI-Madurai","accountnumber":3456789011,"isactive":true,"custid":2,"accounttype":"Savings","activefrom":"21-Mar-2010","ledgerbalance":0},{"availablebalance":120000,"accountid":6,"branchcode":"01-SBI-Redhills","accountnumber":5678901234,"isactive":true,"custid":2,"accounttype":"Credit Card","activefrom":"21-Mar-2020","ledgerbalance":0}]);
    const [accountData, setAccountData] =useState([]);
    const { custId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

    const getAccountList  = async () => {
        setIsLoading(true); 
        var req = {custId}
        const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req)}

        const url = 'https://7vv4vu7wb5.execute-api.ap-south-1.amazonaws.com/onecard/getaccounts';

        const response = await fetch (url,settings);
                try {
                    const data = await response.json();
                    ;
                    //const data = (responseJson.);
                    console.log("111111111111111111");
                    console.log(data);
console.log("2222222222222222222222222222");
                 // setAccountData([...accountData, JSON.parse(data)])
                    setAccountData(JSON.parse(data));
                    console.log("33333333333333333333");
                    console.log(accountData);
                    setIsLoading(false); 
                    
                } catch (err) {
                    console.error(err);
                }

    };

    useEffect (()=> {
       
     getAccountList();
    }, setAccountData);

    return (
        <>
        {isLoading ? (
        <p>Loading ...</p>
      ) : (
          <div>
        <h1>hhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h1>
        <h1>6565</h1>
        <table>
  <thead class="thead-dark">
    <tr>
      <th scope="col">Account Number</th>
      <th scope="col">Branch</th>
      <th scope="col">Account Type</th>
      <th scope="col">Available Balance</th>
      <th scope="col">Ledger Balance</th>
    </tr>
  </thead>
<tbody>
    {accountData.map( (acc,index)=>
       (
          <tr>
            <td>{acc.accountnumber}</td>
			  <td>{acc.branchcode}</td>
			  <td>{acc.accounttype}</td>
			  <td>{acc.availablebalance}</td>   
			  <td>{acc.ledgerbalance}</td>
          </tr>
			


    ))}
    </tbody>
</table>
    </div>
    )}
    </>

       );

            
              
        }
export default Accounts;