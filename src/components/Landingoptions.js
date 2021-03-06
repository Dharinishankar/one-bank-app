import React, {Component, useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Accounts from './pages/Accounts';


//to load images
 import accountsImg from '../images/accounts.JPG';
 import oneCardImg from '../images/OneCard.JPG'
 import transferImg from '../images/transfer.JPG';
 import surveyImg from '../images/Surveys.JPG';

 
import { useRef ,useContext} from 'react';
import { Context } from "../Context";
 

function Landingoptions(props) {
  const { custId, setCustId } = useContext(Context);
   
    return(
        <>
        {/* <h1>from landing {custId}</h1> */}
        <Link to={`/accounts/${custId}`}>

          

  <figure  data-category='test'>
              
                  <img
              className='cards__item__img'
              alt='accounts Image'
              src={accountsImg}
            >  
            </img>     
                 
          
          </figure>
       </Link>
  
        <Link to='/onecard'>
           <figure  data-category='test'>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={oneCardImg}
            />
          </figure>
</Link>
<Link to='/transfer'>
          <figure  data-category='test'>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={transferImg}
            />
          </figure>
          </Link>
          <figure  data-category='test'>
           <img
              className='cards__item__img'
              alt='Travel Image'
              src={surveyImg}
            />
          </figure>
</>
      
  );
}
export default Landingoptions;