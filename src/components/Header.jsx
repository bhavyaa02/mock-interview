import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onStartInterview, token, user_id }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      {/* Navbar */}
      <nav className="bg-gray-800 sticky top-0 z-50 w-full">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <img
                  className="block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/history"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    History
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="ml-3 relative">
                {token === "" || user_id === 0 ? (
                  <>
                    <Link
                      to="/login"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Register
                    </Link>
                  </>
                ) : (
                  <>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mock Interview Details */}
      <div className="bg-white shadow-2xl rounded-lg p-8 mb-8 max-w-xl mx-auto w-full transform transition duration-500 hover:scale-105 mt-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>Mock Interview Details</h2>
        
        <div className="mb-4 text-gray-700">
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

        {/* Start Interview Button */}
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
