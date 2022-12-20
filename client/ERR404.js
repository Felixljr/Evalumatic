import React from 'react'
import document from './images/document.png';

const E404 = () => {
  return (
    <div className='error404'>
      <p>404</p> 
      <img src={document} alt='Document Logo' className='heroLogo' />
      <p>PAGE NOT FOUND</p>
    </div>
  );
}

export default E404