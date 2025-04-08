// src/App.jsx
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import FeedbackTable from "./components/FeedbackTable"; // Your Feedback Table
import FeedbackForm from "./components/FeedbackForm"; // Your Feedback Form

function App() {
  return (
    <div className="container-fluid">
      {/* Define Routes for Feedback Table and Feedback Form */}
      <Routes>
        {/* Route for displaying the feedback table */}
        <Route path="/" element={<FeedbackTable />} />

        {/* Route for the feedback form */}
        <Route path="/feedback-form" element={<FeedbackForm />} />
      </Routes>
    </div>
  );
}

export default App;
