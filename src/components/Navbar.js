import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/icones/logo.svg";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="max-w-full mx-auto sticky top-0 flex items-start md:items-center justify-between md:px-24 px-4 py-4 text-whiteText bg-bgDark bg-opacity-20 backdrop-blur-sm">
        <Link to={"/"} className="flex items-center space-x-2">
          <Logo className=" w-8 h-8 fill-bgLight" />
          <span className="text-bgLight" id="textLogo">
            avsa
          </span>
        </Link>
        <div>
          <nav className="md:flex hidden md:space-x-14 font-extralight uppercase text-base">
            <Link to={"/"}>Accueil</Link>
            <Link to={"/adoption"}>Adoption</Link>
            <Link to={"/apropos"}>A propos</Link>
            <Link to={"/donation"}>Donation</Link>
            <Link to={"/contact"}>Contact</Link>
          </nav>
          <div className="flex justify-end items-center  md:hidden">
            <button
              className=" inline-flex items-center justify-center mt-1"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            {(ref) => (
              <div className="md:hidden mt-8 h-screen" id="mobile-menu">
                <nav
                  ref={ref}
                  className=" text-whiteText flex flex-col justify-end text-right space-y-4 font-extralight uppercase text-xl">
                  <Link to={"/"}>Accueil</Link>
                  <Link to={"/adoption"}>Adoption</Link>
                  <Link to={"/apropos"}>A propos</Link>
                  <Link to={"/donation"}>Donation</Link>
                  <Link to={"/contact"}>Contact</Link>
                </nav>
              </div>
            )}
          </Transition>
        </div>
      </header>
    </>
  );
};

export default NavBar;
