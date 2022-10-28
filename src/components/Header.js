import React from 'react'
import {Button} from './Button'

export const Header = () => {
    const onClick = () => {
        console.log("click")
    }
  return (
    <div className='header'>
        <h1> Task Tracker</h1>
        <Button  color =" green" text = "Hello" onClick = {onClick}/>
       
    </div>
  )
}
