import React from 'react';
import { useDispatch } from 'react-redux';
import taskActions from '../store/actions';


const Navbar = () => {
  const dispatch = useDispatch()


  const toggleShowHandler = () => { 
    dispatch({ type: taskActions.TOGGLE_SHOW})
  }

  return (
    <nav className="navbar bg-dark navbar-dark shadow">
      <div className="container">
        <span className='navbar-brand mb-0 h1'> Task Manager</span>
        <ul className="navbar-nav ms-auto my-1">
          <li className='nav-item'>
            <button className="btn btn-primary" onClick={toggleShowHandler}> ADD </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar