import React from "react";
import TeamWork from "@/public/TeamWork.svg";
const About = () => {
  return (
    <div className="flex flex-row justify-center space-x-48 py-4">
      <img src={TeamWork.src} alt="" className="w-[500px]" />
      <div className="pt-32">
        <p className="text-center text-2xl font-bold">អំពីយើង</p>
        <p className="text-md sm:text-lg py-6 sm:py-8 md:w-[500px] sm:w-[400px] font-light">
          Empower U
          គឺជាវេទិកាមួយដែលត្រូវបានរចនាឡើងដើម្បីភ្ជាប់គម្លាតរវាងអ្នកជំនាញវ័យក្មេង
          និងចំណេះដឹងផ្នែកច្បាប់ការងារសំខាន់ៗ។
          ពួកយើងជឿជាក់ថាការយល់ដឹងអំពីសិទ្ធិរបស់អ្នកគឺជាជំហានដំបូងឆ្ពោះទៅរកកន្លែងការងារមួយដែលមានយុត្តិធម៌
          និងប្រកបដោយការគោរព។ បេសកកម្មរបស់យើងគឺផ្តល់សិទ្ធិអំណាចដល់សិស្សានុសិស្ស
          និងនិស្សិតបញ្ចប់ការសិក្សាថ្មីៗ
          ដោយផ្តល់នូវប្រភពធនធានដែលទាក់ទងនឹងច្បាប់ការងារ គោលនយោបាយកន្លែងធ្វើការ
          និងសិទ្ធិការងារ។
        </p>
      </div>
    </div>
  );
};

export default About;
