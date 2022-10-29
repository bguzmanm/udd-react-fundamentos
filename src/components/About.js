import React from "react";
import { useParams } from "react-router-dom";


function About() {

  let { id } = useParams();

  return (
    <div>
      <p>Seleccionaste la opción {id}</p>
      <h1>Acerca de esta app</h1>
    </div>
  );
}

export { About };