import React from 'react';

function Statistics({ tasks }) {
  const completed = tasks.filter(task => task.completed).length;
  const pending = tasks.length - completed;

  return (
    <div className="card">
      <h2>Statistics</h2>
      <p>✅ Completed: {completed}</p>
      <p>⏳ Pending: {pending}</p>
    </div>
  );
}

export default Statistics;

