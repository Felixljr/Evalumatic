import React from 'react';
import NavbarComp from '../components/NavbarComp';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import TextPreview from '../components/TextPreview';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const Completed = () => {

  const [ name, setName ] = useState('');
  const [ text, setText ] = useState();
  
  //can be used to set html in a div
  // const report = '<p>copy copy copy <strong>strong copy</strong></p>';
  // dangerouslySetInnerHTML={{ __html: report }}

  const handleNameSelect = async (e) => {
    e.preventDefault();
    // console.log(name);
      await fetch(`http://localhost:3000/dashboard/completed/${name}`, {
      method: 'GET',
      headers: {
        'Content-type' : 'application/json',
      },
    }).then(data => {
      console.log(data);
      return data.text();
    }).then(data => {
      console.log(data);
      setText(data);
    })
  };


  return (
    <>
      <NavbarComp />
      <div className='intake'>
        <h1>Find a completed evaluation</h1>
        <br />

        {/* This was going to be used as a prog. filled dropdown
        <Form.Select
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
          <div className='report'>
            <FloatingLabel controlId='floatingTextarea2'>
              <Form.Control
                as='textarea'
                placeholder='Leave a comment here'
                style={{ height: '100px' }}
                value={text}
                
              />
            </FloatingLabel>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Completed;
