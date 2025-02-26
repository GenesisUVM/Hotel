import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import logo from '../img/logo.png'
import './NavBar.css'

function NavAdm() {
  return (
    <>
    <Navbar fixed="top"  data-bs-theme="light" className='navBar'>
        <Container>
          <Navbar.Brand href="/"><img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> Manglar Lodge</Navbar.Brand>
            <div className="d-block d-md-none">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/adm/habitaciones">Informacion Hotel</NavDropdown.Item>
              <NavDropdown.Item href="/adm/blogForm">Blog Turistico</NavDropdown.Item>
              <NavDropdown.Item href="/adm/reservas">Reservas</NavDropdown.Item>
    
            </NavDropdown>
            </div>
            <div className="d-none d-md-block">

            <Nav className="me-auto">
            <Nav.Link href="/adm/habitaciones">Informacion Hotel</Nav.Link>
            <Nav.Link href="/adm/blogForm">Blog Turistico</Nav.Link>
            <Nav.Link href="/adm/reservas">Reservas</Nav.Link>
            
          </Nav>
            </div>
          
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavAdm;