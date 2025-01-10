"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { SlArrowDown } from "react-icons/sl";
import Link from "next/link";
import { FiAlignJustify } from "react-icons/fi";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".menu") && !target.closest(".burger")) {
        setMobileMenuOpen(false);
        setOpenMenuIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-row justify-between shadow-md shadow-slate-200">
      <div className="px-10 py-2">
        <Image src={logo} alt="Logo" className="w-20" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex md:flex flex-row pr-32 py-8 gap-12 text-xl relative">
        <Link href="/">
          <p className="cursor-pointer">ទំព័រដើម</p>
        </Link>
        <div className="menu relative">
          <div
            className="flex flex-row gap-2 items-center cursor-pointer"
            onClick={() => toggleDropdown(0)}
          >
            <p>អត្ថបទ</p>
            <SlArrowDown size={15} className="mt-1" />
          </div>
          {openMenuIndex === 0 && (
            <div className="absolute top-10 left-0 bg-white border rounded-lg shadow-lg z-50 text-base">
              <ul className="py-2">
                <Link href="/leave">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    ច្បាប់ឈប់សម្រាក
                  </li>
                </Link>
                <Link href="/nssf">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    បសស (បេឡាជាតិសន្តិសុខសង្គម)
                  </li>
                </Link>
                <Link href="/contract">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    កិច្ចសន្យាការងារ
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>

        <div className="menu relative">
          <div
            className="flex flex-row gap-2 items-center cursor-pointer"
            onClick={() => toggleDropdown(1)}
          >
            <p>តេស្ត</p>
            <SlArrowDown size={15} className="mt-1" />
          </div>
          {openMenuIndex === 1 && (
            <div className="absolute top-10 left-0 bg-white border rounded-lg shadow-lg z-50 text-base">
              <ul className="py-2">
                <Link href="/leave/quiz">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    ច្បាប់ឈប់សម្រាក
                  </li>
                </Link>

                <Link href="/nssf/quiz">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    បសស (បេឡាជាតិសន្តិសុខសង្គម)
                  </li>
                </Link>
                <Link href="/contract/quiz">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    កិច្ចសន្យាការងារ
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>

        <Link href="/about">
          <p className="cursor-pointer">អំពីយើង</p>
        </Link>
      </div>

      {/* Mobile Navigation */}
      <FiAlignJustify
        size={25}
        className="burger sm:hidden m-8 cursor-pointer"
        onClick={toggleMobileMenu}
      />
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border rounded-lg shadow-lg z-50 text-base sm:hidden">
          <ul className="py-4 px-8 space-y-4">
            <Link href="/">
              <li className="cursor-pointer">ទំព័រដើម</li>
            </Link>
            <div className="menu relative">
              <div
                className="flex flex-row gap-2 items-center cursor-pointer"
                onClick={() => toggleDropdown(0)}
              >
                <p>អត្ថបទ</p>
                <SlArrowDown size={15} className="mt-1" />
              </div>
              {openMenuIndex === 0 && (
                <ul className="py-2">
                  <Link href="/leave">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      ច្បាប់ឈប់សម្រាក
                    </li>
                  </Link>
                  <Link href="/nssf">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      បសស (បេឡាជាតិសន្តិសុខសង្គម)
                    </li>
                  </Link>
                  <Link href="/contract">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      កិច្ចសន្យាការងារ
                    </li>
                  </Link>
                </ul>
              )}
            </div>
            <div className="menu relative">
              <div
                className="flex flex-row gap-2 items-center cursor-pointer"
                onClick={() => toggleDropdown(0)}
              >
                <p>តេស្ត</p>
                <SlArrowDown size={15} className="mt-1" />
              </div>
              {openMenuIndex === 0 && (
                <ul className="py-2">
                  <Link href="/leave/quiz">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      ច្បាប់ឈប់សម្រាក
                    </li>
                  </Link>
                  <Link href="/nssf/quiz">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      បសស (បេឡាជាតិសន្តិសុខសង្គម)
                    </li>
                  </Link>
                  <Link href="/contract/quiz">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      កិច្ចសន្យាការងារ
                    </li>
                  </Link>
                </ul>
              )}
            </div>
            <Link href="/about">
              <li className="cursor-pointer pt-4">អំពីយើង</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
