import React from "react";
import { Link } from "react-router-dom";

// Importing icons from Heroicons (outline set)
import {
  ChatBubbleBottomCenterTextIcon, // Instant Consultation
  CalendarDaysIcon,               // Booking Consultation
  ClipboardDocumentCheckIcon,     // Self Checkup
  LightBulbIcon,                  // Health Tips
} from "@heroicons/react/24/outline";

function Services() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
        Get Started With Our Services
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Instant Consultation */}
        <div className="flex flex-col items-center">
          <Link
            to="/instant-consultation"
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 w-full text-center border border-transparent hover:border-blue-300"
          >
            <ChatBubbleBottomCenterTextIcon className="w-20 h-20 text-blue-500 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
              Instant Consultation
            </h4>
          </Link>
        </div>

        {/* Booking Consultation */}
        <div className="flex flex-col items-center">
          <Link
            to="/booking-consultation"
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 w-full text-center border border-transparent hover:border-blue-300"
          >
            <CalendarDaysIcon className="w-20 h-20 text-blue-500 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
              Booking Consultation
            </h4>
          </Link>
        </div>

        {/* Self Checkup */}
        <div className="flex flex-col items-center">
          <Link
            to="/self-checkup"
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 w-full text-center border border-transparent hover:border-blue-300"
          >
            <ClipboardDocumentCheckIcon className="w-20 h-20 text-blue-500 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
              Self Checkup
            </h4>
          </Link>
        </div>

        {/* Health Tips */}
        <div className="flex flex-col items-center">
          <Link
            to="/health-tips"
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 w-full text-center border border-transparent hover:border-blue-300"
          >
            <LightBulbIcon className="w-20 h-20 text-blue-500 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
              Health Tips and Guidance
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
