import Image from "next/image";
import ProfilePic from "@/app/ui/profile-pic";

export default async function Page() {
  return (
    <section>
      <div className="block text-center mt-8 my-5">
        <h3 className="text-black text-2xl my-3">Hello, I am</h3>
        <h1 className="text-black text-4xl font-bold my-3">Michael Bashford</h1>
        <h3 className="text-black text-2xl italic my-3">
          Full stack Developer
        </h3>
      </div>
      <div className="flex justify-center my-10">
        <button className="bg-transparent hover:bg-blue-700 text-blue-500 border border-blue-500 hover:text-white font-semibold py-2 px-4 rounded mx-5">
          Download CV
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5">
          Let&apos;s Talk
        </button>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-6 grid-rows-1 content-around justify-center mx-4 my-10">
        <div className="col-span-1"></div>
        <div className="col-span-3 flex items-center">
          <p className=" text-black text-left mx-8 ">
            Experienced UI/UX developer using JavaScript, TypeScript, AngularJS,
            React, Nextjs and Svelte. Developed thousands of layouts for users
            to enter data efficiently and readily able to automate for forms
            needed in their legal matters.
          </p>
        </div>
        <div className="col-span-2">
          <ProfilePic />
        </div>
      </div>
    </section>
  );
}
