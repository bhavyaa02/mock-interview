import React from 'react';

const Header = ({ onStartInterview }) => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center py-6">
      <div className="bg-white shadow-2xl rounded-lg p-8 mb-6 max-w-xl mx-auto w-full transform transition duration-500 hover:scale-105">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>Mock Interview Details</h2>
        <div className="mb-4 text-gray-700" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
          <div className="p-4 mb-2 border border-gray-300 rounded-lg bg-blue-50">
            <p><strong>Role:</strong> Full Stack Developer</p>
          </div>
          <div className="p-4 mb-2 border border-gray-300 rounded-lg bg-blue-50">
            <p><strong>Difficulty Level:</strong> Medium</p>
          </div>
          <div className="p-4 mb-2 border border-gray-300 rounded-lg bg-blue-50">
            <p><strong>Language:</strong> JavaScript</p>
          </div>
          <div className="p-4 mb-2 border border-gray-300 rounded-lg bg-blue-50">
            <p><strong>Date & Time:</strong> July 10, 2024, 10:00 AM</p>
          </div>
          <div className="p-4 mb-2 border border-gray-300 rounded-lg bg-blue-50">
            <p><strong>Total Score:</strong> 100</p>
          </div>
        </div>
        <button
          onClick={onStartInterview}
          className="bg-blue-500 text-white w-full py-3 rounded-lg shadow-md hover:bg-blue-600"
          style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}
        >
          Start Interview
        </button>
      </div>
    </div>
  );
};

export default Header;
