import SignUp from "./pages/SignUp";
import Home from "./pages/Home"
import Login from "./pages/LogIn";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="profile" element={<Profile></Profile>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
