import Image from "next/image";
import { StructuredText } from "react-datocms";
import UpArrow from "./SVGs/UpArrow";

export default function About({ general, techStacks, socials }) {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="text-5xl md:text-7xl lg:text-9xl font-bold py-10 md:py-20 text-center md:text-left text-gray-800 dark:text-gray-300">
          About Me.
        </div>
        <div className="hidden md:block">
          <Image
            src={general.avatarUrl}
            alt="avatar"
            height={190}
            width={190}
            objectFit="contain"
            priority
          />
          <div className="flex flex-row justify-center mt-4">
            <div className="flex flex-row space-x-4">
              <UpArrow />
              <p className="font-mono">That&apos;s me 👋</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-container mx-auto md:pt-20 pb-10 text-gray-700 dark:text-gray-400">
        <p className="leading-loose text-2xl md:text-4xl">{general.title}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        <div className="inline-flex flex-col">
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-blue-600">
              Contact
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-500 mt-4">
              I&apos;d love to connect. For any enquiry, shoot me an{" "}
              <a
                href={`mailto:${general.email}`}
                className="text-blue-600 border-b-2 border-blue-600 border-l-blue-600 font-bold"
              >
                EMAIL
              </a>{" "}
              and I&apos;ll get back to you, I promise!
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-green-600">
              Job Opportunities
            </h2>
            <p className="text-lg text-gray-700 mt-4 dark:text-gray-500">
              I&apos;m looking for a job currently, if you see me as a good fit,
              check my{" "}
              <a
                href={general.resumeUrl}
                target="__blank"
                className="text-green-600 border-b-2 border-green-600 dark:border-green-600 font-bold dark:text-green-600"
              >
                CV
              </a>{" "}
              and I&apos;d love to work for you.
            </p>
          </div>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-red-500">
              Social Links
            </h2>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={socials[2].url}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <span className="my-4 dark:text-red-500">&rarr;</span>
                  <p className="text-lg text-gray-700 font-mono relative overflow-hidden dark:text-gray-500">
                    <span className="absolute h-0.5 w-full bg-red-500 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></span>
                    GitHub
                  </p>
                </a>
              </div>

              <div className="flex flex-row justify-start items-center">
                <a
                  href={socials[1].url}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <span className="my-4 dark:text-red-500">&rarr;</span>
                  <p className="text-lg text-gray-700 font-mono relative overflow-hidden dark:text-gray-500">
                    <span className="absolute h-0.5 w-full bg-red-500 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></span>
                    LinkedIn
                  </p>
                </a>
              </div>

              <div className="flex flex-row justify-start items-center">
                <a
                  href={socials[0].url}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <span className="my-4 dark:text-red-500">&rarr;</span>
                  <p className="text-lg text-gray-700 font-mono relative overflow-hidden dark:text-gray-500">
                    <span className="absolute h-0.5 w-full bg-red-500 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></span>
                    Twitter
                  </p>
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className="col-span-1 md:col-span-2">
          <div className="text-xl text-gray-800 mb-4 dark:text-gray-400">
            <p className="mb-5">
              I&apos;ve been developing Full Stack application for the past 2
              years. I am currently a support-coach @ Software Development
              Mastermind.
            </p>
            <p className="mb-5">
              I&apos;ve been coding in React on the frontend and NodeJS on the
              backend. I prefer PostgreSQL as a db, but have used others such as
              MongoDB. When I&apos;m not coding or working on new features, I
              spend my time improving code quality by refactoring and
              introducing design patterns I learned about.
            </p>
            <p className="mb-5">
              I have many hobbies; the ones I care about the most are traveling,
              I LOVE to travel, learn about different cultures and see other
              places. I enjoy woodworking, I&apos;ve made a few small things such as
              a coffee table and a small seating bench.
            </p>
          </div>
          <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
            Tech Stack && Tools
          </h1>
          <div className="flex flex-row flex-wrap mt-8">
            {techStacks.map(({ image }) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={image.id}
                src={image.url}
                className="h-12 w-12 mx-4 my-4"
                alt={image.basename}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
