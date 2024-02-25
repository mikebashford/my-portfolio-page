export default async function Experience() {
  return (
    <section id="contact">
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>

      <div class="container contact__container">
        <div class="contact__options">
          <article class="contact__option">
            <h5>mikebashford&#64;gmail.com</h5>
          </article>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              ngModel
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              ngModel
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
              ngModel
            ></textarea>
            <button type="submit" class="btn submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
