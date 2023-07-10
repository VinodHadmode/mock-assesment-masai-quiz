import React, { useState } from 'react'
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { getQuestions } from '../redux/sportsReducer/action'
import { useNavigate } from "react-router-dom";

const initState = {
    name: "",
    category: "",
    level: "",
    questions: ""
}
const HomePage = () => {
    const [userDetails, setUserDetails] = useState(initState)

    const store=useSelector((store)=>store.sportsReducer)
    const disPatch = useDispatch()
    const navigate = useNavigate();

    // console.log("store",store.res);

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserDetails((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userDetails);
        disPatch(getQuestions(userDetails))
        setUserDetails("");
        navigate("/quiz");
    }

    const { name, questions,category,level } = userDetails
    return (
        <DIV>
            <form onSubmit={handleSubmit}>
                <h2>Setup Your Quiz</h2>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    name='name'
                    value={name}
                    onChange={handleChange}
                />

                <select name="category" id="" value={category} onChange={handleChange}>
                    <option value="">Category</option>
                    <option value="generalknowledge">General Knowledge</option>
                    <option value="sports">Sports</option>
                    <option value="geography">Geography</option>
                </select>

                <select name="level" id="" value={level} onChange={handleChange}>
                    <option value="">Difficulty Level</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>

                <input
                    type="text"
                    placeholder="Choose No Of Questions"
                    name='questions'
                    value={questions}
                    onChange={handleChange}
                />

                <button type='submit'>Start Quiz</button>
            </form>
        </DIV>
    )
}

export default HomePage


const DIV = styled.div`
    form {
        display: flex;
        flex-direction: column;
        width: 50%;
        justify-content: center;
        gap:20px;
        margin: auto;
    }

    form input {
        padding: 8px;

    }

    form select {
        padding: 8px;
    }

    button {
        padding: 8px;
        font-size: 15px;
        background-color: #eb80c2;
    }
    button:hover {
        background-color: #f14db3;
    }
`