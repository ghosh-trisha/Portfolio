import React, { useState, useEffect } from "react";
import Nav from "../components/Nav.jsx";
import Social from "../components/Social.jsx";
// import {Tilt} from 'react-tilt';
import { Link } from "react-router-dom";
// import portfolioPic from '../assets/portfolio.png'
import styled from "styled-components";
import Draggable from "react-draggable";

const ImgContainer = styled.div`
  perspective: 800px;
  @media (min-width: 1000px) {
    width: 37rem;
  }
`;

const ImgLeft = styled.img`
  @media (min-width: 1000px) {
    transform: rotateX(4deg) rotateY(29deg) rotateZ(-2deg) translateY(2rem);

    &:hover {
      transform: rotateX(4deg) rotateY(-30deg) rotateZ(2deg) translateX(-0.5rem)
        translateY(-1.5rem);
    }
  }
`;

const ImgRight = styled.img`
  @media (min-width: 1000px) {
    transform: rotateX(4deg) rotateY(-29deg) rotateZ(2deg) translateY(-2rem);

    &:hover {
      transform: rotateX(4deg) rotateY(30deg) rotateZ(-2deg) translateX(0rem)
        translateY(1.5rem);
    }
  }
`;

// let data=[0,1,2,3,4,5,6,7,8]

