import React, { useState, useEffect, useRef } from "react";

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

function Form({ settodos, todos, setstatus, status, setfiltered }) {
  const inputref = useRef(null);

  useEffect(() => {
    filters();
  }, [todos, status]);

  useEffect(() => {
    inputref.current.focus();
  }, []);
  const [inputtext, setinputtext] = useState("");

  const inputHandler = (e) => {
    setinputtext(e.target.value);
  };

  const buttonHandler = () => {
    settodos([
      ...todos,
      {
        completed: false,
        text: inputtext,
        id: Math.random() * 1000 + 1,
        time: formatAMPM(new Date()),
      },
    ]);
    setinputtext("");
  };

  const statusHandler = (e) => {
    setstatus(e.target.value);
  };

  const savetolocal = () => {
    if (window.localStorage.getItem("todos") == null) {
      window.localStorage.setItem(JSON.stringify(todos));
    } else {
      let g = window.localStorage.getItem(JSON.parse(todos));
      settodos(g);
    }
  };

  const filters = () => {
    switch (status) {
      case "completed":
        setfiltered(
          todos.filter((item) => {
            return item.completed === true;
          })
        );
        break;
      case "uncompleted":
        setfiltered(
          todos.filter((item) => {
            return item.completed === false;
          })
        );
        break;
      default:
        setfiltered(todos);
        break;
    }
  };

  return (
    <div className="inputcont">
      <input
        ref={inputref}
        className="input"
        type="text"
        value={inputtext}
        onChange={(el) => inputHandler(el)}
      />
      <input type="submit" value="Add to list" onClick={buttonHandler} />
      <select onChange={(el) => statusHandler(el)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Un-Completed</option>
      </select>
    </div>
  );
}

export default Form;
