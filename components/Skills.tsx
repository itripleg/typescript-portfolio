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
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-white/70">
        Hover over a skill for current proficiency.
      </h3>
      <div
        className="grid grid-cols-4 place-items-center gap-4 place-items-between pt-28
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
