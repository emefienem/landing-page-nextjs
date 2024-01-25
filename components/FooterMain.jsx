import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function FooterMain() {
  return (
    <footer className="relative py-20 md:py-20 px-16 md:px-24 xl:px-36 bg-[#110E2F] text-[#E10F6] flex flex-col md:flex-row justify-between text-sm overflow-hidden pb-0 md:pb-20">
      <div className="pb-24 max-w-[380px] text-center md:text-left text-white/70">
        <p className="pb-4">
          Swiftyex Box is your trusted partner in the world of currency trading
          we redefine the way you exchange money, making it is simple as
          chatting with a seasoned trader.
        </p>
        <p className="pb-4">
          Sign up to get the latest in Swifty news, discounts and more
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Email Address"
            className="outline-none border-none text-[#1F1548] rounded p-3 mt-5 w-full md:w-fit"
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-[#000] absolute ml-56 md:ml-40 mt-8 "
          />
        </div>
      </div>

      <div className="text-white/30 flex flex-row md:flex-col w-full md:w-fit justify-between md:justify-start md:gap-6 mb-10 md:mb-0">
        <div className="cursor-pointer">Home</div>
        <div className="cursor-pointer">Features</div>
        <div className="cursor-pointer">Rate</div>
        <div className="cursor-pointer">Telegram</div>
      </div>

      <div className=" text-white/30 flex flex-row md:flex-col w-full md:w-fit justify-center md:justify-start gap-20 md:gap-6 mb-10 md:mb-0">
        <div className="mb-5 hidden md:block">
          Privacy Policy and Terms of Service
        </div>
        <div>SwiftyEx(Bot) Privacy Policy</div>
        <div className="mt-32 absolute right-48 hidden md:block">
          <Image
            src="/Frame.png"
            width={200}
            height={350}
            alt="Swifty Robot2"
          />
        </div>
      </div>
    </footer>
  );
}

export default FooterMain;
