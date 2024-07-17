
// skills
class TrishaGhosh{

    // I believe in the power of continuous growth, embracing new challenges to enhance my skills and deliver top-notch results.
    // I'm passionate about staying up-to-date with the latest technologies and trends, and I'm always looking for ways to improve our development processes.

    constructor(){
        this.name = 'Trisha Ghosh';
        this.dob = '02-09-2003';
        this.contactNumber = '+91 9875588301';
        this.email = 'trishaghosh0209@gmail.com'
    }

    softSkills(){
        return [
            'First principal thinking' , 'Problem-Solving' , 'Fast Learning' , 'Team Work' , 'Critical thinking'
        ]
    }
    
    skills(){
        return [
            'Front-end Development' , 'Back-end Development' , 'Database Management' , 'Rest API Building' , 'Deployment' , 'Data Structures & Algorithms' , 'Web Design' , 'Chrome Extension Development' 
        ]
    }

    technicalSkills(){
        return [
            'C' , 'C++' , 'Core Java' , 'JDBC' , 'JavaScript' , 'HTML' , 'CSS' , 'Tailwind' , 'Bootstrap' , 'React' , 'Node' , 'Express' , 'MongoDB' , 'Mongoose' , 'SQL' , 'Git' , 'GitHub' , 'Postman' , 'npm' , 'Maven'
        ]
    }

}

// self
class TrishaGhosh{

    // My variety of skills is continuously expanding
    // Unity is strength, and together, we can achieve greatness – let's work together to achieve amazing things!

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
            { '2021-2025' : 'B.Tech - Academy Of Technology(Computer Science & Engineering) , Grade-[9.102]' }
        ]
    }

    achievements(){
        return [
            'Selected for College level E-commerce Business Project' , 'Solved 300+ coding problems in different coding platforms'
        ]
    }

    languagesKnown(){
        return [
            'English' , 'Hindi' , 'Bengali'
        ]
    }

}

// skills
class BimanDas{

    // My dedication to mastering diverse programming languages drives my ability to create dynamic and robust applications.
    // Driven by curiosity, I push myself to master new technologies and methodologies, always aiming to exceed expectations.

    constructor(){
        this.name = 'Biman Das';
        this.dob = '16-05-2003';
        this.contactNumber = '+91 7076316977';
        this.email = 'daskumarbiman2020@gmail.com'
    }

    softSkills(){
        return [
            'Fast learning' , 'Problem-Solving' , 'Fast Learning' , 'Team Work' , 'Logical thinking'
        ]
    }
    
    skills(){
        return [
            'Front-end Development' , 'Back-end Development' , 'Database Management' , 'Deployment' , 'Data Structures & Algorithms' , 'Web Design' , 'Chrome Extension Development' , 'App Development'
        ]
    }

    technicalSkills(){
        return [
            'C' , 'C++' , 'Core Java' , 'HTML' , 'CSS' , 'JavaScript' , 'Tailwind CSS' , 'Adv JavaScript' , 'Bootstrap' , 'React.js' , 'Node.js' , 'Express.js' , 'Next.js' , 'SQL' , 'MongoDb' , 'Mongoose' , 'DSA' , 'JDBC' , 'Shell Script' , 'Git' , 'GitHub' , 'GitLab' , 'Postman' , 'Firebase' , 'Cloudinary' , 'Developing rest APIs' , 'OAuth 2.0' , 'JWT' , 'GraphQL' , 'Docker' , 'GitHub Actions' , 'Digital Ocean Functions' , 'Servlet' , 'Jsp' , 'Spring' , 'Spring Boot' , 'Flutter'
        ]
    }

}

// self
class BimanDas{

    // I am constantly innovating and integrating new technologies to deliver top-notch solutions.
    // I thrive on adapting to new challenges, using them as stepping stones to expand my expertise and achieve success.
    // I value teamwork and collaboration, and I'm eager to support my colleagues in achieving our goals & celebrating our collective success.

    constructor(){
        this.name = 'Biman Das';
        this.dob = '16-05-2003';
        this.contactNumber = '+91 7076316977';
        this.email = 'daskumarbiman2020@gmail.com'
    }

