import React, { useState } from 'react';
import Header from '../components/Header';
import QuestionForm from '../components/QuestionForm';

const MockInterview = () => {
  const [questions, setQuestions] = useState([]);
  const [isGenerated, setIsGenerated] = useState(false);

  const generateQuestions = (tech, difficulty, role) => {
    // Fetch or generate questions here based on the selected parameters
    const sampleQuestions = [
      { text: '1. Tell me about yourself.' },
      { text: '2. Explain a challenging technical problem you solved.' },
      { text: '3. What is your experience with [specific technology or tool relevant to the job]?' },
      { text: '4. What is your approach to debugging code?' },
      { text: '5. How do you stay updated with the latest industry trends and technologies?' },
      { text: '6. Describe a project where you had to learn a new technology quickly.' },
      { text: '7. Explain the concept of closures in JavaScript and provide an example.' },
      { text: '8. Describe the process of setting up continuous integration/continuous deployment (CI/CD) for a full stack application.' },
      { text: '9. How do you handle state management in a large-scale React application?' },
      { text: '10. What are some common security vulnerabilities in web applications, and how do you mitigate them?' },
    ];
    setQuestions(sampleQuestions);
    setIsGenerated(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Mock Interview</h1>
      {!isGenerated ? (
        <Header onGenerate={generateQuestions} />
      ) : (
        <QuestionForm questions={questions} />
      )}
    </div>
  );
};

export default MockInterview;
