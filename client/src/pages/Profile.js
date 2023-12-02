//User profile page
import { useContext, useState, useEffect } from "react";
import Axios from "axios";

//local imports
import { UserContext } from "../App";
import {getCurrentUser} from "../api";

//style imports
import "../styles/homepage.css";

function Profile() {

    //get current user
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        getCurrentUser().then((res) => {
            setUser(res);
            console.log(user);
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
