import "../public/images/OTT-Whitelabel-Background.png";

export default function MainVideo() {
  return (
    <div>
      <video
        src={process.env.VIDEO_URL_800}
        controls
        placeholder="/OTT-Whitelabel-Background.png"
      ></video>
    </div>
  );
}
