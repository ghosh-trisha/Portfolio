import React, {useState}  from 'react'
import Nav from '../components/Nav'
import Social from '../components/Social'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { srcery} from 'react-syntax-highlighter/dist/esm/styles/hljs'


function Self() {

  const codeString = `class TrishaGhosh{

    // My variety of skills is continuously expanding
    /* Unity is strength, and together, we can achieve greatness - let's work together to achieve 
    amazing things! */

    constructor(){
        this.name = 'Trisha Ghosh';
        this.dob = '02-09-2003';
        this.contactNumber = '+91 9875588301';
        this.email = 'trishaghosh0209@gmail.com'
    }

    education(){
        return [
            { '2019' : 'Secondary - Anandanagar A. C. Roy High School ,
                                                                 Grade - [92.85 %]' },
            { '2021' : 'Higher Secondary(Science) - Anandanagar A. C. Roy High School ,
                                                                            Grade-[91.40 %]' },
            { '2021-2025' : 'B.Tech - Academy Of Technology(Computer Science & Engineering) ,
                                                                                      Grade-[9.102]' }
        ]
    }

    achievements(){
        return [
            'Selected for College level E-commerce Business Project' ,
            'Solved 300+ coding problems in different coding platforms'
        ]
    }

    languagesKnown(){
        return [
            'English' , 'Hindi' , 'Bengali'
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


      <h1 className='w-screen flex justify-center items-center mt-14 pt-10 font-me text-5xl max-sm:text-2xl text-[#FBAC20]'>
        <h1 className='text-6xl max-sm:text-3xl text-[#C07ABE]'>{"< "}</h1>
        self 
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

export default Self

