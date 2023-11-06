//User profile page
import { useState, useEffect } from "react";
import Axios from "axios";

import "../styles/homepage.css";

function Profile() {

    const [user, setUser ] = useState({});

    useEffect(() => {
        Axios.get("getCurrentUser").then((response) => {
            if (response.status !== 400){
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

    const logOutUser = () => {
        Axios.post("logOutCurrentUser").then((response) => {

        });
    }

    return (
        <div className="Profile">
            <div>Username: {user.username}</div>
            <div>Email: {user.email}</div>
            <div>XP: {user.xp}</div>
            
            <div onClick={logOutUser}>Log Out</div>
        </div>
    )
}

export default Profile;
