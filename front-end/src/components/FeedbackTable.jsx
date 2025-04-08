import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FeedbackTable() {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterRating, setFilterRating] = useState("");

  const fetchFeedbacks = async (rating = null) => {
    setLoading(true);
    setError(null);

    try {
      const url = "http://localhost:8000/api/feedback";
      const response = rating
        ? await axios.get(url, { params: { rating } })
        : await axios.get(url);
      setFeedbacks(response.data.feedback);
    } catch (err) {
      if (err.response) {
        setError(
          `Error: ${
            err.response.data.error ||
            "An error occurred while submitting feedback."
          }`
        );
      } else if (err.request) {
        setError("No response received from the server.");
      } else {
        setError(`Request failed: ${err.error}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleNavigateToForm = () => {
    navigate("/feedback-form");
  };

  const handleRatingChange = (selectedRating) => {
    setFilterRating(selectedRating);
    fetchFeedbacks(selectedRating || null);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="container mt-3">
      <h1 className="text-center my-4">Customer Feedback</h1>
      <div className="row mb-3">
        <div className="col-md-2 offset-md-10">
          <button
            className="btn btn-primary w-100"
            onClick={handleNavigateToForm}
          >
            Add Feedback
          </button>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-4 offset-md-8">
          <select
            className="form-select"
            value={filterRating}
            onChange={(e) => handleRatingChange(e.target.value)}
          >
            <option value="">Filter by Rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Message</th>
                  <th>Rating</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="3" className="text-center">
                      <div className="spinner-border" role="status"></div>
                    </td>
                  </tr>
                ) : feedbacks.length > 0 ? (
                  feedbacks.map((feedback) => (
                    <tr key={feedback.id}>
                      <td>{feedback.name}</td>
                      <td>{feedback.message}</td>
                      <td>{feedback.rating}</td>
                      <td>{feedback.created_at}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center">
                      No feedbacks available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackTable;
