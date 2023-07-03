import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const MainContent = () => {
  return (
    <>
        <div id="home" className="w-full h-screen text-center lg:h-full">
            <div className="max-w-[1200px] w-full h-full mx-auto p-4 flex justify-center items-center">
              <div className="mt-20">
                <p className="uppercase tracking-widest text-gray-600">LETS BUILD SOMETHING TOGETHER</p>
                <h1 className="text-gray-700 py-4 text-[33px]">Welcome to my port <a href=""> https://<span className="text-[#5651e5]">ishan-panchal</span>/</a></h1>
                <h1 className="text-gray-700 py-2">A full-stack Web Developer</h1>
                <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                  Eager, skilled, and full of creativity, I am a passionate full stack web developer ready to bring your visions to life. With a solid foundation in the latest technologies and a love for programming, I excel at crafting exceptional websites. Lets collaborate and make your digital dreams a reality. Hire me now for a transformative web development experience.
                </p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4 gap-5">
                  <div className="mt-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-90 ease-in duration-150">
                    <FaLinkedinIn className=' text-blue-700'  size={25}/>
                  </div>
                  <div className="mt-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-90 ease-in duration-150">
                    <FaInstagram className='text-pink-800' size={25} />
                  </div>
                  <div className="mt-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-90 ease-in duration-150">
                   <FaGithub className='' size={25} />
                  </div>
                  <div className="mt-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-90 ease-in duration-150">
                    <FaTwitter className=' text-blue-500' size={25} />
                  </div>
                </div>
              </div>
            </div> 
        </div>
    </>
  )
}

export default MainContent