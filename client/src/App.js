
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext, createContext } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

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


import Container from "react-bootstrap/Container";


//create global context (user)
export const UserContext = createContext(null);

function App() {

    //global user variable
    const [user, setUser] = useState(null);

    //rendering
    return (
        <BrowserRouter>
            <Container fluid className="p-0">
            <UserContext.Provider value={{ user, setUser }}>
            <NavBar></NavBar>
            <div className="m-4">
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
            </div>
            </UserContext.Provider>
            </Container>
        </BrowserRouter>
    )
}

export default App;
