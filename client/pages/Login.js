import React from 'react'
import NavbarCompForLogin from '../components/NavbarCompForLogin';
import LoginComp from '../components/LoginComp';
import document from '../images/document.png';

const Login = () => {
  return (
    <>
      <NavbarCompForLogin />
      <img src={document} alt='Document Logo' className='heroLogo' />
      <div className='login'>
        <LoginComp />
      </div>
    </>
  );
}

export default Login