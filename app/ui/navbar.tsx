import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMessage,
} from "react-icons/ai";
import { RiMacbookLine } from "react-icons/ri";
import ThemeSwitcher from "./themeSwitcher";

export default function Navbar() {
  return (
    <nav className="w-screen text-white flex xl:max-2xl:flex-wrap px-12 py-6 z-2 justify-end gap-3 backdrop-filter bg-blue-500 max-md:flex max-md:flex-col max-md:justify-center max-md: items-center">
      <Link
        href={"/"}
        className="flex xl:max-2xl:flex-wrap py-2 px-4 hover:text-blue-700 font-semibold max-md:flex max-md:flex-col max-md:justify-center"
      >
        <AiOutlineUser className="mx-1 mt-1 max-md:self-center" />
        About Me
      </Link>
      <Link
        href={"/experience"}
        className="flex xl:max-2xl:flex-wrap py-2 px-4 hover:text-blue-700 font-semibold max-md:flex max-md:flex-col max-md:justify-center"
      >
        <RiMacbookLine className="mx-1 mt-1 max-md:self-center" />
        Experience
      </Link>
      <Link
        href={"/projects"}
        className="flex xl:max-2xl:flex-wrap py-2 px-4 hover:text-blue-700 font-semibold max-md:flex max-md:flex-col max-md:justify-center"
      >
        <AiOutlineProject className="mx-1 mt-1 max-md:self-center" />
        Projects
      </Link>
      <Link
        href={"/contact"}
        className="flex xl:max-2xl:flex-wrap py-2 px-4 hover:text-blue-700 font-semibold max-md:flex max-md:flex-col max-md:justify-center"
      >
        <AiOutlineMessage className="mx-1 mt-1 max-lg:self-center" />
        Contact Me
      </Link>
      <ThemeSwitcher />
    </nav>
  );
}
