import React from 'react';
import './TodoItem.css';
import { CompletedIcon } from '../TodoIcon/CompletedIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

export const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <li className='TodoItem'>
      <CompletedIcon
        completed = {completed}
        onCompleted={onComplete}
     />
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <DeleteIcon
        onDelete={onDelete}  
      />
    </li>
  );
};
