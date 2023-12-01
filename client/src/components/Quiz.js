import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import Axios from "axios";

function Quiz(props){

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
        if (numRight == numOfQuestions){
            addXP(10);
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
        <>
            <h3>{ques.question}</h3>
            {ques.answers.map((ans, ans_num) => 
                <Form.Check
                    label={ans}
                    name={ques_num}
                    type="radio"
                    value={ans_num}
                    onChange={(event) => {
                        onInputChange(event.target);
                    }}
                >
                </Form.Check>
            )}
        </>
    );

    return(
        <div className="Quiz">
            {props.name} Quiz

            {finished==false ? 
            <Form>
                {quizQuestions}
                <Button variant="primary" onClick={checkQuestions}>Submit</Button>
            </Form>
            : <div>{numRight} / {numOfQuestions}</div>
            }

        </div>
    )
}

export default Quiz;