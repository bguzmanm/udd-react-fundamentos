import React from "react";

import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoContext } from './TodoContext';


function Home() {
  
  const {
    loading,
    searchedTodos,
    completeTodo,    
  } = React.useContext(TodoContext);
  
  return (
    <div>
      <TodoSearch />
      <TodoList>
        {loading && <p>Cargando...</p>}
        {
          searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
            />
          ))
        }
      </TodoList>
    </div>
  );
}

export { Home };