import Image from "next/image";
import Link from "next/link";
import About from "@/app/about/page.tsx";
import Navbar from "@/app/ui/navbar";
import Contact from "@/app/contact/page.tsx";
import Experience from "@/app/experience/page.tsx";
import Projects from "@/app/projects/page.tsx";
import Footer from "@/app/ui/footer.tsx";

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
