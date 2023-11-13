import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (formData) => {
    // Add a new task to the list with the text and category from the form
    const newTask = {
      id: tasks.length + 1, // Generate a unique ID (you may want to use a more robust method)
      ...formData,
    };

    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    // Filter out the task with the specified id
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      {/* Pass CATEGORIES and TASKS data, as well as selectedCategory and handleCategoryChange */}
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      {/* Pass CATEGORIES data and onTaskFormSubmit to NewTaskForm component */}
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      {/* Pass tasks data, selectedCategory, and onDeleteTask to TaskList component */}
      <TaskList tasks={tasks} selectedCategory={selectedCategory} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;

