"use client";
import React from "react";
import Image from "next/image";
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
    </section>
  );
}

export default Footer;
