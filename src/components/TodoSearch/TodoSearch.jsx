import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../context/TodoContext';

export const TodoSearch = ({}) => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChanged = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <input
      className='TodoSearch'
      placeholder='Cebolla'
      onChange={onSearchValueChanged}
    />
  );
};
