//User profile page
import { useContext, useEffect } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

//local imports
import { UserContext } from "../App";
import { getCurrentUser } from "../api";
import PixelBackground from "../components/PixelBackground";
import PlanetInfo from "../data/PlanetInfo";
import PlanetImages from "../data/PlanetImages";

//style imports
import "../styles/homepage.css";

//bootstrap imports
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Profile() {

    //get current user
    const { user, setUser } = useContext(UserContext);

    const logOutUser = () => {
        Axios.post("logOutCurrentUser").then((response) => {

        });
    }

    return (
        <div className="Profile">
            <PixelBackground color="gray"></PixelBackground>
            <Container>
                <h1 className="text-center"><FontAwesomeIcon icon={icon({name: 'user-astronaut'})} /> User Profile</h1>

                <Table striped bordered>
                    <tbody>
                        <tr key={1}>
                            <th scope="row">Username</th>
                            <td>{user.username}</td>
                        </tr>
                        <tr key={2}>
                            <th scope="row">Email</th>
                            <td>{user.email}</td>
                        </tr>
                        <tr key={3}>
                            <th scope="row">XP</th>
                            <td>
                                <ProgressBar now={user.xp} max={100} label={user.xp}></ProgressBar>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Table striped bordered>
                    <tbody>
                        {PlanetInfo.map((data, i) => {
                            if (user[data.shortname + "_quiz"])
                                return (
                                    <tr key={3 + i}>
                                        <th scope="row">{data.name} quiz completed!</th>
                                        <td>
                                            <img src={PlanetImages[data.shortname]}></img>
                                        </td>
                                    </tr>
                                )
                        })}
                    </tbody>
                </Table>

            </Container>
        </div>
    )
}

export default Profile;
