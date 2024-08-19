"use client"

import { Link } from "@chakra-ui/react";
import {Menu, X} from 'lucide-react'
import Image from "next/image";
import { useState } from "react"
import Logo from "../../../public/image/logo.png"
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const pathname = usePathname();

  const toggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <header>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 relative" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/home" className="-m-1.5 p-1.5 hover:no-underline">
            <Image src={Logo} alt="Logo image" width={200}/>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggle}
          >
            {mobileMenuOpen?
              <X/>
              :
              <Menu />
            }
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">

          <Link href='/home' className={`text-base leading-6 text-gray-900 hover:text-primary-hover ${pathname === '/home' ? 'active' : ''}`}>
            Home
          </Link>
          <Link href="/news" className={`text-base leading-6 text-gray-900 hover:text-primary-hover ${pathname === '/news' ? 'active' : ''}`}>
            News
          </Link>
          <Link href="/blog" className={`text-base leading-6 text-gray-900 hover:text-primary-hover ${pathname === '/blog' ? 'active' : ''}`}>
            Blog
          </Link>
          <Link href="/video" className={`text-base leading-6 text-gray-900 hover:text-primary-hover ${pathname === '/video' ? 'active' : ''}`}>
            Video
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/signin" className={`text-base leading-6 text-gray-900 hover:text-primary-hover ${pathname === '/home' ? 'active' : ''}`}>
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

      </nav>
      {/* Mobile Screen */}
      <ul className={`
      flex-col ${mobileMenuOpen? 'left-0' : '-left-full'} flex lg:hidden gap-y-8 
      bg-purple-100 absolute
      w-full h-[50vh] z-[999] pt-4 pl-8
      transition duration-500
      `}>
        <li>
          <Link href='/home' className="text-sm leading-6 text-red hover:text-primary-hover">
            Home
          </Link>
        </li>
        <li>
          <Link href="/news" className="text-sm leading-6 text-gray hover:text-primary-hover">
            News
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-sm leading-6 text-gray hover:text-primary-hover">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/video" className="text-sm leading-6 text-gray hover:text-primary-hover">
            Video
          </Link>
        </li>


        <li>
          <Link href="/signin" className="text-sm leading-6 text-gray hover:text-primary-hover">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
