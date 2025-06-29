// Import React and useState hook
import React, { useState } from 'react';

function ToDoForm({ onSubmit }) {
  // State to store the input value
  const [input, setInput] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent empty submissions
    if (!input.trim()) return;

    // Call the onSubmit prop with the input value
    onSubmit(input.trim());

    // Clear the input field
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!input.trim()}
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default ToDoForm;