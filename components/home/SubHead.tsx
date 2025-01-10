import React from "react";
import { PiLightbulbFilamentFill } from "react-icons/pi";
import { FaBrain } from "react-icons/fa6";
import { BiSolidMegaphone } from "react-icons/bi";
const SubHead = () => {
  const data = [
    {
      title: "រៀន",
      description:
        "ស្វែងយល់អំពីច្បាប់ការងារសំខាន់ៗ និងបង្កើនចំណេះដឹងរបស់អ្នកដើម្បីអាចរៀបចំការងារជាមួយភាពជឿជាក់",
      icon: <PiLightbulbFilamentFill />,
    },
    {
      title: "ស្វែងយល់",
      description:
        "បែងចែកសិទ្ធិក្នុងការងាររបស់អ្នកជាចំណុចច្បាស់លាស់ និងអាចអនុវត្តបានដើម្បី សម្រេចការយល់ដឹងល្អ!",
      icon: <FaBrain />,
    },
    {
      title: "អនុវត្ត",
      description:
        "បង្កើនអំណាចដល់ខ្លួនអ្នកដើម្បីការពារ សិទ្ធិនិងបង្កើតកន្លែងធ្វើការដែលមានតុល្យភាពសម្រាប់គ្រប់គ្នា",
      icon: <BiSolidMegaphone />,
    },
  ];
  return (
    <div className="p-4 flex flex-col items-center">
      <p className="text-center py-6 text-xl sm:text-2xl">
        ចាប់ផ្តើមដំណើរដោយភាពជឿជាក់ក្នុងកន្លែងធ្វើការរបស់អ្នកនៅទីនេះ!
      </p>
      <div className="flex flex-col sm:flex-row gap-6 pr-10 pl-10 sm:w-[800px]">
        {data.map((item, index) => (
          <div key={index} className="border-2 border-primary p-4 rounded-lg ">
            <div className="flex flex-row gap-4">
              <span className="rounded-full bg-secondary p-2 text-primary">
                {React.cloneElement(item.icon, { size: 30 })}
              </span>
              <p className="pt-2 font-bold">{item.title}</p>
            </div>
            <p className="w-50 pt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubHead;
