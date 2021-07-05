import {
  GET_ONE_VIDEO,
  GET_FUNZONE_VIDEOS,
  GET_TESTIMONIALES_VIDEOS,
} from "../../apolloQuery";
import client from "../../apolloClient";
import ReactPlayer from "react-player";
import Card from "../../components/Card";
import { useRouter } from "next/router";

export default function Video({ data, dataFunzone, dataTestimonials }) {
  const router = useRouter();

  return (
    <div className="w-full h-full bg-gray-800 text-gray-500">
      <div className="flex justify-around">
        <div>{data.video.name}</div>
        <div className="flex justify-between">
          <div className="mr-2">duration: {data.video.duration} </div>
          <div>{data.video.publicationDate}</div>
        </div>
      </div>
      <div className="flex justify-center">
        <ReactPlayer url={process.env.NEXT_PUBLIC_VIDEO_URL} controls />
      </div>
      <Card
        data={
          router.query.previous === "/funzone" ? dataFunzone : dataTestimonials
        }
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const { data, loading, error } = await client.query({
    query: GET_ONE_VIDEO,
    variables: {
      id: id,
    },
  });

  const { data: dataFunzone } = await client.query({
    query: GET_FUNZONE_VIDEOS,
    variables: {
      limit: 4,
    },
  });

  const { data: dataTestimonials } = await client.query({
    query: GET_TESTIMONIALES_VIDEOS,
    variables: {
      limit: 4,
    },
  });

  return {
    props: {
      dataFunzone: dataFunzone,
      dataTestimonials: dataTestimonials,
      data: data,
      loading: loading,
      error: error || null,
    },
  };
}
