import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiUser, FiSearch } from "react-icons/fi";
import { RiShoppingBag2Line } from "react-icons/ri";
import SideBar from "./SideBar";

const Header = () => {
  return (
    <div className="w-full flex-center">
      <div className="flex-between w-[100vw] border-b px-4 md:px-10"> 
        <SideBar/>
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={70}
            height={100}
            alt="Overlays"
          />
        </Link>
        <div className="flex-center gap-5 md:px-12">
          <HiOutlineMail size={25} className="hidden md:block"/>
          <FiUser size={25} className="hidden md:block"/>
          <RiShoppingBag2Line size={25}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
