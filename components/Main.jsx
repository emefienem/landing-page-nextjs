"use client";
import { useScroll } from "./GlobalState";
function Main() {
  const { featureRef } = useScroll();

  return (
    <section
      ref={featureRef}
      className="bg-[url('/upp.png')] bg-no-repeat bg-cover bg-scroll h-full flex items-center justify-center text-white pt-20 md:pt-32 text-center pb-[500px] md:pb-[1096px] px-5 md:px-32 md:bg-center flex-col"
    >
      <h1 className="text-4xl md:text-6xl z-20 relative">
        Step into the future of crypto trading with{" "}
        <span className="text-[#DDD2F4]">Swiftyex(Bot)</span>
      </h1>
      <p className="text-white pt-7 text-sm md:text-2xl px-16 md:px-0 pb-8">
        Meet <span className="text-[#8470FF]">Swifty</span>, your human-like
        companion, making every interaction as smooth as a chat with a seasoned
        trader. Intelligence meets simplicity in our fascinating app, even
        allowing seamless bill payments.
      </p>
      <button className="bg-[#5C3ED4] px-16 py-3 rounded-xl">
        Get started
      </button>
    </section>
  );
}

export default Main;
