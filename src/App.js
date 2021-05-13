import Header from "./component/Header";
import Tasks from "./component/Tasks";

import { useState } from "react";
//Use state is a hook

function App() {
  let [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Take over the world",
      day: "Tuesday @ 2:00",
      reminder: true,
    },
    {
      id: 2,
      text: "Mastering React",
      day: "Thursday @ 4:00",
      reminder: true,
    },
    {
      id: 3,
      text: "Create Opportunites",
      day: "Thursday @ 4:00",
      reminder: true,
    },
  ]);

  return (
    <div className="container">
      <Header title="Task Tracker" subtitle="Get Things Done" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
