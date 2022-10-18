import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <div
      className="flex flex-col relative h-screen
    text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[20px] text-gray-200/90 text-2xl z-20">
        About
      </h3>
      <motion.img
        src={urlFor(pageInfo?.heroImage)?.url()}
        alt=""
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 2.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-md
        md:w-64 md:h-64 lg:h-[400px] lg:w-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        {/* <h4 className="text-4xl font-semi-bold pt-12">
          <span className=" decoration-[#a73333]">All about me</span>
        </h4> */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className=" lg:block text-center mt-6 mb-10 lg:mb-0">
            Full Stack developer. Crypto and Blockchain enthusiast. I love
            working with bleeding-edge technology and helping decentralize the
            web. Based in Asheville, North Carolina. I built this page with
            💖using{" "}
            <a href="http://nextjs.org" className="underline">
              Next.js
            </a>{" "}
            and{" "}
            <a href="http://tailwindcss.com" className="underline">
              {" "}
              Tailwind CSS
            </a>
            . Hosted on{" "}
            <a href="https://www.netlify.com/" className="underline">
              Netlify
            </a>{" "}
            via handwritten code in my{" "}
            <a
              href="https://github.com/itripleg/next-portfolio-code"
              className="underline"
            >
              Github.
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
