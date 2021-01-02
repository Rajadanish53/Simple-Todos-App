import React from "react";
import Todo from "./todo";

function Todolist({ settodos, todos }) {
  return (
    <div>
      <ol className="listout">
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              settodos={settodos}
              todos={todos}
              todo={todo}
              text={todo.text}
              time={todo.time}
            />
          );
        })}
      </ol>
    </div>
  );
}

export default Todolist;
