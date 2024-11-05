import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={TodoList} />
          {/* Other routes can be added here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
