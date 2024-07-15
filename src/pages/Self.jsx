import React, {useState}  from 'react'
import Nav from '../components/Nav'
import Social from '../components/Social'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { srcery} from 'react-syntax-highlighter/dist/esm/styles/hljs'


function Self() {

  const codeString = `class TrishaGhosh{

    constructor(){
      this.name = 'Trisha Ghosh';
      this.dob = '02-09-2003';
      this.contactNumber = '+91 9875588301';
      this.email = 'trishaghosh0209@gmail.com'
    }

    education(){
        return [
          { '2019' : 'Secondary - Anandanagar A. C. Roy High School , Grade-[92.85 %]' },
          { '2021' : 'Higher Secondary(Science) - Anandanagar A. C. Roy High School , Grade-[91.40 %]' },
          { '2021-2025' : 'B.Tech(Computer Science & Engineering) - Academy Of Technology , Grade-[9.102]' }
        ]
    }

    achievements(){
        return [
          'Selected for College level E-commerce Business Project' ,
          'Solved 300+ codingproblems in different coding platforms'
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
        self 
        <h1 className='text-8xl text-[#E8251C]'>/</h1>
        <h1 className='text-6xl text-[#C07ABE]'>{" >"}</h1>
      </h1>

      {/* <div className='w-screen flex justify-center items-center bg-transparent mt-6 ml-10 mr-10'>
      <SyntaxHighlighter language="javascript" style={srcery} className='text-xl'>{codeString}</SyntaxHighlighter>
      </div> */}
      <div className='w-screen flex justify-center items-center bg-transparent mt-6 ml-24'>


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

export default Self

