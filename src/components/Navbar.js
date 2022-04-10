import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

// export const Navbar = (props)=> { 
  function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
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
            <li className='nav-item'>
              {/* test{props.parentToChild} */}
              <Link to='/' className='nav-links' >
              {props.parentToChild.attributes.email} 
              </Link>
                
             </li>
             <li className='nav-item'>
               <Link to='/' className='nav-links' >
                 {props.parentToChild.attributes.phone_number}
               </Link>
               
             </li>
            
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={() => props.noClickMe()}>SIGN OUT</Button>}
        </div>
      </nav>
    </>
  );
}
export default Navbar;