//Sign up page
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
    //variables
    const [listOfUsers, setListOfUsers] = useState([]); //stores lists of users
    const [username, setUserName] = useState(""); //stores username from form
    const [email, setEmail] = useState(""); //stores email from form
    const [password, setPassword] = useState(""); //stores password from form
    const navigate = useNavigate();

    //returns list of users from our backend
    useEffect(() => {
        Axios.get("getUsers").then((response) => {
            setListOfUsers(response.data);
        });
    }, []);


    //form validation
    const validateUser = (event) => {
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
            navigate("/profile");
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
            if (response.status != 400){
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

            <form method="POST" onSubmit={validateUser}>
                <input
                    type="text"
                    placeholder="Username..."
                    required
                    onChange={(event) => {
                        setUserName(event.target.value);
                    }}>
                </input>

                <input
                    type="email"
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

export default SignUp;