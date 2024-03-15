import Image from "next/image";
import Link from "next/link";
import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import Skills from "@/app/skills/page";
import Projects from "@/app/projects/page";
import Landing from "@/app/landing/page";

export default function Home() {
  return (
    <>
      <Landing />
      <Skills />
      <About />
      <Projects />
    </>
  );
}
