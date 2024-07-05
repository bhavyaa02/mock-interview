import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MockInterview from './pages/MockInterview';
import HistoryComponent from './pages/HistoryComponent'; // Adjust the path as per your directory structure

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MockInterview />} />
          <Route path="/history" element={<HistoryComponent />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
