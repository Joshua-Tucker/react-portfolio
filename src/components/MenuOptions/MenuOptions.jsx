import React from 'react'
import Button from '../Button/Button'
import "./MenuOptions.scss"

const MenuOptions = () => {
  return (
    <div className="menu-options">
    <Button text="Home"/>
    <Button text="About"/>
    <Button text="Projects"/>
    <Button text="Get in touch" buttonStyle="hasBorder"/>
  </div>
  )
}

export default MenuOptions