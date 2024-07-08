// src/pages/HistoryComponent.js
import React from 'react';
import { Link } from 'react-router-dom';

const HistoryComponent = () => {
  const previousInterviews = [
    { id: 1, role: 'Frontend Developer', date: 'June 25, 2024' },
    { id: 2, role: 'Backend Developer', date: 'June 30, 2024' },
    // Add more interview data as needed
  ];

  return (
    <div className="bg-gray-200 min-h-screen p-8">
      <div className="bg-white shadow-2xl rounded-lg p-8 mb-8 max-w-6xl mx-auto w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
            History
          </h2>
          <button onClick={() => window.history.back()} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none shadow-md">
            <svg className="w-6 h-6 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-lg">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-2 px-6 border-b text-center">ID</th>
                <th className="py-2 px-6 border-b text-center">Role</th>
                <th className="py-2 px-6 border-b text-center">Date</th>
                <th className="py-2 px-6 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {previousInterviews.map((interview) => (
                <tr key={interview.id} className="hover:bg-gray-100">
                  <td className="py-4 px-6 text-center">{interview.id}</td>
                  <td className="py-4 px-6 text-center">{interview.role}</td>
                  <td className="py-4 px-6 text-center">{interview.date}</td>
                  <td className="py-4 px-6 text-center">
                    <Link
                      to={`/interview-details/${interview.id}`}
                      className="bg-blue-500 justify hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none shadow-xl inline-block"
                    >
                      View Score
                    </Link>
                  </td>
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
