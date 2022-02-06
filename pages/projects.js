import { GraphQLClient, gql, request } from "graphql-request";

import Layout from "../components/Layout";
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
  const DATO_CMS_ENDPOINT = process.env.DATO_CMS_ENDPOINT;

  const headers = {
    Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
  };

  const client = new GraphQLClient(DATO_CMS_ENDPOINT, { headers });
  const data = await client.request(query);

  return {
    props: {
      data: data.allProjects,
    },
  };
}

export default function projects({ data }) {
  return (
    <Layout>
      <Projects data={data} />
    </Layout>
  );
}
