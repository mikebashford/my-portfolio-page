export default async function Experience() {
  return (
    <div class="w-3/5 grid grid-cols-1 gap-2 my-5 self-center" id="contact">
      <div class="flex flex-col gap-4">
        <article class="bg-blue-500 p-5 rounded-xl text-center border">
          <h5>mikebashford&#64;gmail.com</h5>
        </article>
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
            rows="7"
            placeholder="Your Message"
            required
            className="w-full p-6 border rounded-xl bg-transparent resize-none bg-white"
          ></textarea>
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
