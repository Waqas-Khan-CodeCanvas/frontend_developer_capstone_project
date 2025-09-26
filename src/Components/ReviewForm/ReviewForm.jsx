import React, { useState } from 'react';
import './ReviewForm.css';

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
    <div className='review-form-container'>
      {!showForm && (
        <>
          <h1>Reviews</h1>
          <table>
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Doctor Name</th>
                <th>Doctor Specialty</th>
                <th className='provide-feedback'>Provide feedback</th>
                <th>Review Given</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => (
                <tr key={review.id}>
                  <td>{index + 1}</td>
                  <td>{review.name}</td>
                  <td>{review.specialty}</td>
                  <td className='provide-feedback'>{review.feedback}</td>
                  <td>{review.reviewGiven ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button 
            className='review-form-submit' 
            onClick={handleFeedback} 
            disabled={hasSubmittedReview}
            style={{ backgroundColor: hasSubmittedReview ? 'gray' : '', cursor: hasSubmittedReview ? 'not-allowed': 'pointer' }}
          >
            Submit a Review
          </button>
        </>
      )}

      {showForm && (
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback</h2>
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div>
            <label htmlFor="name">Doctor's Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" name="rating" value={formData.rating} onChange={handleChange} min="0" max="5" />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}

      {submittedMessage && (
        <div className='submit-message'>
          <h3>Submitted Message:</h3>
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewsAndFeedback;
