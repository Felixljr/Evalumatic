import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComp() {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>
            <h1>Evalumatic</h1>
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link>
              <Link className='navLink' to='/dashboard'>
                <h5>&emsp;New&emsp;</h5>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='navLink' to='/dashboard/completed'>
                <h5>&emsp;Completed&emsp;</h5>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='navLink' to='/'>
                <h5>&emsp;Logout&emsp;</h5>
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
