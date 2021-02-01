import { ADD_TASK, CLEAR_LIST } from "../../util/actions";

function TaskListHandler ({ dispatch }) {
  const fieldName = "taskName";

  function handleFormSubmit (event) {
    event.preventDefault();
    dispatch({ type: ADD_TASK, fieldValue: event.target[fieldName].value.trim() });
    event.target[fieldName].value = "";
  }

  function clearList () {
    dispatch({ type: CLEAR_LIST });
  }

  return <div>
    <form onSubmit={handleFormSubmit}>
      <label htmlFor={fieldName}>Enter a task</label>
      <input name={fieldName} />
      <input type="submit" value="Add to List" />
    </form>
    <button onClick={clearList}>Clear List</button>
  </div>
}

export default TaskListHandler;