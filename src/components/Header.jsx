import React, { useState } from 'react';

const Header = ({ onGenerate }) => {
  const [selectedTech, setSelectedTech] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const handleGenerateClick = () => {
    if (selectedTech && selectedDifficulty && selectedRole) {
      onGenerate(selectedTech, selectedDifficulty, selectedRole);
    } else {
      alert('Please select all fields.');
    }
  };

  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center py-6">
      <div className="bg-white shadow-2xl rounded-lg p-6 mb-6 max-w-xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-4">Setup</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Language</label>
          <select
            className="form-select mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-lg"
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
          >
            <option value="">Language</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Difficulty Level</label>
          <select
            className="form-select mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-lg"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option value="">Level</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
            <option value="Mixed Levels">All</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Role</label>
          <select
            className="form-select mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-lg"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="">Role</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
          </select>
        </div>
        <button
          onClick={handleGenerateClick}
          className="bg-blue-500 text-white w-full py-2 rounded-lg shadow-md hover:bg-blue-600"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Header;
