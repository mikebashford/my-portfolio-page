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
    <main className="flex min-h-screen flex-col bg-white">
      <div className="my-10">
        <Navbar />
      </div>
      <div className="my-10">
        <About />
      </div>
      <div className="my-10">
        <Experience />
      </div>
      <div className="my-10">
        <Projects />
      </div>
      <div className="my-10">
        <Contact />
      </div>
      <div className="my-10">
        <Footer />
      </div>
    </main>
  );
}
