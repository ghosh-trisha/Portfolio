

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { MdWifiCalling3 } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


import { Link } from "react-router-dom";


function Social() {
  return (
    <div className="z-50 fixed md:left-0 md:top-[38%] bottom-0 md:w-16  md:h-[37%] rounded-r-lg text-[#FFFDD0] flex md:flex-col max-md:flex-row max-md:px-20 max-md:py-1 max-md:w-full items-center md:justify-around max-md:justify-around max-md:border-t-4 border-[#774069] bg-[#774069] text-xl">
      {/* <Link to={""}>
        <MdWifiCalling3 className="scale-150 my-3 " />
      </Link> */}

      {/* <Link to={""}>
        <IoLogoWhatsapp className="scale-150 my-3 " />
      </Link> */}

      <Link to={""}>
        <SiGmail className="scale-150 my-3 " />
      </Link>

      <Link to={""}>
        <BsLinkedin className="scale-150 my-3 " />
      </Link>

      <Link to={""}>
        <BsGithub className="scale-150 my-3 " />
      </Link>

      {/* <Link to={""}>
        <FaTelegramPlane className="scale-150 my-3" />
      </Link> */}

      {/* <Link to={""}>
        <FaFacebook className="scale-150 my-3" />
      </Link> */}

      <Link to={""}>
        <FaTwitter className="scale-150 my-3" />
      </Link>

      {/* <Link to={""}>
        <FaInstagramSquare className="scale-150 my-3" />
      </Link> */}
    </div>
  );
}

export default Social