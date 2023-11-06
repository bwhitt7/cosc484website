//Log in page

import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom"

import  "../styles/login.css"

function LogIn() {
    //variables 
    const [email, setEmail] = useState(""); //stores email from form
    const [password, setPassword] = useState(""); //stores password from form
    const navigate = useNavigate();


    const loginUser = () => {
        Axios.post("login", {
            email,
            password,
        })
        .then((response) => {
            console.log(response);
            if (response.status != 400) {
                alert("Logged in! " + response.data);
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        await loginUser({
            email,
            password
        });
    }






    //html of the page
    return (
        <div className="LogIn">
            <h1>Welcome to Astroteach!</h1>
            <p>Please enter your username and password, or create an account <Link to="/SignUp">here</Link>.</p>

            <form method = "POST" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Login:</legend>
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
                    <input type="password"
                        name="pass"
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

export default LogIn;