import React from 'react'
import './Button.scss'

const Button = props => {
  const cls = ['btn']
  if (props.id){
    cls.push('btn-'+props.id);
  }

  return (
    <button id={props.id}
      onClick={props.onClick}
      className={cls.join(' ')}
    >
      {props.children}
    </button>
  )
}

export default Button