import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";

type Props = { socials: Social[] };

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 flex justify-between max-w-7xl mx-auto z-20 p-5">
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        {socials.map((social) => (
          <motion.div
            key={social._id}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
          >
            <SocialIcon url={social.url} fgColor="gray" bgColor="transparent" />
          </motion.div>
        ))}
      </motion.div>

      {/* Email icon */}
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        whileTap={{ scale: 0.9 }}
        className="flex justify-center items-center"
      >
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2, rotation: 100 },
            rotateZ: 360,
          }}
          className="flex"
        >
          <SocialIcon
            network="email"
            fgColor="gray"
            bgColor="transparent"
            className="cursor-pointer"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </motion.div>
        <p className="hidden uppercase md:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}
