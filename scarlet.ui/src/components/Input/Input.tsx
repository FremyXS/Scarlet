import React, { ChangeEventHandler } from "react";

import './Input.css';

function Input({name, value, label, type, onChange, placeholder}:
    {name?: string, value?: string, label?: string, type?: string, onChange?: any, placeholder?: string}){
    return (
        <div className="component-input">
            {label && <div className="component-input__label">{label}</div>}
            <div className="component-input__item">
                <input  
                type={type} 
                name={name} 
                value={value} 
                onChange={onChange}
                placeholder={placeholder}
                />
            </div>
        </div>
    );
}

export default Input;