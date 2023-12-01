import "../styles/planets.css";
import Axios from "axios";
import PixelBackground from "./PixelBackground";
import Quiz from "./Quiz";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Planet(props) {

    const addXP = (xp) => {
        Axios.post("addXP", { xp })
            .then((res) => {
                console.log(res);
                alert("+" + xp + " XP");
            });
    }

    return (
        <Container>
            <PixelBackground color={props.color}></PixelBackground>

            <h1 className="text-center">{props.name}</h1>

            <Row className="mb-3 mx-0">

                <Col lg={4} className={props.shortname + "-profile-image"}></Col>

                <Col lg={8}>
                    <Table striped bordered>
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

            <Link to="quiz"><Button variant="primary">Quiz</Button></Link>

        </Container>
    );
}

export default Planet;