import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        y: -20,
        scale: [1, 2, 1.2],
        // opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 0.1],
        opacity: 1,
        // borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        // borderRadius: ["20%", "90%"],
      }}
      transition={{ duration: 7, type: "spring" }}
      className="relative flex justify-center items-center"
    >
      <motion.div
        animate={{ opacity: 0.03 }}
        transition={{ duration: 5 }}
        className=" absolute border border-[#dfcdcd] h-[200px] w-[200px]
        rounded-full mt-52 animate-ping"
      />
      <motion.div
        animate={{ opacity: 0.03 }}
        transition={{ duration: 10 }}
        className="absolute border border-gray-400 h-[300px] w-[300px]
        rounded-full mt-52"
      />
      <motion.div
        animate={{ opacity: 0 }}
        transition={{ duration: 10 }}
        className="absolute border border-gray-400 h-[500px] w-[500px]
        rounded-full mt-52"
      />
      <div
        className="absolute border-8 border-blue-500 h-[650px] w-[650px]
        rounded-full mt-52 animate-pulse opacity-20"
      />
      <div
        className="absolute border border-gray-400 h-[850px] w-[850px]
        rounded-full mt-52 "
      />
    </motion.div>
  );
}
