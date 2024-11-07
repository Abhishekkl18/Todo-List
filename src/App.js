import React from 'react';
import TodoList from './components/TodoList/TodoList';

/**
 * Root component of the application.
 * 
 * Features:
 * - Acts as the entry point for the application.
 * - Renders the `TodoList` component.
 */
function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;