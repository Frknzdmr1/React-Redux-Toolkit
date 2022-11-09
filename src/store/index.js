import { createStore } from 'redux';

const initialState = {tasks:[], show: false}

const taskReducer =(state = initialState, action) => {
  switch(action.type){
    case 'Add Task': return {...state, tasks: [action.tasks, ...state.task]},
    case 'Remove Task': return {...state, tasks:state.tasks.filter(task => task.id !==action.id)},
    case 'Toggle Show': return {...state, show:!state.show} ,
    case 'Toggle Complete' : 
    const tasks = [...state.tasks];
    const index = tasks.findIndex(task => task.id === action.id);
    tasks[index].completed = !tasks[index].completed;
    return {...state, tasks: tasks};
    default: return state;
    
  }
}

const taskStore = createStore(taskReducer);
export default taskReducer