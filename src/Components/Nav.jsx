import React, { useState } from "react";
import { nikelogo } from "../assets/icons";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { jumpman } from "../assets/icons";
import "../index.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="max-lg:hidden padding-x absolute w-full flex justify-between items-center py-2 px-4 bg-neutral-100 max-container">
        <a href="https://www.nike.com/in/jordan" className="cursor-pointer">
          <img
            className="z-12"
            src={jumpman}
            alt="logo"
            width={18}
            height={20}
          />
        </a>
        <a
          className="now font-[500] tracking-wide text-[14px] cursor-pointer"
          href="https://accounts.nike.com/lookup?client_id=4fd2d5e7db76e0f85a6bb56721bd51df&redirect_uri=https://www.nike.com/auth/login&response_type=code&scope=openid%20nike.digital%20profile%20email%20phone%20flow%20country&state=47c6326c03ec4051857f6e8f9b119aff&code_challenge=jzm3VrzFEOMbpvDr9Ls4LU4ayp3u6RAWlwLJjBGfhWE&code_challenge_method=S256"
        >
          Sign In / Sign Up
          {/* <p className="now font-[500] tracking-wide text-[14px]">Sign In / Sign Up</p>
           */}
        </a>
      </div>

      <header className="padding-x py-1  sm:py-2 md:py-3 lg:py-6 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={nikelogo} alt="logo" width={84} height={30} />
          </a>

          <div className="hidden max-sm:flex max-lg:flex">
            <div className="menu-icon cursor-pointer" onClick={toggleMenu}>
              <img src={hamburger} alt="menu" width={24} height={24} />
            </div>
            {menuOpen && (
              <ul className="absolute top-full left-0 bg-white w-full py-4 px-2 shadow-md">
                {navLinks.map((item) => (
                  <li key={item.label} className="mb-2">
                    <a
                      href={item.href}
                      className="font-montserrat leading-normal text-lg text-slate-grey"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="max-lg:hidden  text-center">
            <ul className="flex gap-10 font-[500]">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="now leading-normal text-lg text-slate-grey"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
