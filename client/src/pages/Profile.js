//User profile page
import { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

//local imports
import { UserContext } from "../App";
import { getCurrentUser } from "../api";
import PixelBackground from "../components/PixelBackground";
import PlanetInfo from "../data/PlanetInfo";
import PlanetImages from "../data/PlanetImages";
import PlanetCharacter from "../data/PlanetCharacter";

//style imports
import "../styles/homepage.css";

//bootstrap imports
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Profile() {

    //get current user
    const { user, setUser } = useContext(UserContext);
    const [selectedCharacter, setSelectedCharacter] = useState(user.characterPic || 'defaultCharacter');
    const [editingCharacter, setEditingCharacter] = useState(false);

    //character editing
    const handleEditCharacter = () => {
        setEditingCharacter(true);
    };

    const saveCharacterSelection = () => {
        setUser({ ...user, character: selectedCharacter });
        setEditingCharacter(false);
    };

    
    const logOutUser = () => {
        Axios.post("logOutCurrentUser").then((response) => {

        });
    }

    return (
        <div className="Profile">
            <PixelBackground color="gray"></PixelBackground>
            <Container>
                <h1 className="text-center text-white"><FontAwesomeIcon icon={icon({name: 'user-astronaut'})} /> User Profile</h1>

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
                            <th scope="row">Character</th>
                            <td>
                                <img src={PlanetCharacter[user.characterPic]} alt="User Character" />
                                <button onClick={() => setEditingCharacter(true)}>Edit</button>
                                {editingCharacter && (
                                    <div className="character-selection">
                                        {Object.entries(PlanetCharacter).map(([key, image]) => (
                                            <img 
                                                key={key} 
                                                src={image} 
                                                alt={`${key}`}
                                                onClick={() => setSelectedCharacter(key)}
                                                className={selectedCharacter === key ? 'selected' : ''}
                                            />
                                        ))}
                                        <button onClick={saveCharacterSelection}>Save Character</button>
                                    </div>
                                )}
                            </td>
                        </tr>
                        <tr key={4}>
                            <th scope="row">XP</th>
                            <td>
                                <ProgressBar variant="success" animated  now={user.xp} max={100} label={user.xp}></ProgressBar>
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
