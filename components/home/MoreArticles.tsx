import Link from "next/link";
import React from "react";
import { SlArrowRightCircle } from "react-icons/sl";
const MoreArticles = () => {
  return (
    <div className="text-center py-4">
      <p className="text-2xl font-bold pb-2">ស្វែងរកអត្ថបទផ្សេងទៀត</p>
      <div className="flex flex-col items-center">
        <Link href="/leave">
          <div className="flex justify-between flex-row gap-12 w-[480px] sm:w-[600px] border-2 border-primary p-2 my-2 rounded-lg">
            <p className="rounded-full bg-secondary text-white py-2 px-4">1</p>
            <p className="pt-2">ស្វែងយល់អំពី​ ច្បាប់ឈប់សម្រាក</p>
            <SlArrowRightCircle className="text-secondary pt-1" size={36} />
          </div>
        </Link>
        <Link href="/nssf">
          <div className="flex justify-between flex-row gap-12 w-[480px] sm:w-[600px] border-2 border-primary p-2  my-2  rounded-lg">
            <p className="rounded-full bg-secondary text-white py-2 px-4">2</p>
            <p className="pt-2">ស្វែងយល់អំពី បេឡាជាតិសន្តិសុខសង្គម (បសស)</p>
            <SlArrowRightCircle className="text-secondary pt-1" size={36} />
          </div>
        </Link>
        <Link href="/contract">
          <div className="flex justify-between flex-row gap-1 w-[480px] sm:w-[600px] border-2 border-primary p-2 my-2 rounded-lg">
            <p className="rounded-full bg-secondary text-white py-2 px-4">3</p>
            <p className="pt-2">ស្វែងយល់អំពី កិច្ចសន្យាការងារ</p>
            <SlArrowRightCircle className="text-secondary pt-1" size={36} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MoreArticles;
