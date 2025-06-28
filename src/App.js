import React, { useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import TaskList from './components/TaskList';
import Statistics from './components/Statistics';

import userData from './data/user.json';
import tasksData from './data/tasks.json';

function App() {
  const [user] = useState(userData);
  const [tasks, setTasks] = useState(tasksData);

  return (
    <div className="app-container">
      <h1>🌟 Floww Dashboard</h1>

      <div className="dashboard">
        <Profile user={user} />
        <TaskList tasks={tasks} setTasks={setTasks} />
        <Statistics tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
