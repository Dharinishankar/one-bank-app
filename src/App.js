import React from 'react';
import ReactDOM from 'react-dom';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import { Auth } from 'aws-amplify';
import awscofig  from './aws-exports';

 import Navbar from './components/Navbar';
 import { useParams,useLocation } from "react-router-dom";
 
 

 import NavBarUser from './components/NavBarUser';
import {Button}  from './components/Button';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
 import './components/Button.css';
 import { useState,useRef ,useContext} from 'react';
import './App.css';

//to="/dashboard"
 import {  Link } from "react-router-dom"; 
 import Accounts from './components/pages/Accounts';
 import OneCard from './components/pages/OneCard';
 import Transaction from './components/pages/Transaction';
 import Transfer from './components/pages/Transfer';
 
 import accountsImg from './images/accounts.JPG';
import { ContextProvider,Context } from './Context';

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
const[mobile,setMobile]=useState(user.attributes.phone_number);
        const [custId, setCustId] = useState(0);
  const [email,setEmail] = useState(user.attributes.email);
  const[lastLoginTime,setlastLoginTime]=useState();
 
  var postval=[]
  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  React.useEffect(() => {
    console.log('hii');
    
    
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
<ContextProvider value={{ custId, setCustId,email,setEmail,mobile,setMobile,lastLoginTime,setlastLoginTime}}>
    <div>


      <Router>
        <Navbar noClickMe={signOut} parentToChild={user}/>
        {/* <h1>Welcome {user.attributes.email} {custId}</h1>  */}
        {/* <h1>Welcome {user.attributes.email} </h1>  */}
        {/* <NavBarUser/> */}
        {/* <Navbar/> */}
        <Routes>
          
//to passparam
          {/* <Route path="/:id" exact element={<Home /> }/> */}
          <Route  path="/"  element=  {<Home />} />
          <Route  path="/sign-up"  element=  {<Home />} />
          {/* <Route exact path="/accounts" element={<Accounts />} /> */}

          <Route  path="/accounts/:custId"  element={<Accounts />} />
          <Route exact path="/oneCard" element={<OneCard />} />
          {/* <Route exact path="/transfer" element={<Transfer />} /> */}
          <Route exact path="/transfer" element={<Transaction />} />
          </Routes>        
         {/* <Link to={`/accounts/${custId}`}>

          

  <figure  data-category='test'>
              
                  <img
              className='cards__item__img'
              alt='accounts Image'
              src={accountsImg}
            >  
            </img>     
                 
          
      //     </figure> 
      //  </Link>
  

            {/* <button type="submit" value="Submit" onClick={addBlog}>Check</button> */}

    
      </Router>

    </div>
    </ContextProvider>
  );
}

export default withAuthenticator(App);  