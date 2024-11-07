import { useState, useEffect, useMemo } from 'react';
/**
 * Custom hook to manage todo list state and actions.
 * 
 * Features:
 * - Add, toggle, update, and delete todos.
 * - Clear all todos.
 * - Persist todos in localStorage.
 * - Filter todos by completion status (all, active, completed).
 * - Use memoization for optimized filtering.
 */

const useTodos = () => {
  // State to manage todos, the input for new todos, and the sorting criteria
  const [todos, setTodos] = useState([]); // List of todos
  const [newTodo, setNewTodo] = useState(''); // New todo input text
  const [sortBy, setSortBy] = useState('all'); // Sorting/filter criteria

  /**
   * Load todos from localStorage when the component mounts.
   * Parses the stored JSON string and sets it to the `todos` state.
   */

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos)); // Initialize with stored data
    }
  }, []);

  /**
   * Save todos to localStorage whenever the `todos` state changes.
   * Ensures persistence across browser sessions.
   */
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  /**
   * Adds a new todo to the list.
   * - Ignores empty or whitespace-only input.
   * - Generates a unique ID using the current timestamp.
   */

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return; // Prevent adding empty todos

    setTodos([
      ...todos,
      {
        id: Date.now(), // Unique identifier
        text: newTodo.trim(), // Trimmed input text
        completed: false, // New todos are not completed by default
      }
    ]);
    setNewTodo(''); // Reset the input field
  };

  /**
   * Toggles the completion status of a todo by ID.
   */

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  /**
   * Updates the text of a todo by ID.
   */
  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  /**
   * Deletes a todo by ID.
   */
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  /**
   * Clears all todos from the list.
   */
  const clearAll = () => {
    setTodos([]);
  };

  /**
   * Filters todos based on the selected sorting criteria.
   * - "all": Returns all todos.
   * - "active": Returns only incomplete todos.
   * - "completed": Returns only completed todos.
   * 
   * Uses `useMemo` to optimize performance by memoizing the filtered result.
   */
  const sortedTodos = useMemo(() => {
    switch (sortBy) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }, [todos, sortBy]);

  // Expose state and functions to components using this hook
  return {
    todos,
    newTodo,
    setNewTodo,
    addTodo,
    toggleTodo,
    updateTodo,
    deleteTodo,
    clearAll,
    sortBy,
    setSortBy,
    sortedTodos
  };
};

export default useTodos;