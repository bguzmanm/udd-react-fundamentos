import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {

  const {
    item: todos,
    saveItem: saveTodos,
    loading, //acá incluír el loading
  } = useLocalStorage('TODOS_V1',
    [
      //Puedes descomentar estas lineas para generar el arreglo en el localStorage 
      // { text: 'Limpiar Baño', completed: false },
      // { text: 'Lavar la loza', completed: false },
      // { text: 'Preparar almuerzo', completed: true },
      // { text: 'Ordenar living', completed: false },
    ]);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = todos;

  if (searchValue.length > 0) {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  // FIX: acá tenía asignaciones incorrectas.
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ text: text, completed: false });
    saveTodos(newTodos);
  }

  // agregé esta función para borrar un todo
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.slice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <TodoContext.Provider value={{
      loading, //y acá también
      searchValue,
      setSearchValue,
      searchedTodos,
      totalTodos,
      completedTodos,
      completeTodo,
      addTodo,
      deleteTodo,
      openModal,
      setOpenModal
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }