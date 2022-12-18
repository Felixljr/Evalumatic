import React from 'react';
import NavbarComp from '../components/NavbarComp';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


const Completed = () => {

  const [ name, setName ] = useState('');

  const handleNameSelect = async (e) => {
    e.preventDefault();
    console.log(name);
      await fetch('http://localhost:3000/dashboard/completed/:name', {
      method: 'GET',
      headers: {
        'Content-type' : 'application/json',
      },
      params: JSON.stringify({name})
    })

  };


  return (
    <>
      <NavbarComp />
      <div className='intake'>
        <h1>Find a completed evaluation</h1>
        <br />
        {/* <Form.Select
          aria-label='Default select example'
          value={name}
          onChange={handleNameSelect}
        >
          <option>---- Select a student's name ----</option>
          <option value='Alice'>Alice</option>
          <option value='Bob'>Bob</option>
          <option value='Carl'>Carl</option>
        </Form.Select> */}

        <Form onSubmit={handleNameSelect}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control
              type='text'
              placeholder='First Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Search
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Completed;
