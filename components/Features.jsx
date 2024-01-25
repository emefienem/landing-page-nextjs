"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExchange,
  faWallet,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useScroll } from "./GlobalState";

function Features() {
  const { featureRef } = useScroll();
  return (
    <section
      ref={featureRef}
      className="py-10 px-5 mb-10 md:px-32 text-center text-white"
    >
      <div>
        <span className="text-[#8470FF]">Top Features</span>
        <h2 className="text-xl md:text-5xl mt-4 mb-14 text-white">
          Key Features of Swiftyex(Bot)
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="bg-[#2B1762] text-center py-8 px-6 rounded-2xl">
          <div className="mt-3">
            <FontAwesomeIcon
              icon={faExchange}
              className="bg-[#5C3ED4] p-7 text-white rounded-full text-3xl"
            />
          </div>
          <h2 className="text-3xl text-white my-4">Unlimited Transaction</h2>
          <span className="text-[#898CA9]">
            Unlock the potential of unlimited transactions, ensuring you have
            the freedom to explore and execute trades without constraints.
          </span>
        </div>
        <div className="bg-[#2B1762] text-center py-8 px-6 rounded-2xl">
          <div className="mt-3">
            <FontAwesomeIcon
              icon={faWallet}
              className="bg-[#5C3ED4] p-7 text-white rounded-full text-3xl"
            />
          </div>
          <h2 className="text-3xl text-white my-4">
            StraightForward Transaction
          </h2>
          <span className="text-[#898CA9]">
            Experience a seamless and user-friendly exchange interface,
            simplifying the trading process and making it accessible to both
            beginners and seasoned traders.
          </span>
        </div>
        <div className="bg-[#2B1762] text-center py-8 px-6 rounded-2xl">
          <div className="mt-3">
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="bg-[#5C3ED4] p-7 text-white rounded-full text-3xl"
            />
          </div>
          <h2 className="text-3xl text-white my-4">Exchange Messenger</h2>
          <span className="text-[#898CA9]">
            Stay connected with real-time updates and insights through Swifty,
            keeping you informed in the dynamic world of crypto as well as
            today&apos;s rates and more.
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-16 items-end text-white text-center mt-24  md:mb-24 pt-16 md:text-left">
        <div className="pt-20 md:w-1/2">
          <h2 className="text-white text-2xl md:text-5xl">
            Ready to elevate your crypto trading experience?
          </h2>
          <p className="mt-4 mb-5 px-8 md:px-0 text-xs md:text-base">
            Start your free trial now and unlock a world of unlimited
            transactions, intelligent features, and seamless exchanges. Join us
            on the path to smarter, more profitable trading. Let&apos;s make
            every trade count
          </p>
          <button className="bg-[#5C3ED4] px-10 py-3 rounded-xl ">
            Get started
          </button>
        </div>

        <div className="mx-24 md:mx-auto mt-8 md:mt-0">
          <Image
            src="/robot.png"
            width={187}
            height={287}
            alt="Swifty Robot"
            className="max-w-[600px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
