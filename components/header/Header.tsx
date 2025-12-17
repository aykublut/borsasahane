"use client";

import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const links = [
    { text: "Sevket", href: "hero", offset: -120 },
    { text: "Risk", href: "features", offset: -81 },
    { text: "Yatırım", href: "secondHero", offset: -95 },
  ];
  return (
    <header className="fixed z-9999 top-0 left-0 w-full px-25 py-2 flex justify-between backdrop-blur-xl bg-emerald-950/80">
      <Image alt="logo" width={100} height={100} src="/images/logo.png" />
      <nav className="flex justify-center items-center gap-7">
        {links.map((link) => (
          <Link
            key={link.text}
            className="cursor-pointer text-green-400 font-light text-lg"
            to={link.href}
            smooth={true}
            offset={link.offset} // header + ekstra yukarı kaydırma
            duration={500}
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
