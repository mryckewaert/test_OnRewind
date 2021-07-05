import ReactPlayer from "react-player";

export default function MainVideo() {
  return (
    <div>
      <ReactPlayer
        url="https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8"
        controls
      />
    </div>
  );
}
