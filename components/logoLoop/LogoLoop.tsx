"use client";
import Image from "next/image";

import Marquee from "react-fast-marquee";

const LogoLoop = () => {
  const logos = [
    { src: "/logos/astor.png", href: "https://astoras.com.tr/en/" },
    { src: "/logos/oyak.png", href: "https://oyakcimento.com/" },
    { src: "/logos/gesan.png", href: "https://gesanelektrik.com.tr/" },
    { src: "/logos/hdfgs.png", href: "https://www.hedefgirisim.com.tr/tr/" },
    { src: "/logos/bryat.png", href: "https://www.borusanyatirim.com/" },
    { src: "/logos/doas.png", href: "https://www.dogusotomotiv.com.tr/" },
    { src: "/logos/thy.png", href: "https://www.turkishairlines.com/tr-int/" },
  ];
  return (
    <Marquee gradient={false} speed={70}>
      <div className="bg-white/50 flex py-2 border-t border-black  ">
        {" "}
        {logos.map((logo) => (
          <Image
            onClick={() => window.open(logo.href, "_blank")}
            alt="logo"
            key={logo.src}
            width={150}
            height={20}
            src={logo.src}
            className="h-12 mx-10 cursor-pointer hover:shadow-2xl shadow-green-600 rounded-[50px]"
          />
        ))}
      </div>
    </Marquee>
  );
};

export default LogoLoop;
