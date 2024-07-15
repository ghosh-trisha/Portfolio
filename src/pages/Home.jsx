
import React from 'react';
import Avatar from "../components/home/Avatar.jsx";
import Text from '../components/home/Text.jsx';
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { LuBrainCircuit } from "react-icons/lu";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import {Link} from 'react-router-dom'


function Home() {
  return (
    <>
      <div className="bg-[#774069] h-screen w-screen px-0  md:px-20 fixed pb-0">

        <div className="bg-[#303030] min-h-[85%] w-full md:h-auto flex flex-col md:flex-row rounded-b-lg">
         
          <div className="basis-full relative sm:basis-1/2 bg-[#303030]  p-4 md:p-0">
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
