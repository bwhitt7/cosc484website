//Home page
import { Link } from "react-router-dom";

//local imports
import PlanetImages from "../data/PlanetImages";

//style imports
import "../styles/homepage.css";

function Home() {
    return (
        <div className="Home">


            <h1 className="text-center">AstroTeach</h1>
            <p className="text-center p-2">Welcome to the Solar System! Click on a planet to learn more about it!</p>
            <div className="planets">
                <Link to="/sun">
                    <img src={PlanetImages.sun} alt="The Sun" id="sun"></img>
                </Link>
                <Link to="/mercury">
                    <img src={PlanetImages.mercury} alt="Mercury" id="mercury"></img>
                </Link>
                <Link to="/venus">
                    <img src={PlanetImages.venus} alt="Venus" id="venus"></img>
                </Link>
                <Link to="/earth">
                    <img src={PlanetImages.earth} alt="Earth" id="earth"></img>
                </Link>
                <Link to="/mars">
                    <img src={PlanetImages.mars} alt="Mars" id="mars"></img>
                </Link>
                <Link to="/jupiter">
                    <img src={PlanetImages.jupiter} alt="Jupiter" id="jupiter"></img>
                </Link>
                <Link to="/saturn">
                    <img src={PlanetImages.saturn} alt="Saturn" id="saturn"></img>
                </Link>
                <Link to="/uranus">
                    <img src={PlanetImages.uranus} alt="Uranus" id="uranus"></img>
                </Link>
                <Link to="/neptune">
                    <img src={PlanetImages.neptune} alt="Neptune" id="neptune"></img>
                </Link>
                <Link to="/pluto">
                    <img src={PlanetImages.pluto} alt="Pluto (my son)" id="pluto"></img>
                </Link>
            </div>
        </div>
    )
}

export default Home;
