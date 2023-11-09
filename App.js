/* eslint-disable no-restricted-globals */
import "./App.css";
import React, { useState } from "react";
import List from "./components/List";


function App() {
  const [tasks, setTasks] = useState([
    {
      name: "Task 1",
      description: "Task 1 description",
      dueDate: "2020-01-01",
      completed: false,
    },
    {
      name: "Task 2",
      description: "Task 2 description",
      dueDate: "2020-01-01",
      completed: false,
    },
    
  ]);

  const addTask = () => {
    const name = prompt("Enter Task name");
    const description =prompt("Enter task description ");
    let dueDate=prompt("Enter task due date");
    if (!name || !dueDate)
      return confirm("Name and due date must be specified");
    if (isNaN(Date.parse(dueDate)))
      return confirm("Due date must be a valid date");
     dueDate = new Date(dueDate);
    dueDate=dueDate.toString();
    const completed = false;

    console.log("Add Task");
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        name,
        description,
        dueDate,
        completed,
      },
    ]);
  };

  return (
    <div className="container">
      <h2 className="header">TO-DO LIST</h2>
      <div className="tasks">
        <List tasks={tasks} setTasks={setTasks} />
      </div>
      <div className="add-div">
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
