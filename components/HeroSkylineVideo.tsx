"use client";

import { useEffect, useRef } from "react";

const PLAYBACK_RATE = 1.15;

export function HeroSkylineVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultPlaybackRate = PLAYBACK_RATE;
    video.playbackRate = PLAYBACK_RATE;

    const keepPlaybackRate = () => {
      video.playbackRate = PLAYBACK_RATE;
    };

    video.addEventListener("loadedmetadata", keepPlaybackRate);
    video.addEventListener("play", keepPlaybackRate);

    return () => {
      video.removeEventListener("loadedmetadata", keepPlaybackRate);
      video.removeEventListener("play", keepPlaybackRate);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="panorama-hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/video/dallas-skyline-hero-poster.jpg"
      aria-hidden="true"
    >
      <source src="/video/dallas-skyline-hero.mp4" type="video/mp4" />
    </video>
  );
}
