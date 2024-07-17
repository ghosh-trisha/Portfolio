

import React from 'react'
import { RingLoader } from 'react-spinners'
import Typed from 'typed.js';

export default function Loader() {

    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Trisha Ghosh'],
        typeSpeed: 50,
        loop:true,
        showCursor:false,
        backSpeed:50

      });
  
      return () => {
        typed.destroy();
      };
    }, []);
  return (
    <div className='w-screen h-screen fixed flex flex-row justify-center items-center z-[90] bg-slate-100'>
      <RingLoader
      // color="#64748b"
      // color="#774069"
      color="#81346d"
      loading={true}
      size={90}
      aria-label="Loading Spinner"
      data-testid="loader"
      />
      <br/>
      {/* <span ref={el} className='text-3xl text-[#414c5c] font-kanit'></span> */}
      <span ref={el} className='text-3xl font-bold font-me text-[#81346d] font-kanit'></span>
    </div>
  )
}