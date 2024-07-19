
import React from 'react';
import Avatar from "../components/home/Avatar.jsx";
import Text from '../components/home/Text.jsx';
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { LuBrainCircuit } from "react-icons/lu";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import {Link} from 'react-router-dom'
import Draggable from 'react-draggable';


function Home() {
  return (
    <>
      <div className="bg-[#774069] h-screen w-screen px-0  md:px-20 fixed pb-0 z-10">

        {/* <div className='z-30 bg-transparent'>

        <Draggable>
          <img
            src={"/images/home/git.png"}
            className="w-14 absolute left-[3rem] top-[24.5rem] -rotate-6 hover:drop-shadow-c-purple duration-200 cursor-pointer z-40 "
            onDoubleClick={() => {
              window
                .open("https://github.com/", "_blank")
                .focus();
            }}
            draggable={false}
            alt=""
          />
        </Draggable>

          <Draggable >
              <img
                src={"/images/home/react.png"}
                className="w-16 absolute right-0 top-5  hover:drop-shadow-c-purple duration-200 cursor-pointer z-40"
                onDoubleClick={() => {
                  window
                    .open("https://react.dev/reference/react", "_blank")
                    .focus();
                }}
                draggable={false}
                cursor={"move"}
                alt=""
              />
          </Draggable>

             <Draggable>
              <img
                src={"/images/home/sql.png"}
                className="w-20 absolute right-[24%] top-16 -rotate-6 hover:drop-shadow-c-purple duration-200 cursor-pointer z-40"
                onDoubleClick={() => {
                  window
                    .open("https://www.w3schools.com/sql/", "_blank")
                    .focus();
                }}
                draggable={false}
                alt=""
              />
            </Draggable>

            <Draggable>
              <img
                src={"/images/home/java.png"}
                className="w-16 absolute right-[45%] top-[3rem] -rotate-6 hover:drop-shadow-c-purple duration-200 cursor-pointer z-40"
                onDoubleClick={() => {
                  window
                    .open("https://www.w3schools.com/java/", "_blank")
                    .focus();
                }}
                draggable={false}
                alt=""
              />
           </Draggable>

           <Draggable >
              <img
                src={"/images/home/dsa.png"}
                className="w-24 absolute left-0 top-[50%] rotate-45 hover:drop-shadow-c-purple duration-200 cursor-pointer z-40"
                onDoubleClick={() => {
                  window
                    .open("https://leetcode.com/studyplan/top-interview-150/", "_blank")
                    .focus();
                }}
                draggable={false}
                alt=""
              />
           </Draggable> 
        </div> */}

        <div className="bg-[#303030] min-h-[85%] w-full md:h-auto flex flex-col flex-wrap md:flex-row rounded-b-lg z-20">
         
          <div className="basis-full relative lg:basis-1/2 bg-[#303030] p-4 lg:p-0 max-lg:flex max-lg:justify-center max-lg:items-center flex-col bg-lime-700">
            {/* text */}
            <Text />

          </div>

          <div className="basis-full md:basis-1/2 bg-[#303030]   ">
            {/* avatar */}
            <Avatar className='absolute z-20' />


            <Link to={"/works"}>
            <div className='bg-transparent h-[10%] w-[16.5%] absolute top-[18%] left-[85%] hover:left-[86%] duration-200 rounded-[15%] flex justify-center items-center text-center text-2xl font-me font-bold text-[#FFFDD0]'>
              <HiOutlineDesktopComputer />
              Works /{">"}
            </div >
            </Link>
            

            <Link to={"/skills"}>
            <div className='bg-transparent h-[10%] w-[16.5%] absolute top-[33%] left-[85%] hover:left-[86%] duration-200 rounded-[14%] flex justify-center items-center text-center text-2xl font-me font-bold text-[#FFFDD0]'>
              <LuBrainCircuit />
              Skills /{">"}
            </div>
            </Link>


            <Link to={"/resume"}>
            <div className='bg-transparent h-[10%] w-[16.5%] absolute top-[48%] left-[85%] hover:left-[86%] duration-200 rounded-[15%] flex justify-center items-center text-center text-2xl font-me font-bold text-[#FFFDD0]'>
              <BsFileEarmarkPerson />
              Resume /{">"}
            </div>
            </Link>


            <Link to={"/self"}>
            <div className='bg-transparent h-[10%] w-[16.5%] absolute top-[63%] left-[85%] hover:left-[86%] duration-200 rounded-[15%] flex justify-center items-center text-center text-2xl font-me font-bold text-[#FFFDD0]'>
              <BsInfoCircle />
              Self /{">"}
            </div>
            </Link>
            
          </div>

        </div>

      </div>
    </>
  )
}

export default Home;
