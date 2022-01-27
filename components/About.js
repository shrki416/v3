import Image from "next/image";
import data from "../data";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="text-5xl md:text-7xl lg:text-9xl font-bold py-10 md:py-20 text-center md:text-left">
          About Me.
        </div>
        <div className="hidden md:block">
          <Image
            src={data.avatarUrl}
            alt="avatar"
            height={190}
            width={190}
            objectFit="contain"
            priority
          />
          <div className="flex flex-row justify-center mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That&apos;s me 👋</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-container max-w-6xl mx-auto md:pt-20 pb-10">
        <p className="leading-loose text-2xl md:text-4xl mx-4">
          {data.about.title}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        <div className="inline-flex flex-col">
          <div>
            <h1 className="text-xl font-bold">Contact</h1>
            <p className="text-lg text-gray-500 mt-4">
              I&apos;d love to connect. For any enquiry, shoot an{" "}
              <a
                href={`mailto:${data.email}`}
                className="text-grey-800 border-b-2 border-l-gray-800 font-bold"
              >
                email
              </a>{" "}
              and I&apos;ll get back to you, I promise!
            </p>
          </div>
          <div className="mt-8">
            <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Job Opportunities
            </h1>
            <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
              I&apos;m looking for a job currently, if you see me as a good fit,
              check my{" "}
              <a
                href={data.resumeUrl}
                target="__blank"
                className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
              >
                CV
              </a>{" "}
              and I&apos;d love to work for you.
            </p>
          </div>
          <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
            Social Links
          </h1>
          <div className="mt-4 ml-4">
            <div className="flex flex-row justify-start items-center">
              <a
                href={data.socialLinks.github}
                className="flex flex-row items-center space-x-4 group"
              >
                <span className="my-4">&rarr;</span>
                <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                  <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></span>
                  GitHub
                </p>
              </a>
            </div>

            <div className="flex flex-row justify-start items-center">
              <a
                href={data.socialLinks.linkedin}
                className="flex flex-row items-center space-x-4 group"
              >
                <span className="my-4">&rarr;</span>
                <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                  <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></span>
                  LinkedIn
                </p>
              </a>
            </div>

            <div className="flex flex-row justify-start items-center">
              <a
                href={data.socialLinks.twitter}
                className="flex flex-row items-center space-x-4 group"
              >
                <span className="my-4">&rarr;</span>
                <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                  <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></span>
                  Twitter
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          {data.about.description?.map((desc, idx) => (
            <p
              key={idx}
              className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
            >
              {desc}
            </p>
          ))}

          <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
            Tech Stack
          </h1>
          <div className="flex flex-row flex-wrap mt-8">
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              alt="Node.js"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              className="h-20 w-20 mx-4 my-4"
            />

            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
              className="h-20 w-20 mx-4 my-4"
            />

            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
              className="h-20 w-20 mx-4 my-4"
            />

            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              alt="SQL"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png"
              className="h-20 w-20 mx-4 my-4"
            />

            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              alt="Gatsby"
              src="https://raw.githubusercontent.com/github/explore/e94815998e4e0713912fed477a1f346ec04c3da2/topics/gatsby/gatsby.png"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              alt="NextJS"
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nextjs/nextjs-original.svg"
              className="h-20 w-20 mx-4 my-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
