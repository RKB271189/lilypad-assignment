import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
function FeedbackTable() {
  const navigate = useNavigate();

  const handleNavigateToForm = () => {
    navigate("/feedback-form");
  };
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
          <select className="form-select">
            <option value="">Filter by Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Message</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackTable;
