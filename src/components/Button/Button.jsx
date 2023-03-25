import React from 'react'
import "./Button.scss"

const Button = ({text, buttonStyle, handleClick}) => {
    
    let buttonName = "button"
    buttonName += " " + buttonStyle;

  return (
    <div className={buttonName} onClick={handleClick}>
        <h2 className='button-text'>{text}</h2>
    </div>
  )
}

export default Button