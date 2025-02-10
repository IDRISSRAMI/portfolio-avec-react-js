import React, { useState } from "react";
import img1 from '../assets/images/f1.jpg';
import img2 from '../assets/images/f2.jpg';
import img3 from '../assets/images/f3.jpg';
import img5 from'../assets/images/F5.jpg';
import img6 from'../assets/images/F6.jpg';

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "project calculatrice",
      description: "application console Node Js",
      img: img1,
    },
    {
      id: 2,
      title: "gestion de stock ",
      description: "application console Node Js express et mongodb ",
      img: img2,
    },
    {
      id: 3,
      title: "Business Startup",
      description: "Design & Development",
      img: img3,
    },
    {
      id: 4,
      title: "gestion de produits a",
      description: "application console Node Js express et mongodb ",
      img: img2,
    },
    {
      id: 5,
      title: "portfolio personal",
      description: "react et  gsap et tailwindcss ",
      img: img5,
    },
    {
      id: 6,
      title: "Business Startup",
      description: "Design & Development",
      img: img6,
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
          cupiditate! Molestiae placeat architecto nihil obcaecati illum minima
          incidunt dolores? Officia consectetur optio non totam cum eos soluta
          ipsa et quod.
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Projects
          </button>
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
        {durum === 2 ? (
          <div
            id="text2"
            className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            atque porro quasi dolorum facere tempore maxime nemo quia nulla
            blanditiis doloribus, dolore, voluptas aspernatur harum facilis
            cumque magni soluta sapiente.
          </div>
        ) : null}
        {durum === 3 ? (
          <div
            id="text1"
            className="tab-pane  text-center text-white py-5   lg:p-5"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nisi.
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
