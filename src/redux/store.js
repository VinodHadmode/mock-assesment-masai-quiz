import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {reducer as sportsReducer} from "./sportsReducer/reducer"
import thunk from "redux-thunk"

const rootReducer=combineReducers({
    sportsReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))