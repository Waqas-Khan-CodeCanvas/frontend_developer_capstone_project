import React, { useState } from 'react';

const currentReviews = [
    { id: 1, name: "Dr. Ben Howell", specialty: "General physician", feedback: 'Great work, very helpful', reviewGiven: true },
    { id: 2, name: "Dr. Michael Brown", specialty: "Dermatologist", feedback: 'Great work, very helpful. Thanks for everything doctor.', reviewGiven: true },
    { id: 3, name: "Dr. Jane Smith", specialty: "Obstetrician", feedback: 'Great work.', reviewGiven: true },
    { id: 4, name: "Dr. John Doe", specialty: "Dentist", feedback: '', reviewGiven: false },
];

const ReviewsAndFeedback = () => {
  const [reviews, setReviews] = useState(currentReviews);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 5,
  });
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [hasSubmittedReview, setHasSubmittedReview] = useState(false); // New state variable

  const handleFeedback = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowWarning(!formData.name || !formData.review || formData.rating <= 0);

    if (formData.name && formData.review && formData.rating > 0) {
      const newReview = {
        id: reviews.length + 1,
        name: formData.name,
        specialty: "General physician",
        feedback: formData.review,
        reviewGiven: true
      };
      setReviews([...reviews, newReview]);
      setShowForm(false);
      setSubmittedMessage(`Thank you for your review of ${formData.name}!`);
      setFormData({ name: '', review: '', rating: 0 });
      setHasSubmittedReview(true); // Set flag to true after a review is submitted
    }
  };

return (
  <div className="max-w-6xl mx-auto p-6">
    {!showForm && (
      <>
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Reviews</h1>
        <div className="overflow-x-auto shadow rounded-lg border border-gray-200 mb-6">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left text-sm uppercase">
                <th className="px-6 py-3">Serial Number</th>
                <th className="px-6 py-3">Doctor Name</th>
                <th className="px-6 py-3">Specialty</th>
                <th className="px-6 py-3">Feedback</th>
                <th className="px-6 py-3">Review Given</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => (
                <tr key={review.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{index + 1}</td>
                  <td className="px-6 py-4 text-sm">{review.name}</td>
                  <td className="px-6 py-4 text-sm">{review.specialty}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{review.feedback}</td>
                  <td className="px-6 py-4 text-sm font-semibold">
                    {review.reviewGiven ? '✅ Yes' : '❌ No'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          className={`px-6 py-2 rounded text-white font-semibold transition ${
            hasSubmittedReview
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          onClick={handleFeedback}
          disabled={hasSubmittedReview}
        >
          Submit a Review
        </button>
      </>
    )}

    {showForm && (
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 space-y-5 border border-gray-200"
      >
        <h2 className="text-2xl font-semibold text-gray-800">Give Your Feedback</h2>

        {showWarning && (
          <p className="text-red-500 text-sm font-medium">⚠️ Please fill out all fields.</p>
        )}

        <div>
          <label htmlFor="name" className="block font-medium text-sm text-gray-700 mb-1">
            Doctor's Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Dr. John Doe"
          />
        </div>

        <div>
          <label htmlFor="review" className="block font-medium text-sm text-gray-700 mb-1">
            Review
          </label>
          <textarea
            id="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your feedback here..."
          />
        </div>

        <div>
          <label htmlFor="rating" className="block font-medium text-sm text-gray-700 mb-1">
            Rating (0 - 5)
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="5"
            className="w-24 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    )}

    {submittedMessage && (
      <div className="mt-6 p-4 text-center">
        <h3 className="text-lg font-medium text-green-800 mb-1">Submitted Message:</h3>
        <p className="text-green-700 text-sm">{submittedMessage}</p>
      </div>
    )}
  </div>
);

};

export default ReviewsAndFeedback;
