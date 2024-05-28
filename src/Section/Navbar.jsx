"use client";
import React from "react";
import logo from "../Assets/Images/logo.png";
import burger from "../Assets/Images/burger.svg";
import { motion } from "framer-motion";
import Drawer from "../Components/Drawer";
import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { Link } from "react-scroll";
import NavButton from "../Components/NavButton";
import Image from "next/image";

function Navbar() {
  let [drawerClicked, setDrawerClicked] = useState(false);

  if (!drawerClicked) {
    return (
      <div
        className={
          "pt-5 px-10 pb-2 text-primary flex justify-between items-center  top-0 z-50 "
        }
      >
        <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <Link duration={200} smooth={true} exact to={"home"}>
            <Image height={50} width={50} src={logo} />
          </Link>
        </motion.button>

        <div className="hidden tablet:flex tablet:flex-row font-sans font-semibold gap-10 text-xl laptop:text-3xl ">
          <NavButton text={"Home"} scrollTo="home" />

          <NavButton text={"Socials"} scrollTo="socials" />

          <NavButton text={"Portfolio"} scrollTo="portfolio" />

          <NavButton text={"Contact"} scrollTo="footer" />
        </div>
        <div className="flex tablet:hidden">
          <Image
            src={burger}
            alt=""
            className="w-14 h-14 "
            onClick={() => setDrawerClicked((drawerClicked = !drawerClicked))}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div
        id="home"
        className="h-screen p-20 text-primary flex flex-col items-center box sticky top-0"
      >
        <div className="w-full flex justify-between items-center">
          <Image src={logo} height={100} width={100} />
          <button
            onClick={() => {
              setDrawerClicked((drawerClicked = false));
            }}
          >
            <BsXLg size={"40px"} />
          </button>
        </div>
        <Drawer
          drawerClicked={drawerClicked}
          setDrawerClicked={setDrawerClicked}
        />
      </div>
    );
  }
}

export default Navbar;
