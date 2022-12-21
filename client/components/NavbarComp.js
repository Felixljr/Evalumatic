import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import document from '../images/document.png';

function NavbarComp() {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>
            <div className='logoBrand'>
              <img src={document} alt='Document Logo' className='navLogo' />
              <h1>Evalumatic</h1>
            </div>
          </Navbar.Brand>
          
            {/* All of the Link tags were Nav.Link before; changed to clear error with <a> within <a> */}
            <Nav className='me-auto'>

              <Link className='navLink' to='/dashboard'>
                {/* <Link className='navLink' to='/dashboard'> */}
                <h5>&emsp;New&emsp;</h5>
                {/* </Link> */}
              </Link>
              <Link className='navLink' to='/dashboard/completed'>
                {/* <Link className='navLink' to='/dashboard/completed'> */}
                <h5>&emsp;Completed&emsp;</h5>
                {/* </Link> */}
              </Link>
              <Link className='navLink' to='/'>
                {/* <Link className='navLink' to='/'> */}
                <h5>&emsp;Logout&emsp;</h5>
                {/* </Link> */}
              </Link>

            </Nav>
          
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
