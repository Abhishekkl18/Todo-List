import React from 'react';

const TodoInput = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <form onSubmit={addTodo} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add new list item"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit"
          className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoInput;