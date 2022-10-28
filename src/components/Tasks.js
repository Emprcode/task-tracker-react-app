import { Task } from "./Task"

export const Tasks = ({tasks}) => {
    

  return (
    <>
        {tasks.map((tasks) => {
         
            <Task key={tasks.id} tasks = {tasks}/>
        })}
    </>
  )
}
