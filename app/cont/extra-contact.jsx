import Image from "next/image";
import React from "react";
import messageBox from "@/public/message-box.png";

export default function ExtraContact() {
  return (
    <section>
      <div className="bg-white z-50  py-48 px-10 text-lg flex flex-col gap-10 md:flex-row justify-center ">
        <div className="flex justify-center md:block ">
          <Image
            src={messageBox}
            alt="message-box"
            className="w-24  md:w-60  lg:w-60 md:mt-14 md:mr-6"
          />
        </div>
        <div className="flex flex-col gap-16">
          <div>
            <h2 className="text-4xl font-bold"> Lets Talk!</h2>
            <h2 className="text-3xl">We will contact You!</h2>
          </div>
          <div className=" text-black text-lg">
            <div className="form flex flex-col gap-8">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div>
                  <label className=" text-gray-700 text-sm">Name:</label>
                  <input
                    className="outline-none text-black text-lg  w-full border-b-2 border-black"
                    type="text"
                    aria-label="Full name"
                  />
                </div>
                <div>
                  <label className=" text-gray-700 text-sm">Email:</label>
                  <input
                    className="outline-none text-black text-lg  w-full border-b-2 border-black"
                    type="text"
                    aria-label="Full name"
                  />
                </div>
              </div>
              <div className="mb-10">
                <label className=" text-gray-700 text-sm">
                  Project Description
                </label>
                <input
                  className="outline-none text-black text-lg  w-full border-b-2 border-black"
                  type="text"
                  aria-label="Full name"
                />
              </div>
            </div>

            <button className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-xl hover:bg-gray-800 focus:shadow-outline focus:outline-none hover:scale-95 active:scale-95 ">
              <span className="px-4">Submit</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
export fu nction ExtraContact() {
  return (
  <div>
    <div className="flex flex-col md:flex-row  lg:flex-row justify-evenly items-center gap-6 m-10 py-5 flex-wrap ">
      <div className="">
        <Image
          src={messageBox}
          alt="message-box"
          className="w-24  md:w-60  lg:w-60"
        />
      </div>
      <div className=" flex flex-col">
        <div>
          <h2 className="text-4xl font-extrabold text-center md:text-left">
            Let's talk!
          </h2>
          <h3 className="text-3xl font-light mt-2 text-center md:text-left">
            We will contact you!
          </h3>
        </div>
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
         </div
         <div className="flex justify-center items-center sm:justify-end  p-2">
           <a href="#">
             <button className="bg-black text-white px-8 py-2 rounded-md text-center">
               Submit
             </button>
           </a>
         </div>
       </div>
     </div>
  </div>

   );
} */
