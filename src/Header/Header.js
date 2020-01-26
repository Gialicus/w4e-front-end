import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'


const Header = (props) => {
    return (
        <div className='Header'>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/timesheet">Testing</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}
export default Header;