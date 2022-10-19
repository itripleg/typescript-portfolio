import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Skill as SkillType } from "../typings";
type Props = { directionLeft?: boolean; skill: SkillType };

export default function Skill({ directionLeft, skill }: Props) {
  return (
    <motion.div
      className="group relative flex cursor-pointer"
      whileHover={{ rotateY: 360 }}
      transition={{ duration: 3 }}
    >
      <motion.img
        initial={{ x: directionLeft ? -80 : 80, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover  max-h-24 bg-black filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      {/* <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out hover:bg-white/75  h-full rounded-full"> */}
      {/* <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div> */}
      {/* </div> */}
    </motion.div>
  );
}
