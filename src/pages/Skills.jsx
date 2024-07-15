
import React, {useState} from 'react'
import Nav from '../components/Nav'
import Social from '../components/Social'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { srcery} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { xt256 as hi} from 'react-syntax-highlighter/dist/esm/styles/hljs'

import Prism from "react-syntax-highlighter";
import { zTouch as test } from "react-syntax-highlighter/dist/esm/styles/prism";

// a11yDark
// atelierDuneDark
// atelierSeasideDark
// atomOneDarkReasonable
// gruvboxDark
// srcery
// tomorrowNight
// xt256
// monokaiSublime


function Skills() {
  const codeString = `class TrishaGhosh{

    constructor(){
        this.name = 'Trisha Ghosh';
        this.contactNumber = '+91 9875588301';
        this.email = 'trishaghosh0209@gmail.com'
    }

    skills(){
        return [
          'C' , 'C++' , 'Core Java' , 'JDBC' , 'JavaScript' , 'HTML' , 'CSS' ,
          'Tailwind' , 'Bootstrap' , 'React' , 'Node' , 'Express' ,
          'MongoDB' , 'Mongoose' , 'SQL' , 'Git' , 'GitHub' , 'Postman' , 'npm' , 'Maven'
        ]
    }

  }
`;

const [hoveredLine, setHoveredLine] = useState(null);
const handleLineHover = (lineNumber) => {
  setHoveredLine(lineNumber);
};

const handleLineLeave = () => {
  setHoveredLine(null);
};


  return (
    <>
      <div className='min-h-screen w-screen bg-[#1C1B19]'>


        <Nav />
        <Social />
        <h1 className='flex justify-center items-center mt-16 pt-10 font-me text-5xl text-[#FBAC20]'>
          <h1 className='text-6xl text-[#C07ABE]'>{"< "}</h1>
          skills 
          <h1 className='text-8xl text-[#E8251C]'>/</h1>
          <h1 className='text-6xl text-[#C07ABE]'>{" >"}</h1>
          </h1>

        <div className='w-screen flex justify-center items-center bg-transparent mt-6 ml-9'>


          <SyntaxHighlighter 
          language="javascript" 
          style={srcery} 
          className=' text-2xl' 
          useInlineStyles={true}
          showLineNumbers={true} 
          showInlineLineNumbers={true} 
          lineNumberContainerStyle={{padding:"10px"}}

          // lineNumberStyle={{fontFamily: "Roboto", fontSize: "18px", fontStyle: "italic", fontWeight: "300",  borderRight: "1px #FFFDD0", borderRightStyle: "solid"}}

          lineNumberStyle={(lineNumber) => ({
            fontFamily: "Roboto",
            fontSize: "18px",
            fontStyle: "italic",
            fontWeight: "300",
            paddingRight: "10px",
            borderRight: "1px #FFFDD0",
            borderRightStyle: "solid",
            backgroundColor: hoveredLine === lineNumber ? "#b31520" : "transparent",
            transition: "background-color 0.3s ease", 
          })}
          onMouseEnter={(event) => handleLineHover(parseInt(event.target.dataset.linenum))}
          // onMouseEnter={() => handleLineHover}
          onMouseLeave={handleLineLeave}

          // customStyle={{fontFamily:"Merienda"}} 
          // wrapLines={true}
          // wrapLongLines={true}
          >
            {codeString}
          </SyntaxHighlighter>


        </div>

      </div>
    </>
  )
}

export default Skills



