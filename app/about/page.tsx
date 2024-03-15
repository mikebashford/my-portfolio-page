"use client";
import Image from "next/image";
import AboutPic from "@/public/images/about.png";

export default function Page() {
  return (
    <section
      className="flex flex-row my-24 width-5/5 max-lg:flex-col"
      id="about"
    >
      <div className="flex basis-1/4 max-lg:mx-auto">
        <Image
          src={AboutPic}
          alt="Photo of Mike Bashford"
          width={300}
          height={300}
          className="rounded-3xl basis-1/4"
        />
      </div>
      <div className="basis-3/4 width-3/5 max-lg:mx-2 mx-16 self-center max-lg:mt-8">
        <h1 className="text-5xl font-bold mb-10 flex justify-center">
          About me
        </h1>
        <p className="text-lg ms-10 max-lg:ms-0">
          Playing video games started my passion for technology. I was
          introduced to the world of gaming as a child, and I quickly fell in
          love. This interest led me to pursuing a degree in Game Programming at
          Alamo Colleges in San Antonio, Texas. To continue this journey I
          completed a coding bootcamp hosted by The University of Texas at San
          Antonio and provided by Trilogy. I&apos;m a lifelong learner and find
          myself constantly drawn to new technologies and frameworks. Attending
          meetups and online courses keeps me on the cutting edge. Outside of
          coding I love to travel and explore new places. I&apos;m looking
          forward to seeing more of the world and learning different cultures.
        </p>
      </div>
    </section>
  );
}
