
import React from "react";
import { v4 as uuidv4 } from "uuid";

/* 

- Main page contain list of tasks and add button to add a task to list of tasks, edit and delete buttons.
- Every task will display the task name, task due date, checkbox for completion, delete button
- Inside every task it consists of task name, description, task due date, checkbox for completion.
*/

function List(props) {
  const tasks = props.tasks;
  const setTasks = props.setTasks;

  const handleCheckBox = (key) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        // console.log({ name: task.name }, { task: task.key }, { key });
        if (task.key === key) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  };

  const handleEdit = (key) => {
    const name = prompt("Enter task name").toUpperCase();
    const description = prompt("Enter task description").toUpperCase();
    const dueDate = prompt("Enter task due date");
    const completed = prompt("Enter task completed");
    // prevTasks = [{name, description, dueDate, comepleted, key}, {}, {}, {}];
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.key === key) {
          task.name = name || task.name;
          task.description = description || task.description;
          task.dueDate = dueDate || task.dueDate;
          task.completed = completed ?? task.completed;
        }
        return task;
      })
    );
  };

  const handleDelete = (event, key) => {
    console.log({ event });
    setTasks((prevTasks) => {
      // true(keep) or false (remove)
      return prevTasks.filter((task) => task.key !== key);
    });
  };

  return (
    <React.Fragment>
      {tasks.map((task) => {
        task.key = uuidv4(); // id = daijueo12p3u09u49p9eijnk23liuryo73wo
        return (
          <div className="task" key={task.key}>
            <div className="row-1">
              <div className="col-1">
                <p className="name">{task.name}</p>
              </div>
              <div className="col-2">
                <button type="button" onClick={() => handleEdit(task.key)}>
                  <i className="fa fa-solid fa-edit"></i>
                </button>
                <button
                  type="button"
                  onClick={(event) => handleDelete(event, task.key)}
                >
                  <i className="fa fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
            <div className="row-1">
              <div className="col-11">
                <p className="dueDate">{task.dueDate}</p>
              </div>
              <div className="col-22">
                <label htmlFor="checkbox">Completed </label>
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={task.completed}
                  onChange={(e) => handleCheckBox(task.key)}
                />
              </div>
            </div>
          </div>
        );
      })}
      {console.log({ tasks })}
    </React.Fragment>
  );
}

export default List;
