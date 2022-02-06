import EmailSVG from "../components/SVGs/EmailSVG";
import Form from "../components/Form";
import GithubSVG from "../components/SVGs/GithubSVG";
import Head from "next/head";
import LinkedInSVG from "../components/SVGs/LinkedInSVG";
import PhoneSVG from "../components/SVGs/PhoneSVG";
import PinSVG from "../components/SVGs/PinSVG";
import TwitterSVG from "../components/SVGs/TwitterSVG";

export default function Contact({ general, social }) {
  const { phone, email, address } = general;

  return (
    <section>
      <Head>
        <title>Let&apos;s work together!</title>
      </Head>

      <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        Contact
      </h1>

      <div className="rounded-md shadow-md bg-[#3c6382] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-gray-50 font-semibold text-2xl">
                Get in touch, let&apos;s talk.
              </h1>
              <p className="font-light text-base text-gray-200 mt-2">
                Fill in the details and I&apos;ll get back to you as soon as I
                can.
              </p>
            </header>
            <div className="icons-container inline-flex flex-col my-20">
              <div className="contact">
                <PhoneSVG />
                <p className="text-gray-50 font-light text-sm">{phone}</p>
              </div>
              <div className="contact">
                <EmailSVG />
                <p className="text-gray-50 font-light text-sm">{email}</p>
              </div>
              <div className="contact">
                <PinSVG />
                <p className="text-gray-50 font-light text-sm">{address}</p>
              </div>
            </div>
            <div className="social-icons flex flex-row space-x-8">
              <a href={social[2].url} className="social-icon">
                <GithubSVG />
              </a>
              <a href={social[0].url} className="social-icon">
                <TwitterSVG />
              </a>
              <a href={social[1].url} className="social-icon">
                <LinkedInSVG />
              </a>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}
