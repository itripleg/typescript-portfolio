import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo };

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `I'm ${pageInfo.name}. Full stack dev!`,
      "Based in Asheville, NC 😎",
      "<Lets build something together/>",
      "Ready for Web3?",
      "yarn create next-app -e with-tailwind-css",
      "pragma solidity >=0.8.0",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const scroll = (section: string) => {
    const element = document.getElementById(section);
    if (element != null) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.div
        className="h-screen flex flex-col space-y-8
        items-center justify-center overflow-hidden text-center relative
        z-40"
      >
        <BackgroundCircles />
        {/* <Image
          src="https://buncombe.tech/me_mask.jpg"
          width="100"
          height="100"
          // layout=""
          className="p-20 rounded-full"
          alt=""
        /> */}
        <img
          src="https://joshb.netlify.app/me_mask.jpg"
          className=" w-32 h-32 rounded-full"
          alt=""
        />
        <div className="">
          <h2 className="text-sm uppercase text-gray-200 pb-2 tracking-[15px]">
            {pageInfo?.role}
          </h2>
          <h1 className="text-5xl lg:text-6xl">
            <span className="text-gray-100 mr-2 font-semibold px-6">
              {text}
            </span>
            <Cursor cursorColor="#2f4aaa" />
          </h1>
        </div>
        <div className="pt-5 z-20">
          <button
            className="heroButton"
            onClick={() => {
              scroll("about");
            }}
          >
            About
          </button>

          <button
            className="heroButton"
            onClick={() => {
              scroll("skills");
            }}
          >
            Skills
          </button>

          <button
            className="heroButton"
            onClick={() => {
              scroll("projects");
            }}
          >
            Projects
          </button>

          <button
            className="heroButton"
            onClick={() => {
              scroll("experience");
            }}
          >
            Experience
          </button>
        </div>
      </motion.div>
    </>
  );
}
