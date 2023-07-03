import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineChevronDoubleUp, HiOutlineChevronRight } from "react-icons/hi";

const Contact = () => {
  const Contact = "<Contact />";
  const fullStack = "</ FullStack Developer />";
  return (
    <>
      <div id="contact" className="w-full lg:h-screen">
        <div className="max-w-[1200px] m-auto px-2 pt-16 w-full">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            {Contact}
          </p>
          <h2 className="py-4">Get In Touch</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full">
                <div className="">
                  <img
                    src="https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                    alt=""
                    className="rounded-xl hover:scale-110 ease-in duration-300 shadow-xl drop-shadow-2xl"
                  />
                </div>
                <div className="">
                  <h2 className="py-2">Ishan Panchal</h2>
                  <p className="">{fullStack}</p>
                  <p className="py-4">
                    Feel free Contact me , I am here for you.
                  </p>
                </div>
                <div className="">
                    <p className="uppercase pt-8">Connect with me</p>
                    <div className="flex items-center justify-between py-4">
                    <div className="mt-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-90 ease-in duration-150">
                        <FaLinkedinIn className=" text-blue-700" size={25} />
                    </div>
                    <div className="mt-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-90 ease-in duration-150">
                        <FaInstagram className="text-pink-800" size={25} />
                    </div>
                    <div className="mt-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-90 ease-in duration-150">
                        <FaGithub className="" size={25} />
                    </div>
                    <div className="mt-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-90 ease-in duration-150">
                        <FaTwitter className=" text-blue-500" size={25} />
                    </div>
                    </div>
                </div>
              </div>
            </div>
            {/* Left - End */}

            {/* Right */}


            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                <div className="p-4">
                    <form action="" className="">
                        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                            <div className="flex flex-col">
                                <label htmlFor="" className="uppercase text-sm py-2">Name</label>
                                <input type="text" className="border-2 rounded-lg p-3 flex border-gray-300" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="uppercase text-sm py-2">Phone number</label>
                                <input type="text" className="border-2 rounded-lg p-3 flex border-gray-300" />
                            </div>
                        </div>
                        <div className="flex flex-col py-2">
                            <label htmlFor="" className="uppercase text-sm py-2">Email</label>
                            <input type="email" className="border-2 rounded-lg p-3 flex border-gray-300" />
                        </div>
                        <div className="flex flex-col py-2">
                            <label htmlFor="" className="uppercase text-sm py-2">Subject</label>
                            <input type="text" className="border-2 rounded-lg p-3 flex border-gray-300" />
                        </div>
                        <div className="flex flex-col py-2">
                            <label htmlFor="" className="uppercase text-sm py-2">Message</label>
                            <textarea cols="30" rows="6" className="border-2 rounded-lg p-3 flex border-gray-300" ></textarea>
                        </div>
                        <div className="flex flex-col py-2">
                            <button className="p-4">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right - End */}
          </div>
          <div className="flex w-full justify-center py-12">
            <Link href={'/'}>
                <div className="mt-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-90 ease-in duration-150">
                    <HiOutlineChevronDoubleUp size={26} className="text-[#5651e5]" />
                </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
