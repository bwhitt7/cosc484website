//Sign up page
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

//local imports
import PixelBackground from "../components/PixelBackground"

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
        <div className="SignUp container text-center">

        <PixelBackground color="blue"></PixelBackground>

        <h1 className="p-2">Sign Up for Astroteach</h1>
        <p>Please fill out your information below to create an account and get started with Astroteach!</p>

        <form method="POST" onSubmit={handleSubmit} autoComplete="off">
            <fieldset className="d-inline-block">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label text-start w-100">Username</label>
                    <input
                        name="username"
                        className="form-control"
                        type="text"
                        required
                        onChange={(event) => {
                            setUserName(event.target.value);
                        }}>
                    </input>
                    <div className="form-text">Username must be between 3-15 characters long.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label text-start w-100">Email</label>
                    <input
                        name="email"
                        className="form-control"
                        type="email"
                        placeholder="name@example.com"
                        required
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}>
                    </input>
                </div>
                <div className="mb-3">
                    <label htmlFor="pass" className="form-label text-start w-100">Password</label>
                    <input
                        name="pass"
                        className="form-control"
                        type="password"
                        placeholder=""
                        required
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}>
                    </input>
                    <div className="form-text">Password must be between 3-32 characters long.</div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
            </form>

        </div>
    );
}




export default SignUp;