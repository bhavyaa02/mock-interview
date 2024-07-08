// src/pages/InterviewDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const InterviewDetails = () => {
  const { interviewId } = useParams();

  // Sample data for detailed interview results
  const interviewDetails = {
    id: interviewId,
    role: 'Frontend Developer',
    date: 'June 25, 2024',
    questions: [
      { question: 'Explain event delegation in JavaScript.', answer: 'Event delegation is...', marks: '9/10' },
      { question: 'What are closures?', answer: 'Closures are...', marks: '8/10' },
      { question: 'What is the virtual DOM?', answer: 'The virtual DOM is...', marks: '7/10' },
      { question: 'What is a Promise in JavaScript?', answer: 'A Promise is...', marks: '9/10' },
      { question: 'What are hooks in React?', answer: 'Hooks are...', marks: '10/10' },
      { question: 'What is the event loop in JavaScript?', answer: 'The event loop is...', marks: '8/10' },
      { question: 'Explain prototypal inheritance.', answer: 'Prototypal inheritance is...', marks: '7/10' },
      { question: 'What is the use of async/await?', answer: 'Async/await is used...', marks: '9/10' },
      { question: 'What is the difference between var, let, and const?', answer: 'The difference is...', marks: '8/10' },
      { question: 'What is React Router?', answer: 'React Router is...', marks: '10/10' },
    ],
  };

  // Calculate total marks
  const totalMarks = interviewDetails.questions.reduce((total, q) => total + parseInt(q.marks.split('/')[0]), 0);
  const maxMarks = interviewDetails.questions.reduce((total, q) => total + parseInt(q.marks.split('/')[1]), 0);

  // Determine the color of the total marks based on the score
  const totalMarksColor = totalMarks >= 50 ? 'text-green-500' : 'text-red-500';

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8 flex flex-col justify-between">
      <div className="bg-white shadow-2xl rounded-lg p-6 md:p-8 mb-8 w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
            Interview Details
          </h2>
          <button onClick={() => window.history.back()} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none">
            <svg className="w-6 h-6 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back
          </button>
        </div>

        <div className="mb-6 flex flex-col md:flex-row justify-between items-center">
          <div className="bg-gray-200 shadow-md hover:bg-gray-300 rounded-lg p-4 mb-4 md:mb-0 md:mr-4 transform transition duration-300 hover:scale-102">
            <p className="mb-2"><strong>Role:</strong> {interviewDetails.role}</p>
          </div>
          <div className="bg-gray-200 shadow-md hover:bg-gray-300 rounded-lg p-4 mb-4 md:mb-0 transform transition duration-300 hover:scale-102">
            <p className="mb-2"><strong>Date:</strong> {interviewDetails.date}</p>
          </div>
          <div className={`bg-gray-200 hover:bg-green-100 rounded-full shadow-2xl p-4 ml-0 md:ml-4 hover:scale-102 ${totalMarksColor} bg-white`} style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
            <p className="text-xl font-bold ">{totalMarks}/{maxMarks}</p>
            <p className="text-center"> Total</p>
          </div>
        </div>

        <div className="space-y-4 max-h-96 overflow-y-auto pb-8">
          {interviewDetails.questions.map((q, index) => (
            <div key={index} className="bg-white border border-blue-700 shadow-xl hover:bg-blue-100 rounded-lg p-6 transform transition duration-300 hover:scale-102 overflow-x-auto">
              <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-4 min-w-[300px]">
                <p className="mb-2"><strong>Question {index + 1}:</strong> {q.question}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg shadow-inner min-w-[300px]">
                <p className="mb-2"><strong>Answer:</strong> {q.answer}</p>
                <p className="text-right"><strong>Marks:</strong> {q.marks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterviewDetails;
