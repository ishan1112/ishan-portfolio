"use client"

import About from "@/components/About";
import Contact from "@/components/Contact";
import MainContent from "@/components/MainContent";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return(
    <>  
      <MainContent />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
