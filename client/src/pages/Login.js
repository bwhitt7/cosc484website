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
                alert("Logged in!");
                
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
        <div className="LogIn container text-center">


            <PixelBackground color="purple"></PixelBackground>
            <h1 className="p-2">Log In to Astroteach!</h1>
            <p>Please enter your username and password, or create an account <Link to="/SignUp" className="link-primary">here</Link>.</p>

            <form method="POST" onSubmit={handleSubmit} autoComplete="off">
            <fieldset className="d-inline-block">
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
                </div>
                <button type="submit" className="btn btn-primary rounded-0">Submit</button>
            </fieldset>
            </form>
        </div>
    );
}

export default LogIn;