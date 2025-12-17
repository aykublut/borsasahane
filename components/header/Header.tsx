"use client";

import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const links = [
    { text: "Giriş", href: "hero", offset: -120 },
    { text: "Tanıtım", href: "features", offset: -81 },
    { text: "Uzman", href: "secondHero", offset: -97 },
    { text: "İletişim", href: "contact", offset: -178 },
  ];
  return (
    <header className="fixed z-9999 top-0 left-0 w-full px-5 sm:px-10 md:px-15 lg:px-25 py-2 flex justify-between backdrop-blur-xl bg-emerald-950/80">
      <Image alt="logo" width={100} height={100} src="/images/logo.png" />
      <nav className="flex justify-center items-center gap-7">
        {links.map((link) => (
          <Link
            key={link.text}
            className="cursor-pointer text-green-400 font-light text-[15px] md:text-lg"
            to={link.href}
            smooth={true}
            offset={link.offset} // header + ekstra yukarı kaydırma
            duration={700}
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
