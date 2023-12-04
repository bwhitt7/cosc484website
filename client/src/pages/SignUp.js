//Sign up page
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

//local imports
import PixelBackground from "../components/PixelBackground"

//bootstrap imports
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

function SignUp() {
    //variables
    const [username, setUserName] = useState(""); //stores username from form
    const [email, setEmail] = useState(""); //stores email from form
    const [password, setPassword] = useState(""); //stores password from form
    const navigate = useNavigate();


    //form validation
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username.length > 15 || username.length < 3) {
            alert("Username should be between 3-15 characters long.")
            return false;
        }
        else if (password.length > 32 || password.length < 8) {
            alert("Password should be between 8-32 characters long.")
        }
        else {
            createUser();
        }
    }

    //sends a user to be created by our backend
    const createUser = () => {
        Axios.post("createUser", {
            username,
            email,
            password,
        }).then((response) => {
            console.log(response);
            if (response.status !== 400 && response.data){
                alert("User "+username+" created");
                navigate("/LogIn");
            }
            else if (!response.data){
                alert("Account with this email already exists");
            }
            else {
                alert("FAILURE");
            }
        });
    }

    //html of the page
    return (
        <div className="SignUp text-center">

        <PixelBackground color="blue"></PixelBackground>

        <h1 className="pb-2">Sign Up for Astroteach</h1>
        <p>Please fill out your information below to create an account and get started with Astroteach!</p>

        <Form method="POST" onSubmit={handleSubmit} autoComplete="off">
            <fieldset className="d-inline-block">
                <div className="mb-3">
                    <FloatingLabel label="Username">
                        <Form.Control
                        id="signup-password"
                        type="text"
                        placeholder="username"
                        name="username"
                        required
                        onChange={(event) => {
                            setUserName(event.target.value);
                        }}
                        ></Form.Control>
                    </FloatingLabel>
                    <Form.Text id="signup-password">Username must be between 3-15 characters long.</Form.Text>
                </div>

                <div className="mb-3">
                    <FloatingLabel label="Email">
                        <Form.Control
                        id="signup-email"
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
                        id="signup-password"
                        type="password"
                        placeholder="password"
                        name="password"
                        required
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        ></Form.Control>
                    </FloatingLabel>
                    <Form.Text id="signup-password">Password must be between 8-32 characters long.</Form.Text>
                </div>

                <Button type="submit">Submit</Button>
            </fieldset>
            </Form>

        </div>
    );
}




export default SignUp;