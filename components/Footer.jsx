"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useScroll } from "./GlobalState";

function Footer() {
  const { telegramRef } = useScroll();
  return (
    <section className="bg-[#1D1347] text-white px-12 md:px-32 text-center md:text-left pt-20 md:pt-0">
      <div className="flex flex-col md:flex-row gap-16 md:gap-48 items-center py-16">
        <div className="shrink">
          <h2 className="text-2xl md:text-6xl">
            Be among the first to experience Swifty App
          </h2>
          <p className="mt-4 mb-9 text-xm md:text-base px-4 md:px-0">
            Click the button to join the waitlist and chat with Swifty on
            Telegram. Enjoy early access, exclusive perks and front- row seats
            to the future of trading.
          </p>
          <button className="bg-[#5C3ED4] px-9 py-3 rounded-xl">
            Get Started
          </button>
        </div>

        <div ref={telegramRef} className="flex gap-2 shrink-0 pb-12 items-end">
          <Image src="/ad.png" width={681} height={974} alt="Swifty App" />
        </div>
      </div>

      <div className="flex gap-10 px-7 py-5 md:px-0 md:py-0">
        <div className="max-w-[500px] pr-32 text-center md:text-start">
          <p>
            Swiftyex Box is your trusted partner in the world of currency
            trading we redefine the way you exchange money, making it is simple
            as chatting with a seasoned trader. <br /> <br />
            Sign up to get the latest in Swifty news, discounts and more.
          </p>
          <div className=" flex">
            <input
              type="email"
              placeholder="Email Address"
              className="outline-none border-none text-[#1F1548] rounded p-3 mt-5"
            />
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-[#000] absolute ml-44 mt-8 "
            />
          </div>
        </div>

        <div className="max-w-[450px] pr-40 hidden md:block">
          <ul>
            <li className="mb-7">Home</li>
            <li className="mb-7">Features</li>
            <li className="mb-7">Rates</li>
            <li className="mb-7">Telegram</li>
          </ul>
        </div>

        <div className="hidden md:block">
          <ul className="mb-5">
            <li className="mb-7">Privacy Policy and Terms of Service</li>
            <li>Swiftyex(Bot) Privacy Policy</li>
          </ul>
          <div className="mt-20 absolute right-48">
            <Image
              src="/Frame.png"
              width={350}
              height={350}
              alt="Swifty Robot2"
              className="hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
