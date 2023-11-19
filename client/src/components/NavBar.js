
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap';


function NavBar() {

    const [user, setUser] = useState({});

    useEffect(() => {
        Axios.get("getCurrentUser").then((response) => {
            if (response.status === 200) {
                setUser(response.data);
                console.log(response.data);
                console.log(user.username);
            }
            else {
                console.log("Not logged in");
                setUser({});
            }
        })
            .catch((err) => {
                console.log(err);
                setUser({});
            });
    }, []);


    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            <LinkContainer to="/"><Navbar.Brand>AstroTeach</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                        {user.username ? (
                        <LinkContainer to="/profile"><Nav.Link>Profile</Nav.Link></LinkContainer>
                        ):(<>
                        <LinkContainer to="/signup"><Nav.Link>Sign Up</Nav.Link></LinkContainer>
                        <LinkContainer to="/login"><Nav.Link>Log In</Nav.Link></LinkContainer>
                        </>)}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavBar;
