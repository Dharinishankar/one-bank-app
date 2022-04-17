import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Landingoptions from '../Landingoptions';
import { useLocation,  useParams} from "react-router-dom";

import { useState,useRef ,useContext} from 'react';
import { Context } from "../../Context";

function Home(){
     const { id } = useParams();
     const { custId, setCustId } = useContext(Context);
     const { email,setEmail } = useContext(Context);
     const {mobile,setMobile}=useContext(Context);
     const {lastLoginTime,setlastLoginTime}=useContext(Context);
     React.useEffect(() => {
    console.log('hii');
     console.log('before');
setTimeout(addBlog,10000); // run donothing after 0.5 seconds
console.log('after');

     });
     function addBlog() {

     
console.log({mobile});
      var mobileNumber=mobile.substring(3, 13);

       //var mobileNumber=8248295070;
        var emailId='dharinisankar@gmail.com'
        var blog = {mobileNumber,emailId}
        console.log(blog)

        fetch("https://7vv4vu7wb5.execute-api.ap-south-1.amazonaws.com/onecard/getcustomer", {
            method: "POST",
            body: JSON.stringify(blog),
            headers: {
                "Content-Type": "application/json"
            }
         }).then(function (response) {
            if (response.ok) {
                console.log(response);
              // return response.text();
              //to get resonse as JSON
               return response.json();
            }
            else{
              var error = new Error(response.statusText)
                error.response = response
                throw error
            }
          }).then(function(data) {
    console.log(data);
    var logvar=JSON.parse(data);
    console.log(logvar);
    console.log(logvar[0].custid);

    //update state value
    //updateCustId(logvar[0].custid);
    setCustId(logvar[0].custid);
    setlastLoginTime(logvar[0].lastlogin);

  });}
  

  return(
    <>
   <h1> from home {custId}000000000000{email}----{mobile}</h1> 

    {/* tpopass param */}
    {/* const { search } = useLocation();
  const query = new URLSearchParams(search);
    const Id = query.get("Id")
    <h1>Welcome {Id.attributes.email}</h1> */}
    {id}
     <Landingoptions/>
    </>
  
);
  }

export default Home;
