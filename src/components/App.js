import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.category.includes(category)
  );

  function handleDelete(text) {
    setTasks((tasks) => tasks.filter((task) => task.text !== text));
  }

  function handleFilter(text) {
    setCategory(text);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilter={handleFilter} />
      <NewTaskForm />
      <TaskList filteredTasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
