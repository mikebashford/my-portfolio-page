export default async function Experience() {
  return (
    <main className="flex flex-col text-white w-screen">
      <div
        className="w-3/5 grid grid-cols-1 gap-2 my-24 self-center border rounded-xl p-24 bg-blue-500 max-md:w-10/12 max-md:p-12"
        id="contact"
      >
        <div className="flex flex-col gap-4">
          <form className="flex flex-col gap-4">
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
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mx-5 w-1/2 self-center max-md:w-3/4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
