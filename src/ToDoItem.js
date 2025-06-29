// Import React
import React from 'react';

function ToDoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        {/* Checkbox for marking todo as complete */}
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {/* Todo text with conditional styling for completed items */}
        <span style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#6c757d' : 'inherit'
        }}>
          {todo.text}
        </span>
      </div>
      {/* Delete button */}
      <button
        className="btn btn-danger btn-sm"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ToDoItem;