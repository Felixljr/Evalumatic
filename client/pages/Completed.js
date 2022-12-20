import React from 'react';
import NavbarComp from '../components/NavbarComp';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Completed = () => {
const [name, setName] = useState('');
const [text, setText] = useState();
const [isShowAlert, setShowAlert] = useState(false);
const [alertColor, setAlertColor] = useState('');
const [alertMsg, setAlertMsg] = useState('');

const handleNameSelect = async (e) => {
  e.preventDefault();
  await fetch(`http://localhost:3000/dashboard/completed/${name}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((data) => {
      return data.text();
    })
    .then((data) => {
      setText(data);
    });
};

async function updateEval(e) {
  e.preventDefault();
  setAlertColor('alert-success');
  setAlertMsg('All Changes Saved!');
  setShowAlert(true);
  await fetch('http://localhost:3000/dashboard/completed', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ name, text }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    });
}

async function deleteRecord(e) {
  e.preventDefault();
  setAlertColor('alert-danger');
  setAlertMsg(`Student Record Has Been Deleted!`);
  setShowAlert(true);
  console.log('delete triggered');
  await fetch(`http://localhost:3000/dashboard/completed/${name}`, {
    method: 'DELETE',
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      setText(`ALL RECORDS FOR ${name.toLocaleUpperCase()} DELETED!`);
      console.log(res);
    });
}

return (
  <>
    <NavbarComp />
    <div className='search'>
      <h1>Find a completed evaluation</h1>
      <br />
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
        {/* Alert for saved progress and delete */}
        <div
          className={`alert ${alertColor} ${
            isShowAlert ? 'alert-shown' : 'alert-hidden'
          }`}
          onTransitionEnd={() => setShowAlert(false)}
        >
          {alertMsg}
        </div>
        {/* End Alert */}
        <div className='report'>
          <FloatingLabel controlId='floatingTextarea2'>
            <Form.Control
              as='textarea'
              placeholder='Leave a comment here'
              style={{ height: '400px' }}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </FloatingLabel>
        </div>
        <div className='actionButtons'>
          <Button variant='primary' type='submit' onClick={updateEval}>
            Save
          </Button>
          <Button variant='danger' type='submit' onClick={deleteRecord}>
            Delete
          </Button>
        </div>
      </Form>
    </div>
  </>
);
};

export default Completed;
