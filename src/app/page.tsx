"use client";
import Image from "next/image";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import About from "./component/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
    </div>
  );
}
