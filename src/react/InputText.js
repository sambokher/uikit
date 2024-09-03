import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Icon } from './index'
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
        prefix = '',
        suffix = '',
        textAlign = 'left',
        width = 'auto',
        hasOutline = true,
        
        value: externalValue,
        name,
        type,
        onChange,
        onBlur=()=>{},
        onFocus=()=>{},

        attributes,
        listeners,
      } = props;

    
    const isControlled = externalValue !== undefined // it's controlled outside if it receives value and onChange handler
    const [internalValue, setInternalValue] = useState(externalValue || '');
    const value = isControlled ? externalValue : internalValue;
    
     // Sync internal state with externalValue when controlled
    useEffect(() => {
        setInternalValue(externalValue || ''); // Default to empty string if undefined
    }, [externalValue]);

    function handleChange(e) {
        e.stopPropagation();
        
        if (isControlled) {
            onChange(e);
        } else {
            setInternalValue(e.target.value);
        }
    }

    // const sizeStyles = size == 'small' ? `py-1 px-2 gap-1.5` : size == 'large' ? `py-2 px-3 gap-3` : `py-1.5 px-2 gap-3`;
    const paddingX = size == 'small' ? `px-2` : size == 'large' ? `px-3` : `px-2.5`;
    const gapUnit = size == 'small' ? 1.5 : size == 'large' ? 2.5 : 2
    const paddingY = size == 'small' ? `py-1.5` : size == 'large' ? `py-3` : `py-2`;

    const textSize = size == 'small' ? 'text-xs' : size == 'large' ? 'text-base' : 'text-sm';
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"
    
    // default
    let stateStyles = hasOutline ? `ring-1 ring-inset ring-base-200 focus-within:ring-[1.5px] focus-within:ring-accent` : '';
    switch (state) {
        case 'disabled':
            stateStyles = `bg-base-100 opacity-70 cursor-not-allowed ${hasOutline ? 'ring-1 ring-inset ring-base-200' : ''}`
            break;
        case 'error':
            stateStyles = `text-warning ${hasOutline ? 'ring-1 ring-inset ring-warning' : ''}`
            break;
        case 'success':
            stateStyles = `text-success ${hasOutline ? 'ring-1 ring-inset ring-success' : ''}`
            break;
    }
    
    const bgStyles = (bgColor && bgColor !== 'none') ? `bg-${bgColor} ${!hasOutline && 'focus-within:brightness-95'}` : '';
    
    const heightStyle = size == 'small' ? 'h-7' : size == 'large' ? 'h-12' : 'h-9';
    let inputWrapper = `w-full relative flex flex-row items-center ${heightStyle} ${paddingX} ${textSize} ${cornerStyles} ${bgStyles} ${stateStyles} `

    
    const labelTextSize = size == 'small' ? `text-xs` :  size == 'large' ? `text-lg`: `text-sm`;
    const labelClasses = `text-base-content ${labelTextSize} font-medium`

    const messageTextColor = state == 'error' ? stateStyles = 'text-warning' : state == 'success' ? stateStyles = 'text-success' : ''
    const messageClasses = size == 'large' ? `text-base  ${messageTextColor}` : `text-sm ${messageTextColor}`
    const widthStyle = width != 'auto' ? `w-${width}` : size == 'small' ? '' : size == 'large' ? 'min-w-[200px]' : 'min-w-[160px]'
    
    
    const iconSize = size == 'small' ? '16px' : size == 'large' ? '24px' : '20px'
    const iconStyle = size == 'small' ? 'w-4' : size == 'large' ? 'w-6' : 'w-5' // temporary before we fix Icon
    const LeftIconComponent = leftIcon !== 'none' ? <Icon icon={leftIcon?.toLowerCase()} size={iconSize} className={`flex-shrink-0 scale-90 ${iconStyle}`}/> : null;
    const RightIconComponent = rightIcon !== 'none' ? <Icon icon={rightIcon?.toLowerCase()} size={iconSize} className={`flex-shrink-0 scale-90 ${iconStyle}`}/> : null;

    const gapStyles = size == 'small' ? 'gap-0.5' : size == 'large' ? 'gap-1.5' : 'gap-1'
    let wrapperClasses = `flex flex-col ${widthStyle} ${gapStyles}`

    const inputPaddingX = `${(prefix || LeftIconComponent) ? 'pl-'+gapUnit : ''} ${(suffix || RightIconComponent) ? 'pr-'+gapUnit : ''}`

    // pr-0.5 pr-1 pr-1.5 pr-2 pr-2.5 pl-0.5 pl-1 pl-1.5 pl-2 pl-2.5
    // ml-0.5 ml-1 ml-1.5 ml-2 ml-2.5 mr-0.5 mr-1 mr-1.5 mr-2 mr-2.5

    const textColor = (state == 'disabled' || state == 'default') ? 'text-base-content' : `text-${state}-content`
    return (
        <div
        {...attributes} {...listeners} 
            className={wrapperClasses}
        >
            {label && ( 
                <label className={labelClasses}>
{label}
                </label>
            )}
            <div className={inputWrapper} >
            {LeftIconComponent}
            <span className={`flex-shrink-0 ${LeftIconComponent && prefix ? `pl-${gapUnit}` : ''}`}>{prefix}</span>
            <input
            type={type}
            name={name}
onBlur={onBlur}
onChange={handleChange}
onFocus={onFocus}
            
disabled={state == 'disabled'}
            
            className={`w-full text-${textAlign} ${paddingY} border-0 border-transparent focus:outline-none focus:ring-0 font-medium placeholder:font-normal
            placeholder-base-500 bg-transparent ${textColor} ${state == 'disabled' && 'cursor-not-allowed'} ${inputPaddingX}`}
            value={value}
            placeholder={placeholder}
            />  
            <span className={`flex-shrink-0 ${RightIconComponent && suffix ? `pr-${gapUnit}` : ''}`}>
            {suffix}
            </span>
            {RightIconComponent}
            </div>
            {helperText && <span className={messageClasses}>
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
    textAlign: PropTypes.oneOf(['left', 'right', 'center']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    leftIcon: PropTypes.oneOf(['none', ...allIconNames]),
    rightIcon: PropTypes.oneOf(['none', ...allIconNames]),
    hasOutline: PropTypes.bool,
    type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel', 'url']),
    name: PropTypes.string,
};

