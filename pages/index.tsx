import { GET_ALL_VIDEOS } from "../apolloQuery";
import client from "../apolloClient";
import Card from "../components/Card";
import MainVideo from "../components/MainVideo";

export default function Home({ data }): JSX.Element {
  return (
    <div className="w-full h-full bg-gray-700">
      <MainVideo />
      <Card data={data} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { data, loading, error } = await client.query({
    query: GET_ALL_VIDEOS,
    variables: {
      limit: 4,
    },
  });

  return {
    props: {
      data: data,
      loading: loading,
      error: error || null,
    },
  };
}
