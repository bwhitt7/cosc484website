//Sign up page
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/signup.css"

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
        else if (password.length > 32 || password.length < 3) {
            alert("Password should be between 3-32 characters long.")
        }
        else {
            createUser();
            navigate("/");
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
            if (response.status !== 400){
                alert("USER CREATED");
            }
            else {
                alert("FAILURE");
            }
        });
    }

    //html of the page
    return (
        <div className="SignUp">
        <h1>Sign Up for Astroteach</h1>
        <p>Please fill out your information below to create an account and get started with Astroteach!</p>

        <form method = "POST" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Login:</legend>
                <p>
                    <label htmlFor="username">Username:</label>
                    <input
                        name="username"
                        type="text"
                        required
                        onChange={(event) => {
                            setUserName(event.target.value);
                        }}>
                    </input>
                </p>
                <p>
                    <label htmlFor="email">Email:</label>
                    <input
                        name="email"
                        type="email"
                        required
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}>
                    </input>
                </p>
                <p>
                    <label htmlFor="pass">Password:</label>
                    <input
                        name="pass"
                        type="password"
                        required
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}>
                    </input>
                </p>

                <input type = "submit" id = "submitButton"/>
            </fieldset>
            </form>

        </div>
    );
}

export default SignUp;