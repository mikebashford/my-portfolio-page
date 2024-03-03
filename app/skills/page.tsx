import Image from "next/image";

export default function Skills() {
  return (
    <div className="flex flex-col my-24 text-white">
      <div className="flex flex-wrap items-center justify-center max-xl:gap-32 max-xl:mx-8 max-2xl:gap-64">
        <div className="bg-blue-500 px-24 py-20 border rounded-3xl hover:border-blue:700 text-center max-lg:px-12 max-lg:py-16">
          <h3 className="text-center mb-8 text-xl max-lg:text-3xl">
            Frontend Development
          </h3>
          <div className="grid grid-cols-4 justify-items-center gap-8 mt-12">
            <Image
              src="/images/angular-icon.png"
              alt="Angular icon"
              width={100}
              height={100}
              className="self-center justify-center grid-cols-1"
            />
            <Image
              src="/images/javascript.png"
              alt="Javascript icon"
              width={100}
              height={100}
              className="self-center grid-cols-1"
            />
            <Image
              src="/images/react.png"
              alt="react icon"
              width={100}
              height={100}
              className="self-center grid-cols-1"
            />
            <Image
              src="/images/tailwindcss.png"
              alt="tailwind icon"
              width={100}
              height={100}
              className="self-center grid-cols-1"
            />
            <Image
              src="/images/typescript-icon.png"
              alt="typescript icon"
              width={100}
              height={100}
              className="self-center grid-cols-1"
            />
            <Image
              src="/images/css-3.png"
              alt="css icon"
              width={87}
              height={100}
              className="self-center grid-cols-1"
            />
            <Image
              src="/images/html-5.png"
              alt="html icon"
              width={87}
              height={100}
              className="self-center grid-cols-1"
            />
            <Image
              src="/images/nextjs.png"
              alt="Next.js icon"
              width={100}
              height={100}
              className="self-center grid-cols-1"
            />
          </div>
        </div>
        <div className="bg-blue-500 px-24 py-20 border rounded-3xl hover:border-blue:700  text-center max-lg:px-12 max-lg:py-16">
          <h3 className="text-center mb-8 text-xl max-lg:text-3xl">
            Backend Development
          </h3>
          <div className="grid grid-cols-4 justify-items-center gap-8 mt-12">
            <Image
              src="/images/mongodb.png"
              alt="Mongodb icon"
              width={100}
              height={100}
              className="self-center grid-cols-1"
            />
            <Image
              src="/images/mysql.png"
              alt="MySQL icon"
              width={100}
              height={100}
              className="self-center grid-cols-1"
            />
            <Image
              src="/images/nodejs.png"
              alt="Nodejs icon"
              width={100}
              height={100}
              className="self-center grid-cols-1"
            />
            <Image
              src="/images/django-icon.png"
              alt="Django icon"
              width={100}
              height={100}
              className="self-center grid-cols-1"
            />
            <Image
              src="/images/python.png"
              alt="Python icon"
              width={100}
              height={100}
              className="self-center grid-cols-1"
            />
            <Image
              src="/images/express.png"
              alt="Express icon"
              width={100}
              height={100}
              className="self-center grid-cols-1"
            />
            <Image
              src="/images/flask.png"
              alt="Flask icon"
              width={100}
              height={100}
              className="self-center grid-cols-1"
            />
            <Image
              src="/images/sqlite.png"
              alt="Sqlite icon"
              width={100}
              height={100}
              className="self-center grid-cols-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
