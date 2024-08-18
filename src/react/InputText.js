import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Icon from './Icon'
import { iconMap } from './iconMap'

const allIconNames = Object.keys(iconMap) || []

export default function InputText(props) {
    
    const {
        state = 'default',
        placeholder = 'placeholder text',
        bgColor = 'base-0',
        size = 'medium',
        label = '',
        helperText = '',
        rightIcon = 'none',
        leftIcon = 'none',
        value = '',
        prefix = '',
        suffix = '',
        textAlign = 'left',
        width = 'auto',
        hasOutline = true,
        defaultIconSet,
        attributes,
        listeners,
        name,
        type,
        onChange = () => {}
      } = props;

    
    const [isFocused, setIsFocused] = useState(false);

    const sizeStyles = size == 'small' ? `py-2xs px-sm gap-xs text-xs` : size == 'large' ? `py-sm px-base gap-base text-base` : `py-xs px-sm gap-base text-sm`;
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"
    
    let stateStyles = hasOutline ? isFocused ? `border border-accent` : `border border-base-300` : 'border border-transparent'
    switch (state) {
        case 'disabled':
            stateStyles = `bg-base-100 opacity-70 cursor-not-allowed ${hasOutline ? 'border border-base-300' : ''}`
            break;
        case 'error':
            stateStyles = `text-warning-content ${hasOutline ? 'border border-warning-content' : ''}`
            break;
        case 'success':
            stateStyles = `text-success-content ${hasOutline ? 'border border-success-content' : ''}`
            break;
    }
    
    const bgStyles = (bgColor && bgColor !== 'none') ? `bg-${bgColor} ${!hasOutline && isFocused && 'brightness-95'}` : '';
    
    let classes = `w-full flex items-center justify-between truncate ellipsis box-border font-medium ${sizeStyles} ${cornerStyles} ${bgStyles} ${stateStyles}`
    
    const labelTextSize = size == 'small' ? `text-xs` :  size == 'large' ? `text-lg`: `text-sm`;
    const labelClasses = `text-base-content ${labelTextSize} font-medium`

    const messageTextColor = state == 'error' ? stateStyles = 'text-warning-content' : state == 'success' ? stateStyles = 'text-success-content' : ''
    const messageClasses = size == 'large' ? `text-sm  ${messageTextColor}` : `text-xs ${messageTextColor}`
    const widthStyle = width != 'auto' ? `w-${width}` : size == 'small' ? 'min-w-[120px]' : size == 'large' ? 'min-w-[200px]' : 'min-w-[160px]'
    
    const iconWidth = size == 'small' ? 'w-4' : size == 'large' ? 'w-6' : 'w-5'
    const LeftIconComponent = leftIcon !== 'none' ? <Icon icon={leftIcon?.toLowerCase()} defaultIconSet={defaultIconSet} className={`flex-shrink-0 scale-90 ${iconWidth}`}/> : null;
    const RightIconComponent = rightIcon !== 'none' ? <Icon icon={rightIcon?.toLowerCase()} defaultIconSet={defaultIconSet} className='flex-shrink-0 flex-grow-0'/> : null;

    const gapStyles = size == 'small' ? 'gap-3xs' : size == 'large' ? 'gap-xs' : 'gap-2xs'
    let wrapperClasses = `flex flex-col ${widthStyle} ${gapStyles}`

    return (
        <div
        {...attributes} {...listeners} 
            className={wrapperClasses}
        >
            {label && ( 
                <label className={labelClasses}>
                    {
                    label}
                </label>
            )}
            <div className={classes} style={{boxSizing: 'border-box'}}>
            {LeftIconComponent}
            {prefix}
             
            <input
            type={type}
            name={name}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => onChange(e)}
            disabled={state == 'disabled'}
            className={`flex-grow text-${textAlign} border-transparent focus:outline-none focus:ring-0 font-medium placeholder:font-normal
            placeholder-base-500 text-base-content bg-transparent w-full truncate ellipsis ${state == 'disabled' && 'cursor-not-allowed'}`}
            value={value}
            placeholder={placeholder}
            />  
            {suffix}
            {RightIconComponent}
            </div>
            {helperText && <span
            className={messageClasses}
            >
{helperText}
            </span>}    
        </div>
        
    );
}

InputText.propTypes = {
    width: PropTypes.oneOf(["auto", "1/2", "full"]),
    state: PropTypes.oneOf(['default', 'disabled', 'error', 'success']),
    bgColor: PropTypes.oneOf(['none', 'base-0', 'base-50', 'base-100']),
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    helperText: PropTypes.string,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    textAlign: PropTypes.oneOf(['left', 'right']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    leftIcon: PropTypes.oneOf(['none', ...allIconNames]),
    rightIcon: PropTypes.oneOf(['none', ...allIconNames]),
    hasOutline: PropTypes.bool,
    type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel', 'url']),
    name: PropTypes.string,
};

