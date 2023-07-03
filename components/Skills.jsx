import Image from 'next/image';
import React from 'react';
import html from "../public/assets/skills/html.png";
import css from "../public/assets/skills/css.png";
import js from "../public/assets/skills/js.png";
import reactjs from "../public/assets/skills/reactjs.png";
import node from "../public/assets/skills/node.png";
import express from "../public/assets/skills/express.png";
import mongodb from "../public/assets/skills/mongodb.png";
import tailwind from "../public/assets/skills/tailwind.png";

const Skills = () => {
    const Skills = "<Skills />";
    const htmlF = "<HTML>";
    const cssF = "{Css}";
    const jsF = "`JavaScript`";
    const tailwindF = "Tail~wind";
    const reactF = "<React />";
    const nodeF = ":NodeJs/";
    const mongoF = "[MongoDB]";
    const expressF = "/*ExpressJs/";
  return (
    <>
        <div id='skills' className="w-full lg:h-screen p-2">
            <div className="max-w-[1200] mx-auto flex flex-col justify-center h-full">
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>{Skills}</p>
                <h2 className="py-4">What I Can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


                    <div className="p-6 shadow-2xl drop-shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={html} width={64}  height={64} alt='l1'/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="">{htmlF}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-2xl drop-shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={css} width={74}  height={74} alt='l2'/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="">{cssF}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-2xl drop-shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={js} width={120}  height={120} alt='l3'/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="">{jsF}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-2xl drop-shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto mt-4">
                                <Image src={tailwind} width={64}  height={64} alt='l4'/>
                            </div>
                            <div className="flex flex-col items-center justify-center mt-4">
                                    <h3 className="">{tailwindF}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-2xl drop-shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={reactjs} width={64}  height={64} alt='l5'/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                    <h3 className="">{reactF}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-2xl drop-shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={node} width={64}  height={64} alt='l6'/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                    <h3 className="">{nodeF}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-2xl drop-shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={express} width={64}  height={64} alt='l7'/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                    <h3 className="">{expressF}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-2xl drop-shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={mongodb} width={64}  height={64} alt='l8'/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="">{mongoF}</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Skills