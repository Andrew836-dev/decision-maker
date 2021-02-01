import { useState, useEffect } from "react";

function TaskSelector ({ tasks, dispatch }) {
  const defaultValue = "Please enter at least 2 tasks then click the button to have your decision made"
  const [chosen, setChosen] = useState(defaultValue);

  useEffect(() => {
    if (chosen !== defaultValue && !tasks.includes(chosen)) {
      setChosen(defaultValue);
    }
  }, [chosen, tasks])

  function chooseRandom () {
    if (tasks.length < 2) return setChosen(defaultValue);
    let chosenIndex;
    while(chosenIndex === undefined || tasks[chosenIndex] === chosen) {
      chosenIndex = Math.floor(Math.random() * tasks.length);
    }
    setChosen(tasks[chosenIndex]);
    console.log("Selected task", chosenIndex);
  }

  return <div>
    <button onClick={() => chooseRandom()}>
      Choose a task!
      </button>
    {chosen}
  </div>
}

export default TaskSelector;
