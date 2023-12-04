//Planet page template
import { Link } from "react-router-dom";
import { useContext } from "react";

//local imports
import PixelBackground from "./PixelBackground";
import PlanetImages from "../data/PlanetImages";
import { UserContext } from "../App";


//bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Planet(props) {

    const { user, setUser } = useContext(UserContext);

    return (
        <div className="planetPage">
            <PixelBackground color={props.color}></PixelBackground>

            <h1 className="text-center pb-2">{props.name}</h1>

            <Row className="mb-3 mx-0">

                <Col lg={4} style={{
                    backgroundImage:"url("+PlanetImages[props.shortname]+")",
                    backgroundSize:"contain",
                    backgroundPosition:"center",
                    backgroundRepeat:"no-repeat",
                    imageRendering:"pixelated",
                    imageRendering:"crisp-edges"
                    }}></Col>

                <Col lg={8}>
                    <Table bordered hover>
                        <tbody>
                            {props.table.map((data) => {
                                return (
                                    <tr key={data.id}>
                                        <th scope="row">{data.name}</th>
                                        <td>{data.value}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Card className="p-4 m-0">
                {props.info.map((data) => {
                    return (
                        <p>{data}</p>
                    )
                })}
            </Card>

            <Link to="quiz"><Button variant="primary" className="mx-auto m-3 w-100">{user ? (user[props.shortname+"_quiz"] ? "Quiz completed" : "Quiz") : "Log in to view quizzes!"}</Button></Link>

        </div>
    );
}

export default Planet;