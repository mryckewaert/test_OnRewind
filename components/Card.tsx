import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Card({ data }) {
  const router = useRouter();

  return (
    <div className="flex justify-center">
      {data.allVideos.items.map((video) => {
        return (
          <div key={video.id} className="mr-2">
            <Link href={`/videos/${video.id}?previous=${router.pathname}`}>
              <a className="flex justify-center">
                <Image
                  src={video.poster}
                  alt="video picture"
                  width={250}
                  height={250}
                />
              </a>
            </Link>
            <p className="flex justify-center">{video.name}</p>
          </div>
        );
      })}
    </div>
  );
}
