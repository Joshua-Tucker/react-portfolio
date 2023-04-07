import React from 'react'
import "./Button.scss"

const Button = ({text, buttonStyle, handleClick}) => {
    
    let buttonName = "button"
    buttonName += " " + buttonStyle;

  return (
    <div className={buttonName} onClick={handleClick}>
        <h3 className='button-text'>{text}</h3>
    </div>
  )
}

export default Button