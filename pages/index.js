import { GraphQLClient, gql, request } from "graphql-request";

import About from '../components/About'
import Container from '../components/Container'
import data from '../data'

const query = gql`
  query {
    allAbouts {
      title
      text
      id
    }
    allGenerals {
      phone
      name
      id
      githubUsername
      email
      designation
      avatarUrl
      address
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
  }
`;


export async function getServerSideProps() {
  const endpoint = `https://graphql.datocms.com/`;

  const headers = {
    Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
  };

  const client = new GraphQLClient(endpoint, { headers });
  const data = await client.request(query);

  return {
    props: {
      general: data.allGenerals[0],
      techStacks: data.allTechStacks,
    },
  };
}

export default function Home({ general, techStacks }) {
  return (
    <Container
      title="Ahmed Abdelaal - Full Stack Software Engineer | Web Developer"
      description="This is the home page."
    >
      <About general={general} techStacks={techStacks} />
    </Container>
  );
}




