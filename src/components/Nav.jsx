

import React, { useRef, useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import {Link} from 'react-router-dom';

import { HiOutlineDesktopComputer } from "react-icons/hi";
import { LuBrainCircuit } from "react-icons/lu";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import { FaHome } from "react-icons/fa";


function Nav() {
  const [menu, setMenu] = useState(true);
  const menuRef = useRef();
  return (
    <header className=" md:px-24 md:flex md:items-center md:justify-between p-4 pb-0  md:pb-4 bg-[#774069] border-[#774069] border-b-4 fixed w-screen top-0 h-[4.5rem] ">
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <h1 className="leading-none text-2xl text-grey-darkest">
          <Link className="no-underline text-grey-darkest hover:text-black text-[#FFFDD0]" to="/">
           <span className=" text-6xl font-[800] font-sm">T</span>
           <span className="font-playfr text-xl font-sm">risha</span>
          </Link>
        </h1>

        <div
          className="text-black hover:text-orange md:hidden cursor-pointer text-2xl"
          onClick={() => {
            setMenu((p) => !p);
            menuRef.current.classList.toggle("max-md:hidden");
            menuRef.current.classList.toggle("bg-[#774069]");
            menuRef.current.classList.toggle("w-screen");
            menuRef.current.classList.toggle("absolute");
            menuRef.current.classList.toggle("left-0");

          }}>
          {menu ? <RiMenu3Fill /> : <IoClose />}
        </div>
      </div>
      

      <nav className="max-md:hidden transition-all duration-150" ref={menuRef}>
        <ul className="list-reset md:flex md:items-center">
          <li className="md:ml-6">                   
            <Link
              className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0 text-lg font-me text-[#FFFDD0] "
              to="/works">
              <span className="flex flex-row justify-center items-center">
              <HiOutlineDesktopComputer className="mr-[0.2rem]"/>
              Works/{">"} 
              </span>
            </Link>
          </li>
          <li className="md:ml-6">
            <Link
              className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0 text-lg font-me text-[#FFFDD0]"
              to="/skills">
                <span className="flex flex-row justify-center items-center">
                  <LuBrainCircuit className="mr-[0.2rem]"/>
                  Skills/{">"}
                </span>
            </Link>
          </li>
          <li className="md:ml-6">
            <Link
              className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0 text-lg font-me text-[#FFFDD0]"
              to="/resume">
              <span className="flex flex-row justify-center items-center">
                <BsFileEarmarkPerson className="mr-[0.2rem]"/>
                Resume/{">"}
              </span>
            </Link>
          </li>
          <li className="md:ml-6">
            <Link
              class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0 text-lg font-me text-[#FFFDD0]"
              to="/self">
              <span className="flex flex-row justify-center items-center">
                <BsInfoCircle className="mr-[0.2rem]"/>
                Self/{">"}
              </span>
            </Link>
          </li>
        </ul>
      </nav>


    </header>
  );
}

export default Nav