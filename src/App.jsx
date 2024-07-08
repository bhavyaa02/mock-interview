// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MockInterview from './pages/MockInterview';
import HistoryComponent from './pages/HistoryComponent';
import InterviewDetails from './pages/InterviewDetails'; // Import the new component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MockInterview />} />
          <Route path="/history" element={<HistoryComponent />} />
          <Route path="/interview-details/:interviewId" element={<InterviewDetails />} /> {/* Add the new route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
