import React from 'react'
import {Route,Routes} from "react-router-dom"
import HomePage from '../pages/HomePage'
import QuizPage from '../pages/QuizPage'
import Result from '../pages/Result'
import DashBoard from '../pages/DashBoard'

const AllRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/quiz" element={<QuizPage/>}/>
       <Route path="/result" element={<Result/>}/>
       <Route path="/dashboard" element={<DashBoard/>}/>
       <Route path="*" element={<h1>404 Page Not Found</h1>}/>

    </Routes>
  )
}

export default AllRoutes
