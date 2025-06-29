// Import React
import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, onToggle, onDelete }) {
  // If there are no todos, display a message
  if (todos.length === 0) {
    return (
      <div className="text-center text-muted mt-4">
        <p>No tasks yet. Add a task to get started!</p>
      </div>
    );
  }

  return (
    <div className="list-group">
      {/* Map through the todos array and render a ToDoItem for each todo */}
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ToDoList;