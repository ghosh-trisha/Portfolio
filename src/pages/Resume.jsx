import React, { useRef, useEffect, useState, Suspense, lazy } from "react";
import CloudPdfViewer from "@cloudpdf/viewer";
import { MdDownloadForOffline } from "react-icons/md"
import { Link } from "react-router-dom"
const LazyLoading = lazy(() => import('../components/loadingResume.jsx'))
import {ColorRing} from 'react-loader-spinner'


export default function Resume() {
  // const viewer = useRef(null);
  // useEffect(() => {
  //   CloudPdfViewer(
  //     {
  //       documentId: "b0943986-f729-4e25-bc21-8706f18c24af",
  //       darkMode: true,
  //       disableToolbar: true,
  //       appBarColored: true,
  //     },
  //     viewer.current
  //   ).then((instance) => {});
  // }, []);


  return (
    <>
      <div className="w-full h-screen  bg-[#303030] absolute top-0  ">

        <h1 className='flex justify-center items-center mt-16 pt-3 font-me text-5xl text-[#FBAC20]'>
          <h1 className='text-6xl text-[#C07ABE]'>{"< "}</h1>
          resume
          <h1 className='text-8xl text-[#E8251C]'>/</h1>
          <h1 className='text-6xl text-[#C07ABE]'>{" >"}</h1>
        </h1>

        <Suspense fallback={
          <div className="flex justify-center items-center h-full">
            <ColorRing
              visible={true}
              height="85"
              width="85"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={['#C07ABE' , '#C07ABE' , '#C07ABE' , '#C07ABE' , '#C07ABE']}
            />
          </div>
        }>
          <LazyLoading />
        </Suspense>


      </div>
    </>
  );
}




