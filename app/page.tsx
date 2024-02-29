"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";
import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import Experience from "@/app/experience/page";
import Projects from "@/app/projects/page";

export default function Home() {
  return (
    <main className="flex flex-col bg-white w-screen">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}
