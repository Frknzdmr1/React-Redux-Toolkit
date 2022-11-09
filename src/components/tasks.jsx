import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

const Tasks = () => {

  const tasks = useSelector(state => state.tasks)
  
  return (
    <div className="list-group mt-5 shadow">
      { tasks.length > 0 && tasks.map(task => <TaskItem key={ task.id } task={ task } />) }
      { !tasks.length>0 && <h3 className='text-center my-2'>No Tasks to view ...</h3>}
    </div>
  
    )
}

export default Tasks