"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const t = useTranslations("demo");

  const handlePlay = () => {
    videoRef.current?.play();
  };

  return (
    <div className="video-shell">
      <button
        className={`play-overlay ${playing ? "is-hidden" : ""}`}
        type="button"
        aria-label={t("playLabel")}
        onClick={handlePlay}
      >
        <span>{t("playText")}</span>
      </button>
      <video
        ref={videoRef}
        controls
        preload="metadata"
        poster="/video-cover.jpg"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      >
        <source src="/demo-video.mp4" type="video/mp4" />
        {t("videoFallback")}
      </video>
    </div>
  );
}
