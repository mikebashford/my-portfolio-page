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

export default async function Projects() {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project__item">
              <div className="project__item-image">
                <Image src={image} alt={title} width={300} height={300} />
              </div>
              <h3>{title}</h3>
              <div className="project__item-cta">
                <a href={github} className="btn" target="">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
