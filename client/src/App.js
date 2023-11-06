import SignUp from "./pages/SignUp";
import Home from "./pages/Home"
import Login from "./pages/LogIn";
import Profile from "./pages/Profile";
import NavBar from "./NavBar";
import Jupiter from "./pages/Jupiter"
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
            <Route path="jupiter" element={<Jupiter></Jupiter>}></Route>
        </Routes>

      </BrowserRouter>
  )
}

export default App;
