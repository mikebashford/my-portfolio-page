import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMessage,
} from "react-icons/ai";
import { RiMacbookLine } from "react-icons/ri";
import ThemeSwitcher from "./themeSwitcher";
import { favicon } from "../../public/favicon";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full text-white flex xl:max-2xl:flex-wrap px-12 py-6 z-2 justify-end gap-3 backdrop-filter bg-blue-500 max-lg:flex-col max-lg:items-center">
      <div className="flex items-center me-auto xl:max-2xl:flex-wrap py-2 px-4 hover:text-blue-700 font-bold  text-3xl gap-2 max-lg:me-0">
        <Image src="/favicon.ico" alt="Brand icon" width={64} height={64} />
        <h1>Mike Bashford</h1>
      </div>
      <Link
        href={"#skills"}
        className="flex items-center xl:max-2xl:flex-wrap py-2 px-4 hover:text-blue-700 font-semibold max-lg:flex max-lg:flex-col max-lg:justify-center"
      >
        <RiMacbookLine className="mx-1 mt-1 max-lg:self-center" />
        Skills
      </Link>
      <Link
        href={"#about"}
        className="flex items-center xl:max-2xl:flex-wrap py-2 px-4 hover:text-blue-700 font-semibold max-lg:flex max-lg:flex-col max-lg:justify-center"
      >
        <AiOutlineUser className="mx-1 mt-1 max-lg:self-center" />
        About Me
      </Link>
      <Link
        href={"#projects"}
        className="flex items-center xl:max-2xl:flex-wrap py-2 px-4 hover:text-blue-700 font-semibold max-lg:flex max-lg:flex-col max-lg:justify-center"
      >
        <AiOutlineProject className="mx-1 mt-1 max-lg:self-center" />
        Projects
      </Link>
      <Link
        href={"/contact"}
        className="flex items-center xl:max-2xl:flex-wrap py-2 px-4 hover:text-blue-700 font-semibold max-lg:flex max-lg:flex-col max-lg:justify-center"
      >
        <AiOutlineMessage className="mx-1 mt-1 max-lg:self-center" />
        Contact Me
      </Link>
      <div className="flex items-center">
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
