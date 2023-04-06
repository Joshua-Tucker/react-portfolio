import React from 'react'
import "./Button.scss"

const Button = ({text, buttonStyle, handleClick}) => {
    
    let buttonName = "button"
    buttonName += " " + buttonStyle;

  return (
    <div className={buttonName} onClick={handleClick}>
        <p className='button-text'>{text}</p>
    </div>
  )
}

export default Button