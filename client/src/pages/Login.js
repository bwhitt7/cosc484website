//Log in page
import { useState, useContext } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

//local imports
import PixelBackground from "../components/PixelBackground";
import { UserContext } from "../App";
import { getCurrentUser } from "../api";

//bootstrap imports
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

function LogIn() {
    //variables 
    const [email, setEmail] = useState(""); //stores email from form
    const [password, setPassword] = useState(""); //stores password from form
    const navigate = useNavigate();

    //set current user
    const { user, setUser } = useContext(UserContext);


    //handle login
    const loginUser = () => {
        Axios.post("login", {
            email,
            password,
        })
        .then((response) => {
            //console.log(response);
            if (response.data != false) {
                //set userstate
                getCurrentUser().then((res) => {
                    setUser(res);
                    console.log(user);
                });

                //go home
                navigate("/");
            }
            else {
                alert("User not found!");
            }
        })
        .catch((err) => {
            alert("Login error??");
        });
    }

    //button function
    const handleSubmit = async (event) => {
        event.preventDefault();
        await loginUser({
            email,
            password
        });
    }


    //html of the page
    return (
        <div className="LogIn text-center">

            <PixelBackground color="purple"></PixelBackground>

            <h1 className="pb-2">Log In to Astroteach</h1>
            <p>Please enter your username and password, or create an account <Link to="/signup" className="link-primary">here</Link>.</p>

            <Form method="POST" onSubmit={handleSubmit} autoComplete="off">
            <fieldset className="d-inline-block">
                <div className="mb-3">
                    <FloatingLabel label="Email">
                        <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="email"
                        required
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        ></Form.Control>
                    </FloatingLabel>

                </div>
                <div className="mb-3">
                    <FloatingLabel label="Password">
                        <Form.Control
                        type="password"
                        placeholder="password"
                        name="password"
                        required
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        ></Form.Control>
                    </FloatingLabel>

                </div>
                <Button type="submit">Submit</Button>
            </fieldset>
            </Form>
        </div>
    );
}

export default LogIn;