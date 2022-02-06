import Head from "next/head";
import Navbar from "../components/Nav/Navbar";
import { useRouter } from "next/router";

export default function Layout({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title:
      "Ahmed Abdelaal - Full Stack Software Engineer | Node JS, React JS, and PostgreSQL",
    description: `I've been developing websites and teaching web development for the past 3 years.  Get in touch with me to know more.`,
    image: `/avatar.jpg`,
    type: `website`,
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={meta.description} />
        <meta property="og:url" content={`https://aa-dev.io${router.asPath}`} />
        <link rel="canonical" href={`https://aa-dev.io${router.asPath}`} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:type" content={meta.type} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:site" content="@shrki416" />
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-10 md:py-20">
        <Navbar />
        <div>{children}</div>
      </main>
    </div>
  );
}
