import React from 'react'
import './TextLink.css'

const TextLink = ({ onButtonClick, ...props }) => {
    return (
           <button className='TextLink' onClick={onButtonClick}> {props.children}</button> 
    )
}

export default TextLink

