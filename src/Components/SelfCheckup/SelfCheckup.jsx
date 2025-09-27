import React, { useState } from "react";
import {
  HeartIcon,
  UserCircleIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

function SelfCheckup() {
  const [isRevealed, setIsRevealed] = useState(false);

  const toggleParagraph = () => setIsRevealed(!isRevealed);

  return (
    <div className="flex flex-col gap-16 p-6 md:p-12 bg-gradient-to-b from-white to-blue-50 min-h-screen">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Heroicon instead of image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <HeartIcon className="w-52 h-52 text-blue-600 drop-shadow-lg" />
        </div>

        <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-2xl">
          Performing self-health checkups is a vital practice that allows
          individuals to take control of their well-being. By regularly assessing
          different aspects of your physical and mental health, you can spot
          potential issues early and make informed decisions about seeking
          professional medical advice...
        </p>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Big icon instead of image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <UserCircleIcon className="w-52 h-52 text-blue-500 drop-shadow-lg" />
        </div>

        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
            <ClipboardDocumentCheckIcon className="w-7 h-7 text-blue-600" />
            Self Checkup Guide
          </h3>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Performing regular self-health checkups is an essential practice...
            {isRevealed ? (
              <>
                {" "}
                In addition to physical health assessments, it's important to be
                mindful of your emotional state and mental well-being...
              </>
            ) : (
              "..."
            )}
          </p>

          <button
            onClick={toggleParagraph}
            className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            {isRevealed ? "Hide" : "Read more"}
          </button>
        </div>
      </div>

      {/* Section 3 - Tips */}
      <div className="mt-12">
        <h2 className="text-center text-3xl font-bold text-blue-700 mb-8">
          🩺 Quick Self Checkup Tips
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
            <HeartIcon className="w-16 h-16 text-red-500 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Monitor Vital Signs</h4>
            <p className="text-gray-600 text-sm">
              Keep track of your blood pressure, heart rate, and temperature
              regularly to spot any unusual changes.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
            <UserCircleIcon className="w-16 h-16 text-blue-500 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Check Mental Health</h4>
            <p className="text-gray-600 text-sm">
              Reflect on your stress, sleep, and emotional well-being to stay
              balanced and mentally healthy.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
            <ClipboardDocumentListIcon className="w-16 h-16 text-green-500 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Track Daily Habits</h4>
            <p className="text-gray-600 text-sm">
              Observe your diet, exercise, and sleep patterns to build a
              consistent and healthy routine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelfCheckup;
