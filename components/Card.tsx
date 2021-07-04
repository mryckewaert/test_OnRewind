import Image from "next/image";

export default function Card({ data }) {
  return (
    <div>
      {data.allVideos.items.map((video, index) => {
        <div key={index}>
          <Image src={video.poster} alt="video picture" />
        </div>;
      })}
    </div>
  );
}
