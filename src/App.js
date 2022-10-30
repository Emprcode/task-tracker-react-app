import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";


const App = () => {
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
  // Delete task function 
const deleteTask = (id) => {
  setTasks(tasks.filter((task) =>{
    return task.id !== id
  
  }
  ));


}
// Toggle reminder

const toggleReminder = (id) => {
  setTasks()
}


  return (
    <div className="container">
      < Header />
     { tasks.length  > 0 ? (< Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>)
    : "No tasks to show" 
    }
      
     
     
    </div>
  );
}

export default App;
