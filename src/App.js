import { useState } from "react";
import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctyer",
      day: "feb 30",
      reminder: true,
    },
    {
      id: 2,
      text: "teacher",
      day: "feb 50",
      reminder: true,
    },
    {
      id: 3,
      text: "shopping",
      day: "jan 30",
      reminder: false,
    },
  ]);


// AddTask

const addTask = (task) => {
  const id = Math.floor(Math.random() *1000) + 1

  const newTask = {id, ...task}

  setTasks([...tasks, newTask]);
}




  // Delete task function 
const deleteTask = (id) => {
  setTasks(tasks.filter((task) =>{
    return task.id !== id
  
  }
  ));


}
// Toggle reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}


  return (
    <div className="container">
      < Header onAdd = { () => setShowAddTask(!showAddTask)} showAddTask = {showAddTask}/>

      {showAddTask && <AddTask addTask= {addTask}/>}

     { tasks.length  > 0 ? (< Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>)
    : "No tasks to show" 
    }
      
     
     
    </div>
  );
}

export default App;
