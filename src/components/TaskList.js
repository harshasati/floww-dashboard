import React from 'react';

function TaskList({ tasks, setTasks }) {
  const toggleTask = (id) => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  return (
    <div className="card">
      <h2>Tasks</h2>
      {tasks.map(task => (
        <div key={task.id}>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.task}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
