import React from 'react';
import './Button.scss';

interface ButtonProps{
    value?: string,
    type?: "button" | "submit" | "reset" | undefined
}

function Button({value, type}:ButtonProps){
    return(
        <div className="component-button">
            <button type={type}>{value}</button>
        </div>
    )
}

export default Button;