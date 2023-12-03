
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext, createContext } from "react";
import Axios from "axios";

//local imports
import SignUp from "./pages/SignUp";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";
import Planet from "./components/Planet";
import PlanetInfo from "./data/PlanetInfo";
import Quiz from "./components/Quiz";
import PrivateRoute from "./components/PrivateRoute";


//create global context (user)
export const UserContext = createContext(null);

function App() {

    //global user variable
    const [user, setUser] = useState(null);

    //rendering
    return (
        <BrowserRouter>
            <UserContext.Provider value={{ user, setUser }}>
            <NavBar></NavBar>

            <Routes>
                <Route path="signup" element={<SignUp></SignUp>}></Route>
                <Route path="login" element={<Login></Login>}></Route>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="profile" element={<PrivateRoute path="/login" auth={user}><Profile></Profile></PrivateRoute>}></Route>
                {PlanetInfo.map((data) => {
                    return (
                        <>
                            <Route path={data.shortname} element={
                                <Planet
                                    {...data}
                                ></Planet>}></Route>
                            <Route path={data.shortname + "/quiz"} element={<PrivateRoute path="/login" auth={user}>
                                <Quiz
                                    {...data}
                                ></Quiz></PrivateRoute>}></Route>

                        </>
                    )
                })}
            </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}

export default App;
