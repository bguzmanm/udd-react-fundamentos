import React from "react";
import { TodoContext } from './TodoContext';
import { Head } from './Head';
import { Footer } from './Footer';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';

function AppUI(){

  const {
    // Estos no los estaba usando, así que los comento.
    // searchValue, 
    // setSearchValue,
    loading,
    totalTodos,
    completedTodos,
    searchedTodos,
    completeTodo} = React.useContext(TodoContext);

    return (
      <React.Fragment>
        <Head 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          />
        <TodoSearch/>
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
        <Footer/>
      </React.Fragment>
    );
}

export {AppUI};