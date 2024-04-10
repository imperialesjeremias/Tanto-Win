import React, { useEffect, useState } from "react";
import logo from "/src/images/LogoTW1.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
  Spinner,
  Avatar,
  Image,
} from "@nextui-org/react";
import { FiLogIn } from "react-icons/fi";
import SelectLanguageDropdown from "./SelectLanguageDropdown";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [condition, setCondition] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (position >= sectionTop && position < sectionTop + sectionHeight) {
          setCondition(section.getAttribute("id"));
        }
      });
      if (position < 100) {
        setCondition("");
      }
      setIsScrolled(position >= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
  const currentSection = location.hash.substring(1);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "Service", "About", "Contact"];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`bg-transparent filter-none fixed ${
        isScrolled ? "custom-navbar " : ""
      }`}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarBrand className="flex sm:justify-start justify-center">
        {isScrolled ? (
          <a
            color="white"
            className="flex justify-center items-center"
            href="#home"
          >
            <img
              src={logo}
              width={72}
              alt="TantoWinLogo"
              className={`${isScrolled ? "filter invert" : ""}`}
            />
            <div
              className={`border-l-2  h-[35px] ml-4 px-4 hidden md:flex items-center ${
                isScrolled ? "border-black" : "border-white"
              }`}
            >
              <span
                className={` font-semibold text-xl active:scale-[0.98] duration-75 ease ${
                  isScrolled ? "text-black " : "text-white"
                }`}
              >
                TANTO WIN
              </span>
            </div>
          </a>
        ) : (
          <Link
            color="white"
            className="flex justify-center items-center"
            to="#home"
          >
            <img
              src={logo}
              width={72}
              alt="TantoWinLogo"
              className={` min-w-14 ${isScrolled ? "filter invert" : ""}`}
            />
            <div
              className={`border-l-2  h-[35px] ml-4 px-4 hidden md:flex items-center ${
                isScrolled ? "border-black" : "border-white"
              }`}
            >
              <span
                className={` font-semibold text-xl active:scale-[0.98] duration-75 ease ${
                  isScrolled ? "text-black " : "text-white"
                }`}
              >
                TANTO WIN
              </span>
            </div>
          </Link>
        )}
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        <NavbarItem
          className={`
          ${
            condition === "home" || condition === ""
              ? "selected-section"
              : isScrolled
              ? "animated-link-scrolled"
              : "animated-link"
          }`}
        >
          <a className="font-semibold text-lg" href="#home">
            Home
          </a>
        </NavbarItem>
        <NavbarItem
          className={`${
            condition === "service"
              ? "selected-section"
              : isScrolled
              ? "animated-link-scrolled"
              : "animated-link"
          }`}
        >
          <a className="font-semibold text-lg" href="#service">
            Service
          </a>
        </NavbarItem>
        <NavbarItem
          className={`${
            condition === "about"
              ? "selected-section"
              : isScrolled
              ? "animated-link-scrolled"
              : "animated-link"
          }`}
        >
          <a className="font-semibold text-lg" href="#about">
            About
          </a>
        </NavbarItem>
        <NavbarItem
          className={`${
            condition === "contact"
              ? "selected-section"
              : isScrolled
              ? "animated-link-scrolled"
              : "animated-link"
          }`}
        >
          <a className="font-semibold text-lg" href="#contact">
            Contact
          </a>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className=" " justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button
            color={`${isScrolled ? "black" : "white"}`}
            className={`font-semibold  ${
              isScrolled ? "text-black border-black" : "text-white"
            }`}
            variant="bordered"
          >
            <FiLogIn className="hidden sm:flex" /> <p className="">Log in</p>
          </Button>
          <div className="flex flex-row items-center gap-4">
            {/* <Link href={"/profile"} className="text-white">
              {user.username}
            </Link> */}
            {/* <Button
              onClick={() => {
                logout();
              }}
              color="danger"
            >
              Logout
            </Button> */}
          </div>
        </NavbarItem>
        <NavbarItem className="">
          <SelectLanguageDropdown isScrolled={isScrolled} />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className={`  h-[100vh]`}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="w-fit" key={`${item}-${index}`}>
            <a
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "white"
              }
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;
