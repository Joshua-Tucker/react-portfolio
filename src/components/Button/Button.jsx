import React from 'react'

const Button = ({text, buttonStyle}) => {
  return (
    <div className={buttonStyle}>
        <h1 className='button-text'>{text}</h1>
    </div>
  )
}

export default Button