    education(){
        return [
            { '2019' : 'Secondary - Churaman P.C High School , Grade-[82.90 %]' },
            { '2021' : 'Higher Secondary(Science) - Raiganj Sri Sri Ramkrishna vidya bhaban , Grade-[76 %]' },
            { '2021-2025' : 'B.Tech - Academy Of Technology(Computer Science & Engineering) , Grade-[8.60]' }
        ]
    }

    achievements(){
        return [
            'Selected for College level E-commerce Business Project' , 'Solved 500+ coding problems in different coding platforms' , 'Best UI Award in Hackathon'
        ]
    }

    languagesKnown(){
        return [
            'English' , 'Hindi' , 'Bengali'
        ]
    }

}


// import React from "react";
// import { Tilt } from "react-tilt";
// import { Link } from "react-router-dom";
// import work from "../assets/work01.png";
// import styled from "styled-components";

const ImgContainer = styled.div`
   perspective: 800px;
   @media(min-width: 1200px){
   width: 37rem;
   }
   
  //  height: 25rem;
  //  perspective-origin: left;
`;

const ImgLeft=styled.img`
@media(min-width: 1000px){
margin-right:1rem;
  transform:rotateX(4deg) rotateY(29deg) rotateZ(-2deg) translateY(2rem);
  &:hover{
 transform:rotateX(4deg) rotateY(-30deg) rotateZ(2deg) translateX(-.5rem) translateY(-1.5rem);
  }
}
`

const ImgRight=styled.img`
@media(min-width: 1000px){
margin-right:1rem;
  transform:rotateX(4deg) rotateY(-29deg) rotateZ(2deg) translateY(-2rem);
  &:hover{
 transform:rotateX(4deg) rotateY(30deg) rotateZ(-2deg) translateX(-2rem) translateY(1.5rem);
  }
}
`

const demo=[1,1,1,4,5];


