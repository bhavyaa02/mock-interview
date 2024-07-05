import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";

const QuestionForm = ({ questions, onGoBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isBuffering, setIsBuffering] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsBuffering(false), 10000);
    return () => clearTimeout(timer);
  }, [currentQuestionIndex]);

  const handleNextQuestion = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setIsBuffering(true);
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 max-w-xl mx-auto">
          <p>All questions answered!</p>
        </div>
        <button
          onClick={onGoBack}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div>
      {isBuffering ? (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 max-w-xl mx-auto">
          <p>Prepare yourself, the next question will appear in 10 seconds...</p>
        </div>
      ) : (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          onSubmit={handleNextQuestion}
        />
      )}
    </div>
  );
};

export default QuestionForm;
