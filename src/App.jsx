import { useState } from "react";
import "./App.css";
import supabase from "./supabase-client";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="New Todo..." />
        <button> Add Todo Items </button>
      </div>
    </div>
  );
}

export default App;
