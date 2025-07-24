"use client";
import Image from "next/image";
import Navbar from "../views/Navbar";
import Header from "../views/Header";
import About from "../views/About";
import Skills from "../views/Skills";
import Project from "../views/Project";
import Experience from "../views/Experience";
import Testimony from "../views/Testimony";
import Contact from "../views/Contact";

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
