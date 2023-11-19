
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";


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


    return(
        <nav className="navbar navbar-expand-md">
            <Link className="navbar-brand" to="/">AstroTeach</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="navbar-item">
                        <Link className="navbar-link" to="/">Home</Link>
                    </li>
                    
                    {user.username ? (
                        <li className="navbar-item">
                            <Link className="navbar-link" to="/profile">Profile</Link>
                        </li>
                    ):(
                    <>
                        <li className="navbar-item">
                            <Link className="navbar-link" to="/signup">Sign Up</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="navbar-link" to="/login">Log In</Link>
                        </li>
                    </>
                    )}
                </ul>
            </div>
        </nav>
    )
  }
  
  export default NavBar;
  