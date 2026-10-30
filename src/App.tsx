import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Lääkkeet", completed: false },
    { id: 2, text: "Kävely", completed: false },
    { id: 3, text: "Työt", completed: false },
    { id: 4, text: "Sali", completed: false },
    { id: 5, text: "Suihku", completed: false },
    { id: 6, text: "Nukkumaan ajoissa", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const addTask = () => {
  if (!newTask.trim()) return;

  const task = {
    id: Date.now(),
    text: newTask,
    completed: false,
  };

  setTasks([...tasks, task]);
  setNewTask("");
  };
  
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Day Planner</h1>
      <p>{completedTasks} / {tasks.length} tehtävää valmiina</p>
      <div>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Lisää uusi tehtävä"/>
          <button onClick={addTask}>
    Lisää
  </button>
</div>
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />

          <span>{task.text}</span>
        </div>
      ))}
    </div>
  );
}

export default App;