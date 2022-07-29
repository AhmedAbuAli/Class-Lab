import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
    render(){
        return (
            <>
           
         <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Horned Beast </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About Us</Nav.Link>
            </Nav>
            </Container>
      </Navbar>
            </>
        )
    }

}
export default Header;