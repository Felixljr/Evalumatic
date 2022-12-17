import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComp() {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>Evalumatic</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link>
              <Link to='/dashboard'>New Eval</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/dashboard/completed'>Completed</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/'>Logout</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
