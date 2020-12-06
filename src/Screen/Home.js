import React from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import CVphoto from "../res/biggercvwh.png";

export default function Home() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex flex-col px-5 py-8 justify-center items-center">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded border-b-8 border-purple-700 rounded-full shadow-xl"
          alt="hero"
          src={CVphoto}
        />

        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center flex-wrap">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block">Hello, World!</span>
            <span class="block text-indigo-600">
              I'm Gonçalo, Welcome to my page
            </span>
          </h2>

          <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
            Download my CV here
          </p>
          <div className="flex justify-center flex-wrap">
            <button className="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center m-2 hover:bg-gray-300 focus:outline-none">
              <AiOutlineLinkedin size={30} />
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="title-font font-medium">Linkedin</span>
              </span>
            </button>
            <button className="bg-gray-200 start-200 inline-flex py-3 px-5 rounded-lg items-center m-2 hover:bg-gray-300 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 512 512"
              >
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="title-font font-medium">Google Play</span>
              </span>
            </button>
            <button className="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center m-2 hover:bg-gray-300 focus:outline-none">
              <AiFillGithub size={30} />
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="title-font font-medium">Github</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
