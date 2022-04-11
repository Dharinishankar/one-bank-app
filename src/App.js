import React from 'react';
import ReactDOM from 'react-dom';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import { Auth } from 'aws-amplify';
import awscofig  from './aws-exports';

 import Navbar from './components/Navbar';
 
 

 import NavBarUser from './components/NavBarUser';
import {Button}  from './components/Button';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
 import './components/Button.css';
 import { useState } from 'react';
import './App.css';

//to="/dashboard"
 import {  Link } from "react-router-dom"; 
 import Accounts from './components/pages/Accounts';
 import OneCard from './components/pages/OneCard';
 import Transfer from './components/pages/Transfer';

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
        <h1>Welcome {user.attributes.email}</h1> 
        {/* <NavBarUser/> */}
        {/* <Navbar/> */}
        <Routes>
          
//to passparam
          {/* <Route path="/:id" exact element={<Home /> }/> */}
          <Route path="/" exact element=  {<Home />} />
          <Route path="/sign-up" exact element=  {<Home />} />
          <Route exact path="/accounts" element={<Accounts />} />
          <Route exact path="/oneCard" element={<OneCard />} />
          <Route exact path="/transfer" element={<Transfer />} />
          </Routes>
          
         <div>
         
           
            

    </div>
      </Router>

    </div>
  );
}

export default withAuthenticator(App);  