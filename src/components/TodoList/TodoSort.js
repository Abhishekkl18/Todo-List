/**
 * A component to filter and sort the todo list based on completion status.
 * 
 * Props:
 * - `sortBy` (string): The current selected filter (e.g., "all", "active", "completed").
 * - `setSortBy` (function): Function to update the selected filter.
 */
const TodoSort = ({ sortBy, setSortBy }) => {
    return (
      // Container for the sorting dropdown, aligned to the right
      <div className="flex justify-end mb-4">
        {/* Dropdown to select the sorting/filtering option */}
        <select
          value={sortBy} // Binds the current selected value
          onChange={(e) => setSortBy(e.target.value)} // Updates the selected value
          className="px-3 py-1 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {/* Options for filtering todos */}
          <option value="all">All</option> {/* Show all todos */}
          <option value="active">Active</option> {/* Show only active (not completed) todos */}
          <option value="completed">Completed</option> {/* Show only completed todos */}
        </select>
      </div>
    );
  };
  
  export default TodoSort;