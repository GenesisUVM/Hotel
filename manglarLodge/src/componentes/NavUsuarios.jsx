import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import logo from '../img/logo.png'
import './NavBar.css'

function NavUsuarios() {
  return (
    <>
    <Navbar data-bs-theme="light" className='navBar'>
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
              <NavDropdown.Item href="/usuario/landingPage">Home</NavDropdown.Item>
              <NavDropdown.Item href="/usuario/blog">Blog Turistico</NavDropdown.Item>
              <NavDropdown.Item href="/usuario/reseñas">Reseñas</NavDropdown.Item>
              <NavDropdown.Item href="/usuario/reservas">Reservas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/usuario/perfil">
                Perfil
              </NavDropdown.Item>
            </NavDropdown>
            </div>
            <div className="d-none d-md-block">

            <Nav className="me-auto">
            <Nav.Link href="/usuario/landingPage">Home</Nav.Link>
            <Nav.Link href="/usuario/blog">Blog Turistico</Nav.Link>
            <Nav.Link href="/usuario/reseñas">Reseñas</Nav.Link>
            <Nav.Link href="/usuario/reservas">Reservas</Nav.Link>
            <Nav.Link href="/usuario/perfil">Perfil</Nav.Link>
          </Nav>
            </div>
          
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavUsuarios;