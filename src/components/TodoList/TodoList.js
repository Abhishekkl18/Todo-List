import React from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';
import TodoSort from './TodoSort';
import useTodos from '../../hooks/useTodos';
import wallpaper from '../../assets/images/wallpaper.jpg';

/**
 * A functional component that manages the main Todo List UI.
 * It integrates input, sorting, displaying todos, and footer actions.
 */

const TodoList = () => {
  // Custom hook to manage todos logic and state
  const {
    todos, // List of all todos
    newTodo, // The current value of the new todo input field
    setNewTodo, // Function to update the new todo input field
    addTodo, // Function to add a new todo
    toggleTodo, // Function to toggle a todo's completion status
    updateTodo, // Function to update a todo's text
    deleteTodo, // Function to delete a todo
    clearAll, // Function to clear all todos
    sortBy, // The current sorting criteria
    setSortBy, // Function to update the sorting criteria
    sortedTodos // List of todos sorted by the selected criteria
  } = useTodos();


  return (
    // Main container with a background image
    <div className="min-h-screen p-4 flex items-center justify-center"
    style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Card container for the Todo List */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6">
      {/* Header */}
      <h1 className="text-[#1E1B4B] text-2xl md:text-3xl font-bold text-center mb-6">
        Daily To Do List
      </h1>
        {/* Input component to add new todos */}
        <TodoInput
          newTodo={newTodo} // Pass the current new todo value
          setNewTodo={setNewTodo} // Function to update new todo state
          addTodo={addTodo} // Function to add a new todo
        />
        
        {/* Sorting component to choose sorting criteria */}
        <TodoSort
          sortBy={sortBy} // Current sorting option
          setSortBy={setSortBy} // Function to change sorting option
        />

        {/* List of todos */}
        <div className="space-y-2">
          {sortedTodos.map(todo => (
            <TodoItem
              key={todo.id} // Unique key for each todo
              todo={todo} // Pass the todo object
              toggleTodo={toggleTodo} // Function to toggle todo completion
              updateTodo={updateTodo} // Function to update todo text
              deleteTodo={deleteTodo} // Function to delete todo
            />
          ))}
        </div>

        {/* Footer component to show todos count and clear all button */}
        {todos.length > 0 && (
          <TodoFooter
            todosCount={todos.length} // Total number of todos
            clearAll={clearAll} // Function to clear all todos
          />
        )}
      </div>
    </div>
  );
};

export default TodoList;