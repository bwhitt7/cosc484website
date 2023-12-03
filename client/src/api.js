import Axios from "axios";

//const { user, setUser } = useContext(UserContext);


function userDatabaseAdd(field, value){
    return Axios.post("userDatabaseAdd", {field, value}).then((response) => {
        if (response.status !== 400){
            return true;
        }
        else{
            return false;
        }
    })
    .catch((err) => {
        console.log(err);
        return false;
    });
}

function getCurrentUser(){
    return Axios.get("getCurrentUser").then((response) => {
        if (response.status !== 400){
            //console.log(response.data)
            return response.data;
        }
        else{
            console.log("Not logged in");
            return null;
        }
    })
    .catch((err) => {
        console.log(err);
        return null;
    });
}

export  {getCurrentUser, userDatabaseAdd};