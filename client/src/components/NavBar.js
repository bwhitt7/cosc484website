//navbar on top of everything
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

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
        <Navbar expand="lg" className="bg-body mb-3">
            <Container>
            <LinkContainer to="/"><Navbar.Brand><FontAwesomeIcon icon={icon({name: 'meteor'})} /> AstroTeach</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/"><Nav.Link><FontAwesomeIcon icon={icon({name: 'home'})} /> Home</Nav.Link></LinkContainer>
                        {user ? (<>
                        <LinkContainer to="/profile"><Nav.Link><FontAwesomeIcon icon={icon({name: 'user'})} /> Profile</Nav.Link></LinkContainer>
                        <NavDropdown title={<span><FontAwesomeIcon icon={icon({name: 'globe'})} /> Planets</span>} id="planet-dropdown">
                            {PlanetInfo.map((data) => {
                                return(
                                    <LinkContainer to={"/"+data.shortname}>
                                        <NavDropdown.Item>{data.name}</NavDropdown.Item>
                                    </LinkContainer>
                                )
                            })}
                        </NavDropdown>
                        </>):(<>
                        <LinkContainer to="/signup"><Nav.Link><FontAwesomeIcon icon={icon({name: 'user-plus'})} /> Sign Up</Nav.Link></LinkContainer>
                        <LinkContainer to="/login"><Nav.Link><FontAwesomeIcon icon={icon({name: 'arrow-right-from-bracket'})} /> Log In</Nav.Link></LinkContainer>
                        </>)}
                    </Nav>
                    <Navbar.Text><a href="https://github.com/bwhitt7/cosc484website" target="_blank"><FontAwesomeIcon icon={icon({name: 'github', style:"brands"})} /> Github Code</a></Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavBar;
