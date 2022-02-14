import { GraphQLClient, gql, request } from "graphql-request";

import About from "../components/About";
import Layout from "../components/Layout";

const query = gql`
  query {
    allGenerals {
      phone
      id
      githubUsername
      email
      avatarUrl
      address
      resumeUrl
      title
    }
    allTechStacks {
      image {
        url
        width
        basename
        height
        id
      }
    }
    allSocials {
      url
    }
    allAbouts {
      aboutText {
        value
      }
    }
  }
`;

export async function getServerSideProps() {
  const DATO_CMS_ENDPOINT = process.env.DATO_CMS_ENDPOINT;

  const headers = {
    Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
  };

  const client = new GraphQLClient(DATO_CMS_ENDPOINT, { headers });
  const data = await client.request(query);

  return {
    props: {
      general: data.allGenerals[0],
      techStacks: data.allTechStacks,
      socials: data.allSocials,
      about: data.allAbouts[0],
    },
  };
}

export default function Home({ general, techStacks, socials, about }) {
  return (
    <Layout
      title="Ahmed Abdelaal - Full Stack Software Engineer | Web Developer"
      description= "I've been developing websites and teaching web development for the past 3 years.  Get in touch with me to know more."
    >
      <About
        general={general}
        techStacks={techStacks}
        socials={socials}
        about={about}
      />
    </Layout>
  );
}
