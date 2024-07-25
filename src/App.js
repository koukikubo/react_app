import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo1", completed: false },
  ]);

  const handleAddTodo = () => {
    //タスクを追加する。
    
  }

  return (
    <div>
      <TodoList todos={todos} />
      <input type="text" />
      <button Onclick={handleAddTodo}>タスクを追加</button>
      <button>完了したタスクを削除</button>
      <div>残りのタスク:0</div>
    </div>
  );
}

export default App;
