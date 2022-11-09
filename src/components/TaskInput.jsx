import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import taskActions from '../store/actions';

const TaskInput = () => {
  const [enteredTask, setEnteredTask] = useState('');
  const dispatch = useDispatch()

  const addTask = () => { 
    const task = {id: uuid(), title: enteredTask, completed: false}
    dispatch({ type: taskActions.ADD_TASK, task: task })
    setEnteredTask('')
  }

  return (
    <form className='card card-body shadow mt-5 px-5'>
      <h3 className='text-center my-3'> ADD TASK</h3>
      <div className='mb-3'>
        <input type="text" className='form-control' placeholder='Enter a Task'
          value={ enteredTask } onChange={ (e)=> setEnteredTask(e.target.value)}
        />
      </div>

      <div className="text-center">
        <button className='btn btn-primary' type="button" onClick={addTask}> ADD</button>
      </div>
    </form>
  )
}

export default TaskInput