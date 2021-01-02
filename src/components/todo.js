import React from "react";

function Todo({ settodos, todos, todo, text, time }) {
  let deleteHandler = () => {
    settodos(
      todos.filter((item) => {
        return item.id !== todo.id;
      })
    );
  };
  const checkHandler = () => {
    settodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="listarrange">
      <li className={`listitem ${todo.completed ? `completed` : ""}`}>
        {text}
      </li>
      <button onClick={() => deleteHandler()}>
        <i className="fas fa-trash"></i>
      </button>
      <button onClick={() => checkHandler()}>
        <i className="fas fa-check-circle"></i>
      </button>
      <span>{time}</span>
    </div>
  );
}

export default Todo;
