"use client";
import Image from "next/image";
import ProfilePic from "@/app/ui/profile-pic";

export default function Page() {
  return (
    <div className="dark:text-white light:text-black">
      <div className="block text-center mt-8 my-5 height-100vh pt-10 overflow-hidden relative">
        <h3 className="text-2xl my-3">Hello, I am</h3>
        <h1 className="text-4xl font-bold my-3">Michael Bashford</h1>
        <h3 className="text-2xl italic my-3">Full stack Developer</h3>
      </div>
      <div className="flex justify-center my-10">
        <a
          href="https://drive.google.com/file/d/1-b8T7XFgQFl6rcof7krz203Bv2Y25BdM/view?usp=drive_link"
          className="bg-transparent hover:bg-blue-700 text-blue-500 border border-blue-500 hover:text-white font-semibold py-2 px-4 rounded mx-5"
        >
          Download CV
        </a>
        <a
          href="/contact"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5"
        >
          Let&apos;s Talk
        </a>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-6 grid-rows-1 content-around justify-center mx-4 my-32 max-md:grid max-md:grid-flow-row-dense max-md:grid-cols-1 max-md:mx-2">
        <div className="col-span-1 max-md:hidden"></div>
        <div className="col-span-3 flex items-center">
          <p className="text-left max-lg:mx-8 max-md:flex max-md:flex-col max-md:mt-10 max-md:items-center max-md:mx-4">
            Experienced UI/UX developer using JavaScript, TypeScript, Angular,
            React, and Nextjs. Developed thousands of layouts for users to enter
            data efficiently and readily able to automate for forms needed in
            their legal matters.
          </p>
        </div>
        <div className="max-lg:col-span-2 max-md:flex max-md:flex-col max-md:mt-10 max-md:items-center">
          <ProfilePic />
        </div>
      </div>
    </div>
  );
}
