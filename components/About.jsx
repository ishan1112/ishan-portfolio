import Image from "next/image";
import React from "react";
import about from "../public/assets/projects/aboutimg.jpg";

const About = () => {
  const LatestProject = "Check out some of my Latest Projects";
  const About = "<About />";
  const notNormalDev = " {/* I am not a normal Developer */}"
  return (
    <>
      <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1200px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">{About}</p>
            <h2 className="uppercase py-4">Who I am</h2>
            <p className="py-3 text-gray-700">{notNormalDev}</p>
            <p className="py-3 text-gray-600">
              Ishan Panchal, an aspiring developer, is currently proficient in
              React, Next.js, Node.js, MongoDB, and Express.js.With a natural
              ability to learn quickly, Ishan keeps pace with the latest
              technologies and tools.Known for their exceptional proficiency in
              conducting effective Google searches, Ishan leverages their
              research skills to enhance development efficiency. Additionally,
              Ishan is adept at utilizing ChatGPT, leveraging suitable prompts
              to optimize AI-driven development processes. Despite being a
              fresher, Ishan possesses a deep understanding of the development
              workflow and its various components.
            </p>
            <p className="py-3 text-gray-600">
              Exceptional communication skills empower Ishan to effectively
              manage client interactions and ensure smooth collaboration.
              Ishan's commitment to providing exceptional service aligns
              perfectly with the company's needs. With Ishan's skills and
              capabilities, the company can expect a valuable addition to their
              development team. Embrace Ishan's passion for continuous growth
              and their ability to adapt to new challenges seamlessly. Thank you
              for considering Ishan Panchal. Reach out today to discover how
              Ishan can contribute to your company's success. Line [insert line
              number] - Thank you for connecting with us. We appreciate your
              time.
            </p>
            <p className="py-2 text-gray-600 underline cursor-pointer">{LatestProject}</p>
          </div>
          <div className="w-[90%] h-[77%] m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-90 ease-in-out duration-300">
            {/* Because using unsplash URL Otherwise must use <Image/ > component */}
            {/* <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="" className="rounded-xl shadow-xl shadow-black drop-shadow-xl" /> */}
            <Image src={about}  className="rounded-xl shadow-xl shadow-black drop-shadow-xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
