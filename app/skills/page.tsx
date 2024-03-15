import Image from "next/image";

export default function Skills() {
  return (
    <>
      <section className="" id="skills">
        <div className="w-full">
          <h1 className="flex justify-center text-5xl font-bold mb-10">
            Skills
          </h1>
          <div className="flex my-8 justify-center gap-4 max-md:flex-wrap">
            <Image
              src="/images/javascript.png"
              alt="Javascript icon"
              width={64}
              height={1}
              className="rounded-full object-scale-down"
            />
            <Image
              src="/images/react.png"
              alt="react icon"
              width={64}
              height={1}
              className="rounded-full object-scale-down"
            />
            <Image
              src="/images/tailwind.png"
              alt="tailwind icon"
              width={64}
              height={1}
              className="rounded-full object-scale-down"
            />
            <Image
              src="/images/django-icon.png"
              alt="Django icon"
              width={64}
              height={1}
              className="rounded-full object-scale-down"
            />
            <Image
              src="/images/python.png"
              alt="Python icon"
              width={64}
              height={1}
              className="rounded-full object-scale-down"
            />
          </div>
        </div>
      </section>
    </>
  );
}
