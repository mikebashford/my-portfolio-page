import Image from "next/image";
import IMG from "@/public//images/OneStopGrocer.png";
import IMG2 from "@/public//images/playdough.png";
import Link from "next/link";

const data = [
  {
    id: 1,
    image: IMG,
    title: "One Stop Grocer",
    demo: "https://one-stop-grocer.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Playdough",
    demo: "https://playdoughsa.com/",
  },
];

export default function Projects() {
  return (
    <section className="my-24 width-5/5" id="projects">
      <div className="w-full">
        <h1 className="flex justify-center font-bold text-5xl mb-10">
          Projects
        </h1>
        <div className="flex my-8 justify-center gap-32">
          {data.map(({ id, image, title, demo }) => {
            return (
              <article
                key={id}
                className="bg-blue-500 p-10 rounded-3xl border "
              >
                <div className="flex justify-center overflow-hidden mb-10">
                  <Image
                    src={image}
                    alt={title}
                    width={450}
                    height={450}
                    className="rounded-3xl"
                  />
                </div>
                <h3 className="flex justify-center mb-10 text-white">
                  {title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  <Link
                    href={demo}
                    className="bg-blue-700 hover:bg-blue-900 text-white border border-blue-500 hover:text-white font-semibold py-2 px-4 rounded mx-5 mt"
                    target=""
                  >
                    Demo
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
