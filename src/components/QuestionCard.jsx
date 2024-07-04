import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const QuestionCard = ({ question, onSubmit }) => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [answer, setAnswer] = useState('');

  const handleSpeechRecognition = () => {
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };

  useEffect(() => {
    setAnswer(transcript);
  }, [transcript]);

  return (
    <div className="bg-blue-100 shadow-lg rounded-lg p-6 mb-6 max-w-xl mx-auto border-2 border-blue-300">
      <h3 className="text-xl font-bold mb-4">Question</h3>
      <p className="mb-4">{question.text}</p>
      <div className="mb-4">
        <button
          onClick={handleSpeechRecognition}
          className="bg-blue-500 text-white w-full py-2 rounded-lg shadow-md hover:bg-blue-600"
        >
          Start Speaking
        </button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
      <button
        onClick={() => onSubmit(answer)}
        className="bg-green-500 text-white w-full py-2 rounded-lg shadow-md hover:bg-green-600"
      >
        Submit Answer
      </button>
    </div>
  );
};

export default QuestionCard;
