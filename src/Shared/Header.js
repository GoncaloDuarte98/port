import React from "react";
import { BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="text-gray-700 body-font sticky top-0 bg-white z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/">
          <a className="flex title-font font-medium items-center text-black-500 mb-4 md:mb-0">
            <svg
              fill="currentColor"
              stroke="bg-indigo-600"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              className="w-10 h-10 mr-4"
              viewBox="0 0 512 512"
            >
              <path
                d="M325.762,70.513l-17.706-4.854c-2.279-0.76-4.524-0.521-6.707,0.715c-2.19,1.237-3.669,3.094-4.429,5.568L190.426,440.53
			c-0.76,2.475-0.522,4.809,0.715,6.995c1.237,2.19,3.09,3.665,5.568,4.425l17.701,4.856c2.284,0.766,4.521,0.526,6.71-0.712
			c2.19-1.243,3.666-3.094,4.425-5.564L332.042,81.936c0.759-2.474,0.523-4.808-0.716-6.999
			C330.088,72.747,328.237,71.272,325.762,70.513z"
              />
              <path
                d="M166.167,142.465c0-2.474-0.953-4.665-2.856-6.567l-14.277-14.276c-1.903-1.903-4.093-2.857-6.567-2.857
			s-4.665,0.955-6.567,2.857L2.856,254.666C0.95,256.569,0,258.759,0,261.233c0,2.474,0.953,4.664,2.856,6.566l133.043,133.044
			c1.902,1.906,4.089,2.854,6.567,2.854s4.665-0.951,6.567-2.854l14.277-14.268c1.903-1.902,2.856-4.093,2.856-6.57
			c0-2.471-0.953-4.661-2.856-6.563L51.107,261.233l112.204-112.201C165.217,147.13,166.167,144.939,166.167,142.465z"
              />
              <path
                d="M519.614,254.663L386.567,121.619c-1.902-1.902-4.093-2.857-6.563-2.857c-2.478,0-4.661,0.955-6.57,2.857l-14.271,14.275
			c-1.902,1.903-2.851,4.09-2.851,6.567s0.948,4.665,2.851,6.567l112.206,112.204L359.163,373.442
			c-1.902,1.902-2.851,4.093-2.851,6.563c0,2.478,0.948,4.668,2.851,6.57l14.271,14.268c1.909,1.906,4.093,2.854,6.57,2.854
			c2.471,0,4.661-0.951,6.563-2.854L519.614,267.8c1.903-1.902,2.854-4.096,2.854-6.57
			C522.468,258.755,521.517,256.565,519.614,254.663z"
              />
            </svg>

            <span class="text-3xl font-extrabold tracking-tight block text-indigo-600">
              Gonçalo Duarte
            </span>
          </a>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="about">
            <a className="mr-5 hover:text-gray-900">About me</a>
          </Link>
          <a className="mr-5 hover:text-gray-900">Contact</a>
        </nav>
        <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
          CV
          <BsDownload classNameName="ml-2" />
        </button>
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
