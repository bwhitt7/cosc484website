//Home page
import "../styles/homepage.css";
import {Link} from "react-router-dom";

function Home() {
  return(
    <div className="Home">

        <h1>The Solar System</h1>
        <p>Click on a planet to learn more about it!</p>
        <a href = "sun.html">
            <img src ={require("../images/OVERSTELLAR/SolarSystem_Sun_140px_10x6.gif")} alt = "The Sun" id = "sun"></img>
        </a>
        <a href = "mercury.html">
            <img src = {require("../images/OVERSTELLAR/SolarSystem_Mercury_21px_20x6.gif")} alt = "Mercury" id = "mercury"></img>
        </a>
        <a href = "venus.html">
            <img src = {require("../images/OVERSTELLAR/SolarSystem_Venus_50px_16x15.gif")} alt = "Venus" id = "venus"></img>
        </a>
        <a href = "earth.html">
            <img src = {require("../images/OVERSTELLAR/SolarSystem_Earth_50px_16x15.gif")} alt = "Earth" id = "earth"></img>
        </a>
        <a href = "mars.html">
            <img src = {require("../images/OVERSTELLAR/SolarSystem_Mars_37px_16x15.gif")} alt = "Mars" id = "mars"></img>
        </a>
        <Link to="/jupiter">
            <img src = {require("../images/OVERSTELLAR/SolarSystem_Jupiter_90px_16x15.gif")} alt = "Jupiter" id = "jupiter"></img>
        </Link>
        <a href = "saturn.html">
            <img src = {require("../images/OVERSTELLAR/SolarSystem_Saturn_240px_16x15.gif")} alt = "Saturn" id = "saturn"></img>
        </a>
        <a href = "uranus.html">
            <img src = {require("../images/OVERSTELLAR/SolarSystem_Uranus_79px_16x15.gif")} alt = "Uranus" id = "uranus"></img>
        </a>
        <a href = "neptune.html">
            <img src = {require("../images/OVERSTELLAR/SolarSystem_Neptune_73px_16x15.gif")} alt = "Neptune" id = "neptune"></img>
        </a>
        <a href = "pluto.html">
            <img src = {require("../images/OVERSTELLAR/SolarSystem_Pluto_21px_20x6.gif")} alt = "Pluto (my son)" id = "pluto"></img>
        </a>
    </div>
  )
}

export default Home;
