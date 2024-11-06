import React, { useState } from 'react';
import { Check, Pencil, X, Save } from 'lucide-react';

const TodoItem = ({ todo, toggleTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editText.trim() && editText.trim() !== todo.text) {
      updateTodo(todo.id, editText.trim());
    } else {
      setEditText(todo.text);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <div
      className={`group flex items-center gap-3 px-2 py-1 ${
        todo.completed ? 'opacity-50' : ''
      }`}
    >
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
          todo.completed 
            ? 'bg-emerald-400 border-emerald-400' 
            : 'border-gray-300 hover:border-emerald-400'
        }`}
      >
        {todo.completed && <Check className="h-4 w-4 text-white" />}
      </button>
      
      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex-1 flex items-center gap-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 px-2 py-1 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <div className="flex gap-1">
            <button
              type="submit"
              className="p-1 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
              title="Save"
            >
              <Save className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="p-1 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
              title="Cancel"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </form>
      ) : (
        <>
          <span className={`flex-1 text-gray-700 ${
            todo.completed ? 'line-through' : ''
          }`}>
            {todo.text}
          </span>
          <button
            onClick={() => setIsEditing(true)}
            className="p-1 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors opacity-0 group-hover:opacity-100"
            title="Edit"
          >
            <Pencil className="h-4 w-4" />
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;