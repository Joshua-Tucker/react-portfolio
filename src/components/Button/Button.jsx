import React from 'react'
import "./Button.scss"

const Button = ({text, buttonStyle}) => {
    
    let buttonName = "button"
    buttonName += " " + buttonStyle;

  return (
    <div className={buttonName}>
        <h2 className='button-text'>{text}</h2>
    </div>
  )
}

export default Button