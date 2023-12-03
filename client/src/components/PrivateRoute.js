//Checks if user is logged in
import { Navigate } from "react-router-dom";

function PrivateRouter({auth, path, children}){

    if (auth){
        return children;
    }
    else{
        return <Navigate replace to={path}></Navigate>
    }
}

export default PrivateRouter;