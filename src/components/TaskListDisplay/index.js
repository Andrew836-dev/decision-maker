import TaskList from "../TaskList";
import TaskSelector from "../TaskSelector";

function TaskListDisplay ({ tasks, dispatch }) {
  return <>
    <TaskList tasks={tasks} dispatch={dispatch} />
    <TaskSelector tasks={tasks} />
    </>
}

export default TaskListDisplay;