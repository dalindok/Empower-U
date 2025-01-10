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
        "ដើម្បីទូទាត់ម៉ោងធ្វើការដែលខកខាន ដោយមកពីការព្យួរការងារទាំងអស់មួយគ្រាសិន ឬការបន្ថយសកម្មភាពទូទៅនៃអាជីវកម្មដោយគ្រោះចៃដន្យ ឬដោយប្រធានស័ក្តិ ជាអាទិ៍",
      description:
        "ដើម្បីទូទាត់ម៉ោងធ្វើការដែលខកខាន ដោយមកពីការព្យួរការងារទាំងអស់មួយគ្រាសិន ឬការបន្ថយសកម្មភាពទូទៅនៃអាជីវកម្មដោយគ្រោះចៃដន្យ ឬដោយប្រធានស័ក្តិ ជាអាទិ៍ : អាកាសធាតុមិនល្អក្តី ថ្ងៃបុណ្យ បុណ្យក្នុងស្រុក ហើយនិងព្រឹត្តិការណ៍នានាក្នុងស្រុកក្តី ក្រសួងទទួលបន្ទុកវិស័យការងារអាចចេញ ប្រកាស អនុញ្ញាតឱ្យសហគ្រាសពន្យាថិរវេលាធ្វើការ ប្រចាំថ្ងៃតាមលក្ខណៈដូចខាងក្រោមនេះ៖ ក. ការធ្វើការសង មិនអនុញ្ញាតឱ្យលើសពីសាមសិបថ្ងៃក្នុងមួយឆ្នាំ ហើយត្រូវធ្វើការ សងក្នុងរយៈពេលដប់ប្រាំថ្ងៃ ចាប់ពីថ្ងៃដែលចាប់ផ្តើមធ្វើការវិញ ។ ចំពោះ សហគ្រាសកសិកម្មរយៈពេលនេះត្រូវកំណត់ឱ្យដល់មួយខែ ។ ខ. ការពន្យាថិរវេលាធ្វើការ មិនត្រូវឱ្យហួសពីមួយម៉ោងទេ ក្នុងមួយថ្ងៃ ។ គ. ថិរវេលាធ្វើការ មិនត្រូវឱ្យលើសពីដប់ម៉ោងទេ ក្នុងមួយថ្ងៃ ។​ (មាត្រា ១៤០)",
      reference:
        "https://cdc.gov.kh/laws-and-regulations/employment-and-labor/#:~:text=In%20every%20case%20of%20the,of%20the%20year%20",
    },
  ];
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <div>
      <SlArrowLeftCircle onClick={handleGoBack} size={30} className="m-6" />
      {articleData.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={working.src}
            alt=""
            className="w-[900px] h-[400px] object-cover"
          />
          <div className="m-6">
            <p className="text-center text-2xl font-bold py-6">{item.title}</p>
            <p className="text-lg mx-12">{item.description}</p>
            <p className="text-base mx-12 py-4">ឯកសារយោង: {item.reference}</p>
            <p></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtcleDetail;
