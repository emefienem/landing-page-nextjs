"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useScroll } from "./GlobalState";

function Header() {
  const [menu, setMenu] = useState(false);
  const { scrollToSection, homeRef, featureRef, rateRef, telegramRef } =
    useScroll();
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="px-20 flex justify-between items-center">
      <Image
        src="/logo.png"
        width={400}
        height={100}
        className="pl-5"
        alt="Swifty Logo"
      />
      <div className="block md:hidden" onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={faBars}
          className=" bg-[#583acf] p-2 rounded absolute top-2 right-3 text-white"
        />
      </div>

      <ul
        className={`flex flex-col uppercase fixed top-0 left-0 w-full h-screen bg-[#fff] justify-between items-center opacity-90 z-10 text-[#000] ${
          menu ? "top-0" : "top-full"
        } md:list-none md:flex-row md:space-x-6 md:pr-11 md:text-[#fff]  md:py-0 md:h-auto md:relative md:justify-end md:bg-transparent md:opacity-100 cursor-pointer`}
      >
        <li
          onClick={() => {
            scrollToSection(homeRef);
            toggleMenu();
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            scrollToSection(featureRef);
            toggleMenu();
          }}
        >
          Features
        </li>
        <li
          onClick={() => {
            scrollToSection(rateRef);
            toggleMenu();
          }}
        >
          Rates
        </li>
        <li
          onClick={() => {
            scrollToSection(telegramRef);
            toggleMenu();
          }}
        >
          Telegram
        </li>
        <li onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={faClose}
            className="block md:hidden"
            style={{
              background: "whitesmoke",
              color: "#000",
              padding: "10px",
              borderRadius: "5px",
            }}
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;
