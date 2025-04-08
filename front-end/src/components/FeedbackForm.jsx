import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function FeedbackForm() {
  const navigate = useNavigate();

  const handleNavigateToTable = () => {
    navigate("/");
  };
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Add Feedback</h1>
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
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Enter your feedback"
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="rating" className="form-label">
                Rating
              </label>
              <select className="form-select" id="rating" required>
                <option value="">Select rating</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-success">
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;
