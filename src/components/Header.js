import React from 'react'
import {Button} from './Button'

export const Header = ({onAdd, showAddTask}) => {
    const onClick = () => {
        console.log("click")
    }
  return (
    <div className='header'>
        <h1> Task Tracker</h1>
        <Button  color ={showAddTask ? "red" : "green"} text = {showAddTask ? "Close" :'Add'} onClick = {onAdd}/>
       
    </div>
  )
}
