//User profile page
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Profile() {

    const [user, setUser ] = useState({});

    useEffect(() => {
        Axios.get("getCurrentUser").then((response) => {
            if (response.status != 400){
                setUser(response.data);
                console.log(response.data);
            }
            else{
                console.log("Not logged in");
            }
        });
    }, []);

    return (
        <div className="Profile">
            <div>Username: {user.username}</div>
            <div>Email: {user.email}</div>
            <div>XP: {user.xp}</div>
            
            <Link to="/">Home</Link>
        </div>
    )
}

export default Profile;
