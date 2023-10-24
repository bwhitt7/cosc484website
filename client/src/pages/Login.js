//Log in page

import { useState, useEffect } from "react";
import Axios from "axios";
import PropTypes from "prop-types"
import {Link, useNavigate} from "react-router-dom"

async function loginUser(credentials){
  return fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

function Login({setToken}) {
    //variables
    const[listOfUsers, setListOfUsers] = useState([]); //stores lists of users
    const[username, setUserName] = useState(""); //stores username from form
    const[password, setPassword] = useState(""); //stores password from form
  
    //returns list of users from our backend
    useEffect(() => {
      Axios.get("http://localhost:3001/getUsers").then((response) => {
        setListOfUsers(response.data);
      });
    }, []);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const token = await loginUser({
        username,
        password
      });
      setToken(token);
    }
  
    //html of the page
    return (
      <div className="LogIn">
        <div className="userDisplay">
          {listOfUsers.map((user)=>{
            return (
              <div style={{marginBottom: "10px"}}>
                <div>Name:{user.username}</div>
                <div>Password:{user.password}</div>
              </div>
            );
          })}
        </div>
  
        <form method="POST" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username..."
            required
            onChange={(event)=>{
              setUserName(event.target.value);
            }}>
          </input>

          <input type="password"
            placeholder="Password..."
            required
            onChange={(event)=>{
              setPassword(event.target.value);
            }}>
          </input>

          <input type="submit"></input>
        </form>

        <Link to="/">Home</Link>
      </div>
    );
  }

export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}