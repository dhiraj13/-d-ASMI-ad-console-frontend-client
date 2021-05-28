import { Link } from 'react-router-dom';
import React from 'react';

export const RegularInput = ({ name, label, placeholder, size, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name} className="form-label">{label}</label>
            <div className="form-control-wrap">
                <input
                    type="text"
                    name={name}
                    className={size ? `form-control-${size}` : `form-control`}
                    id={name}
                    placeholder={placeholder}
                    {...rest} />
            </div>
            {/* add error message here!!! Later */}
        </div>
    )
}

export const InputWithText = ({ name, label, placeholder, size, inputText, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name} className="form-label">{label}</label>
            <div className="form-control-wrap">
                <div className="form-text-hint">
                    <span className="overline-title">{inputText}</span>
                </div>
                <input
                    type="text"
                    name={name}
                    className={size ? `form-control-${size}` : 'form-control'}
                    id={name}
                    placeholder={placeholder}
                    {...rest} />
            </div>
        </div>
    )
}


export const InputWithIcon = ({ name, label, placeholder, size, iconPosition, ...rest }) => {
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={name}>{label}</label>
            <div className="form-control-wrap">
                <div className={iconPosition ? `form-icon form-icon-${iconPosition}` : "form-icon form-icon-left"}>
                    <em className="icon ni ni-user"></em>
                </div>
                <input
                    type="text"
                    name={name}
                    className={size ? `form-control-${size}` : 'form-control'}
                    id={name}
                    placeholder={placeholder}
                    {...rest}
                />
            </div>
        </div>
    )
}

export const RegularSelect = ({ options, label }) => {
    return (
        <div className="form-group">
            <label className="form-label">{label ? label : ''}</label>
            <div className="form-control-wrap">
                <select className="form-select">
                    {options.map(option => <option value={option}>{option}</option>)}
                </select>
            </div>
        </div>
    )
}

export const OutlinedInput = ({ name, label, type, size,error, ...rest }) => {
    return (
        <div className="form-group">
            <div className="form-control-wrap">
                <input
                    type={type ? type : 'text'}
                    className={size ? `form-control form-control-outlined form-control-${size}` : 'form-control form-control-outlined'}
                    name={name}
                    id={name}
                    {...rest}
                />
                <label className="form-label-outlined" htmlFor={name}>{label}</label>
                {error && <p>{error[name]}</p>}
            </div>
        </div>
    )
};


export const PasswordInput = ({ label, type, size, error, ...rest }) => {
    const name = 'password';
    return (
        <div className="form-group mb-1">
            <div className="form-control-wrap">
                <Link to="#" className="form-icon form-icon-right passcode-switch" data-target={name}>
                    <em className="passcode-icon icon-show icon ni ni-eye"></em>
                    <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                </Link>
                <input
                    type={type}
                    className={size ? `form-control form-control-outlined form-control-${size}` : 'form-control form-control-outlined'}
                    id={name}
                    {...rest}
                />
                <label className="form-label-outlined" htmlFor={name}>{label}</label>
                {error && <p>{error[name]}</p>}
            </div>
        </div>
    )
}
// Add outlined  property condition as well
