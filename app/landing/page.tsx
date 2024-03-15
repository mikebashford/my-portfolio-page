import Image from "next/image";
import ProfilePic from "@/app/ui/profile-pic";

export default function Landing() {
  return (
    <section className="width-5/5  dark:text-white light:text-black">
      <div className="basis-3/4 width-3/5 max-lg:mx-8 mx-16">
        <h1 className="text-5xl font-bold mb-10">Creative & Technical</h1>
        <h2 className="text-3xl font-bold mb-10">
          Building full-stack web applications that are both beautiful and
          functional.
        </h2>
        <p className="text-lg mb-10">
          I&apos;m Michael Bashford, a passionate full-stack developer with a
          knack for crafting user-friendly experiences and building robust
          back-end systems. I have a strong passion for user experience (UX) and
          enjoy creating applications that are not only functional but also
          visually appealing and intuitive to use. I&apos;m a fast learner and a
          team player, always eager to tackle new challenges and collaborate
          with talented developers.
        </p>
        <div className="flex justify-center mb-10">
          <a
            href="https://drive.google.com/file/d/1-b8T7XFgQFl6rcof7krz203Bv2Y25BdM/view?usp=drive_link"
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
