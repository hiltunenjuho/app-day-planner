function App() {
  const tasks = [
    "Lääkkeet",
    "Kävely",
    "Työt",
    "Sali",
    "Nukkumaan ajoissa",
  ];

  return (
    <div>
      <h1>Day Planner</h1>

      {tasks.map((task) => (
        <div key={task}>
          <input type="checkbox" />
          <span>{task}</span>
        </div>
      ))}
    </div>
  );
}

export default App;