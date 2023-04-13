import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../../context/TodoContext';

export const CreateTodoButton = () => {
  const { setOpenModal } = React.useContext(TodoContext);
  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <button className='CreateTodoButton' onClick={onClickButton}>
      +
    </button>
  );
};
