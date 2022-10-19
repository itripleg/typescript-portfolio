import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";
// import { SubmitHandler, useForm } from "react-hook-form";
import ContactForm from "./ContactForm";

type Props = {};

// type Inputs = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

function Logo({}: Props) {
  return (
    <div className="bg-[#1B2533] flex justify-center">
      <style jsx>{`
        .circ {
          border-color: #1b2533;
        }
      `}</style>
      <div className=" relative flex items-center justify-center content-center">
        <motion.div
          initial={{ x: 0 }}
          transition={{ repeat: Infinity, ease: "linear" }}
          animate={{ rotate: [null, 360] }}
          className=" circ absolute border-4 border-dashed rounded-full h-64 w-64 "
        />
        <div className="border-white absolute border-4 rounded-full h-60 w-60" />
        <motion.div
          animate={{ rotateY: [null, 360], rotate: [null, 360] }}
          transition={{ duration: 30, repeat: Infinity }}
          className=" absolute border-2 rounded-full h-56 w-56 border-dashed text-center flex items-center justify-center text-white text-xl tracking-[20px]"
        >
          <Link href="/">JOSH BELL</Link>
        </motion.div>
        <div />
      </div>
    </div>
  );
}

export default function Contact({}: Props) {
  // const { register, handleSubmit } = useForm<Inputs>();

  // const onSubmit: SubmitHandler<Inputs> = (data) => {
  //   //   console.log("type of onSubmit", onSubmit);
  //   window.location.href = `mailto:joshua.bell.828@gmail.com?subject=${data.subject}&body=${data.message}`;
  // };

  return (
    <div className="mb-4 relative flex flex-col h-screen text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-200/90 text-2xl ">
        contact me
      </h3>
      <div className="pt-20" />
      <div className="hidden absolute sm:flex top-[30%] left-[38%]">
        <Logo />
      </div>
      <ContactForm />
    </div>
  );
}
