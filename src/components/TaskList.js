import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory, onDeleteTask }) {
  // Filter tasks based on the selected category
  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="tasks">
      {/* Map over filtered tasks and render each task using the Task component */}
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          category={task.category}
          text={task.text}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
