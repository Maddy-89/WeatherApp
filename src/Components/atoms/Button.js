import React from 'react';
import './Button.css'

const Button = ({ onButtonClick, ...props }) => {
  return <button className="Button" onClick={onButtonClick}>{props.children}</button>;
};

export default Button;
