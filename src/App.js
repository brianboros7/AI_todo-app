import './App.css';
import React from 'react';
import TaskList from './TaskList.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Logo</div>
        <div>
          <p>Home</p>
        </div>
      </header>
      <div className="dashboard">
        <div className="navigation-column">
          {/* Add navigation items here */}
          <nav>
            <ul>
              <li>Dashboard</li>
              <li>Tasks</li>
              <li>Settings</li>
            </ul>
          </nav>
        </div>
        <div className="tasks-column">
          <h2>Tasks</h2>
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
