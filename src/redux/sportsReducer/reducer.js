import { GET_QUIZ_REQUEST, GET_QUIZ_SUCCESS,GET_QUIZ_FAILURE } from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    count: 0,
    res:[]
}

export const reducer = (state=initState, { type, payload }) => {
    switch (type) {
        case GET_QUIZ_REQUEST :{
            return {...state,isLoading:true}
        }
        case GET_QUIZ_SUCCESS :{
            return {...state,isLoading:false,res:payload}
        }
        case GET_QUIZ_FAILURE :{
            return {...state,isLoading:false,isError:true}
        }
        default:
            return state;
    }
}