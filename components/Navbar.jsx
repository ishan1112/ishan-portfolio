import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import navLogo from "../public/myLogo.png";
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { useRouter } from 'next/router';


const Navbar = () => {

  const [nav , setNav] = useState(false);
  const [shadow , setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState("#1f2937");

  const router = useRouter();


  useEffect(() => {
    if(router.asPath === '/property' /* Other Path Comes Here from Pages page -  FileBaseRouting */){
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
    }else {
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937')
    }
  },[router])

  const handleNav = () => {
    setNav(!nav);
  }


  useEffect(() => {
    const handleShadow = () => {
      if(window.scrollY >= 90){
        setShadow(true);
      }else{
        setShadow(false);
      }
    }
    window.addEventListener('scroll', handleShadow);
  },[])

  // const listItems = {
  //     Home: "<Home />",
  //     About: "<About />",
  //     Skills: "<Skills />",
  //     Projects: "<Projects />",
  //     Contact: "<Contact />",
  //   };
  return (
    <>
        <div 
          style={{backgroundColor:`${navBg}`}}
        className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-gray-200' : 'fixed w-full h-20 z-[100]'}>
          <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <Link href={'/'}>
              <Image src={navLogo} height={80} width={135} className='' alt='imges' />
            </Link>
              <div className="">
                <ul  style={{color:`${linkColor}`}} className="hidden md:flex">
                  <Link href={"/"} className=''>
                    <li className="ml-10 text-sm uppercase hover:border-b border-black">Home</li>
                  </Link>
                  <Link href={"/#about"} className=''>
                    <li className="ml-10 text-sm uppercase hover:border-b border-black">About</li>
                  </Link>
                  <Link href={"/#skills"} className=''>
                    <li className="ml-10 text-sm uppercase hover:border-b border-black">Skills</li>
                  </Link>
                  <Link href={"/#projects"} className=''>
                    <li className="ml-10 text-sm uppercase hover:border-b border-black">Projects</li>
                  </Link>
                  <Link href={"/#contact"} className=''>
                    <li className="ml-10 text-sm uppercase hover:border-b border-black">Contact</li>
                  </Link>
                </ul>
                <div className="md:hidden" onClick={handleNav}>
                  <AiOutlineMenu size={25} />
                </div>
              </div>
          </div>
          <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-[100vh] bg-black/60': ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-4 ease-in duration-500' : 'fixed left-[-100%] top-0 p-4 ease-in duration-500'}>
              <div className="">
                <div className="flex items-center justify-between w-full">
                  <Image src={navLogo} width={90} height={25} alt='imgg' />
                  <div className="rounded-full p-2 shadow-xl shadow-gray-400 cursor-pointer" onClick={handleNav}>
                    <AiOutlineClose size={22} />
                  </div>
                </div>
                <div className="border-b border-gray-300 my-[2px]">
                  <p className="w-[85%] md:w-[90%] py-3">Let's build something together</p>
                </div>
              </div>
              <div className="py-2 flex flex-col">
                <ul className="uppercase">
                  <Link href={'/#home'} className=''>
                    <li onClick={() =>setNav(false)} className="py-4 text-sm">Home</li>
                  </Link>
                  <Link href={'/#about'} className=''>
                    <li onClick={() =>setNav(false)} className="py-4 text-sm">About</li>
                  </Link>
                  <Link href={'/#skills'} className=''>
                    <li onClick={() =>setNav(false)} className="py-4 text-sm">Skills</li>
                  </Link>
                  <Link href={'/#projects'} className=''>
                    <li onClick={() =>setNav(false)} className="py-4 text-sm">Projects</li>
                  </Link>
                  <Link href={'/#contact'} className=''>
                    <li onClick={() =>setNav(false)} className="py-4 text-sm">Contact</li>
                  </Link>
                </ul>
                <div className="pt-3 border-t border-gray-400">
                  <p className="uppercase tracking-widest">Let's Connect</p>
                  <div className="flex items-center justify-evenly">
                    <div className=" mt-5 rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-90 ease-in duration-150">
                      <a href="https://www.linkedin.com/in/ishanpanchal/" target='_blank'>
                      <FaLinkedinIn className=' text-blue-700' />
                      </a>
                    </div>
                    <div className=" mt-5 rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-90 ease-in duration-150">
                      <FaInstagram className='text-pink-800' />
                    </div>
                    <div className=" mt-5 rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-90 ease-in duration-150">
                      <FaGithub className='' />
                    </div>
                    <div className=" mt-5 rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-90 ease-in duration-150">
                      <FaTwitter className=' text-blue-500' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
    </>
  )
}

export default Navbar