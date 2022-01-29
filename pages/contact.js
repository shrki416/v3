import { GraphQLClient, gql, request } from "graphql-request";

import Contact from "../components/Contact";
import Container from "../components/Container";

const query = gql`
  query {
    allGenerals {
      phone
      email
      address
    }
    allSocials {
      title
      url
    }
  }
`;

export async function getStaticProps() {
  const endpoint = `https://graphql.datocms.com/`;

  const headers = {
    Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
  }

  const client = new GraphQLClient(endpoint, { headers });

  const data = await client.request(query);

  return {
    props: {
      data,
    },
  };
}

export default function contact({ data }) {
  return (
    <Container>
      <Contact data={data} />
    </Container>
  );
}
