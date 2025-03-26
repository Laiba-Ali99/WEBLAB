import React from "react";

function Task({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-buttons">
        <button onClick={() => toggleTaskCompletion(task.id)}>{task.completed ? "Undo" : "Complete"}</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
