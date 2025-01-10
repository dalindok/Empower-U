"use client";

import React from "react";
import working from "@/public/working.jpg";
import { SlArrowLeftCircle } from "react-icons/sl";
import { useRouter } from "next/navigation";

const ArtcleDetail = () => {
  const articleData = [
    {
      img: working,
      title: "តើខ្ញុំអាចទូទាត់ម៉ោងធ្វើការដែលខកខានបានទេ?",
      shortdescription:
        "ដើម្បីទូទាត់ម៉ោងធ្វើការដែលខកខាន ដោយមកពីការព្យួរការងារទាំងអស់មួយគ្រាសិន...",
      description:
        "ដើម្បីទូទាត់ម៉ោងធ្វើការដែលខកខាន ដោយមកពីការព្យួរការងារទាំងអស់មួយគ្រាសិន ឬការបន្ថយសកម្មភាពទូទៅនៃអាជីវកម្មដោយគ្រោះចៃដន្យ ឬដោយប្រធានស័ក្តិ ជាអាទិ៍ : អាកាសធាតុមិនល្អក្តី ថ្ងៃបុណ្យ បុណ្យក្នុងស្រុក ហើយនិងព្រឹត្តិការណ៍នានាក្នុងស្រុកក្តី ក្រសួងទទួលបន្ទុកវិស័យការងារអាចចេញ ប្រកាស អនុញ្ញាតឱ្យសហគ្រាសពន្យាថិរវេលាធ្វើការ ប្រចាំថ្ងៃតាមលក្ខណៈដូចខាងក្រោមនេះ៖ ក. ការធ្វើការសង មិនអនុញ្ញាតឱ្យលើសពីសាមសិបថ្ងៃក្នុងមួយឆ្នាំ ហើយត្រូវធ្វើការ សងក្នុងរយៈពេលដប់ប្រាំថ្ងៃ ចាប់ពីថ្ងៃដែលចាប់ផ្តើមធ្វើការវិញ ។ ចំពោះ សហគ្រាសកសិកម្មរយៈពេលនេះត្រូវកំណត់ឱ្យដល់មួយខែ ។ ខ. ការពន្យាថិរវេលាធ្វើការ មិនត្រូវឱ្យហួសពីមួយម៉ោងទេ ក្នុងមួយថ្ងៃ ។ គ. ថិរវេលាធ្វើការ មិនត្រូវឱ្យលើសពីដប់ម៉ោងទេ ក្នុងមួយថ្ងៃ ។​ (មាត្រា ១៤០)",
      reference:
        "https://cdc.gov.kh/laws-and-regulations/employment-and-labor/#:~:text=In%20every%20case%20of%20the...",
    },
  ];
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Back Button */}
      <SlArrowLeftCircle
        onClick={handleGoBack}
        size={30}
        className="m-6 cursor-pointer hover:text-blue-600 transition duration-200"
      />

      {/* Article Content */}
      {articleData.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Image */}
          <img
            src={item.img.src}
            alt="Illustration of the article topic"
            className="w-full max-w-[800px] h-auto object-cover rounded-lg shadow-md"
          />

          {/* Article Details */}
          <div className="m-6 w-full max-w-[1000px] ">
            <p className="text-2xl font-bold py-6 text-center">{item.title}</p>
            <p className="text-lg mx-6 sm:mx-12 p-4 text-left">
              {item.description}
            </p>

            {/* Notes Section */}
            <div className="flex flex-col sm:flex-row sm:space-x-6 pt-4 items-start text-left">
              <p className="text-base text-red-600 font-semibold text-left">
                ចំណាំ៖
              </p>
              <p className="text-base">
                អត្ថបទនេះត្រូវបានសរសេរក្នុងគោលបំណងចែករំលែកចំណេះដឹងទូទៅក្នុងនាមជានិស្សិតស្រាវជ្រាវតែប៉ុណ្ណោះ
                ប្រសិនបើអ្នកចង់ស្វែងយល់បន្ថែមអាចចុចលីងដែលពួកយើងបានដាក់នៅខាងក្រោមបាន។
              </p>
            </div>

            {/* Reference */}
            <p className="text-base mt-4">
              <span className="font-semibold">ឯកសារយោង: </span>
              <a
                href={item.reference}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {item.reference}
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtcleDetail;
