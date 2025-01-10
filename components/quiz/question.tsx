"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SlArrowLeftCircle } from "react-icons/sl";

const QuizUI = () => {
  const questions = [
    {
      id: 1,
      question:
        "តើក្នុងមួយថ្ងៃកម្មករនិយោជិតទាំងពីរភេទតម្រូវឱ្យធ្វើការប៉ុន្មានម៉ោងក្នុងមួយថ្ងៃ?",
      choices: ["៨ម៉ោងក្នុងមួយថ្ងៃ", "៥ម៉ោងក្នុងមួយថ្ងៃ", "១០ម៉ោងក្នុងមួយថ្ងៃ"],
      correctAnswer: "៨ម៉ោងក្នុងមួយថ្ងៃ",
    },
    {
      id: 2,
      category: 2,
      question:
        "តើក្នុងមួយថ្ងៃកម្មករនិយោជិតទាំងពីរភេទតម្រូវឱ្យធ្វើការប៉ុន្មានម៉ោងក្នុងមួយអាទិត្យ?",
      choices: [
        "៤៦ម៉ោងក្នុងមួយអាទិត្យ",
        "៤៩ម៉ោងក្នុងមួយអាទិត្យ",
        "៤៨ម៉ោងក្នុងមួយអាទិត្យ",
      ],
      correctAnswer: "៤៨ម៉ោងក្នុងមួយអាទិត្យ",
    },
    {
      id: 3,
      category: 2,
      question: "តើប្រភេទនៃការឈប់សម្រាកមានប៉ុន្មានប្រភេទ?",

      choices: ["3", "4", "ចម្លើយទាំងពីខាងលើ"],
      correctAnswer: "ចម្លើយទាំងពីខាងលើ",
    },
    {
      id: 4,
      category: 2,
      question:
        "តើស្រ្តីមានផ្ទៃពោះជាមធ្យមអាចឈប់សម្រាកបានប៉ុន្មានខែនៅក្នុងអំឡុងពេលកំពុងមានផ្ទៃពោះ?",

      choices: ["៣ ខែ", "២​ ខែ", "៤​​ ខែ"],
      correctAnswer: "២​ ខែ",
    },
    {
      id: 5,
      category: 2,
      question: "តើការបំបៅកូ​នគិតចូលក្នុងម៉ោងឈប់សម្រាកដែរឬទេ?",

      choices: ["មិនបាន", "បាន", "មិនដឹង"],
      correctAnswer: "បាន",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleNext = () => {
    if (selectedAnswer === "") {
      alert("សូមជ្រើសរើសចម្លើយមុនពេលបន្ត!");
      return;
    }
    if (currentQuestion < questions.length - 1) {
      setSelectedAnswer("");
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("អ្នកបានបញ្ចប់ការចាប់ផ្តើម!");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setSelectedAnswer("");
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div>
      <SlArrowLeftCircle
        onClick={handleGoBack}
        size={30}
        className="mt-6 ml-8"
      />
      <div className="flex flex-col items-center  py-12">
        <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-lg font-semibold mb-4">
            សំណួរ {currentQuestion + 1} / {questions.length}
          </h1>
          <p className="text-xl font-bold pb-4">
            {questions[currentQuestion].question}
          </p>
          <div className="space-y-4">
            {questions[currentQuestion].choices.map((choice, index) => (
              <label
                key={index}
                className={`flex items-center p-4 border rounded-lg cursor-pointer ${
                  selectedAnswer === choice
                    ? "bg-gray-200 border-blue-500"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="answer"
                  value={choice}
                  checked={selectedAnswer === choice}
                  onChange={() => setSelectedAnswer(choice)}
                  className="form-radio h-5 w-5 text-blue-500 mr-4"
                />
                {choice}
              </label>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center px-4 py-2 bg-gray-200 text-gray-600 rounded-lg shadow hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="mr-2">←</span> ថយក្រោយ
            </button>
            <button
              onClick={handleNext}
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
            >
              បន្ត <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizUI;
