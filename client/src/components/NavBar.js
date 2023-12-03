//navbar on top of everything
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

//local imports
import { UserContext } from "../App";
import {getCurrentUser} from "../api";
import PlanetInfo from "../data/PlanetInfo";

//bootstrap imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap';


function NavBar() {
    //get current user
    const { user, setUser } = useContext(UserContext);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            <LinkContainer to="/"><Navbar.Brand>AstroTeach</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                        {user ? (<>
                        <LinkContainer to="/profile"><Nav.Link>Profile</Nav.Link></LinkContainer>
                        <NavDropdown title="Planets" id="planet-dropdown">
                            {PlanetInfo.map((data) => {
                                return(
                                    <LinkContainer to={"/"+data.shortname}>
                                        <NavDropdown.Item>{data.name}</NavDropdown.Item>
                                    </LinkContainer>
                                )
                            })}
                        </NavDropdown>
                        </>):(<>
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
