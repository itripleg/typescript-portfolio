import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = { skills: SkillType[] };

export default function Skills({ skills }: Props) {
  console.log(skills);
  return (
    <motion.div
      className="flex flex-col relative h-screen
      text-center md:flex-row max-w-7xl px-10 justify-center mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-200/90 text-2xl">
        Toolkit
      </h3>
      <h3 className="absolute top-32 mt-4 px-4 xl:mt-20 xl:px-20 uppercase tracking-[2px] xl:tracking-[4px] text-white/70">
        My tech stack is pretty wide. Here are the tools I'm currently using the
        most.
      </h3>
      <div
        className="grid grid-cols-4 place-items-center gap-4 place-items-between pt-40
      "
      >
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}
