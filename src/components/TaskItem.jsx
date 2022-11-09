import React from 'react'
import { useDispatch } from 'react-redux';
import taskActions from '../store/actions';

const TaskItem = ({ task }) => {

  const dispatch = useDispatch();

  const deleteTask = (id) => {
    dispatch({ type: taskActions.REMOVE_TASK, id: id })
  }

  const toggleCompleteHandler = (id) => {
    dispatch({ type: taskActions.TOGGLE_COMPLETE, id: id })
  }

  return (
    <div className={`list-group-item list-group-item-action ${task.completed&&'list-group-item-success'}`}>
      <div className='d-flex w-100 justify-content-between'>
        <h5 className='mb-1' onClick={()=> toggleCompleteHandler(task.id)}>{ task.title } </h5>
        <button className='btn btn-danger' onClick={()=> deleteTask(task.id)}> DELETE</button>
      </div>
    </div>
  )
}

export default TaskItem