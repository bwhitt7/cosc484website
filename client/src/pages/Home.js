//Home page
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

//local imports
import PlanetImages from "../data/PlanetImages";
import PlanetInfo from "../data/PlanetInfo";
import { UserContext } from "../App";

//style imports
import "../styles/homepage.css";

function Home() {
    const { user, setUser } = useContext(UserContext);
    return (
        <div className="Home">

            <h1 className="text-center pb-2"><FontAwesomeIcon icon={icon({name: 'meteor'})} /> AstroTeach</h1>
            
            <p className="text-center">Welcome to the Solar System! Click on a planet to learn more about it!</p>
            <div className="planets">
                {PlanetInfo.map((data) => {
                    return(
                    <Link to={"/"+data.shortname} id={data.shortname}>
                        {user? 
                        (user[data.shortname+"_quiz"] ? <FontAwesomeIcon icon={icon({name: 'check'})} className="icon-check text-black" /> : "")
                        :""}
                        <img src={PlanetImages[data.shortname]} alt={data.name} ></img>
                    </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;
