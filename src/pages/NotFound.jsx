import React from 'react';
import { BsMenuButtonWide } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const NotFound = () => {
  

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-cream text-darkGray fixed bg-[#774069]">
      <div className="text-center p-10 shadow-lg rounded-lg bg-[#262427] font-po">
        <h1 className="text-6xl font-bold mb-4 text-purple text-[#FFFDD0]">404</h1>
        <p className="text-2xl mb-8 text-[#FFFDD0]">Page Not Found</p>
        

        <Link to={"/"}>
        <button
          className="bg-purple text-cream font-bold py-2 px-4 rounded hover:bg-darkGray hover:text-cream transition duration-300 text-[#FFFDD0] underline underline-offset-4"
        >
          Go Home
        </button>
        </Link>


      </div>
    </div>
  );
};

export default NotFound;
