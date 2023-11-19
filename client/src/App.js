import SignUp from "./pages/SignUp";
import Home from "./pages/Home"
import Login from "./pages/LogIn";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";
import Planet from "./components/Planet";
import PlanetInfo from "./data/PlanetInfo";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return(
      <BrowserRouter>

        <NavBar></NavBar>

        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="signup" element={<SignUp></SignUp>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="profile" element={<Profile></Profile>}></Route>
            {PlanetInfo.map((data) => {
                return(
                    <Route path={data.shortname} element={
                    <Planet
                        {...data}
                    ></Planet>}></Route>
                )
            })}
        </Routes>

      </BrowserRouter>
  )
}

export default App;
