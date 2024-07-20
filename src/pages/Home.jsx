import React, {useContext, useEffect} from 'react';
import Avatar from "../components/home/Avatar.jsx";
import Text from '../components/home/Text.jsx';
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { LuBrainCircuit } from "react-icons/lu";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import {Link} from 'react-router-dom'
import Draggable from 'react-draggable';
import ControllCursorFollower from '../components/ControllCursorFollower.jsx';
import { CursorContext } from '../components/Context.jsx';


function Home() {

  const {setIsHovered} = useContext(CursorContext);

  useEffect( ()=>{
    setIsHovered(8);
  } , []);

  return (
    <>
      {/* whole screen div */}
      <div className="bg-[#774069] h-screen w-screen max-lg:px-5 px-20 fixed pb-0 z-10">

        {/* dragable icons div */}
        <div className='z-30 bg-transparent max-xl:hidden'>

        <Draggable>
          <img
            src={"/images/home/git.png"}
            className="w-14 absolute left-[7.28rem] top-[25rem] -rotate-6 hover:drop-shadow-c-gray duration-200 cursor-pointer z-40 "
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
                className="w-16 absolute right-[49.5rem] top-[20.87rem]  hover:drop-shadow-c-gray duration-200 cursor-pointer z-40"
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
                className="w-20 absolute right-[11rem] top-[28.5rem] -rotate-6 hover:drop-shadow-c-gray duration-200 cursor-pointer z-40"
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
                className="w-16 absolute right-[19.1rem] top-[1.1rem] -rotate-6 hover:drop-shadow-c-gray duration-200 cursor-pointer z-40"
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
                className="w-24 absolute right-[38.5rem] top-[3.9rem] rotate-45 hover:drop-shadow-c-gray duration-200 cursor-pointer z-40"
                onDoubleClick={() => {
                  window
                    .open("https://leetcode.com/studyplan/top-interview-150/", "_blank")
                    .focus();
                }}
                draggable={false}
                alt=""
              />
           </Draggable> 
        </div>

        {/* black portion div */}
        <div className="bg-[#303030] lg:h-[85%] md:h-[93%] sm:h-[86%] max-sm:h-[89.3%] w-full flex flex-wrap flex-row rounded-b-lg z-20 overflow-hidden">
         
          {/* text (hi, trisha, paragraph) div */}
          <div className="basis-full relative lg:basis-1/2 bg-[#303030] p-4 lg:p-0 max-lg:flex max-lg:justify-center max-lg:items-center flex-col">
            {/* text */}
            <Text />

          </div>

          {/* namaste div */}
          <div className='text-[#FFFDD0] text-7xl font-co font-extrabold lg:bottom-[4.5rem] max-md:bottom-[3.2rem] max-lg:bottom-[0.8rem] max-sm:bottom-[2rem] max-sm:left-[5rem] left-[26%] fixed'><ControllCursorFollower>Namaste !</ControllCursorFollower></div>

          {/* avatar div */}
          <div className="basis-full lg:basis-1/2 flex max-lg:justify-center max-lg:items-center max-lg:translate-y-0">
            {/* avatar */}
            <Avatar className='absolute z-20' />
          </div>

          {/* work, skill, resume, self div */}
          <div>

            {/* work  */}
            <ControllCursorFollower>
            <Link to={"/works"}>
            <div className='bg-transparent absolute 

            lg:h-[10%] lg:w-[16.5%]
            lg:top-[18%] lg:left-[85%] lg:hover:left-[86%]
            lg:text-2xl font-bold

            md:h-[2%] md:w-[10%]
            md:top-[40%] md:right-[10%] md:hover:right-[7%] 

            sm:top-[40%] sm:right-[10%] sm:hover:right-[7%] 

            max-sm:top-[49%] max-sm:right-[10%] max-sm:hover:right-[7%] 
            
            duration-200 rounded-[15%] flex justify-center items-center text-center font-me  text-[#FFFDD0]'>
              <span className='max-lg:hidden'><HiOutlineDesktopComputer /></span>
              Works /{">"}
            </div >
            </Link>
            </ControllCursorFollower>
            

            {/* skill  */}
            <ControllCursorFollower>
            <Link to={"/skills"}>
            <div className='bg-transparent absolute 

            lg:h-[10%] lg:w-[16.5%]
            lg:top-[33%] lg:left-[85%] lg:hover:left-[86%]
            lg:text-2xl font-bold

            md:h-[2%] md:w-[10%]
            md:top-[50%] md:right-[10%] md:hover:right-[7%] 

            sm:top-[47%] sm:right-[11%] sm:hover:right-[7%]
            
            max-sm:top-[54%] max-sm:right-[11.5%] max-sm:hover:right-[7%] 
            
            duration-200 rounded-[15%] flex justify-center items-center text-center font-me  text-[#FFFDD0]' >
              <span className='max-lg:hidden'><LuBrainCircuit /></span>
              Skills /{">"}
            </div>
            </Link>
            </ControllCursorFollower>


            {/* resume  */}
            <ControllCursorFollower>
            <Link to={"/resume"}>
            <div className='bg-transparent absolute 

            lg:h-[10%] lg:w-[16.5%]
            lg:top-[48%] lg:left-[85%] lg:hover:left-[86%]
            lg:text-2xl font-bold

            md:h-[2%] md:w-[11%]
            md:top-[60%] md:right-[8.5%] md:hover:right-[7%] 
            
            sm:top-[54%] sm:right-[8%] sm:hover:right-[7%]
            
            max-sm:top-[59%] max-sm:right-[8%] max-sm:hover:right-[5%] 
            
            duration-200 rounded-[15%] flex justify-center items-center text-center font-me  text-[#FFFDD0]'>
              <span className='max-lg:hidden'><BsFileEarmarkPerson /></span>
              Resume /{">"}
            </div>
            </Link>
            </ControllCursorFollower>


            {/* self  */}
            <ControllCursorFollower>
            <Link to={"/self"}>
            <div className='bg-transparent absolute 

            lg:h-[10%] lg:w-[16.5%]
            lg:top-[63%] lg:left-[85%] lg:hover:left-[86%]
            lg:text-2xl font-bold

            md:h-[2%] md:w-[11%]
            md:top-[70%] md:right-[10%] md:hover:right-[7%] 

            sm:top-[61%] sm:right-[12.5%] sm:hover:right-[7%] 

            max-sm:top-[64%] max-sm:right-[14%] max-sm:hover:right-[10%] 
            
            duration-200 rounded-[15%] flex justify-center items-center text-center font-me  text-[#FFFDD0]'>
              <span className='max-lg:hidden'><BsInfoCircle /></span>
              Self /{">"}
            </div>
            </Link>
            </ControllCursorFollower>

          </div>

        </div>

      </div>
    </>
  )
}

export default Home;