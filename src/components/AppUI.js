import React from "react";
import { TodoContext } from './TodoContext';
import { Head } from './Head';
import { Footer } from './Footer';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';

function AppUI(){

  const {searchValue, 
    setSearchValue,
    totalTodos,
    completedTodos,
    searchedTodos,} = React.useContext(TodoContext);

    return (
      <React.Fragment>
        <Head 
          totalTodos={totalTodos}
          completedTodos={completedTodos}/>
        <TodoSearch/>
        <TodoList>
          {
            searchedTodos.map(todo => (
              <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              />
              ))
            }
        </TodoList>
        <Footer/>
      </React.Fragment>
    );

}

export {AppUI};