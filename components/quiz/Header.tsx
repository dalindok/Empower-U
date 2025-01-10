"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { SlArrowLeftCircle } from "react-icons/sl";

const Header = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <div>
      <SlArrowLeftCircle onClick={handleGoBack} size={30} className="m-6" />
      <div className="text-center py-28">
        <div className="text-4xl py-8">
          <p className="py-4">តើអ្នកដឹងអំពីច្បាប់ការងារកម្រិតណា?</p>
          <p>ធ្វើតេស្តនេះដើម្បីដឹងបន្ថែម!</p>
        </div>
        <Link href="/nssf/quiz/question">
          <div className="py-6">
            <button className="bg-primary rounded-xl p-1 w-24 sm:y-2 sm:w-32">
              ចាប់ផ្តើម
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
