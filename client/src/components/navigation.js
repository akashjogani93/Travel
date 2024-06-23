import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from "react-router-dom";
import './css/web.css';
const NavIndex =()=>{
    return(
        <Navbar bg="dark" variant='dark' expand="lg" sticky='top'>
            <Container>
                <Navbar.Brand to={"/"}>TRAVEL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link><Link to={"/"}>Home</Link></Nav.Link>
                    <Nav.Link><Link>Tours</Link></Nav.Link>
                    <Nav.Link><Link to={"/aboutus"}>About Us</Link></Nav.Link>
                    <Nav.Link><Link to={"/contactus"} >Contact Us</Link></Nav.Link>
                    <Nav.Link href="#link">Profile</Nav.Link>
                    <Nav.Link><Link to={"/login"}>Login</Link></Nav.Link>
                    <Nav.Link><Link to={"/dashboard"}>Dashboard</Link></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavIndex;