import React from "react";

function nombre() {
  return "Brian";
}

function Head(){
  return (
    <header>
      <h1>Bienvenido {nombre()} a mi app</h1>
    </header>
  );
}

export {Head};