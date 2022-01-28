import Image from "next/image";
import data from "../data";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="text-5xl md:text-7xl lg:text-9xl font-bold py-10 md:py-20 text-center md:text-left text-gray-800 dark:text-gray-300">
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

      <div className="text-container mx-auto md:pt-20 pb-10 text-gray-700 dark:text-gray-400">
        <p className="leading-loose text-2xl md:text-4xl">{data.about.title}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        <div className="inline-flex flex-col">
          <div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-300">
              Contact
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-500 mt-4">
              I&apos;d love to connect. For any enquiry, shoot me an{" "}
              <a
                href={`mailto:${data.email}`}
                className="text-blue-600 border-b-2 border-blue-600 border-l-blue-600 font-bold"
              >
                email
              </a>{" "}
              and I&apos;ll get back to you, I promise!
            </p>
          </div>

          <div className="mt-8">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
              Job Opportunities
            </h1>
            <p className="text-lg text-gray-700 mt-4 dark:text-gray-500">
              I&apos;m looking for a job currently, if you see me as a good fit,
              check my{" "}
              <a
                href={data.resumeUrl}
                target="__blank"
                className="text-green-600 border-b-2 border-green-600 dark:border-green-600 font-bold dark:text-green-600"
              >
                CV
              </a>{" "}
              and I&apos;d love to work for you.
            </p>
          </div>

          <div className="mt-8">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={data.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <span className="my-4 dark:text-red-500">&rarr;</span>
                  <p className="text-lg text-gray-700 font-mono relative overflow-hidden dark:text-gray-500">
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
                  <span className="my-4 dark:text-red-500">&rarr;</span>
                  <p className="text-lg text-gray-700 font-mono relative overflow-hidden dark:text-gray-500">
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
                  <span className="my-4 dark:text-red-500">&rarr;</span>
                  <p className="text-lg text-gray-700 font-mono relative overflow-hidden dark:text-gray-500">
                    <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></span>
                    Twitter
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          {data.about.description?.map((desc, idx) => (
            <p
              key={idx}
              className="text-xl text-gray-800 mb-4 dark:text-gray-400"
            >
              {desc}
            </p>
          ))}

          <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
            Tech Stack && Tools
          </h1>
          <div className="flex flex-row flex-wrap mt-8">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/javascript/javascript-plain.svg"
              className="h-12 w-12 mx-4 my-4"
            />

            <img
              alt="Node.js"
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-plain.svg"
              className="h-12 w-12 mx-4 my-4"
            />
            <img
              alt="Express"
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/express/express-original.svg"
              className="h-12 w-12 mx-4 my-4"
            />

            <img
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/react/react-original.svg"
              className="h-12 w-12 mx-4 my-4"
            />

            <img
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/git/git-plain-wordmark.svg"
              className="h-12 w-12 mx-4 my-4"
            />

            {/* <img src="/github.svg" className="h-12 w-12 mx-4 my-4" /> */}
            <div className="h-12 w-12 mx-4 my-4 fill-current text-gray-900 dark:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                  />
                  <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" />
                </g>
              </svg>
            </div>

            <img
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/heroku/heroku-original.svg"
              className="h-12 w-12 mx-4 my-4"
            />

            <img
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/figma/figma-original.svg"
              className="h-12 w-12 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/graphql/graphql-plain.svg"
              className="h-12 w-12 mx-4 my-4"
            />

            <img
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/firebase/firebase-plain.svg"
              className="h-12 w-12 mx-4 my-4"
            />
            <img
              alt="PostgreSQL"
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/postgresql/postgresql-plain-wordmark.svg"
              className="h-12 w-12 mx-4 my-4"
            />

            <img
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/mongodb/mongodb-original-wordmark.svg"
              className="h-12 w-12 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/html5/html5-plain-wordmark.svg"
              className="h-12 w-12 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/css3/css3-plain-wordmark.svg"
              className="h-12 w-12 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/slack/slack-original.svg"
              className="h-12 w-12 mx-4 my-4"
            />
            <img
              alt="Gatsby"
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/gatsby/gatsby-original.svg"
              className="h-12 w-12 mx-4 my-4"
            />
            <img
              alt="NextJS"
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nextjs/nextjs-line.svg"
              className="h-12 w-12 mx-4 my-4"
            />
            <img
              alt="NextJS"
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/npm/npm-original-wordmark.svg"
              className="h-12 w-12 mx-4 my-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
