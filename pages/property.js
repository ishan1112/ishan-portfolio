import Image from "next/image";
import pro1 from "../public/assets/projects/pro1.png";
import { RiRadioButtonFill } from "react-icons/ri"
import Link from "next/link";

const property = () => {
    const goBack = "<-";
  return (
    <>
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/90 z-50">
            <Image
              src={pro1}
              className="absolute bg-black/70 z-0"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-[70%] max-w-[1200px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2 z-10">
              <h2 className="py-2">Project - 1</h2>
              <h3 className="">React Js / Tailwind Css / Firebase</h3>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
            <div className="col-span-4">
                <p className="">Project</p>
                <h2 className="">Overview</h2>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, eveniet maiores praesentium ipsum nam illo impedit officiis sequi doloribus a quam, rem nobis labore debitis nihil corporis iste tempore eos cupiditate numquam animi. Ex sapiente quae consectetur numquam sed earum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, deleniti? Fugit veritatis ratione, voluptatum excepturi sint aliquid vero officiis quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, vitae?
                </p>
                <button className="px-8 py-2 mt-4 mr-8">Demo</button>
                <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </div>
            <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                <div className="p-2">
                    <p className="text-center font-bold pb-2">Technologies</p>
                    <div className="grid grid-cols-3 md:grid-cols-1">
                        <p className="text-gray-600 py-2 flex items-center">
                            <RiRadioButtonFill className="pr-1" /> React
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                            <RiRadioButtonFill className="pr-1" /> Tailwind
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                            <RiRadioButtonFill className="pr-1" /> Firebase
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                            <RiRadioButtonFill className="pr-1" /> NodeJs
                        </p>
                    </div>
                </div>
            </div>
        <Link href={'/#projects'} className="underline">{goBack}Go back</Link>
        </div>
      </div>
    </>
  );
};

export default property;
