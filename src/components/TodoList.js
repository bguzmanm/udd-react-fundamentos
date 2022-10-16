import React from "react";

function TodoList(props){
  return (
    <div className="App-ListTodo">
      <ul>
        {props.children}
      </ul>
    </div>
  );
}

export {TodoList};