import React from 'react';
/**
 * A functional component for adding new todos to the list.
 * It provides an input field to type the todo and a button to submit it.
 *
 * @param {Object} props - Component props.
 * @param {string} props.newTodo - The current value of the new todo input field.
 * @param {Function} props.setNewTodo - Function to update the `newTodo` state.
 * @param {Function} props.addTodo - Function to add a new todo to the list.
 */
const TodoInput = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <form onSubmit={addTodo} className="mb-6">
      {/* Flex container for input and button with responsiveness */}
      <div className="flex flex-col sm:flex-row gap-2">
        {/* Input field to enter a new todo */}
        <input
          type="text"
          placeholder="Add new list item"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Submit button to add the new todo */}
        <button 
          type="submit"
          className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoInput;