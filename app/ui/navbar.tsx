"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMessage,
} from "react-icons/ai";
import { RiMacbookLine } from "react-icons/ri";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-blue-500 mb-5 w-screen">
      <div className="flex w-screen py-6 px-5 justify-between text-white lg:flex">
        <ul className="flex flex-auto justify-end mx-5 p-3 space-x-8">
          <li>
            <Link
              href={"/"}
              onClick={() => setActiveNav("/")}
              className="flex py-2 px-4 lg:mt-0 rounded md:p-0 hover:text-blue-700 font-semibold"
            >
              <AiOutlineUser />
              About Me
            </Link>
          </li>
          <li>
            <Link
              href={"/experience"}
              onClick={() => setActiveNav("/experience")}
              className="flex py-2 px-4 lg:mt-0 rounded md:p-0 hover:text-blue-700 font-semibold"
            >
              <RiMacbookLine />
              Experience
            </Link>
          </li>
          <li>
            <Link
              href={"/projects"}
              onClick={() => setActiveNav("/projects")}
              className="flex py-2 px-4 lg:mt-0 rounded md:p-0 hover:text-blue-700 font-semibold"
            >
              <AiOutlineProject />
              Projects
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              onClick={() => setActiveNav("/contact")}
              className="flex py-2 px-4 lg:mt-0 rounded md:p-0 hover:text-blue-700 font-semibold"
            >
              <AiOutlineMessage />
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
