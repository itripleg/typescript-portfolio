import { useState } from "react";

export default function ContactForm() {
  function encode(data: string) {
    return Object.keys(data)
      .map(
        (key: any) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const [toggle, setToggle] = useState(null);

  return (
    <>
      <style jsx>
        {`
      .info{
        display: none
      `}
      </style>
      {/*A little help for the Netlify post-processing bots */}
      <form
        name="contactForm"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <section id="contact" className=" pb-4 ">
        <div>
          {/*contact form*/}
          <form
            name="contactForm"
            className="flex flex-col gap-y-6 px-4 pr-8 items-center mx-auto max-w-xl"
            method="POST"
            data-netlify="true"
          >
            {/*For netlify forms*/}
            <input
              type="hidden"
              name="form-name"
              value="contactForm"
              aria-hidden="true"
            />
            <p className=" tracking-wide italic text-center text-xl">
              Feel free to shoot me an email or call!
            </p>
            {/* <h3 className="uppercase tracking-[20px] text-2xl text-gray-200/90">
              contact me
            </h3> */}
            <div className="w-full">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="form-field"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="form-field"
              />
            </div>
            <div className="w-full">
              <textarea
                id="message"
                name="message"
                placeholder="Holler at me!"
                className="form-field"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-600/50 p-4 w-64 focus:outline-none hover:bg-indigo-500 rounded text-lg"
              // onClick={() => {
              //   console.log("click");
              // }}
            >
              Send it!
            </button>
          </form>
        </div>
        <div className="hidden absolute bottom-0 right-1/3 1/2 md:right-1/2 lg:right-100">
          © 2022 Joshua Bell
        </div>
      </section>
    </>
  );
}
