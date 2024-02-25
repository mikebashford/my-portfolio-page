"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-blue-500 mb-5 w-screen">
      <div className="flex w-screen py-6 px-5 justify-between text-white lg:flex">
        <ul className="flex flex-auto justify-end mx-5 p-3 space-x-8">
          <li>
            <Link
              href={"/"}
              className="flex py-2 px-4 lg:mt-0 rounded md:p-0 hover:text-blue-700 font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className="flex py-2 px-4 lg:mt-0 rounded md:p-0 hover:text-blue-700 font-semibold"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              href={"/experience"}
              className="flex py-2 px-4 lg:mt-0 rounded md:p-0 hover:text-blue-700 font-semibold"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href={"/projects"}
              className="flex py-2 px-4 lg:mt-0 rounded md:p-0 hover:text-blue-700 font-semibold"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className="flex py-2 px-4 lg:mt-0 rounded md:p-0 hover:text-blue-700 font-semibold"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
