import { GET_FUNZONE_VIDEOS } from "../apolloQuery";
import client from "../apolloClient";
import Card from "../components/Card";
import MainVideo from "../components/MainVideo";

export default function Funzone({ data }): JSX.Element {
  return (
    <div className="w-full h-full bg-gray-800 text-gray-500 whitespace-nowrap overflow-ellipsis overflow-hidden">
      <MainVideo />
      <Card data={data} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { data, loading, error } = await client.query({
    query: GET_FUNZONE_VIDEOS,
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
