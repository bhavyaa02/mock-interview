import React, { useState } from "react";
import Header from "../components/Header";
import QuestionForm from "../components/QuestionForm";

const MockInterview = () => {
  const [questions, setQuestions] = useState([]);
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const interviewDetails = {
    role: "Frontend Developer",
    difficulty: "Medium",
    language: "JavaScript",
    dateTime: "2024-07-03 10:00 AM",
    totalScore: "100"
  };

  const startInterview = () => {
    const sampleQuestions = [
      { text: "Tell me about yourself." },
      { text: "Explain a challenging technical problem you solved." },
      { text: "What is your experience with [specific technology or tool relevant to the job]?" },
      { text: "What is your approach to debugging code?" },
      { text: "How do you stay updated with the latest industry trends and technologies?" },
      { text: "Describe a project where you had to learn a new technology quickly." },
      { text: "Explain the concept of closures in JavaScript and provide an example." },
      { text: "Describe the process of setting up continuous integration/continuous deployment (CI/CD) for a full stack application." },
      { text: "How do you handle state management in a large-scale React application?" },
      { text: "What are some common security vulnerabilities in web applications, and how do you mitigate them?" },
    ];
    setQuestions(sampleQuestions);
    setIsInterviewStarted(true);
    setCurrentQuestionIndex(0);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="container mx-auto p-4">
      {!isInterviewStarted ? (
        <Header onStartInterview={startInterview} interviewDetails={interviewDetails} />
      ) : (
        <QuestionForm
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          onNextQuestion={handleNextQuestion}
          onGoBack={() => setIsInterviewStarted(false)}
        />
      )}
    </div>
  );
};

export default MockInterview;
