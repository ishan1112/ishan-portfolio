import React from "react";
import Image from "next/image";
import Link from "next/link";


const ProjectItems = ({title,proImg,proUrl}) => {
  return (
    <>
      <div className="relative flex items-center justify-center h-auto w-full shadow-2xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <Image
          src={proImg}
          height={1000}
          width={1000}
          className="rounded-xl group-hover:opacity-10"
          alt="Hello"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-black tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">ReactJs Project</p>
          <Link href={proUrl} className="">
            <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectItems;
