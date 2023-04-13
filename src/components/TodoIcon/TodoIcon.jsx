import React from 'react';
import { BsCheck } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import './TodoIcon.css'

const iconTypes = {
  'check' : color =>(
    <BsCheck className="Icon-svg Icon-svg--check" fill = {color}/>
  ),
  'delete' : color =>(
    <MdDelete className='Icon-svg Icon-svg--delete' fill = {color}/>
  )
}
export const TodoIcon = ({type, color = 'gray', onClick}) =>{
  return(
    <span
    className={`Icon-container Icon-conatiner--${type}`}
    onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  )
}