import "./App.css";
import { useState } from "react";
// components
import TodoListComponent from "./components/TodoListComponent";
import CreateTodo from "./components/CreateTodo";

function App() {
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("Todos")) || []
  );

  return (
    <div>
      {/*nab Bar*/}
      <nav className="h-16 w-full flex justify-center items-center bg-[#28282B]">
        <div className="md:w-4/5">
          <p className="text-white   text-lg   font-bold">TODO App</p>
        </div>
      </nav>
      {/*nav bar end  */}

      {/* container  */}
      <div className=" w-full flex justify-center mt-10">
        <div className="md:w-4/5">
          {/* create Todo component */}
          <CreateTodo
            setTodoName={setTodoName}
            todoName={todoName}
            setTodos={setTodos}
            todos={todos}
          />
          {/*create todo compenent end */}
          <div className="flex flex-col gap-4   my-8">
            {/* todo list  component*/}
            {todos.map((e) => (
              <TodoListComponent
                currentTodo={e}
                todos={todos}
                setTodos={setTodos}
                key={e.id}
              />
            ))}
            {/*todo list component  */}
          </div>
        </div>
      </div>
      {/* container end */}
    </div>
  );
}

export default App;
