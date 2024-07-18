
import './App.css'
import React, { useState, useEffect } from 'react';
import Home from'./pages/Home.jsx'
import Works from './pages/Works.jsx'
import Skills from './pages/Skills.jsx'
import Resume from './pages/Resume.jsx'
import Self from './pages/Self.jsx'
import NotFound from './pages/NotFound.jsx'
import CursorFollow from './components/CursorFollow.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Loader from './components/Loader.jsx'
// import TypedComponent from './components/Typed.jsx'
// import Rough from './pages/Rough.jsx'

// <a herf="/self"> <a/>  =  <link to="/self" > <link/>

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);   // 5000ms = 5s
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : 
      (
        <>

      {/* Others --------- */}
      {/* nav */}
      <CursorFollow />


      {/* Routers ------- */}
      <Router>
        <Routes>

          <Route path='/' element={<Home/>} ></Route>
          <Route path='/works' element={<Works/>} ></Route>
          <Route path='/skills' element={<Skills />} ></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path='/self' element={<Self />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
          {/* <Route path='/biman' element={<Rough />}></Route> */}
          
        </Routes>
      </Router>

    </>
    )}
    </>
  )
}

export default App
