import TaskListHandler from "./components/TaskListHandler";
import TaskListDisplay from "./components/TaskListDisplay";
import reducer from "./util/reducer";
import { useReducer } from "react";

function App () {
  const [tasks, tasksDispatch] = useReducer(reducer, []);
  return (
    <div>
      Decision Making App
      <TaskListHandler dispatch={tasksDispatch} />
      <TaskListDisplay tasks={tasks} dispatch={tasksDispatch} />
    </div>
  );
}

export default App;
