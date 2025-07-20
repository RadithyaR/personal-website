"use client";
import Image from "next/image";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import About from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Experience from "./component/Experience";
import Testimony from "./component/Testimony";
import Contact from "./component/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Testimony />
      <Contact />
    </div>
  );
}
