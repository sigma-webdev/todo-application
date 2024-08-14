import React from "react";
import { v4 as uuidv4 } from "uuid";
function CreateTodo({ setTodos, setTodoName, todoName, todos }) {
  // handle create new todo
  function handleCreateTodo(e) {
    e.preventDefault();
    const newTodo = { id: uuidv4(), todoName: todoName };

    setTodos((preVal) => [newTodo, ...preVal]);
    localStorage.setItem("Todos", JSON.stringify([newTodo, ...todos]));

    setTodoName("");
  }

  return (
    <form
      onSubmit={(e) => handleCreateTodo(e)}
      className="flex gap-4 items-center"
    >
      <input
        onChange={(e) => setTodoName(e.target.value)}
        value={todoName}
        type="text"
        id="todoName"
        name="todoName"
        placeholder="Todo"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        required
      />
      <button
        type="submit"
        className="text-white   w-40 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
      >
        Create Todo
      </button>
    </form>
  );
}

export default CreateTodo;
