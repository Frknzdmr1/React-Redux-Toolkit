import { createStore } from 'redux';
import taskActions from './actions';

const initialState = { tasks: [], show: false }

const taskReducer = (state=initialState, action) => {
  switch (action.type) {
    case taskActions.ADD_TASK: return { ...state, tasks: [action.task, ...state.tasks] }
    case taskActions.REMOVE_TASK: return { ...state, tasks: state.tasks.filter(task => task.id !== action.id) } 
    case taskActions.TOGGLE_SHOW: return { ...state, show: !state.show }
    case taskActions.TOGGLE_COMPLETE:
      const tasks = [...state.tasks];
      const index = tasks.findIndex(task => task.id === action.id);
      tasks[index].completed = !tasks[index].completed;
      return { ...state, tasks: tasks };
    default: return state; 
  }
}


const taskStore = createStore(taskReducer);

export default taskStore;