"use client";
import React, { useEffect, useRef, useState } from "react";

const Features = () => {
  const [play, setPlay] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef) play ? videoRef?.current?.play() : videoRef?.current?.pause();
  }, [play]);
  return (
    <div
      onMouseEnter={() => setPlay(true)}
      onMouseLeave={() => setPlay(false)}
      className="w-full relative"
      id="features"
    >
      <div className="bg-black/60 scroll-offset h-full  w-full absolute top-0 left-0 flex flex-col justify-center items-center text-center text-white/80 md:gap-10 gap-1">
        <h3 className="md:text-3xl text-xl">
          BENİM GİBİ ZENGİN OLMAK İSTEDİĞİNİ BİLİYORUM AMA
        </h3>
        <h2 className="md:text-6xl text-2xl">OLAMAYACAKSIN</h2>
        <h3 className="md:text-3xl text-xl ">
          SEN KENDİN GİBİ ZENGİN OLMAYA BAK, ÖNCE RİSK YÖNETİMİ SONRA VİSKİ
          YÖNETİMİ...
        </h3>
      </div>

      <video
        ref={videoRef}
        className="w-full"
        autoPlay
        muted
        loop
        preload="none"
      >
        <source src="/sevketpuro.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Features;
