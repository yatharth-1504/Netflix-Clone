import { ArrowBackOutlined } from "@mui/icons-material";
import "./Watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://assets.mixkit.co/videos/preview/mixkit-man-sitting-in-an-abandoned-building-352-large.mp4"
      />
    </div>
  );
}
