import Image from "next/image";
import Link from "next/link";

export default function Card({ data }) {
  return (
    <div className="flex overflow-hidden">
      {data.allVideos.items.map((video) => {
        return (
          <div key={video.id}>
            <Link href={`/videos/${video.id}`}>
              <a>
                <Image
                  src={video.poster}
                  alt="video picture"
                  width={250}
                  height={250}
                />
              </a>
            </Link>
            <p className="whitespace-nowrap overflow-ellipsis overflow-hidden w-full">
              {video.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
