// src/pages/HistoryComponent.js
import React from 'react';

const HistoryComponent = () => {
  // Sample data for previous interviews
  const previousInterviews = [
    { id: 1, role: 'Frontend Developer', date: 'June 25, 2024', score: '95/100', difficulty: 'Medium', languages: 'JavaScript', performance: 'Good' },
    { id: 2, role: 'Backend Developer', date: 'June 30, 2024', score: '88/100', difficulty: 'Hard', languages: 'Python', performance: 'Better' },
    // Add more interview data as needed
  ];

  return (
    <div className="bg-gray-200 min-h-screen p-8">
      {/* History Details */}
      <div className="bg-white shadow-2xl rounded-lg p-8 mb-8 max-w-6xl mx-auto w-full transform transition duration-500 hover:scale-105">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>History</h2>
          <button onClick={() => window.history.back()} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none">
            <svg className="w-6 h-6 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back
          </button>
        </div>

        {/* Table for previous interviews */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Role</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Score</th>
                <th className="py-3 px-6 text-left">Difficulty</th>
                <th className="py-3 px-6 text-left">Languages</th>
                <th className="py-3 px-6 text-left">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {previousInterviews.map(interview => (
                <tr key={interview.id} className="hover:bg-gray-100">
                  <td className="py-4 px-6">{interview.role}</td>
                  <td className="py-4 px-6">{interview.date}</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center">
                      <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L19 7"></path>
                      </svg>
                      {interview.score}
                    </span>
                  </td>
                  <td className="py-4 px-6">{interview.difficulty}</td>
                  <td className="py-4 px-6">{interview.languages}</td>
                  <td className="py-4 px-6">{interview.performance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HistoryComponent;
