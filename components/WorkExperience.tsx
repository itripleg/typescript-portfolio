import { Experience } from "../typings";
import Card from "./Card";

type Props = { experiences: Experience[] };

export default function WorkExperience({ experiences }: Props) {
  console.log("experiences:", experiences);
  return (
    <div
      className="flex flex-col relative h-screen
      text-center md:text-left md:flex-row max-w-7xl sm:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-200/90 text-2xl">
        Experience
      </h3>
      <div className="w-full flex flex-shrink-0 space-x-5 overflow-y-hidden p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-white">
        {experiences?.map((experience) => (
          <Card
            key={experience._id}
            experience={experience}
            experiences={experiences}
          />
        ))}
      </div>
    </div>
  );
}
