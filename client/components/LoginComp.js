import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function LoginComp() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isShowAlert, setShowAlert] = useState(false);
  const [alertColor, setAlertColor] = useState('');
  const [alertMsg, setAlertMsg] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    console.log(user);
    if (user === 'felix' && password === '1234') {
      setAlertColor('alert-success');
      setAlertMsg('Login Successful');
      setShowAlert(true);
      //send to this location
      setInterval(() => (window.location.href = '/dashboard'), 2000);
    } else {
      setAlertColor('alert-danger');
      setAlertMsg('Username and/or Password Invalid!');
      setShowAlert(true);
    }
  }

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type='text'
          placeholder='Username'
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <Form.Text className='text-muted'></Form.Text>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
      {/* Alert for saved progress and delete */}
      <div className='Alert-Div'>
        <div
          className={`alert ${alertColor} ${
            isShowAlert ? 'alert-shown' : 'alert-hidden'
          }`}
          onTransitionEnd={() => setShowAlert(false)}
        >
          {alertMsg}
        </div>
      </div>
      {/* End Alert */}
    </Form>
  );
}

export default LoginComp;
