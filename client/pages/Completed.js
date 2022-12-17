import React from 'react';
import NavbarComp from '../components/NavbarComp';
import Form from 'react-bootstrap/Form';

const Completed = () => {
  return (
    <>
      <NavbarComp />
      <div className='intake'>
        <h1>Select a completed evaluation</h1>
        <br />
        <Form.Select aria-label='Default select example'>
          <option>Open this select menu</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </Form.Select>
      </div>
    </>
  );
};

export default Completed;
