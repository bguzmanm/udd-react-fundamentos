import React from "react";

const TodoContext = React.createContext();


function TodoProvider(props){
  
  const [searchValue, setSearchValue] = React.useState('');
  
  const defaulTodos = [
    {text: 'Limpiar Baño', completed: false},
    {text: 'Lavar la loza', completed: false},
    {text: 'Preparar almuerzo', completed: false},
    {text: 'Ordenar living', completed: false},
  ];

  let searchedTodos = defaulTodos;

  const totalTodos = defaulTodos.length;
  const completedTodos = defaulTodos
    .filter(todo => !!todo.completed).length;

  if (searchValue.length > 0){
    searchedTodos = defaulTodos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  
  return (
    <TodoContext.Provider value={{
      searchValue, 
      setSearchValue,
      totalTodos,
      completedTodos,
      searchedTodos,
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider }