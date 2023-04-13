import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../../context/TodoContext';

export const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const onCancel = () => {
    setOpenModal(false);
  };
  const onAdd = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <form onSubmit={onAdd}>
      <label>Escribe tu nuevo TODOs</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder='Cortar la cebolla para el almuerzo'
      />
      <div className='TodoForm-buttonContainer'>
        <button
          className='TodoForm-button TodoForm-button--cancel '
          type='button'
          onClick={onCancel}>
          Cancelar
        </button>
        <button
          className='TodoForm-button TodoForm-button--add'
          type='submit'
          onClick={onAdd}>
          Añadir
        </button>
      </div>
    </form>
  );
};
