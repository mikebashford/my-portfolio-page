import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-500 px-12 text-center text-white">
      <h1 className="my-8 inline-block font-bold text-4xl">Mike Bashford</h1>
      <ul className="flex flex-wrap justify-center space-x-8 mb-8 max-md:flex max-md:flex-col max-md:gap-6 max-md:mt-5 max-md:space-x-0">
        <Link href="/#skills" className="hover:text-blue-700 ">
          Skills
        </Link>
        <Link href="/#about" className="hover:text-blue-700 ">
          About Me
        </Link>

        <Link href="/#projects" className="hover:text-blue-700 ">
          Projects
        </Link>

        <Link href="/contact" className="hover:text-blue-700 ">
          Contact
        </Link>
      </ul>

      <div className="flex flex-wrap justify-center gap-4 mb-24">
        <Link
          href="https://twitter.com/mikebashford"
          className="hover:text-blue-700 "
        >
          <BsTwitter />
        </Link>
        <Link
          href="https://github.com/mikebashford"
          className="hover:text-blue-700 "
        >
          <BsGithub />
        </Link>
        <Link
          href="https://linkedin.com/in/mikebashford"
          className="hover:text-blue-700 "
        >
          <BsLinkedin />
        </Link>
      </div>

      <div>
        <small>&copy; Michael Bashford. All rights reserved.</small>
      </div>
    </footer>
  );
}
