
import React , {useState} from 'react';
import Nav from '../components/Nav';
import Social from '../components/Social';
import {Tilt} from 'react-tilt';
import {Link} from 'react-router-dom'
// import styled from "styled-components";


// const ImgContainer = styled.div`
//    perspective: 800px;
//    width: 40rem;
//    height: 25rem;
// `;
// const Img=styled.img`
//   transform:rotateY(20deg);
//   &:hover{
//   transform:rotateY(-20deg);
//   }
// `

function Works() {

  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            90,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  
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

      <div className="flex flex-col justify-center items-center bg-[#303030] pb-24">

        <div className='flex flex-row justify-center items-center bg-[#303030] mt-20'>
        <Link><Tilt className="Tilt w-20 h-20 bg-[#774069] rounded-[20%] flex justify-center items-center text-[#FFFDD0] text-xl font-me hover:sw ml-0 shadow-c-purple" options={defaultOptions} style={{ height: 250, width: 250 }}>
        <div className='text-9xl'>🙂</div>
        </Tilt></Link>

        <div className='text-[#FFFDD0] w-[50%] h-20 flex justify-center items-center font-me text-xl ml-28 mr-0' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse non porro corrupti dolorem doloremque sint cupiditate atque iure nesciunt. Voluptas aut illo sunt vero ut amet eligendi voluptate facere vitae assumenda doloremque harum omnis, ab quisquam id. Praesentium eum eligendi aut voluptate doloribus architecto blanditiis iure officiis fugiat magnam?</div>
        </div>

        <div className='flex flex-row justify-center items-center bg-[#303030] mt-32'>
        <div className='text-[#FFFDD0] w-[50%] h-20 flex justify-center items-center font-me text-xl ml-0 mr-0' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse non porro corrupti dolorem doloremque sint cupiditate atque iure nesciunt. Voluptas aut illo sunt vero ut amet eligendi voluptate facere vitae assumenda doloremque harum omnis, ab quisquam id. Praesentium eum eligendi aut voluptate doloribus architecto blanditiis iure officiis fugiat magnam?</div>

        <Link><Tilt className="Tilt w-20 h-20 bg-[#774069] rounded-[20%] flex justify-center items-center text-[#FFFDD0] text-xl font-me hover:sw ml-20 shadow-c-purple" options={defaultOptions} style={{ height: 250, width: 250 }}>
        <div className='text-9xl'>😀</div>
        </Tilt></Link>
        </div>

        <div className='flex flex-row justify-center items-center bg-[#303030] mt-20'>
        <Link><Tilt className="Tilt w-20 h-20 bg-[#774069] rounded-[20%] flex justify-center items-center text-[#FFFDD0] text-xl font-me hover:sw ml-0 shadow-c-purple" options={defaultOptions} style={{ height: 250, width: 250 }}>
        <div className='text-9xl'>😊</div>
        </Tilt></Link>

        <div className='text-[#FFFDD0] w-[50%] h-20 flex justify-center items-center font-me text-xl ml-28 mr-0' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse non porro corrupti dolorem doloremque sint cupiditate atque iure nesciunt. Voluptas aut illo sunt vero ut amet eligendi voluptate facere vitae assumenda doloremque harum omnis, ab quisquam id. Praesentium eum eligendi aut voluptate doloribus architecto blanditiis iure officiis fugiat magnam?</div>
        </div>

        <div className='flex flex-row justify-center items-center bg-[#303030] mt-32'>
        <div className='text-[#FFFDD0] w-[50%] h-20 flex justify-center items-center font-me text-xl ml-0 mr-0' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse non porro corrupti dolorem doloremque sint cupiditate atque iure nesciunt. Voluptas aut illo sunt vero ut amet eligendi voluptate facere vitae assumenda doloremque harum omnis, ab quisquam id. Praesentium eum eligendi aut voluptate doloribus architecto blanditiis iure officiis fugiat magnam?</div>

        <Link><Tilt className="Tilt w-20 h-20 bg-[#774069] rounded-[20%] flex justify-center items-center text-[#FFFDD0] text-xl font-me hover:sw ml-20 shadow-c-purple" options={defaultOptions} style={{ height: 250, width: 250 }}>
        <div className='text-9xl'>🤪</div>
        </Tilt></Link>
        </div>

      </div>


    </div>
    </>
  )
}

export default Works