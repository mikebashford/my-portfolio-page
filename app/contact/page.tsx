"use client";
import React, { useEffect } from "react";
import SubmitButton from "@/app/ui/submitButton";
import { sendEmail } from "@/app/lib/sendEmail";
import toast from "react-hot-toast";

export default function Contact() {
  return (
    <div className="flex flex-col text-black">
      <div
        className="max-xl:w-3/5 grid grid-cols-1 gap-2 my-24 self-center border rounded-xl p-24 bg-blue-500 max-lg:w-10/12 max-lg:p-12 max-2xl:w-1/3"
        id="contact"
      >
        <div className="flex flex-col gap-4">
          <form
            className="flex flex-col gap-4"
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }
              toast.success("Email sent!");
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              maxLength={300}
              className="w-full p-6 border rounded-xl bg-transparent resize-none bg-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              maxLength={300}
              className="w-full p-6 border rounded-xl bg-transparent resize-none bg-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              maxLength={500}
              className="w-full h-40 p-6 border rounded-xl bg-transparent resize-none bg-white"
            ></textarea>
            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  );
}
