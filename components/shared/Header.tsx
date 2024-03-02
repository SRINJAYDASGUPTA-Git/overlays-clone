import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { RiShoppingBag2Line } from "react-icons/ri";
import SideBar from "./SideBar";

const Header = () => {
  return (
    <div className="w-full flex-center flex-col sticky top-0" >
      <div className="flex-between w-full border-b px-2 md:px-10"> 
        <SideBar/>
        <Link href="/">
          <Image
            src="/images/logo.svg"
            width={90}
            height={100}
            alt="Overlays"
            className="text-black pr-5 md:pr-0"
          />
          {/* <Logo /> */}
        </Link>
        <div className="flex-center gap-6 md:px-12">
          <HiOutlineMail size={25} className="hidden md:block"/>
          <FiUser size={25} className="hidden md:block"/>
          <RiShoppingBag2Line size={25}/>
        </div>
      </div>
      <div className="flex-center">
      </div>
    </div>
  );
};

export default Header;
