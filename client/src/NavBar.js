
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./styles/navbar.css";

function NavBar() {

    const [user, setUser ] = useState({});

    useEffect(() => {
        Axios.get("getCurrentUser").then((response) => {
            if (response.status === 200){
                setUser(response.data);
                console.log(response.data);
                console.log(user.username);
            }
            else{
                console.log("Not logged in");
                setUser({});
            }
        })
        .catch((err) => {
            console.log(err);
            setUser({});
        });
    }, []);

    const loggedIn = () => {
        if (user.username){
            return(
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            )
        }
        else{
            return(
            <>
            <li>
                <Link to="/signup">Sign Up</Link>
            </li>
            <li>
                <Link to="/login">Log In</Link>
            </li>
            </>
            )
        }
    }

    return(
        <div className="NavBar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link to="/login">Log In</Link>
                </li>
            </ul>
        </div>
    )
  }
  
  export default NavBar;
  