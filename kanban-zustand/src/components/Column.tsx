import './Column.css'
import React from 'react'
import TaskComponent from './Task'

export default function ColumnComponent ({state}:any) { //Prop: State
    return <div className="column">
        <p>{state}</p>
        <TaskComponent title="Task 1" status="DONE"/>
        </div>
}
