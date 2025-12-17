import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero" className="flex px-25">
      <div className="flex-1 flex gap-7 flex-col justify-center items-center">
        <h1 className="text-5xl text-center font-light">
          BORSADA KAZANMAK ÇOK KOLAY, YETER Kİ KAYBETME...
        </h1>
        <p className="text-center text-3xl">
          <span className="text-green-700">Uzman Yatırımcı</span> Şevket Şahane
        </p>
      </div>
      <div className="flex-1 flex justify-end">
        <Image
          alt="sevket"
          width={834}
          height={864}
          className="w-150 rounded-r-[70px] rounded-l-[10px] "
          src="/images/sevket.png"
        />
      </div>
    </div>
  );
};

export default Hero;
