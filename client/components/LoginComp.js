import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import document from '../images/document.png';

function LoginComp() {
  return (
    <>
      <img src={document} alt='Document Logo' className='hero'/>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>User Name</Form.Label>
          <Form.Control type='email' placeholder='User Name' />
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
    </>
  );
}

export default LoginComp;
