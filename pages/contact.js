import { GraphQLClient, gql, request } from "graphql-request";

import Contact from "../components/Contact";
import Layout from "../components/Layout";

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
  const DATO_CMS_ENDPOINT = process.env.DATO_CMS_ENDPOINT;

  const headers = {
    Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
  };

  const client = new GraphQLClient(DATO_CMS_ENDPOINT, { headers });
  const data = await client.request(query);

  return {
    props: {
      general: data.allGenerals[0],
      social: data.allSocials,
    },
  };
}

export default function contact({ general, social }) {
  return (
    <Layout>
      <Contact general={general} social={social} />
    </Layout>
  );
}
