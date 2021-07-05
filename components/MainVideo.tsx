import ReactPlayer from "react-player";

export default function MainVideo() {
  return (
    <div className="flex justify-center">
      <ReactPlayer url={process.env.NEXT_PUBLIC_VIDEO_URL} controls />
    </div>
  );
}
