"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useScroll } from "./GlobalState";

function Rates() {
  const { rateRef } = useScroll();
  return (
    <section className="py-10 px-10 md:px-32 md:pt-20 text-center text-white">
      <div className=" ">
        <h2 className="text-2xl md:text-5xl max-w-[600px] w-fit mx-auto">
          Buy and sell with the lowest fees in the industry
        </h2>
        <p className="max-w-[600px] w-fit mx-auto mt-3 text-xm">
          Maximize your profits and minimize costs as you navigate the crypto.
          Join us and take control of your trades with fees that won't weigh you
          down.
        </p>
        <div className="flex mt-10 justify-center py-1 mb-8">
          <button className="text-[#B982FF] px-2">Learn More</button>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="mt-1 text-[#B982FF]"
          />
        </div>
      </div>

      <div
        ref={rateRef}
        className="flex justify-center items-center mb-5 pb-0 md:pb-20"
      >
        <Image src="/table.png" width={1000} height={300} alt="Rates" />
      </div>
    </section>
  );
}

export default Rates;
