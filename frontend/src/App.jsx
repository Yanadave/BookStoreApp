import React from 'react'
import Home from './home/Home'
import Courses from './courses/Courses'
import Signup from './components/Signup'

//login hone pe accha sa popup msg show ho isliye = npm install react-hot-toast install kra or neeche <toaster/> add kra or import kia idhr 
import { Toaster } from 'react-hot-toast'
// OR LOGIN.JSX or SIGNUP.JSX wale page mai import kra or ek line li waha se 

// npm i react-router-dom install kia
import { Navigate, Route, Routes } from 'react-router-dom'
// taki apn routes bna ske or render krva skee 
import { useAuth } from './context/AuthProvider'

function App() {

  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);

  return (
  <>
   {/* <Home/>
   <Course/> */}
   <div className='dark:bg-slate-900 dark:text-white '>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={authUser?<Courses/>:<Navigate to ="/signup" />}/>
    <Route path='/signup' element={<Signup/>}/>       
   </Routes>
   <Toaster />
   </div>
  </>
  )
}

export default App