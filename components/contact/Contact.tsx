import { Button } from "../ui/button";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Image from "next/image";

const Contact = () => {
  return (
    <div id="contact" className="flex px-30 justify-center items-center">
      <div className="flex-1 flex justify-center items-center">
        <form>
          <div className="flex flex-col gap-6">
            <h4 className="text-4xl font-light m-0 p-0">BİZE ULAŞIN</h4>
            <Input
              id="name"
              type="name"
              placeholder="İsminizi giriniz"
              required
              className="w-100"
            />
            <Input
              id="email"
              type="email"
              placeholder="Mailinizi giriniz"
              required
            />

            <Textarea placeholder="Mesajınızı yazın" />

            <Button type="submit" className="w-full cursor-pointer">
              Bize Ulaş
            </Button>
          </div>
        </form>
      </div>
      <div className="flex-1 hidden lg:flex  justify-end">
        <Image
          src="/images/zenginn.png"
          className="w-135 rounded-br-[300px] rounded-l-[30px] shadow-2xl shadow-green-700 border-2 border-white rounded-tr-[30px]"
          width={834}
          height={864}
          alt="zengin"
        />
      </div>
    </div>
  );
};

export default Contact;
