import Image from "next/image";
import IMG1 from "@/public/images/DeadSiege_New_Logo.png";
import IMG2 from "@/public//images/group-project.herokuapp.com.png";
import IMG3 from "@/public//images/OneStopShop.png";
import IMG4 from "@/public//images/personal-crypto-tracker.png";
import IMG5 from "@/public//images/RunBuddy.png";
import IMG6 from "@//public/images/budget-tracker.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Dead Siege",
    github: "https://github.com",
    demo: "https://gamejolt.com/games/dead-siege/114865",
  },
  {
    id: 2,
    image: IMG2,
    title: "Parachute Play",
    github: "https://github.com/jessebubble/parachute-play",
    demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "One Stop Shop",
    github: "https://github.com/brenhamp/one-stop-shop",
    demo: "",
  },
  {
    id: 4,
    image: IMG4,
    title: "Personal Crypto Tracker",
    github: "https://github.com/mikebashford/personal-crypto-tracker",
    demo: "https://mikebashford.github.io/personal-crypto-tracker/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Run Buddy",
    github: "https://github.com/mikebashford/run-buddy",
    demo: "https://mikebashford.github.io/run-buddy/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Budget Tracker",
    github: "https://github.com/mikebashford/budget-tracker",
    demo: "",
  },
];

export default function Projects() {
  return (
    <main className="flex flex-col text-white w-screen">
      <section id="projects">
        <div className="grid grid-cols-3 gap-10 mx-32 my-24 justify-center max-md:grid-cols-1 max-md:mx-12">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="bg-blue-500 p-5 rounded-3xl border">
                <div className="flex justify-center overflow-hidden mb-10">
                  <Image
                    src={image}
                    alt={title}
                    width={450}
                    height={450}
                    className="rounded-3xl"
                  />
                </div>
                <h3 className="flex justify-center mb-10">{title}</h3>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  <a
                    href={github}
                    className="bg-white hover:bg-blue-700 text-blue-500 hover:text-white font-bold py-2 px-4 rounded mx-5"
                    target=""
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="bg-blue-700 hover:bg-blue-900 text-white border border-blue-500 hover:text-white font-semibold py-2 px-4 rounded mx-5 mt"
                    target=""
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
