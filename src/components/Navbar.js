import React, { useState, useEffect ,useContext} from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ContextProvider,Context } from '../Context';

import logoutImg from '../images/logout.JPG';

// export const Navbar = (props)=> { 
  function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { email,setEmail } = useContext(Context);
  const {mobile,setMobile}=useContext(Context);
  const {lastLoginTime,setlastLoginTime}=useContext(Context)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    setEmail(props.parentToChild.attributes.email);
    setMobile(props.parentToChild.attributes.phone_number)

  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Fin(W)In
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <li className='nav-item'>
              
              <Link to='/' className='nav-links' >
              {props.parentToChild.attributes.email} 
              </Link>
                
             </li>
             <li className='nav-item'>
               <Link to='/' className='nav-links' >
                 {props.parentToChild.attributes.phone_number}
               </Link>
               
             </li> */}
             <li>
              <Link to='/' className='nav-links' >
                Home
                </Link>
             </li>
            {/* <li  className='nav-item'>
              <Link to='/' className='nav-links'> Last Login {lastLoginTime}</Link>
            </li> */}
            
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={() => props.noClickMe()}> <img
              className='cards__item__img'
              alt='logout Image'
              src={logoutImg}
            >  
            </img></Button>}
        </div>
      </nav>
    </>
  );
}
export default Navbar;