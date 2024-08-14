import React, { useState } from "react";
function TodoListComponent({ currentTodo, todos, setTodos }) {
  const [edit, setEdit] = useState(false);
  const [todoName, setTodoName] = useState(currentTodo.todoName);

  // handle save
  function handleSaveTodo() {
    const updatedTodoArr = todos.map((todo) => {
      if (todo.id === currentTodo.id) {
        return {
          id: currentTodo.id,
          todoName: todoName,
          isChecked: currentTodo.isChecked,
        };
      } else {
        return todo;
      }
    });

    setTodos(updatedTodoArr);
    localStorage.setItem("Todos", JSON.stringify(updatedTodoArr));
    setEdit(false);
  }

  // handle  check
  function handleCheck() {
    const updatedTodoArr = todos.map((todo) => {
      if (todo.id === currentTodo.id) {
        return {
          id: currentTodo.id,
          todoName: currentTodo.todoName,
          isChecked: !currentTodo.isChecked,
        };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodoArr);
    localStorage.setItem("Todos", JSON.stringify(updatedTodoArr));
  }

  //  handle delete
  function handleDeleteTodo() {
    const updatedTodoArr = todos.filter((todo) => todo.id !== currentTodo.id);
    setTodos(updatedTodoArr);
    localStorage.setItem("Todos", JSON.stringify(updatedTodoArr));
  }

  return (
    <div className="flex items-center gap-4">
      {/* input check  */}
      <input
        checked={currentTodo.isChecked}
        id="green-checkbox"
        type="checkbox"
        value=""
        onChange={() => handleCheck()}
        className="w-4 h-4 text-green-600 bg-green-100 border-green-300 rounded focus:ring-green-500 focus:ring-2"
      />
      {/* input check end  */}

      {/* if edit is true show input field else show <p> */}
      {edit ? (
        <input
          type="text"
          id={currentTodo.id}
          className="bg-blue-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
      ) : (
        <p className="bg-gray-50 border border-gray-300 cursor-pointer text-gray-900   font-bold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
          {todoName}
        </p>
      )}

      {/* if edit is true show edit cancle button ❌  and save button 💾  else show  edit button ✏️ and delete todo button 🗑️ */}
      {edit ? (
        <>
          {/* cancle button */}
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() => {
              setEdit(false);
              setTodoName(currentTodo.todoName);
            }}
          >
            Cancle
          </button>
          {/* cancle button end */}
          {/* save button  */}
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => handleSaveTodo()}
          >
            Save
          </button>
          {/* save button end */}
        </>
      ) : (
        <>
          {/* edit button */}
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
            onClick={() => {
              setEdit(true);
            }}
          >
            edit
          </button>
          {/* edit button end */}
          {/* delete button*/}
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() => handleDeleteTodo()}
          >
            Delete
          </button>
          {/*delete button end  */}
        </>
      )}
    </div>
  );
}

export default TodoListComponent;
