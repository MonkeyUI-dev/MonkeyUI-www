"use client";

import { useRef, useState } from "react";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
  };

  return (
    <div className="video-shell">
      <button
        className={`play-overlay ${playing ? "is-hidden" : ""}`}
        type="button"
        aria-label="Play demo video"
        onClick={handlePlay}
      >
        <span>Play</span>
      </button>
      <video
        ref={videoRef}
        controls
        preload="metadata"
        poster="/after.jpeg"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      >
        <source src="/demo-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
