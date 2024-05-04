import React from 'react'
import { Task } from '../Entities/TaskTypes'
import './Task.css'

const TaskComponent = ({title, status}:Task) => {
  return (
    <>
    <div className='task'>
    <div>{title}</div>
    <div className='bottomWrapper'>
      <div></div> {/* adding another div for making the other on bottom left */}
      <div className='status'>{status}</div>
    </div>
    </div>
    </>
  )
}

export default TaskComponent