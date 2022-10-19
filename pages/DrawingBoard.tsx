import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function DrawingBoard({}: Props) {
  return (
    <div className="bg-[#1B2533] flex min-h-screen justify-center">
      <style jsx>{`
        .circ {
          border-color: black;
        }
      `}</style>
      <div className="relative flex items-center justify-center content-center">
        <motion.div
          initial={{ x: 0 }}
          transition={{ repeat: Infinity, ease: "linear" }}
          animate={{ rotate: [null, 360] }}
          className="circ absolute border-4 border-dashed rounded-full h-64 w-64 "
        />
        <div className="circ absolute border-4 rounded-full h-60 w-60" />
        <motion.div
          animate={{ rotateY: [null, 360], rotate: [null, 360] }}
          transition={{ duration: 30, repeat: Infinity }}
          className="circ absolute border-2 rounded-full h-56 w-56 border-dashed text-center flex items-center justify-center text-white text-xl tracking-[20px]"
        >
          <Link href="/">JOSH BELL</Link>
        </motion.div>
        <div />
      </div>
    </div>
  );
}
