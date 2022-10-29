import React from "react";

import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoContext } from './TodoContext';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';
import { CreateTodoButton } from './CreateTodoButton';


function Home() {

  const {
    loading,
    searchedTodos,
    completeTodo,
    openModal,
    setOpenModal
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
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      {/* agrego un div con el modal */}
      <div id='modal'></div>
      <CreateTodoButton setOpenModal={setOpenModal} />

    </div>
  );
}

export { Home };