import { motion } from "framer-motion";
import { useState } from "react";

import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
type Props = {};

export default function Chatbot({}: Props) {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
    console.log(visible);
  };

  return (
    <motion.div
      className="absolute bottom-0 right-0 z-30 m-8 hover:cursor-pointer hidden sm:block"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ delay: 10, duration: 3 }}
    >
      {visible ? (
        // display chatbot
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          onClick={() => handleClick()}
          className="bg-white/20 w-40 text-center p-2 rounded-md"
        >
          <p>
            New and improved chatbot is under maintenance. Coming soon! Click to
            close.
          </p>
        </motion.div>
      ) : (
        // hide chat bot
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
          onClick={() => handleClick()}
        >
          <ChatBubbleLeftRightIcon className="h-8" />
        </motion.div>
      )}
    </motion.div>
  );
}
