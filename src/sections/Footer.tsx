import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer id="contact" className="pt-22 pb-22 bg-gray-950 " >
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 md:gap-30" >
        <div className="justify-center items-center flex flex-col p-7" >
          <div className="text-white font-bold text-3xl  ">
            <img src="./wft_full.svg" alt="" className="invert w-60"/>
          </div>
          {/* <p className="mt-5 font-semibold text-gray-300 text-sm" >
            Smarter mobility starts here. We help businesses move their teams reliably—on time, every time, with zero hassle.
          </p> */}
          <div className="flex item-center text-white space-x-4 mt-6" >
            <div className="w-8 h-8 bg-yellow-700 flex items-center justify-center flex-col rounded-[50%]">
              <FaFacebookF />
            </div>
            <div className="w-8 h-8 bg-yellow-700 flex items-center justify-center flex-col rounded-[50%]">
              <FaTwitter />
            </div>
            <div className="w-8 h-8 bg-yellow-700 flex items-center justify-center flex-col rounded-[50%]">
              <FaInstagram />
            </div>
            <div className="w-8 h-8 bg-yellow-700 flex items-center justify-center flex-col rounded-[50%]">
              <FaYoutube />
            </div>
          </div>
        </div>

        <div className="space-y-5 p-7" >
          <h1 className="text-lg text-white font-bold" >Links </h1>
          <p className="text-gray-300 hover-text-gray-450 font-medium cursor-pointer text-sm"><a href="#">Home</a></p>
          <p className="text-gray-300 hover-text-gray-450 font-medium cursor-pointer text-sm"><a href="#about">About</a></p>
          <p className="text-gray-300 hover-text-gray-450 font-medium cursor-pointer text-sm"><a href="#features">Features</a></p>
          <p className="text-gray-300 hover-text-gray-450 font-medium cursor-pointer text-sm"><a href="#services">Services</a></p>
          <p className="text-gray-300 hover-text-gray-450 font-medium cursor-pointer text-sm"><a href="#testimonials">Testimonials</a></p>
          <p className="text-gray-300 hover-text-gray-450 font-medium cursor-pointer text-sm"><a href="#contact">Contact Us</a></p>
        </div>

        <div className="p-7" >
          <h1 className="text-lg text-white font-bold" >Get In Touch </h1>
          <div className="mt-6" >
            <h1 className="text-sm text-white" >Contact</h1>
            <h1 className="text-base font-bold text-white mt-1 " >+91 9845092228</h1>
            <h1 className="text-sm text-white" >Address</h1>
            <h1 className="text-base font-bold text-white mt-1 " >WF Transfers Mobility Private Limited, 92/93, Ground floor, White House Building, Chelkere, Kalyan Nagar, Bangalore - 560043, India</h1>
          </div>
        </div>

      </div>
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left " >Copyright &copy; 2025. All rights reserved</p>
      </div>
    </footer>
  );
};
