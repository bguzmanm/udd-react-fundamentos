import React from "react";

function Head(props){
  return (
    <header>
      <h1>Bienvenido</h1>
      <h3>Has completado {props.completedTodos} de {props.totalTodos}</h3>
    </header>
  );
}

export {Head};