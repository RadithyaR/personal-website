"use client";
import Image from "next/image";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import About from "./component/About";
import Skills from "./component/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skills />
    </div>
  );
}
