import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = { experience: Experience; experiences: Experience[] };

export default function Card({ experience, experiences }: Props) {
  // console.log(experience);
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-[7/8hv] mt-28 [400px]
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-white/5 p-10 "
    >
      <motion.img
        src={urlFor(experience?.companyImage).url()}
        initial={{ opacity: 0 }}
        transition={{ duration: 3 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="w-32 h-32 xl:w-[200px] xl:h-[200px] rounded-full
        object-cover object-center"
      />
      <div>
        <h4 className="text-2xl md:text-4xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-xl md:text-2xl mt-l">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-2 justify-center">
          {/* Technologies */}
          {experience.technologies.map((technology) => (
            <img
              alt=""
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyEmployedHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-4 text-lg">
          {experience?.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