function Works() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  // const defaultOptions = {
  //   reverse:        false,  // reverse the tilt direction
  //   max:            90,     // max tilt rotation (degrees)
  //   perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
  //   scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
  //   speed:          1000,   // Speed of the enter/exit transition
  //   transition:     true,   // Set a transition on enter/exit.
  //   axis:           null,   // What axis should be disabled. Can be X or Y.
  //   reset:          true,    // If the tilt effect has to be reset on exit.
  //   easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  // }

  return (
    <>
      <div className='min-h-screen w-screen bg-[#303030]'>

      
        <h1 className='flex justify-center items-center mt-16 pt-10 font-me text-5xl max-sm:text-2xl text-[#FBAC20]'>
          <h1 className='text-6xl max-sm:text-2xl text-[#C07ABE]'>{"< "}</h1>
          works
          <h1 className="text-8xl max-sm:text-4xl text-[#E8251C]">/</h1>
          <h1 className="text-6xl max-sm:text-3xl text-[#C07ABE]">{" >"}</h1>
        </h1>

        <p className="text-center mt-6 text-lg text-deepg text-[#FFFDD0] font-me">
          Here you will find various personal and client projects,
          <br />
          each with its own detailed case study.
        </p>

        <div className="flex flex-col justify-center items-center bg-[#303030] pb-24  lg:pl-20 pl-5 pr-5">
          {data.map((project, index) => {
            if ((index % 2 == 1) & (window.innerWidth >= 1000)) {
              return (
                <div className="flex flex-row justify-around items-center  mt-20 w-full sm:mx-10  max-lg:flex-wrap">
                  {/* <Link><Tilt className="Tilt w-20 h-20 bg-[#774069] rounded-[20%] flex justify-center items-center text-[#FFFDD0] text-xl font-me hover:sw ml-0 shadow-c-purple" options={defaultOptions} style={{ height: 250, width: 250 }}>
              <div className='text-9xl'>🙂</div>
              </Tilt></Link> */}

                  {/* text div */}
                  <div className=" text-[#FFFDD0] flex flex-col justify-center items-center mr-0">
                    <h2 className="m-4 text-5xl text-[#C07ABE] drop-shadow-c2-purple rounded-lg p-2 flex justify-center items-center font-me">
                      {project.title}
                    </h2>

                    <p className="text-lg max-w-[32rem]  font-w max-sm:max-w-[95vw]">
                      {project.description}
                    </p>

                    <div className="border-2 border-[#C07ABE] rounded-lg flex flex-row  m-8 max-sm:m-1 shadow-inner shadow-[#C07ABE] sm:min-w-96 max-w-[31.5rem] max-sm:max-w-[95vw]">
                      <div className="flex justify-center items-center self-center h-full w-24 text-[1.38rem] text-[#C07ABE] font-me">
                        Tools
                      </div>

                      <div className="flex  items-center border-l-2 border-[#C07ABE] w-full flex-wrap font-w">
                        {project.tools.map((tool, i) => {
                          return (
                            <span className=" flex justify-center items-center px-2 rounded-lg shadow-c2-purple h-7  text-[#C07ABE] m-3">
                              <p className="text-[70%]">{"</>"}</p>
                              {tool}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <Link to={project.link} target="_blank">
                      {/* <div className='border-2 border-[#FFFDD0] rounded-lg flex justify-center items-center m-8 h-12 w-44'>Take a look &nbsp;{'→'}</div> */}
                      <div class="relative inline-flex  group">
                        <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                        <div
                          class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#C07ABE] transition-all duration-200 bg-[#1C1B19] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1C1B19] font-me"
                          role="button">
                          Take a look &nbsp;{"→"}
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* picture div */}
                  <div className="flex justify-center items-center">
                    <ImgContainer className="flex justify-center items-center">
                      <ImgRight
                        src={project.pic}
                        className="w-[33.5rem] lg:hover:w-[40rem] duration-[800ms] lg:shadow-c-img-card-purple lg:hover:shadow-c-img-card-purple-hover-right-pic max-lg:shadow-c-img-card rounded-lg transition-all"
                        alt="project pic"
                      />
                    </ImgContainer>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="flex flex-row justify-around items-center mt-20 w-full mx-10 max-lg:flex-wrap">
                  {/* <Link><Tilt className="Tilt w-20 h-20 bg-[#774069] rounded-[20%] flex justify-center items-center text-[#FFFDD0] text-xl font-me hover:sw ml-0 shadow-c-purple" options={defaultOptions} style={{ height: 250, width: 250 }}>
                  <div className='text-9xl'>🙂</div>
                  </Tilt></Link> */}

                  {/* picture div */}
                  <div className="flex justify-center items-center">
                    <ImgContainer className="flex justify-center items-center">
                      <ImgLeft
                        src={project.pic}
                        className="w-[33.5rem] lg:hover:w-[40rem] duration-[800ms] lg:shadow-c-img-card-purple lg:hover:shadow-c-img-card-purple-hover-left-pic max-lg:shadow-c-img-card rounded-lg transition-all"
                        alt="project pic"
                      />
                    </ImgContainer>
                  </div>

                  {/* text div */}
                  <div className=" text-[#FFFDD0] flex flex-col justify-center items-center  mr-0">
                    <h2 className="m-4 text-5xl text-[#C07ABE] drop-shadow-c2-purple rounded-lg p-2 flex justify-center items-center font-me">
                      {project.title}
                    </h2>

                    <p className="text-lg max-w-[32rem] font-w max-sm:max-w-[95vw]">
                      {project.description}
                    </p>

                    <div className="border-2 border-[#C07ABE] rounded-lg flex flex-row  m-8 max-sm:m-1 shadow-inner shadow-[#C07ABE] sm:min-w-96 max-w-[31.5rem] max-sm:max-w-[95vw]">
                      <div className="flex justify-center items-center self-center h-full w-24 text-[1.38rem] text-[#C07ABE] font-me">
                        Tools
                      </div>

                      <div className="flex  items-center border-l-2 border-[#C07ABE] w-full flex-wrap font-me">
                        {project.tools.map((tool, i) => {
                          return (
                            <span className=" flex justify-center items-center px-2 rounded-lg shadow-c2-purple h-7  text-[#C07ABE] m-3">
                              <p className="text-[70%]">{"</>"}</p>
                              {tool}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <Link to={project.link} target="_blank">
                      {/* <div className='border-2 border-[#FFFDD0] rounded-lg flex justify-center items-center m-8 h-12 w-44'>Take a look &nbsp;{'→'}</div> */}
                      <div class="relative inline-flex  group">
                        <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                        <div
                          class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#C07ABE] transition-all duration-200 bg-[#1C1B19] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1C1B19] font-me"
                          role="button">
                          Take a look &nbsp;{"→"}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Works;
