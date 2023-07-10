import { GET_QUIZ_FAILURE, GET_QUIZ_REQUEST, GET_QUIZ_SUCCESS } from "./actionTypes"
import axios from "axios"


let baseURL=`https://opentdb.com/api.php`

export const getQuestions=(userDetailsObj)=>(disPatch)=>{
    let {questions,category,level} =userDetailsObj
    if(category="generalknowledge"){
        category="9"
    }else if(category="sports"){
        category="21"
    }else if(category="geography"){
        category="22"
    }
    disPatch({type:GET_QUIZ_REQUEST})
    axios.get(`${baseURL}?amount=${questions}&category=${category}&difficulty=${level}&type=multiple`).then((res)=>{
        // console.log(res);
        return disPatch({type:GET_QUIZ_SUCCESS,payload:res.data.results})
    }).catch((error)=>{
        disPatch({type:GET_QUIZ_FAILURE})
    })
}