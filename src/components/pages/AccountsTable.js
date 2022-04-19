import { render } from '@testing-library/react';
import React from 'react';
import '../../App.css';
import { useParams,useLocation } from "react-router-dom";
import {useRef, useState,useEffect } from 'react';
//import Table from 'react-bootstrap/Table'
import { Context } from "../../Context";
import ReactDOM from 'react-dom';


const AccountsTable = () =>{
    
    //const [accountData, setAccountData] = useState([{"availablebalance":10000,"accountid":5,"branchcode":"01-SBI-Madurai","accountnumber":3456789011,"isactive":true,"custid":2,"accounttype":"Savings","activefrom":"21-Mar-2010","ledgerbalance":0},{"availablebalance":120000,"accountid":6,"branchcode":"01-SBI-Redhills","accountnumber":5678901234,"isactive":true,"custid":2,"accounttype":"Credit Card","activefrom":"21-Mar-2020","ledgerbalance":0}]);
    const [accountData, setAccountData] =useState([]);
    const { custId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [currentCard,setCurrentCard]=useState(0);
  // const prevCountRef = useRef();
  const [newcard,setNewCard]=useState(0);


  // useEffect(() => {
  //   //assign the ref's current value to the count Hook
  //   prevCountRef.current = currentCard;
  // }, [currentCard]);

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
                    console.log("getAccountList");
                    
                    console.log("current "+currentCard);
                    console.log("new "+newcard);
                    
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

const getCurrentcard  = async () => {
        setIsLoading(true); 
        var req = {custId}
        const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req)}

        const url = 'https://7vv4vu7wb5.execute-api.ap-south-1.amazonaws.com/onecard/getaccountidassociatedtocard';

        const response = await fetch (url,settings);
                try {
                    const data = await response.json();
                    ;
                    //const data = (responseJson.);
                    console.log("getCurrentcard");
                    console.log(data);
                    console.log("getCurrentcard");
                     var logvar=JSON.parse(data);
                    console.log(logvar[0].accountid);
                    setCurrentCard(logvar[0].accountid);
                    setNewCard(logvar[0].accountid);

                    console.log({currentCard});
                    setIsLoading(false); 
                    
                } catch (err) {
                    console.error(err);
                }

    };

//con


function handleChange(event) {
    // console.log(event.target.id);
    // setNewCard(event.target.id);

    console.log("handleChange22");
    console.log(event.target.id)
    // var newid=ReactDOM.findDOMNode(document.getElementById(event.target.id));
    // newid.checked = "true";
    // var node = document.getElementById(event.target.id);
    // var a = ReactDOM.findDOMNode(node);
    // console.log(a);
    // a.checked = "true";
    // console.log(newid);
  setNewCard(event.target.id);
  showCurrentcard();
    
//setCurrentCard(event.target.id);
  }

    //for selecting row
    const showCurrentcard = () => {
      alert("nee");
      if(newcard!=0){
        alert("vasss");
    var node = document.getElementById(newcard);
    var a = ReactDOM.findDOMNode(node);
    console.log(a);
    a.checked = true;
    alert(a);

      }
     
       }
const changeCurrentCard= async () => {
        setIsLoading(true); 
        var accountId=newcard
        var req = {custId,accountId}
        const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req)}
        console.log(JSON.stringify(req))

        const url = 'https://7vv4vu7wb5.execute-api.ap-south-1.amazonaws.com/onecard/associateaccounttoonecard';

        const response = await fetch (url,settings);
                try {
                    const data = await response.json();
                    ;
                    //const data = (responseJson.);
                    console.log("changeCurrentCard");
                    console.log(data);
                    console.log("changeCurrentCard");
                    // var status=JSON.parse(data);
                    setCurrentCard(newcard);
                    console.log({data});
                    setIsLoading(false); 
                    showCurrentcard();
                    
                } catch (err) {
                    console.error(err);
                }

    };
const resetInfo=()=>{
  var node = document.getElementById(currentCard);
    var a = ReactDOM.findDOMNode(node);
    console.log(a);
    a.checked = "true";
    setNewCard(currentCard);

}
    
    useEffect (()=> {
      alert("getAccountList");
       
     getAccountList();
  
    }, setAccountData);

    useEffect (()=> {
      alert("getCurrentcard");
       
     getCurrentcard();
  
    }, setCurrentCard);

    //   useEffect (()=> {
       
    //  getCurrentcard();
  
    // }, setCurrentCard);
// useEffect(() => {
//   if(newcard!=0){
// showCurrentcard();
//   }    
// },[newcard]);

    return (
        <>
        {isLoading ? (
        <p>Loading ...</p>
      ) : (
          <div>
        <table>
  <thead class="thead-dark">
    <tr>
      <th scope="col">One Card</th>
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
          <tr key={index}>
            {/* <td>{acc.isactive?(<input type="radio" id={acc.accountid} checked={true}/>): (<input type="radio" id={acc.accountid} checked={false}/>) }</td> */}
        <td><input type="radio" id={acc.accountid} checked={newcard === acc.accountid} refs= {acc.accountid} value={acc.accountid} onChange={handleChange}/></td>
        <td>{acc.accountnumber}</td>
			  <td>{acc.branchcode}</td>
			  <td>{acc.accounttype}</td>
			  <td>{acc.availablebalance}</td>   
			  <td>{acc.ledgerbalance}</td>
          </tr>
			


    ))}
    </tbody>
</table>

<div>
<button onClick={changeCurrentCard} name="Associatecard">Associatecard1 </button>
<button onClick={getAccountList} name="RefreshData">Refresh Data</button>
<button onClick={resetInfo} name="Reset">Reset</button>

</div>
    </div>
    )}
    </>

       );

            
              
        }
export default AccountsTable;