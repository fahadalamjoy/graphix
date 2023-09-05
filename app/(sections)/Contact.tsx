// import React from 'react'
import Image from "next/image";
import messageBox from "@/public/message-box.png";

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row  lg:flex-row justify-evenly items-center gap-6 m-10 py-5 flex-wrap ">
      {/* left */}
      <div className="">
        <Image
          src={messageBox}
          alt="message-box"
          className="w-24  md:w-60  lg:w-60"
        />
      </div>
      {/* right */}
      <div className=" flex flex-col">
        <div>
          <h2 className="text-4xl font-extrabold text-center md:text-left">
            Let's talk!
          </h2>
          <h3 className="text-3xl font-light mt-2 text-center md:text-left">
            We will contact you!
          </h3>
        </div>
        {/* textarea */}
        <div className="grid grid-cols-2 gap-4 my-10">
          <div className="col-span-2 flex flex-col md:flex-row w-full">
            <div className="pt-5 mr-10">
              Name
              <input
                className="border-b-2 border-b-gray-500 w-full text-gray-700 mr-5 py-1 leading-tight focus:outline-none font-semibold"
                type="text"
                aria-label="Full name"
              />
            </div>
            <br />
            <div className="pt-5">
              Email
              <input
                className="border-b-2 border-b-gray-500 w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none font-semibold"
                type="text"
                aria-label="Full name"
              />
            </div>
          </div>
          <div className="col-span-2 pt-5">
            Project Description
            <input
              className="border-b-2 border-b-gray-500 w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none font-semibold"
              type="text"
              aria-label="Full name"
            />
          </div>
        </div>

        <div className="flex justify-center items-center sm:justify-end  p-2">
          <a href="#">
            <button className="bg-black text-white px-8 py-2 rounded-md text-center">
              Submit
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
