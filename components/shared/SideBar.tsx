"use client"
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { navLinks } from "@/constants";
  import Link from "next/link";
  import { Separator } from "@/components/ui/separator";
  import { IoMdMenu } from "react-icons/io";
  import { FiSearch } from "react-icons/fi";
const SideBar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Sheet open={isOpen} onOpenChange={()=>setIsOpen(!isOpen)}>
      <SheetTrigger>
      <div className="flex-center gap- place-items-center md:px-2">
          <IoMdMenu size={25} className="block md:hidden"/>
          <FiSearch size={20}/>
          <input
            type="text"
            placeholder="What are you looking for?"
            className="hidden md:block border-none outline-none active:border border-black text-sm w-md"
          />
        </div>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <div className="flex flex-col gap-2 p-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-gray-700 p-2 transition-all ease-in animate-slide-in-left delay-[(index+1) * 200]"
            >
              {link.label}
              <Separator className="mt-2"/>
            </Link>
            
          ))}
        </div>
      </SheetContent>
    </Sheet>

  )
}

export default SideBar