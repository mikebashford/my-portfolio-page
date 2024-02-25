import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/components/hero/page.tsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Hero />
    </main>
  );
}
