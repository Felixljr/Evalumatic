import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function LoginComp() {
  return (
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Username</Form.Label>
          <Form.Control type='email' placeholder='Username' />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
  );
}

export default LoginComp;
