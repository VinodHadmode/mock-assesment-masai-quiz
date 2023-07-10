import React from 'react'
import styled from "styled-components"

const QuestionDisplay = ({ question, correct_answer, incorrect_answers }) => {
    return (
        <DIV>
            <ul>
                <li>
                    <h4>{question}</h4>
                </li>
                <p >{correct_answer}</p>
                {
                    incorrect_answers.map((el) => {
                        return <p>{el}</p>
                    })
                }
            </ul>
            
        </DIV>
    )
}

export default QuestionDisplay


const DIV = styled.div`
    display: flex;
    margin: auto;
    border: 1px solid gray;
    width: 60%;

    ul{
        /* text-align:center; */
    }

    p {
        width: 50%;
        border: 1px solid gray;
        background-color: #92b4b4;
    }
`