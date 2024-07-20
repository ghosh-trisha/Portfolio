import React, { useRef, useEffect, useState } from "react";
import CloudPdfViewer from "@cloudpdf/viewer";
import Nav from '../components/Nav.jsx'
import Social from "../components/Social.jsx";
import { MdDownloadForOffline } from "react-icons/md"
import {Link} from "react-router-dom"


export default function Resume() {
  const viewer = useRef(null);
  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "b0943986-f729-4e25-bc21-8706f18c24af",
        darkMode: true,
        disableToolbar: true,
        appBarColored: true,
      },
      viewer.current
    ).then((instance) => {});
  }, []);
  return (
    <>
      <div className="w-full h-screen  bg-[#303030] absolute top-0  ">


      <h1 className='flex justify-center items-center mt-16 pt-3 font-me text-5xl text-[#FBAC20]'>
        <h1 className='text-6xl text-[#C07ABE]'>{"< "}</h1>
        resume 
        <h1 className='text-8xl text-[#E8251C]'>/</h1>
        <h1 className='text-6xl text-[#C07ABE]'>{" >"}</h1>
      </h1>
      <div className="viewer w-full h-full mt-2 p-0" ref={viewer}></div>

      {/* <div className="viewer w-full h-full mt-20 p-0" ref={viewer}></div> */}

      <Link to="https://cloudpdf.io/download/cAT1kTG3M" >
      <div className="flex justify-center items-center fixed right-14 bottom-10 text-5xl  text-[#FFFDD0] max-md:text-[#774069] max-md:bottom-20 hover:text-[#774069]  duration-200 bg-transparent">
        <MdDownloadForOffline className="hover:drop-shadow-c-purple" />
      </div>
      </Link>


      </div>
    </>
  );
}




