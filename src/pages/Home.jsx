
import React from 'react';
import Avatar from "../components/home/Avatar.jsx";
import Text from '../components/home/Text.jsx';

function Home() {
  return (
    <>
      <div className="bg-[#774069] h-screen w-screen px-0  md:px-20 fixed pb-0">

        <div className="bg-[#262427] min-h-[85%] w-full md:h-auto flex flex-col md:flex-row rounded-b-lg">
         
          <div className="basis-full relative sm:basis-1/2 bg-[#262427]  p-4 md:p-0">
            {/* text */}
            <Text  className=""/>

          </div>

          <div className="basis-full md:basis-1/2 bg-[#262427]   ">
            {/* avatar */}
            <Avatar className='absolute z-20' />

            {/* circle */}
            {/* <div className="absolute h-[40rem] w-[30rem] rounded-full border-4 border-gray top-[11%] right-[1.33rem] z-10"></div> */}

            {/* floting boxes */}
            <div className='bg-black bg-opacity-10 h-[6%] w-[15%] relative top-[-77%] left-[1%] rounded-[15%] flex justify-center items-center text-center -rotate-[22deg]'>hello</div>
            <div className='bg-black bg-opacity-10 h-[6%] w-[15%] relative top-[-87%] right-[-75%] rounded-[14%] flex justify-center items-center text-center rotate-[27deg]'>hello</div>
            <div className='bg-black bg-opacity-10 h-[6%] w-[15%] relative top-[-32%] left-[2%] rounded-[15%] flex justify-center items-center text-center rotate-[25deg]'>hello</div>
            <div className='bg-black bg-opacity-10 h-[6%] w-[15%] relative top-[-40%] right-[-75%] rounded-[15%] flex justify-center items-center text-center -rotate-[25deg]'>hello</div>
            
          </div>
        </div>

      </div>
    </>
  )
}

export default Home;
