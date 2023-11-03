//Log in page

import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom"

function LogIn() {
    //variables 
    const [listOfUsers, setListOfUsers] = useState([]); //stores lists of users
    const [email, setEmail] = useState(""); //stores email from form
    const [password, setPassword] = useState(""); //stores password from form
    const navigate = useNavigate();

    //returns list of users from our backend
    useEffect(() => {
        Axios.get("getUsers").then((response) => {
            setListOfUsers(response.data);
        });
    }, []);

    const loginUser = () => {
        Axios.post("login", {
            email,
            password,
        })
        .then((response) => {
            console.log(response);
            if (response.status != 400) {
                alert("Logged in! " + response.data.email);
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
        const token = await loginUser({
            email,
            password
        });
    }

    //html of the page
    return (
        <div className="LogIn">
            <div className="userDisplay">
                {listOfUsers.map((user) => {
                    return (
                        <div style={{ marginBottom: "10px" }}>
                            <div>Name:{user.username}</div>
                            <div>Email:{user.email}</div>
                            <div>XP:{user.xp}</div>
                        </div>
                    );
                })}
            </div>

            <form method="POST" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Email..."
                    required
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}>
                </input>

                <input type="password"
                    placeholder="Password..."
                    required
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}>
                </input>

                <input type="submit"></input>
            </form>

            <Link to="/">Home</Link>
        </div>
    );
}

export default LogIn;