'use client'

import { Link } from "@chakra-ui/react";
import {Menu} from 'lucide-react'
import { useState } from "react"
import Image from "next/image";

export default function NavMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<Boolean>(false)

  return (
    <header>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/home" className="-m-1.5 p-1.5 ">
            <span className="sr-only">Your Company</span>
            <Image className="h-8 w-auto text-primary text-base" 
            src="" 
            alt="Insta tech" 
            width={80}
            height={80}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">

          <Link href='/home' className="text-sm leading-6 text-gray-900 hover:text-primary-hover">
            Home
          </Link>
          <Link href="/news" className="text-sm leading-6 text-gray-900 hover:text-primary-hover">
            News
          </Link>
          <Link href="/blog" className="text-sm leading-6 text-gray-900 hover:text-primary-hover">
            Blog
          </Link>
          <Link href="/video" className="text-sm leading-6 text-gray-900 hover:text-primary-hover">
            Video
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm leading-6 text-gray-900 hover:text-primary-hover">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
