
import React , {useState} from 'react';
import Nav from '../components/Nav.jsx';
import Social from '../components/Social.jsx';
// import {Tilt} from 'react-tilt';
import {Link} from 'react-router-dom'
// import portfolioPic from '../assets/portfolio.png'
// import styled from "styled-components";


function Works() {

  // const defaultOptions = {
  //   reverse:        false,  // reverse the tilt direction
  //   max:            90,     // max tilt rotation (degrees)
  //   perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
  //   scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
  //   speed:          1000,   // Speed of the enter/exit transition
  //   transition:     true,   // Set a transition on enter/exit.
  //   axis:           null,   // What axis should be disabled. Can be X or Y.
  //   reset:          true,    // If the tilt effect has to be reset on exit.
  //   easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  // }
  
  return (
    <>
    <div className='min-h-screen w-screen bg-[#303030]'>


      <Nav />
      <Social />
      <h1 className='flex justify-center items-center mt-16 pt-10 font-me text-5xl text-[#FBAC20]'>
        <h1 className='text-6xl text-[#C07ABE]'>{"< "}</h1>
        works 
        <h1 className='text-8xl text-[#E8251C]'>/</h1>
        <h1 className='text-6xl text-[#C07ABE]'>{" >"}</h1>
      </h1>

      <p className="text-center mt-6 text-lg text-deepg text-[#FFFDD0] font-me">
        Here you will find various personal and client projects,
        <br /> 
        each with its own detailed case study.
      </p>


      <div className="flex flex-col justify-center items-center bg-[#303030] pb-24 mt-24">

        <div className='flex flex-row justify-around items-center bg-transparent mt-20'>
        {/* <Link><Tilt className="Tilt w-20 h-20 bg-[#774069] rounded-[20%] flex justify-center items-center text-[#FFFDD0] text-xl font-me hover:sw ml-0 shadow-c-purple" options={defaultOptions} style={{ height: 250, width: 250 }}>
        <div className='text-9xl'>🙂</div>
        </Tilt></Link> */}

        {/* picture div */}
        <div>
          
        </div>

        {/* text div */}
        <div className='text-[#FFFDD0] w-[40%] h-20 flex flex-col justify-center items-center font-me ml-28 mr-0' >

          <h2 className='m-4 text-4xl'>Portfolio</h2>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse non porro corrupti dolorem doloremque sint cupiditate atque iure nesciunt.</p>

          <div className='border-2 border-[#FFFDD0] rounded-lg flex flex-row m-8 shadow-inner shadow-[#FFFDD0]'>
            <div className='flex justify-center items-center h-12 w-24 font-[700]'>Tools</div>

            <div className='flex justify-center items-center'>
            <span className='border-l-2 border-[#FFFDD0] h-12 flex justify-center items-center w-20'>HTML</span>
            <span className='border-l-2 border-[#FFFDD0] h-12 flex justify-center items-center w-20'>CSS</span>
            <span className='border-l-2 border-[#FFFDD0] h-12 flex justify-center items-center w-20'>JS</span>
            <span className='border-l-2 border-[#FFFDD0] h-12 flex justify-center items-center w-20'>React</span>
            <span className='border-l-2 border-[#FFFDD0] h-12 flex justify-center items-center w-20'>NODE</span>
            </div>
          </div>

          <Link>
            {/* <div className='border-2 border-[#FFFDD0] rounded-lg flex justify-center items-center m-8 h-12 w-44'>Take a look &nbsp;{'→'}</div> */}
            <div class="relative inline-flex  group">
            <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <div class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-[#1C1B19] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1C1B19]"
            role="button">Take a look &nbsp;{'→'}
            </div>
            </div>
          </Link>

        </div>

        </div> 

      </div>


    </div>
    </>
  )
}

export default Works