import React from "react";
import head_home from "@/public/head_home.svg";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between p-6">
      {/* Left Text Section */}
      <div className="sm:pt-4 sm:pl-10 md:pt-14 md:pl-20">
        {/* Title */}
        <div className="flex flex-row gap-2 font-extrabold text-xl sm:text-3xl md:text-4xl">
          <p className="text-secondary">Empower</p>
          <p className="text-primary">U</p>
        </div>

        {/* Subtitle */}
        <div className="flex flex-row gap-5 font-bold text-4xl py-4 sm:py-6 sm:text-4xl md:text-5xl">
          <p>ស្វែងយល់ពី</p>
          <p className="text-primary">ច្បាប់ការងារ</p>
        </div>

        {/* Supporting Text */}
        <p className="font-extrabold text-xl sm:text-2xl md:text-3xl">
          ងាយស្រួល និងមានប្រយោជន៍!
        </p>

        <p className="text-md sm:text-lg py-6 sm:py-8 md:w-[500px] sm:w-[400px] font-light">
          តោះស្វែងយល់ពីច្បាប់ការងារ! ទទួលបានព័ត៌មានអំពីច្បាប់ការងារ
          និងបង្កើនសិទ្ធិអំណាចដល់ជីវិតការងាររបស់អ្នក។ ចំណេះដឹងជាថ្នាំងដ៏ខ្លាំង
          សម្រាប់បង្កើតអនាគតល្អ!
        </p>
      </div>

      {/* Right Image Section */}
      <div className="flex justify-center items-center sm:pr-6">
        <img
          src={head_home.src}
          alt="Empower U Illustration"
          className="w-full max-w-sm sm:max-w-md md:max-w-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
