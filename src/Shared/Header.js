import React from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Header() {
  return (
    <header className="text-gray-700 body-font  bg-white z-50">
      <div className="container mx-auto flex flex-wrap py-1 flex-col md:flex-row items-center">
        <Link to="/">
          <a className="flex title-font font-medium items-center text-black-500 mb-0 md:mb-0">
           

            <span class="ml-8 text-3xl font-extrabold tracking-tight block text-purple-600 ">
              {"< Gonçalo Duarte />"}
            </span>
          </a>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <Link to="/about">
            <a className="mr-5 hover:text-gray-900">About me</a>
          </Link> */}
          {/* <Link to="/contact" className="flex items-center justify-center">
            <a className="mr-5 hover:text-gray-900">Contact me</a>
            <BiMessageSquareDetail color="bg-indigo-600" />
          </Link> */}
          <a
            className=" p-3 rounded-lg items-center mx-1 hover:bg-gray-300 focus:outline-none text-indigo-600 font-medium"
            href="mailto:goncalo.ferreira.duarte@hotmail.com"
          >
            goncalo.ferreira.duarte@hotmail.com
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="text-indigo-600 ml-2 w-6 h-8 inline-block "
              viewBox="0 0 512 512"
            >
              <path
                d="M452,68H60C26.916,68,0,94.916,0,128v256c0,33.084,26.916,60,60,60h392c33.084,0,60-26.916,60-60V128
			C512,94.916,485.084,68,452,68z M472,384c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20V128c0-11.028,8.972-20,20-20h392
			c11.028,0,20,8.972,20,20V384z"
              />
              <polygon points="468.604,92.937 256,251.074 43.396,92.937 19.522,125.032 256,300.926 492.478,125.032 		" />
            </svg>
          </a>
          <a
            className=" p-3 rounded-lg items-center mx-1 hover:bg-gray-300 focus:outline-none"
            href="https://www.linkedin.com/in/gon%C3%A7alo-duarte-9ba99717b/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="text-purple-500 w-6 h-6 inline-block"
              viewBox="0 0 512 512"
            >
              <path d="m160.007812 423h-70v-226h70zm6.984376-298.003906c0-22.628906-18.359376-40.996094-40.976563-40.996094-22.703125 0-41.015625 18.367188-41.015625 40.996094 0 22.636718 18.3125 41.003906 41.015625 41.003906 22.617187 0 40.976563-18.367188 40.976563-41.003906zm255.007812 173.667968c0-60.667968-12.816406-105.664062-83.6875-105.664062-34.054688 0-56.914062 17.03125-66.246094 34.742188h-.066406v-30.742188h-68v226h68v-112.210938c0-29.386718 7.480469-57.855468 43.90625-57.855468 35.929688 0 37.09375 33.605468 37.09375 59.722656v110.34375h69zm90 153.335938v-392c0-33.085938-26.914062-60-60-60h-392c-33.085938 0-60 26.914062-60 60v392c0 33.085938 26.914062 60 60 60h392c33.085938 0 60-26.914062 60-60zm-60-412c11.027344 0 20 8.972656 20 20v392c0 11.027344-8.972656 20-20 20h-392c-11.027344 0-20-8.972656-20-20v-392c0-11.027344 8.972656-20 20-20zm0 0" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
    // <div className="sticky top-0 bg-white z-50">
    //   <nav className="sticky top-0  bg-white">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  bg-white">
    //       <div className="flex items-center justify-between h-16">
    //         <div className="flex items-center  w-full">
    //           <div className="flex-shrink-0">
    //             <span class="text-3xl font-extrabold tracking-tight block text-indigo-600">
    //               Gonçalo Duarte
    //             </span>
    //           </div>
    //           <div className="md:block ml-auto">
    //             <div className="ml-10 flex items-baseline space-x-4">
    //               <Link to="/about">
    //                 <a
    //                   href="#"
    //                   className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
    //                 >
    //                   About me
    //                 </a>
    //               </Link>

    //               <a
    //                 href="#"
    //                 className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    //               >
    //                 Contact
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
}
