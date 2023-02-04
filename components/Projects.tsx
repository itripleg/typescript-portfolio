import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  return (
    <div
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-200/90 text-2xl">
        <span className="md:inline-flex px-8">My</span>
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-white"
      >
        {projects.map((project) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              src={urlFor(project.image).url()}
              alt=""
              className="max-w-[50vh] h-40"
              initial={{ opacity: 0, y: -200 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
            />
            <div>
              <h1 className="text-4xl py-4">{project.name}</h1>
              <h4 className="text-white/50">{project.summary}</h4>
            </div>
          </div>
        ))}
      </div>
      <motion.div
        // initial={{ opacity: 0 }}
        // transition={{ duration: 10 }}
        // whileInView={{ opacity: 1, rotate: 80 }}
        // viewport={{ once: false }}
        className="w-full absolute top-[30%] bg-blue-600/30 left-0 h-[500px] -skew-y-12"
      />
    </div>
  );
}
