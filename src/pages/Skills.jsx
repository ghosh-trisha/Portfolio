import React, {useState}  from 'react'
import Nav from '../components/Nav'
import Social from '../components/Social'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { srcery} from 'react-syntax-highlighter/dist/esm/styles/hljs'


function Skills() {

  const codeString = `class TrishaGhosh{

    /* I believe in the power of continuous growth, embracing new challenges to enhance my skills 
       and deliver top-notch results.*/
    /* I'm passionate about staying up-to-date with the latest technologies and trends, and I'm
       always looking for ways to improve our development processes. */

    constructor(){
        this.name = 'Trisha Ghosh';
        this.dob = '02-09-2003';
        this.contactNumber = '+91 9875588301';
        this.email = 'trishaghosh0209@gmail.com'
    }

    softSkills(){
        return [
            'First principal thinking' , 'Problem-Solving' , 'Fast Learning' , 'Team Work' ,
            'Critical thinking'
        ]
    }
    
    skills(){
        return [
            'Front-end Development' , 'Back-end Development' , 'Database Management' ,
            'Rest API Building' , 'Deployment' , 'Data Structures & Algorithms' ,
            'Web Design' , 'Chrome Extension Development' 
        ]
    }

    technicalSkills(){
        return [
            'C' , 'C++' , 'Core Java' , 'JDBC' , 'JavaScript' , 'HTML' , 'CSS' , 'Tailwind' ,
            'Bootstrap' , 'React' , 'Node' , 'Express' , 'MongoDB' , 'Mongoose' , 'SQL' , 'Git' ,
            'GitHub' , 'Postman' , 'npm' , 'Maven'
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
      <div className='min-h-screen w-screen bg-[#303030] pb-10'>


      <h1 className='w-screen flex justify-center items-center mt-14 pt-10 font-me text-5xl max-sm:text-2xl  text-[#FBAC20]'>
        <h1 className='text-6xl max-sm:text-3xl text-[#C07ABE]'>{"< "}</h1>
        skills
        <h1 className='text-8xl max-sm:text-4xl text-[#E8251C]'>/</h1>
        <h1 className='text-6xl max-sm:text-3xl text-[#C07ABE]'>{" >"}</h1>
      </h1>

      {/* <div className='w-screen flex justify-center items-center bg-transparent mt-6 ml-10 mr-10'>
      <SyntaxHighlighter language="javascript" style={srcery} className='text-xl'>{codeString}</SyntaxHighlighter>
      </div> */}
      <div className=' mt-6 md:ml-20 mx-6  rounded-lg backdrop-blur-sm bg-[#1C1B19]' >
      <SyntaxHighlighter 
      language="javascript" 
      style={srcery} 
      className=' text-[1.3rem] max-sm:text-[0.9rem]' 
      useInlineStyles={true}
      showLineNumbers={true} 
      showInlineLineNumbers={true} 
      lineNumberContainerStyle={{padding:"10px"}}

      customStyle={{ 
        backgroundColor: "rgba(0,0,0,0)",
        textShadow: '2px 2px 4px rgba(255, 255, 255, 0)',
       }}

      // lineNumberStyle={{fontFamily: "Roboto", fontSize: "18px", fontStyle: "italic", fontWeight: "300",  borderRight: "1px #FFFDD0", borderRightStyle: "solid"}}
       lineProps={(linenum)=>{
        // console.log(linenum)
        let style={}
        style.backgroundColor="red";
        return{style}
       }}
      lineNumberStyle={(lineNumber) => ({

        fontFamily: "Roboto",
        fontSize: "18px",
        fontStyle: "italic",
        fontWeight: "300",
        paddingTop:".2rem",
        paddingBottom:".2rem",
        // margin:0,
        
        borderRight: "1px #FFFDD0",
        borderRightStyle: "solid",
        backgroundColor: hoveredLine === lineNumber ? "#b31520" : "transparent",
        transition: "background-color 0.3s ease", 
        // borderRight: "3px solid #6a6b6dca",
        marginRight: "1rem",
        paddingRight: "1rem",
      })}
      onMouseEnter={(event) => {
        handleLineHover(parseInt(event.target.dataset.linenum))
      }}
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

