import React from "react";

function TodoList(props){
  return (
    <div className="App-ListTodo">
      <h3>Esa es la lista de items por hacer:</h3>
      <ul>
        {props.children}
      </ul>
    </div>
  );
}

export {TodoList};