import React, { useRef, useEffect } from "react";
import CloudPdfViewer from "@cloudpdf/viewer";
import { MdDownloadForOffline } from "react-icons/md"
import {Link} from "react-router-dom"


function loadingResume() {


  const viewer = useRef(null);
  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "b0943986-f729-4e25-bc21-8706f18c24af",
        darkMode: true,
        disableToolbar: true,
        appBarColored: true,
        themeColor: '#C07ABE'
      },
      viewer.current
    ).then((instance) => {});
  }, []);


  return (
    <>
      <div className="viewer w-full h-full mt-2 p-0" ref={viewer}></div>


      <Link to="https://cloudpdf.io/download/cAT1kTG3M" >
      <div className="flex justify-center items-center fixed right-14 bottom-10 text-5xl  text-[#FFFDD0] max-md:text-[#774069] max-md:bottom-20 hover:text-[#774069]  duration-200 bg-transparent">
        <MdDownloadForOffline className="hover:drop-shadow-c-purple" />
      </div>
      </Link>
      
    </>
  );
}

export default loadingResume


