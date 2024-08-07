import Image from "next/image";
import ProfilePic from "@/app/ui/profile-pic";

export default function Landing() {
  return (
    <section className="width-5/5" id="#">
      <div className="basis-3/4 width-3/5 max-lg:mx-8 mx-16">
        <h1 className="text-5xl font-bold mb-10">Creative & Technical</h1>
        <h2 className="text-3xl font-bold mb-10">
          Building full-stack web applications that are both beautiful and
          functional.
        </h2>
        <p className="text-lg mb-10">
          I&apos;m Michael Bashford, a full-stack developer with a knack for
          crafting user-friendly experiences and building robust back-end
          systems. I&apos;m always eager to tackle new challenges and
          collaborate with talented developers.
        </p>
        <div className="flex justify-center mb-10">
          <a
            href="https://drive.google.com/file/d/1iHt-2xvkOdOIVOk_c3zcrLOxWaA9ceQl/view?usp=sharing"
            className="bg-transparent hover:bg-blue-700 text-blue-500 border border-blue-500 hover:text-white font-semibold py-2 px-4 rounded mx-5"
          >
            View CV
          </a>
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
      <div className="basis-1/4 max-lg:mx-auto">
        <ProfilePic />
      </div>
    </section>
  );
}
