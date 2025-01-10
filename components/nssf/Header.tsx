import React from "react";
import head_nssf from "@/public/head_nssf.svg";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between p-6">
        {/* Left Text Section */}
        <div className="sm:pt-4 sm:pl-10 md:pt-14 md:pl-20">
          {/* Title */}
          <div className="flex flex-row gap-2 font-extrabold text-xl sm:text-3xl md:text-4xl">
            <p className="text-secondary">Empower</p>
            <p className="text-primary">U</p>
          </div>

          {/* Subtitle */}
          <div className="flex flex-col gap-5 font-bold text-4xl py-2 sm:py-6 sm:text-4xl md:text-5xl">
            <p>ស្វែងយល់ពី</p>
            <p className="text-primary">បេឡាជាតិសន្តិសុខសង្គម</p>
          </div>
          <p className="text-md sm:text-lg py-2 sm:py-8 md:w-[500px] sm:w-[400px] font-light">
            ស្វែងយល់អំពីអត្ថប្រយោជន៍សំខាន់នៃបេឡាជាតិសន្តិសុខសង្គមដើម្បីមើលថែ
            សុខភាពរបស់អ្នក​
            ហើយធ្វើឲ្យអ្នកបានទទួលព័ត៌មានពេញលេញអំពីសិទ្ធិរបស់អ្នក។
          </p>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center items-center sm:pr-6">
          <img
            src={head_nssf.src}
            alt="Empower U Illustration"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg"
          />
        </div>
      </div>
      <p className="text-center text-3xl pb-4">អត្ថបទ</p>
    </div>
  );
};

export default Header;
