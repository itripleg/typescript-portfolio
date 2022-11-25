import { motion } from "framer-motion";
import Link from "next/link";
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
        alt="Joshua Bell"
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 2.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        className="flex-shrink-0 object-cover mt-20 -mb-20 md:mb-0 w-52 h-52 rounded-full md:rounded-md
        md:w-64 md:h-64 lg:h-[400px] lg:w-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="inline-flex m-6 -mb-6 text-4xl font-semi-bold pt-12 lg:m-0 gap-2">
          <motion.div
            initial={{ opacity: 0.3 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1 }}
          >
            <p className="text-[#357db1]">Work hard</p>
          </motion.div>
          <p>Play hard</p>
        </h4>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className=" lg:block text-center mt-6 mb-10 lg:mb-0">
            Full Stack developer. Crypto and Blockchain enthusiast. I love
            working with bleeding-edge technology and helping decentralize the
            web. Based in Asheville, North Carolina. I built this page with
            💖using
            <Link href="http://nextjs.org" className="underline">
              Next.js
            </Link>
            and
            <Link href="http://tailwindcss.com" className="underline">
              Tailwind CSS
            </Link>
            . Hosted on
            <Link href="https://www.netlify.com/" className="underline">
              Netlify
            </Link>
            via handwritten code in my
            <Link
              href="https://github.com/itripleg/next-portfolio-code"
              className="underline"
            >
              Github. Also infused with
              <Link href="https://sanity.io/">Sanity.io!</Link>
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
