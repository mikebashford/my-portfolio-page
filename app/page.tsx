import Image from "next/image";
import Link from "next/link";
import Header from "@/app/home/page.tsx";
import Navbar from "@/app/ui/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="my-10">
        <Navbar />
      </div>
      <div className="my-10">
        <Header />
      </div>
    </main>
  );
}
