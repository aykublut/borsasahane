import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero" className="flex px-25 relative">
      <div className="flex-1 flex gap-7 max-md:absolute max-md:top-10 max-md:left-0 max-md:rounded-t-[50px] max-md:px-25  flex-col justify-center items-center">
        <h1 className="lg:text-5xl max-md:bg-white/70  text-xl md:text-3xl text-center font-light">
          BORSADA KAZANMAK ÇOK KOLAY, YETER Kİ KAYBETME...
        </h1>
        <p className="text-center text-3xl max-md:bg-white/50">
          <span className="text-green-700">Uzman Yatırımcı</span> Şevket Şahane
        </p>
      </div>
      <div className="flex-1 flex justify-end">
        <Image
          alt="sevket"
          width={834}
          height={864}
          className="md:w-150 w-200 rounded-r-[70px] rounded-l-[10px] "
          src="/images/sevket.png"
        />
      </div>
    </div>
  );
};

export default Hero;
