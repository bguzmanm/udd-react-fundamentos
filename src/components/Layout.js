import React from "react";
import './Layout.css';
import { NavLink, Outlet, useParams } from "react-router-dom";
import { TodoContext } from './TodoContext';
function Layout() {

  let parametroId = 20;
  const {
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to={`/about/${parametroId}`}>Acerca De</NavLink>
            </li>
            <li>
              <NavLink to={`/temp/${totalTodos}`}>Temperatura</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div >
  );
}

export { Layout };