"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const LogoLoop = () => {
  const logos = [
    "/logos/astor.png",
    "/logos/oyak.png",
    "/logos/gesan.png",
    "/logos/hdfgs.png",
    "/logos/bryat.png",
    "/logos/doas.png",
    "/logos/thy.png",
  ];
  return (
    <Marquee gradient={false} speed={70}>
      <div className="bg-white/70 flex py-2 border-t border-black  ">
        {" "}
        {logos.map((logo) => (
          <Image
            alt="logo"
            key={logo}
            width={150}
            height={20}
            src={logo}
            className="h-12 mx-10"
          />
        ))}
      </div>
    </Marquee>
  );
};

export default LogoLoop;
