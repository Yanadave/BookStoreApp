import React from 'react'
import Home from './home/Home'
import Courses from './courses/Courses'
import Signup from './components/Signup'

// npm i react-router-dom install kia
import { Route, Routes } from 'react-router-dom'
// taki apn routes bna ske or render krva skee 

function App() {
  return (
  <>
   {/* <Home/>
   <Course/> */}
   <div className='dark:bg-slate-900 dark:text-white '>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={<Courses/>}/>
    <Route path='/signup' element={<Signup/>}/>       
   </Routes>
   </div>
  </>
  )
}

export default App