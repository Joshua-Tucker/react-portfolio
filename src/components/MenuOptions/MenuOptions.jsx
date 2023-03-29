import React from 'react'
import Button from '../Button/Button'
import "./MenuOptions.scss"

const MenuOptions = () => {
  return (
    <div className="menu-options">
    <Button text="Languages"/>
    <Button text="About"/>
    <Button text="Projects"/>
    <Button text="Get in touch"/>
  </div>
  )
}

export default MenuOptions