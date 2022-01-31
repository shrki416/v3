import { GraphQLClient, gql, request } from "graphql-request";

import Container from "../components/Container";
import Projects from "../components/Projects";

const query = gql`
  query {
    allProjects {
      image {
        basename
        url
      }
      title
      url
      id
    }
  }
`;

export async function getStaticProps() {
  const endpoint = `https://graphql.datocms.com/`;

  const headers = {
    Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
  };

  const client = new GraphQLClient(endpoint, { headers });
  const data = await client.request(query);

  return {
    props: {
      data: data.allProjects,
    },
  };
}

export default function projects({ data }) {
  return (
    <Container>
      <Projects data={data} />
    </Container>
  );
}
