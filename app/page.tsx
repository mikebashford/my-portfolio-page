"use client";

import Image from "next/image";
import Link from "next/link";
import About from "@/app/about/page";
import Navbar from "@/app/ui/navbar";
import Contact from "@/app/contact/page";
import Experience from "@/app/experience/page";
import Projects from "@/app/projects/page";
import Footer from "@/app/ui/footer";

export default function Home() {
  return (
    <main className="flex flex-col bg-white w-screen">
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
