import SignUp from "./pages/SignUp";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import useToken from "./useToken"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const {token, setToken} = useToken();
  
  if(!token) {
    return <Login setToken={setToken} />
  }
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
