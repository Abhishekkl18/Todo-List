import React from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';
import TodoSort from './TodoSort';
import useTodos from '../../hooks/useTodos';

const TodoList = () => {
  const {
    todos,
    newTodo,
    setNewTodo,
    addTodo,
    toggleTodo,
    updateTodo,
    clearAll,
    sortBy,
    setSortBy,
    sortedTodos
  } = useTodos();

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-start justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6">
        <h1 className="text-[#1E1B4B] text-2xl font-bold text-center mb-6">
          Daily To Do List
        </h1>

        <TodoInput
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          addTodo={addTodo}
        />

        <TodoSort sortBy={sortBy} setSortBy={setSortBy} />

        <div className="space-y-2">
          {sortedTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              updateTodo={updateTodo}
            />
          ))}
        </div>

        {todos.length > 0 && (
          <TodoFooter
            todosCount={todos.length}
            clearAll={clearAll}
          />
        )}
      </div>
    </div>
  );
};

export default TodoList;