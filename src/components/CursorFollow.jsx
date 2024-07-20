

import React, { useEffect, useState, useRef } from 'react';

const CursorFollow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  setInterval(() => {
    // console.log(hovering)
  }, 4000);
  useEffect(() => {
 
    
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    
    const links = document.querySelectorAll('a, Link');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    // Select all elements that are not links
    // const elements = document.querySelectorAll('body *:not(a):not(Link)');
    // elements.forEach(ele => {
    //   ele.addEventListener('mouseenter', handleMouseLeave);
    // });
  
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    //   elements.forEach(ele => {
    //     ele.removeEventListener('mouseenter', handleMouseLeave);
    //   });
    };
  }, []);

  const cursorRef = useRef();
  useEffect(() => {
    const handleMouseLeave = () => {
      cursorRef.current.classList.add("hidden");
    };
    const handleMouseEnter = () => {
      cursorRef.current.classList.remove("hidden");
    };

    window.document.addEventListener("mouseleave", handleMouseLeave);
    window.document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.document.removeEventListener("mouseleave", handleMouseLeave);
      window.document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);


  return (
    <>
      <div
        className={`max-md:hidden pointer-events-none fixed transform -translate-x-1/2 -translate-y-1/2 z-[100] transition-all duration-0 ${hovering ? 'w-24 h-24' : 'w-8 h-8'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        ref={cursorRef}
      >
        <div className="relative flex items-center justify-center w-full h-full">
          <div className={`absolute w-full h-full rounded-full border ${hovering ? 'border-2' : 'border'} border-[#C07ABE]`}></div>
          <div className={`w-2 h-2 rounded-full bg-[#C07ABE]`}></div>
          {/* <div className={`w-2 h-2 rounded-full bg-[#C07ABE]`}></div> */}
          {/* <div className={`w-2 h-2 rounded-full bg-[#00FFAB]`}></div> */}
        </div>
      </div>
    </>
  );
};

export default CursorFollow;


// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const CursorFollow = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [hovering, setHovering] = useState(false);
//   const location = useLocation(); // Get current location from React Router

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       setPosition({ x: event.clientX, y: event.clientY });
//     };

//     const handleMouseEnter = () => setHovering(true);
//     const handleMouseLeave = () => setHovering(false);

//     window.addEventListener('mousemove', handleMouseMove);

//     const links = document.querySelectorAll('a, .cursor-link'); // Update selector for links
//     links.forEach(link => {
//       link.addEventListener('mouseenter', handleMouseEnter);
//       link.addEventListener('mouseleave', handleMouseLeave);
//     });

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       links.forEach(link => {
//         link.removeEventListener('mouseenter', handleMouseEnter);
//         link.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []); // Only run once on component mount

//   // Reset state when location changes (route changes)
//   useEffect(() => {
//     setHovering(false); // Reset hovering state
//   }, [location.pathname]); // Reset when pathname changes

//   return (
//     <div>
//       <div
//         className={`pointer-events-none fixed transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-0 ${hovering ? 'w-24 h-24' : 'w-8 h-8'}`}
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//         }}
//       >
//         <div className="relative flex items-center justify-center w-full h-full">
//           <div className={`absolute w-full h-full rounded-full border ${hovering ? 'border-2' : 'border'} border-lime-400`}></div>
//           <div className={`w-2 h-2 rounded-full bg-lime-400`}></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CursorFollow;
