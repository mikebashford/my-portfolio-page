export default async function Experience() {
  return (
    <div
      className="grid grid-flow-col gap-8 mx-32 max-md:grid-flow-dense max-md:mx-12"
      id="experience"
    >
      <div className=" bg-blue-500 px-24 py-20 border rounded-3xl hover:bg-transparent hover:border-blue:700 hover:text-blue-500 text-center">
        <h3 className="text-center mb-8">Frontend Development</h3>
        <div className="grid grid-flow-dense grid-cols-2 gap-y-4 gap-x-4 max-md:gap-x-12">
          <article className="col-span-1">
            <div>
              <h5>HTML</h5>
            </div>
          </article>
          <article className="col-span-1">
            <div>
              <h5>CSS</h5>
            </div>
          </article>
          <article className="col-span-1">
            <div>
              <h5>Javascript</h5>
            </div>
          </article>
          <article className=" col-span-1">
            <div>
              <h5>Bootstrap</h5>
            </div>
          </article>
          <article className="col-span-1">
            <div>
              <h5>Tailwind</h5>
            </div>
          </article>
          <article className="col-span-1">
            <div>
              <h5>React</h5>
            </div>
          </article>
          <article className="col-span-1">
            <div>
              <h5>Angular</h5>
            </div>
          </article>
          <article className="col-span-1">
            <div>
              <h5>Next.js</h5>
            </div>
          </article>
          <article className="col-span-1">
            <div>
              <h5>Python</h5>
            </div>
          </article>
          <article className="col-span-1">
            <div>
              <h5>TypeScript</h5>
            </div>
          </article>
        </div>
      </div>
      <div className=" bg-blue-500 px-24 py-20 border rounded-3xl hover:bg-transparent hover:border-blue:700 hover:text-blue-500 text-center">
        <h3 className="text-center mb-8">Backend Development</h3>
        <div className="grid grid-col-1 gap-y-4">
          <article className="">
            <div>
              <h5>MySQL</h5>
            </div>
          </article>
          <article className="">
            <div>
              <h5>MongoDB</h5>
            </div>
          </article>
          <article className="">
            <div>
              <h5>Express.js</h5>
            </div>
          </article>
          <article className="">
            <div>
              <h5>Node.js</h5>
            </div>
          </article>
        </div>
      </div>
      <div className=" bg-blue-500 px-24 py-20 border rounded-3xl hover:bg-transparent hover:border-blue:700 hover:text-blue-500 text-center">
        <h3 className="text-center mb-8">Game Development</h3>
        <div className="grid grid-col-1 gap-y-4">
          <article className="">
            <div>
              <h5>Unity</h5>
            </div>
          </article>
          <article className="">
            <div>
              <h5>C#</h5>
            </div>
          </article>
          <article className="">
            <div>
              <h5>Game Design</h5>
            </div>
          </article>
          <article className="">
            <div>
              <h5>Project Management</h5>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
