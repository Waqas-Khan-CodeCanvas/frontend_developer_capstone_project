import React from "react";

function HealthBlog() {
  return (
   <div className="min-h-screen bg-white py-10 px-4">
  <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center ">
    Health Tips and Guidance
  </h1>

  <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
    {/* Tip 1 */}
    <div className="bg-white shadow rounded-lg p-6 border hover:shadow-lg transition duration-300 w-full">
      <h3 className="text-xl font-semibold text-blue-600 mb-2 text-left underline cursor-pointer">
        Stay Hydrated
      </h3>
      <p className="text-gray-700 text-sm mb-1">
        Drink plenty of water throughout the day to keep your body functioning optimally. 
        Aim for at least 8 glasses (about 2 liters) daily, adjusting for activity level and climate.
      </p>
      <p className="text-gray-600 text-sm">
        Dehydration can lead to fatigue, headaches, and poor concentration. Always keep a water bottle handy.
      </p>
    </div>

    {/* Tip 2 */}
    <div className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition duration-300 w-full">
      <h3 className="text-xl font-semibold text-blue-600 mb-2 text-left underline cursor-pointer">
        Eat a Balanced Diet
      </h3>
      <p className="text-gray-700 text-sm mb-1">
        Incorporate a variety of fruits, vegetables, lean proteins, and whole grains into your meals.
        Limiting processed foods and sugars can also improve overall health.
      </p>
      <p className="text-gray-600 text-sm">
        A colorful plate is often a healthy one—aim to include different colors of natural foods in every meal.
      </p>
    </div>

    {/* Tip 3 */}
    <div className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition duration-300 w-full">
      <h3 className="text-xl font-semibold text-blue-600 mb-2 text-left underline cursor-pointer">
        Regular Exercise
      </h3>
      <p className="text-gray-700 text-sm mb-1">
        Engage in at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity each week. 
        Incorporate strength training exercises at least twice a week.
      </p>
      <p className="text-gray-600 text-sm">
        Physical activity improves mood, boosts energy, and helps prevent chronic diseases.
      </p>
    </div>

    {/* Tip 4 */}
    <div className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition duration-300 w-full">
      <h3 className="text-xl font-semibold text-blue-600 mb-2 text-left underline cursor-pointer">
        Get Adequate Sleep
      </h3>
      <p className="text-gray-700 text-sm mb-1">
        Aim for 7–9 hours of quality sleep each night. Good sleep hygiene includes a consistent bedtime and a calming environment.
      </p>
      <p className="text-gray-600 text-sm">
        Lack of sleep affects cognitive function, mood, and even immune response.
      </p>
    </div>

    {/* Tip 5 */}
    <div className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition duration-300 w-full">
      <h3 className="text-xl font-semibold text-blue-600 mb-2 text-left underline cursor-pointer">
        Manage Stress
      </h3>
      <p className="text-gray-700 text-sm mb-1">
        Practice stress-relief techniques such as mindfulness, meditation, or yoga. 
        Balance work, rest, and leisure to maintain mental health.
      </p>
      <p className="text-gray-600 text-sm">
        Chronic stress can contribute to anxiety, heart disease, and a weakened immune system.
      </p>
    </div>
  </div>
</div>

  );
}

export default HealthBlog;
