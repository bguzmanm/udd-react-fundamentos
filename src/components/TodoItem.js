import React from "react";

function TodoItem(props){
  return (
    <li className="todoItem">
      <span className={`icon icon-check ${props.completed && 'icon-check--active'}`}>✓</span>
      <p className={`todoItem-p ${props.completed && 'todoItem-p--complete'}`}>
        {props.text}
      </p>
    </li>
  )
};

export { TodoItem };

