import React from 'react'
import NavbarCompForLogin from '../components/NavbarCompForLogin';
import LoginComp from '../components/LoginComp';

const Login = () => {
  return (
    <>
      <NavbarCompForLogin />
      <div className='login'>
        <LoginComp />
      </div>
    </>
  );
}

export default Login