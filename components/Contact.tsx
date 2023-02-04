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
    <div className="flex justify-center">
      <style jsx>{`
        .circle {
          border-color: #1b2533;
        }
      `}</style>
      <div className="relative flex items-center justify-center content-center">
        <motion.div
          className="border-4 border-dashed rounded-full h-64 w-64 "
          initial={{ x: 0 }}
          transition={{ repeat: Infinity, ease: "linear" }}
          animate={{ rotate: [null, 360] }}
        />
        <div className="border-white absolute border-4 rounded-full h-60 w-60" />
        <motion.div
          className="circle absolute border-2 rounded-full h-56 w-56 border-dashed text-center flex items-center justify-center text-white text-xl tracking-[20px]"
          animate={{ rotateY: [null, 360], rotate: [null, 360] }}
          transition={{ duration: 30, repeat: Infinity }}
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
    // <div className="mb-4 relative flex flex-col h-screen text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center">
    // <div className="  p-8 flex  items-center h-screen">
    //   <div className="" />
    //   <div className="sm:flex pt-56 lg:p-0 lg:pr-40">
    //     <Logo />
    //   </div>
    <>
      <div className="flex flex-col h-screen mb-20 md:py-[50px] w-full text-center ">
        <div className="">
          <h3 className="mt-20 mb-20 uppercase tracking-[20px] text-2xl text-gray-200/90 lg:mt-12 lg:pb-32">
            contact me
          </h3>
        </div>
        <div className="pb-20 lg:flex lg:flex-row-reverse place-content-evenly">
          <ContactForm />
          <Logo />
        </div>
      </div>
    </>
  );
}
