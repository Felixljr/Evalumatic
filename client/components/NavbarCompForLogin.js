import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import document from '../images/document.png';

function NavbarCompForLogin() {
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

          <div className='motto'>
            <h5>Evaluations Simplified</h5>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarCompForLogin;
