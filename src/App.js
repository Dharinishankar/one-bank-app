import React from 'react';
import ReactDOM from 'react-dom';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import { Auth } from 'aws-amplify';
import awscofig  from './aws-exports';
//import {Navbar}  from './components/Navbar';
 import Navbar from './components/Navbar';
 
 import NavBarUser from './components/NavBarUser';
import {Button}  from './components/Button';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
 import './components/Button.css';
 import { useState } from 'react';
import './App.css';
 Amplify.configure(awscofig);

 Auth.currentAuthenticatedUser({
    bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
}).then(user => console.log(user))
.catch(err => console.log(err));
function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

function App({ signOut, user}) {
   const [data, setData] = useState(user.attributes.email,user.attributes.phone_number);
  
  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 960)

    window.addEventListener('resize', debouncedHandleResize)

   return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    
}
  })
   return (

    <div>


      <Router>
        <Navbar noClickMe={signOut} parentToChild={user}/>
        {/* <NavBarUser/> */}
        {/* <Navbar/> */}
        <Routes>
          <Route path='/' exact component=  {Home} />
          </Routes>
      </Router>

         <div>
            {/* <h1>Welcome  {user.username}</h1> */}
           <h1>Welcome  {user.attributes.email}</h1>
            
            <figure  data-category='test'>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src='images/accounts.jpg'
            />
          </figure>
        
          <figure  data-category='test'>
           
           <figure  data-category='test'>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src='images/OneCard.jpg'
            />
          </figure>

          <figure  data-category='test'>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src='images/transfer.jpg'
            />
          </figure>
           <img
              className='cards__item__img'
              alt='Travel Image'
              src='images/Surveys.jpg'
            />
          </figure>

           {/* <h3>data {data} </h3>
           <h4>ph : {user.attributes.phone_number}</h4>
            <button k={signOut}>Sign out</button>
            <h2>test3{user.attributes.email}</h2>
           <h3>data {data} </h3>
           <h4>ph : {user.attributes.phone_number}</h4>
            <button k={signOut}>Sign out</button>
            <h2>test3{user.attributes.email}</h2>
           <h3>data {data} </h3>
           <h4>ph : {user.attributes.phone_number}</h4>
            <button k={signOut}>Sign out</button>
            <h2>test3{user.attributes.email}</h2>
           <h3>data {data} </h3>
           <h4>ph : {user.attributes.phone_number}</h4>
            <button k={signOut}>Sign out</button><h2>test3{user.attributes.email}</h2>
           <h3>data {data} </h3>
           <h4>ph : {user.attributes.phone_number}</h4> */}
            {/* <button onClick={signOut}>Sign out</button> */}
            <div>
        {/* <Button primary onClick={() => parentToChild()}>Click Parent</Button> */}
      </div>
            
            
            
          </div>

    </div>
  );
}

export default withAuthenticator(App);  