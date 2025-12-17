import Contact from "@/components/contact/Contact";
import Features from "@/components/features/Features";
import { Footer } from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import SecondHero from "@/components/hero/SecondHero";
import LogoLoop from "@/components/logoLoop/LogoLoop";

export default function Page() {
  return (
    <div className="pt-30 flex flex-col gap-8  ">
      <Hero />
      <Features />
      <div className="flex flex-col gap-4">
        <SecondHero />
        <LogoLoop />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
