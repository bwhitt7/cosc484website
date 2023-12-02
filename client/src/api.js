import Axios from "axios";
import { UserContext } from "./App";
import { useContext } from "react";

//const { user, setUser } = useContext(UserContext);



function getCurrentUser(){
    return Axios.get("getCurrentUser").then((response) => {
        if (response.status !== 400){
            //console.log(response.data)
            return response.data;
        }
        else{
            console.log("Not logged in");
            return "This";
        }
    })
    .catch((err) => {
        console.log(err);
        return "This2";
    });
}

export  {getCurrentUser};