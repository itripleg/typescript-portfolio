import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    //   console.log("type of onSubmit", onSubmit);
    window.location.href = `mailto:joshua.bell.828@gmail.com?subject=${data.subject}&body=${data.message}`;
  };

  return (
    <div
      className="h-screen relative flex flex-col text-left md:flex-row
max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-200/90 text-2xl">
        Contact me
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center pt-20">
          I have just what you need.{" "}
          <span className="text-blue-700/80 underline">Lets Talk.</span>
        </h4>
        <div className="flex items-center space-x-5 justify-center">
          <PhoneIcon className="text-blue-700 h-7 w-7 animate-pulse" />
          <p>8282228787</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-blue-700 h-7 w-7 animate-pulse" />
          <p>joshua.bell.828@gmail.com</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon className="text-blue-700 h-7 w-7 animate-pulse" />
          <p>Asheville, NC</p>
        </div>
        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              type="text"
              className="contactInput"
              placeholder="Name"
              {...register("name")}
            ></input>
            <input
              type="text"
              className="contactInput"
              placeholder="Email"
              {...register("email")}
            ></input>
          </div>
          <input
            type="text"
            className="contactInput"
            placeholder="Subject"
            {...register("subject")}
          ></input>
          <textarea
            className="contactInput"
            placeholder="Message"
            {...register("message")}
          />
          <button className="bg-blue-700/70 h-14 rounded-md">Submit</button>
        </form>
      </div>
    </div>
  );
}
