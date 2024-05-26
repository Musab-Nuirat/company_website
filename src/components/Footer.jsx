import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#010851] mx:px-14 p-4 max-w-screen-2xl mx-auto text-white rounded-xl">
      <div className=" my-12 flex flex-col md:flex-row gap-10">
        <div className="ml-3 md:w-1/2 space-y-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3 text-primary"
          >
            {/* <img src={logo} alt="" className="w-10 inline-block items-center" /> */}
            <span className="text-white">XYZ</span>
          </a>
          <p className="md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat
            blanditiis, quisquam adipisci voluptatibus velit.
          </p>

          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="bg-[#9a7ad159] py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              value="subscribe"
              className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all"
            />
          </div>
        </div>
        {/* Footer Navigations */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-400 text-gray-200">
                OverView
              </a>
              <a href="/" className="block hover:text-gray-400 text-gray-200">
                Features
              </a>
              <a href="/" className="block hover:text-gray-400 text-gray-200">
                About
              </a>
              <a href="/" className="block hover:text-gray-400 text-gray-200">
                Pricing
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Help</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-400 text-gray-200">
                How does it works?
              </a>
              <a href="/" className="block hover:text-gray-400 text-gray-200">
                Where to ask question?
              </a>
              <a href="/" className="block hover:text-gray-400 text-gray-200">
                How to play?
              </a>
              <a href="/" className="block hover:text-gray-400 text-gray-200">
                What is needed for this?
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Contacts</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-400 text-gray-200">
                (970) 599-111-111
              </a>
              <a href="/" className="block hover:text-gray-400 text-gray-200">
                (04) 2222-111
              </a>
              <a href="/" className="block hover:text-gray-400 text-gray-200">
                Al-Nasrah Street, Jenin, Palestine
              </a>
              <a href="/" className="block hover:text-gray-400 text-gray-200">
                095467
              </a>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p>@ XYZ 20XX --- 20XX. All rights reserved.</p>
        <div className="flex items-center space-x-5">
          <FaFacebook className="text-3xl w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300" />
          <FaInstagram className="text-3xl w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300" />
          <FaTwitterSquare className="text-3xl w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300" />
          <FaLinkedin className="text-3xl w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
