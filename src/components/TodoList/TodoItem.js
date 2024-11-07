import React, { useState } from 'react';
import { Check, Pencil, X, Save, Trash } from 'lucide-react';

/**
 * A component that represents an individual todo item with functionality to toggle, edit, and delete it.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.todo - The todo item object containing `id`, `text`, and `completed` properties.
 * @param {Function} props.toggleTodo - Function to toggle the completion status of the todo.
 * @param {Function} props.updateTodo - Function to update the text of the todo.
 * @param {Function} props.deleteTodo - Function to delete the todo.
 */

const TodoItem = ({ todo, toggleTodo, updateTodo, deleteTodo }) => {
  // Local state for managing edit mode and the updated text
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  // Handle submission of edited text
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editText.trim() && editText.trim() !== todo.text) {
      updateTodo(todo.id, editText.trim());
    } else {
      setEditText(todo.text);
    }
    setIsEditing(false);
  };
  // Handle cancellation of editing
  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <div className={`flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${
      todo.completed ? 'bg-gray-50' : ''
    }`}>
      {/* Toggle button to mark the todo as completed or not */}
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
        // Editing mode: input field and action buttons
        <form onSubmit={handleSubmit} className="flex-1 flex items-center gap-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}// Update the local state on change
            className="flex-1 px-2 py-1 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <div className="flex gap-1">
            <button
              type="submit"
              className="p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
              title="Save"
            >
              <Save className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
              title="Cancel"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </form>
      ) : (
        // Display mode: todo text and action buttons
        <>
          <span className={`flex-1 text-gray-700 ${
            todo.completed ? 'line-through text-gray-400' : ''
          }`}>
            {todo.text}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsEditing(true)}// Enter edit mode
              className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
              title="Edit"
            >
              <Pencil className="h-4 w-4" />
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}// Delete the todo
              className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
              title="Delete"
            >
              <Trash className="h-4 w-4" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
