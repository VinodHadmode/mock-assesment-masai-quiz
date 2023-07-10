import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import QuestionDisplay from '../components/QuestionDisplay'


const QuizPage = () => {

    const store = useSelector((store) => store.sportsReducer)
    const disPatch = useDispatch()

    console.log("store", store.res);
    return (
        <div>
        <h2>All questions</h2>

            {
                store.res.map((el) => {
                    return <div key={el.id}>
                      <QuestionDisplay {...el}/>
                    </div>
                })
            }
            <button style={{backgroundColor:"teal",padding:"10px",width:"80px",margin:"40px"}}>Submit</button>
        </div>
    )
}

export default QuizPage
