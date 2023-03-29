import React from 'react'
import Button from '../../components/Button/Button';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
    <Button text="Settings"/>
    <Button text="Return to top"/>
    <Button text="Get in touch" buttonStyle="hasBorder"/>
  </div>)
}

export default Footer