"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useScroll } from "./GlobalState";

function Header() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection, homeRef, featureRef, rateRef, telegramRef } =
    useScroll();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`px-0 md:px-20 flex justify-between items-center fixed w-full z-20 ${
        scrolled ? "bg-black" : "bg-transparent"
      } py-3 md:py-10`}
    >
      <Image
        src="/logo.png"
        width={400}
        height={100}
        className="pl-0 md:pl-5 max-w-[250px]"
        alt="Swifty Logo"
      />
      <div className="block md:hidden" onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={faBars}
          className=" bg-[#583acf] p-2 rounded absolute top-5 right-3 text-white"
        />
      </div>

      <ul
        className={`flex flex-col uppercase fixed top-0 right-0 w-52 h-[90vh]  bg-purple-50 justify-start items-start md:justify-between text-[#000] transition-all pt-20 pl-2 pb-0 pr-0 md:pl-0  ${
          menu ? "right-0" : "right-[400px]"
        } md:list-none md:flex-row md:space-x-6 md:pr-11 md:text-[#fff]  md:py-0 md:h-auto md:relative md:justify-end md:bg-transparent cursor-pointer`}
      >
        <li
          onClick={() => {
            scrollToSection(homeRef);
            toggleMenu();
          }}
          className="mb-10 md:mb-0"
        >
          Home
        </li>
        <li
          onClick={() => {
            scrollToSection(featureRef);
            toggleMenu();
          }}
          className="mb-10 md:mb-0"
        >
          Features
        </li>
        <li
          onClick={() => {
            scrollToSection(rateRef);
            toggleMenu();
          }}
          className="mb-10 md:mb-0"
        >
          Rates
        </li>
        <li
          onClick={() => {
            scrollToSection(telegramRef);
            toggleMenu();
          }}
          className="mb-10 md:mb-0"
        >
          Telegram
        </li>
        <li onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={faClose}
            className="block absolute md:hidden top-2 left-[10px] bg-[#fff] text-[#000] p-3 border-[#000] rounded-2xl"
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;
