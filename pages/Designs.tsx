import { motion } from "framer-motion";

function Designs() {
  return (
    <>
      <motion.div className="relative flex gap-2">
        <motion.div
          className="border-4 border-blue-800 w-20 h-20 rounded-full"
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
          onClick={() => alert(1)}
        >
          <p className="flex justify-center mt-5 bottom-1/2">Josh</p>
        </motion.div>
        <motion.div
          className="border-4 border-blue-800 w-20 h-20 rounded-full"
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        >
          <p className="flex justify-center mt-5 bottom-1/2">Josh</p>
        </motion.div>
        <motion.div
          className="border-4 border-red-800 w-20"
          initial={{ borderRadius: "0px" }}
          transition={{ duration: 2 }}
          animate={{ borderRadius: "100px" }}
        ></motion.div>
      </motion.div>
    </>
  );
}

export default Designs;
