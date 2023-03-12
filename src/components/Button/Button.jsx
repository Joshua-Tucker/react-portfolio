import React from 'react'
import "./Button.scss"

const Button = ({text, buttonStyle}) => {
    
    let buttonName = "button"
    buttonName += " " + buttonStyle;

  return (
    <div className={buttonName}>
        <h1 className='button-text'>{text}</h1>
    </div>
  )
}

export default Button