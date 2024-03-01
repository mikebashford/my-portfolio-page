"use client";
import { sendEmail } from "@/app/lib/sendEmail";
import SubmitButton from "@/app/ui/submitButton";

export default function Experience() {
  return (
    <div className="flex flex-col text-black w-screen">
      <div
        className="w-3/5 grid grid-cols-1 gap-2 my-24 self-center border rounded-xl p-24 bg-blue-500 max-md:w-10/12 max-md:p-12"
        id="contact"
      >
        <div className="flex flex-col gap-4">
          <form
            className="flex flex-col gap-4"
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                alert(error);
                return;
              }

              alert("Email sent!");
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="w-full p-6 border rounded-xl bg-transparent resize-none bg-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-6 border rounded-xl bg-transparent resize-none bg-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-6 border rounded-xl bg-transparent resize-none bg-white"
            ></textarea>
          </form>
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}
