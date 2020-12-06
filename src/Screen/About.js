import React from "react";
import Education from "../Components/Education";
import Languages from "../Components/Languages";
import Skills from "../Components/Skills";
import "./Anims.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function About() {
  return (
    <div className="scale-in-hor-right">
      <div className="container  container  text-indigo-600  mx-auto flex sticky top-0 bg-white z-50">
        {" "}
        <Link to="/" className=" text-indigo-600  p-3 rounded-full items-center mx-1 hover:bg-gray-300 focus:outline-none">
          <AiOutlineArrowLeft size={30} />
        </Link>
      </div>
      <Education />
      <Languages />
      <Skills />
    </div>
  );
}
