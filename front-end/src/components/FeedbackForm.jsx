import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FeedbackForm() {
  const navigate = useNavigate();

  const handleNavigateToTable = () => {
    navigate("/");
  };

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    const feedbackData = { name, message, rating };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/feedback",
        feedbackData
      );
      setName("");
      setMessage("");
      setRating("");
      setSuccess(response.data.message);
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

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Add Feedback</h1>
      {success && (
        <div className="alert alert-success" role="alert">
          {success}
        </div>
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="row mb-3">
        <div className="col-md-2 offset-md-10">
          <button
            className="btn btn-primary w-100"
            onClick={handleNavigateToTable}
          >
            Show Feedbacks
          </button>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="name"
                className={`form-label ${error ? "text-danger" : ""} ${
                  success ? "text-success" : ""
                }`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="message"
                className={`form-label ${error ? "text-danger" : ""} ${
                  success ? "text-success" : ""
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                className="form-control"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label
                htmlFor="rating"
                className={`form-label ${error ? "text-danger" : ""} ${
                  success ? "text-success" : ""
                }`}
              >
                Rating
              </label>
              <select
                id="rating"
                className="form-select"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              >
                <option value="">Select rating</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>

            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Feedback"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;
