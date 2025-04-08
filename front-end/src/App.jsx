import React from "react";
import { Route, Routes } from "react-router-dom";
import FeedbackTable from "./components/FeedbackTable";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <div className="container-fluid">
      <Routes>        
        <Route path="/" element={<FeedbackTable />} />
        <Route path="/feedback-form" element={<FeedbackForm />} />
      </Routes>
    </div>
  );
}

export default App;
