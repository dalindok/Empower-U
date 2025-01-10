import React from "react";
import leave_head from "@/public/leave_head.svg";

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
            <p className="text-primary">ច្បាប់ឈប់សម្រាក</p>
          </div>

          <p className="text-md sm:text-lg py-2 sm:py-8 md:w-[500px] sm:w-[400px] font-light">
            ស្វែងយល់អំពីសិទ្ធិរបស់អ្នកក្នុងការឈប់សម្រាក
            ដូចជាឈប់ពេលមានជម្ងឺ​ឈប់សម្រាកសម្រាប់ឪពុកម្តាយ និងឈប់សម្រាកបន្ទាន់។
            អភិវឌ្ឍខ្លួនអ្នកដើម្បីតុល្យភាពការងារនិងជីវិតយ៉ាងមានប្រសិទ្ធិភាព។
          </p>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center items-center sm:pr-6">
          <img
            src={leave_head.src}
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
