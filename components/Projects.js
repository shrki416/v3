import Head from "next/head";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

export default function Projects({ data }) {
  return (
    <section>
      <Head>
        <title>Projects 🙂</title>
      </Head>

      <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        Projects
      </h1>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              link={project.url}
              imgUrl={project.image.url}
              number={`${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
