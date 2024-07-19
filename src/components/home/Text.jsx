
import React from 'react'
import {Link} from 'react-router-dom'

function Text() {
  return (
    <>
      <div className='text-[#FFFDD0] text-[1.6rem] font-me relative left-[-7%] lg:top-[10%] lg:left-[5%] '>👋 Hi! &nbsp; I'm <Link className='text-[2rem]'>&nbsp;Trisha Ghosh</Link>,</div>
      

      <div className='text-[#FFFDD0] relative h-54 lg:top-[15%] lg:left-[14%]  w-[60%] font-w font-[400]'><span className="font-[800] text-[#FFFDD0] text-[109%]">a third-year Computer Science Engineering</span> student passionate about technology & innovation and also great at making new software and websites. Work well in teams, & also good at solving problems. Transform ideas into reality. Crafting innovative solutions through code. Can easily learn new things & change to fit different situations.</div>

      <div className='text-[#FFFDD0] text-7xl font-co font-extrabold absolute bottom-[-1.5rem] left-[26%] fixed'><Link>Namaste !</Link></div>
    </> 
  )
}
export default Text