export default function Works() {
  return (
    <>
      <div className="flex flex-col w-full  max-md:mt-10">
        <div className="w-full  h-32 flex flex-col justify-center items-center   relative md:right-10">
          <h2 className="text-7xl font-[600] font-playfr text-deepg flex items-center">
            {"<"} 
            <span className="text-5xl font-kanit">Works</span>
            <span className="text-yellow-500">/</span>
            {">"}
          </h2>
          <p className="text-center mt-6 text-lg text-deepg">
          Here you will find various personal and client projects,
          <br /> &nbsp; &nbsp;
          each with its own detailed case study.
          </p>
        </div>
        <div className="w-full flex flex-col mt-16 justify-center ">
          {demo.map((ele,index)=>{
            if(index%2==1 && window.innerWidth >= 1200){
              return(
                <div className="flex flex-row  p-8 mx-10 rounded-lg max-lg:flex-wrap max-lg:justify-center justify-center md:pr-[5rem] lg:mb-10">
                
                <div className="pl-12 pt-8 ">
                  <h2 className="font-extrabold font-roboto text-3xl text-[#2e2e2e] drop-shadow-lg mb-7">
                    Dopefolio
                  </h2>
                  <p className="max-w-[28rem] text-[1.1rem] text-deepg">
                    Dopefolio is a successf ul Open-Source project that I created
                    which have been featured on some of the biggest tech sites
                    like CSS-Tricks, Hostinger, etc & used by thousands of
                    developers globally
                  </p>
                  <div className="border-2 rounded-lg flex flex-row   mt-5 max-w-[28rem] shadow-inner shadow-slate-500">
                    <div className="px-5 self-center text-[1.1rem] text-lightg font-[700] drop-shadow-sm  min-h-16 min-w-20  flex justify-center items-center ">
                      TOOLS
                    </div>
                    <div className="w-full flex flex-row flex-wrap max-w-[28rem] border-l-2 border-gray-400 items-center">
                      <div className="p-1  rounded-sm h-7 shadow-md font-lato text-center  bg-zinc-200 font-[600] m-2 text-lightg text-sm">
                        HTML
                      </div>
                      <div className="p-1  rounded-sm h-7 shadow-md font-lato text-center  bg-zinc-200 font-[600] m-2 text-lightg text-sm">
                        CSS
                      </div>
                      <div className="p-1  rounded-sm h-7 shadow-md font-lato text-center  bg-zinc-200 font-[600] m-2 text-lightg text-sm">
                        REACT
                      </div>
                      <div className="p-1  rounded-sm h-7 shadow-md font-lato text-center  bg-zinc-200 font-[600] m-2 text-lightg text-sm">
                        NODE
                      </div>
                      <div className="p-1  rounded-sm h-7 shadow-md font-lato text-center  bg-zinc-200 font-[600] m-2 text-lightg text-sm">
                        EXPRESS
                      </div>
                    </div>
                  </div>
                  <Link to={"#"}>
                    <div className="w-44 h-14 hover:-translate-y-2 hover:shadow-c-button bg-[#2e2e2e] text-zinc-200 flex justify-center items-center mt-6 rounded-md  shadow-lg shadow-slate-400 text-xl font-[600] font-roboto tracking-wide duration-200">
                      {" "}
                      <span className="drop-shadow-lg ">Take a look &nbsp;{'→'}</span>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-row justify-center items-center lg:translate-x-28">
                  <ImgContainer>
                    <ImgRight
                      src={work}
                      className="w-[33.5rem] lg:hover:w-[40rem] lg:shadow-c-img-card-gray lg:hover:shadow-c-img-card-gray-hover max-lg:shadow-c-img-card rounded-lg transition-all duration-[800ms] "
                      alt="project pic"
                    />
                  
                 </ImgContainer>
                </div>
              </div>
              )
            }
            else{
              return(
                <div className="flex flex-row  p-8 mx-10 rounded-lg max-lg:flex-wrap max-lg:justify-center justify-center md:pr-[5rem] lg:mb-10">
                <div className="flex flex-row justify-center items-center ">
                  <ImgContainer>
                    <ImgLeft
                      src={work}
                      className="w-[33.5rem] lg:hover:w-[40rem] lg:shadow-c-img-card-gray lg:hover:shadow-c-img-card-gray-hover max-lg:shadow-c-img-card rounded-lg transition-all duration-[800ms] "
                      alt="project pic"
                    />
                  
                 </ImgContainer>
                </div>
                <div className="pl-12 pt-8 ">
                  <h2 className="font-extrabold font-roboto text-3xl text-[#2e2e2e] drop-shadow-lg mb-7">
                    Dopefolio
                  </h2>
                  <p className="max-w-[28rem] text-[1.1rem] text-deepg">
                    Dopefolio is a successf ul Open-Source project that I created
                    which have been featured on some of the biggest tech sites
                    like CSS-Tricks, Hostinger, etc & used by thousands of
                    developers globally
                  </p>
                  <div className="border-2 rounded-lg flex flex-row   mt-5 max-w-[28rem] shadow-inner shadow-slate-500">
                    <div className="px-5 self-center text-[1.1rem] text-lightg font-[700] drop-shadow-sm  min-h-16 min-w-20  flex justify-center items-center ">
                      TOOLS
                    </div>
                    <div className="w-full flex flex-row flex-wrap max-w-[28rem] border-l-2 border-gray-400 items-center">
                      <div className="p-1  rounded-sm h-7 shadow-md font-lato text-center  bg-zinc-200 font-[600] m-2 text-lightg text-sm">
                        HTML
                      </div>
                      <div className="p-1  rounded-sm h-7 shadow-md font-lato text-center  bg-zinc-200 font-[600] m-2 text-lightg text-sm">
                        CSS
                      </div>
                      <div className="p-1  rounded-sm h-7 shadow-md font-lato text-center  bg-zinc-200 font-[600] m-2 text-lightg text-sm">
                        REACT
                      </div>
                      <div className="p-1  rounded-sm h-7 shadow-md font-lato text-center  bg-zinc-200 font-[600] m-2 text-lightg text-sm">
                        NODE
                      </div>
                      <div className="p-1  rounded-sm h-7 shadow-md font-lato text-center  bg-zinc-200 font-[600] m-2 text-lightg text-sm">
                        EXPRESS
                      </div>
                    </div>
                  </div>
                  <Link to={"#"}>
                    <div className="w-44 h-14 hover:-translate-y-2 hover:shadow-c-button bg-[#2e2e2e] text-zinc-200 flex justify-center items-center mt-6 rounded-md  shadow-lg shadow-slate-400 text-xl font-[600] font-roboto tracking-wide duration-200">
                      {" "}
                      <span className="drop-shadow-lg ">Take a look &nbsp;{'→'}</span>
                    </div>
                  </Link>
                </div>
              </div>
              )
            }
          })
            
          }
        </div>
      </div>
    </>
  );
}