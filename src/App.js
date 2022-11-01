import { useState, useEffect } from "react";
import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();

      setTasks(taskFromServer);
    };

    getTasks();
  }, []);

  // fetch tasks

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");

    const data = await res.json();
    return data;
  };

  // AddTask

  const addTask = async (task) => {
    // const id = Math.floor(Math.random() *1000) + 1

    // const newTask = {id, ...task}

    // setTasks([...tasks, newTask]);
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: "JSON.stringify(task)",
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  // Delete task function
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/{id}`, {
      method: "DELETE",
    });

    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };
  // Toggle reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />

      {showAddTask && <AddTask addTask={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
};

export default App;
