import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import TaskInput from "./components/TaskInput";
import Tasks from "./components/Tasks";



function App() {

  const show = useSelector(state=> state.show)
  return (
    <>
      <Navbar />
      <main className="container">
        { show && <TaskInput /> }
        <Tasks/>
      </main>
    </>
	
	);
}

export default App;