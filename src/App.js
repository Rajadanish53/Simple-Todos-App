import React, { useState } from "react";
import Todolist from "./components/todolist";
import Form from "./components/form";
import "./app.css";

function App() {
  const [todos, settodos] = useState([]);
  const [status, setstatus] = useState("all");
  const [filtered, setfiltered] = useState([]);
  return (
    <div className="containermain">
      <h1>TODO LIST APP</h1>
      <Form
        status={status}
        setfiltered={setfiltered}
        setstatus={setstatus}
        settodos={settodos}
        todos={todos}
      />
      <Todolist todos={filtered} settodos={settodos} />
    </div>
  );
}

export default App;
