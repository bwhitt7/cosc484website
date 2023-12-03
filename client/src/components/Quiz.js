
import { useState, useContext } from "react";
import Axios from "axios";

//local imports
import { UserContext } from "../App";
import { userDatabaseAdd, getCurrentUser } from "../api";

//bootstrap imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";



function Quiz(props){
    const { user, setUser } = useContext(UserContext);

    const [finished, setFinished] = useState(false);
    const [selection, setSelection] = useState({});
    const [numRight, setNumRight] = useState(0);
    var numOfQuestions = props.quiz.length;
    

    //updates selection array with correct radio selections
    const onInputChange = (target) => {
        //console.log(target.name)
        const result = props.quiz.find(({ index }) => index == target.name);

        if (result.correct == target.value){
            setSelection({
                ...selection,
                [target.name]: 1
            })
        }
        else{
            setSelection({
                ...selection,
                [target.name]: 0
            })
        }

        //selection[target.name] = target.value;
        console.log(selection);
    }


    //checks how many questions are right
    const checkQuestions = () => {
        var num = 0;
        for (var q in selection){
            if (selection[q] == 1)
                num++;
        }
        console.log(num+"/"+numOfQuestions);
        setNumRight(num);
        setFinished(true);

        //if the user is logged in and all questions were right
        if (num == numOfQuestions && user && !user[props.shortname+"_quiz"]){
            addXP(10);
            //update user
            userDatabaseAdd(props.shortname+"_quiz", true).then((res) =>{
                getCurrentUser().then((res) => {
                    setUser(res);
                    console.log(user[props.shortname+"_quiz"]);
                });
            });
            
        }
    }


    const addXP = (xp) => {
        Axios.post("addXP", { xp })
            .then((res) => {
                console.log(res);
                alert("+" + xp + " XP");
            });
    }

    //renders quiz questions
    const quizQuestions = props.quiz.map((ques, ques_num) => 
        <Card className="mb-3">
            <Card.Header>
                <h3>{ques.question}</h3>
            </Card.Header>
            <Card.Body>
            {ques.answers.map((ans, ans_num) => 
                <Form.Check
                    label={ans}
                    name={ques_num}
                    type="radio"
                    value={ans_num}
                    id={ques_num+"."+ans_num}
                    onChange={(event) => {
                        onInputChange(event.target);
                    }}
                >
                </Form.Check>
            )}
            </Card.Body>
        </Card>
    );

    return(
        <div className="Quiz">
            <Container className="text-center">
            <h1 className="p-2">{props.name} Quiz</h1>

            {finished==false ? 
            <Form>
                {user[props.shortname+"_quiz"] ? <div>Quiz already completed!</div> : <></>}
                {quizQuestions}
                <Button variant="primary" onClick={checkQuestions}>Submit</Button>
            </Form>
            :
            <Card body>
                <div>{numRight} / {numOfQuestions}</div>
                {(numRight == numOfQuestions) ? <div>All answers correct!</div> : ""}
            </Card>
            }
            </Container>
        </div>
    )
}

export default Quiz;