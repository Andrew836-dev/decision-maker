import { REMOVE_TASK } from "../../util/actions";

function TaskList ({ tasks, dispatch }) {
  function removeTask (index) {
    dispatch({ type: REMOVE_TASK, index })
  }
  return (
    !!tasks.length && <ul>
      {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <button onClick={() => removeTask(index)}>
            remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
