import React from 'react';
import { TodoIcon } from './TodoIcon'

export const CompletedIcon = ({completed, onCompleted})=>{
  return (
    <TodoIcon
      type='check'
      color= {completed ? '#4caf50' : 'gray'}
      onClick ={onCompleted}
    />
  )
}