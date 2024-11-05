import React, { useState } from 'react';
import { Check } from 'lucide-react';

const TodoItem = ({ todo, toggleTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editText.trim()) {
      updateTodo(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`group flex items-center gap-3 px-2 py-1 ${
        todo.completed ? 'opacity-50' : ''
      }`}
    >
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
          todo.completed 
            ? 'bg-emerald-400 border-emerald-400' 
            : 'border-gray-300 hover:border-emerald-400'
        }`}
      >
        {todo.completed && <Check className="h-4 w-4 text-white" />}
      </button>
      
      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex-1">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full px-2 py-1 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
            onBlur={handleSubmit}
          />
        </form>
      ) : (
        <span
          onClick={() => setIsEditing(true)}
          className={`flex-1 text-gray-700 cursor-pointer hover:text-blue-600 ${
            todo.completed ? 'line-through' : ''
          }`}
        >
          {todo.text}
        </span>
      )}
    </div>
  );
};

export default TodoItem;
