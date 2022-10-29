import React, { useState } from "react";
import { TodoContext } from './TodoContext';
import '../index.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState();
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }
  const onCancel = () => {
    setOpenModal(false);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setNewTodoValue('');
    // agregué esto, para que una vez agregado la tarea saque el modal
    setOpenModal(false);
  }


  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea value={newTodoValue} onChange={onChange} placeholder="Escribe tu todo">
      </textarea>
      <div className="todoForm-buttonContainer">
        <button type="button" onClick={onCancel} className="todoForm-button todoForm-button--cancel">Cancelar</button>
        <button type="submit" className="todoForm-button todoForm-button--add">Añadir</button>
      </div>

    </form>
  );

};

export { TodoForm };