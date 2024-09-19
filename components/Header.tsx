"use client";

import React from "react";
import Image from "next/image";
import HeaderBg from "../public/Header-bg.svg";

const Header = () => {
  return (
    <header className="">
      <Image src={HeaderBg} alt="header bg" />
    </header>
  );
};

export default Header;
