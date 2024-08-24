import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react';
import { Icon } from './index'

export default function Select(props) {
    
    const {
        size = 'medium',
        value = '',
        placeholder = 'Select',
        showOptions = false,
        bgColor = 'base-0',
        label = '',
        helperText = '',
        state = 'default',
        rightIcon = 'chevron-down',
        width = 'auto',
        hasOutline = false,
        onSelect = () => {},
        defaultIconSet = 'heroicons',
        options = ['Option A', 'Option B', 'Option C'],
        attributes,
        listeners
      } = props;

    const [ open, setOpen ] = useState(showOptions)
    const selectedOption = value || ''

    useEffect(() => {
        setOpen(showOptions);
    }, [showOptions]);
    
    const sizeStyles = size == 'small' ? `py-1 px-2 gap-1.5 text-xs` : size == 'large' ? `py-2 px-3 gap-3 text-base` : `py-1.5 px-2 gap-3 text-sm`;
        
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"
    let stateStyles = '';
    switch (state) {
        case 'default':
            stateStyles = hasOutline ? open ? `border border-accent` : `border border-base-300` : 'border border-transparent'
            break;
        case 'disabled':
            stateStyles = `bg-base-100 opacity-70 cursor-not-allowed ${hasOutline ? 'border border-base-300' : ''}`
            break;
        case 'error':
            stateStyles = `text-warning-content ${hasOutline ? 'border border-warning-content' : ''}`
            break;
        case 'success':
            stateStyles = `${hasOutline ? 'border border-success-content' : ''}`
            break;
    }

    const bgStyles = (bgColor && bgColor !== 'none') ? `bg-${bgColor} text-base-content` : '';
    let classes = `w-full flex items-center justify-between truncate ellipsis box-border font-medium select-none ${sizeStyles} ${cornerStyles} ${bgStyles} ${stateStyles}`
    const labelTextSize = size == 'small' ? `text-xs` :  size == 'large' ? `text-lg`: `text-sm`;
    const labelClasses = `${bgColor == 'none' ? '': 'text-base-content'} ${labelTextSize} font-medium`

    const messageTextColor = state == 'error' ? stateStyles = 'text-error-content' : state == 'warning' ? stateStyles = 'text-warning-content' : state == 'success' ? stateStyles = 'text-success-content' : 'text-base-content'
    const messageClasses = `text-sm ${messageTextColor}`
    const widthStyle = width != 'auto' ? `w-${width}` : size == 'small' ? 'min-w-[120px]' : size == 'large' ? 'min-w-[200px]' : 'min-w-[160px]'
    const gapStyles = size == 'small' ? 'gap-0.5' : size == 'large' ? 'gap-1.5' : 'gap-1'
    let wrapperClasses = `flex flex-col ${widthStyle} ${gapStyles} relative`

    const RightIconComponent = rightIcon !== 'none' ? 
        <Icon 
            icon={rightIcon?.toLowerCase()} 
            defaultIconSet={defaultIconSet} 
            className={`flex-shrink-0 flex-grow-0 opacity-80 scale-75`}
            /> : null;

    /* OPTIONS STYLING */
    const shadowStyles = size == 'small' ? 'shadow-sm' : size == 'large' ? 'shadow-md' : 'shadow'
    const optionsBorderRadius = (size === 'small' ? 'rounded' : size === 'large' ? 'rounded-lg' : 'rounded-md');
    const optionsClasses = `w-full absolute mt-2 bg-white overflow-hidden ${optionsBorderRadius} ${shadowStyles} border border-base-100`
    const optionSizeStyles = size == 'small' ? `py-0.5 px-2 gap-1.5 text-xs min-w-[120px]` :  size == 'large' ? `py-2 px-3 gap-3 text-base min-w-[200px]`: `py-1.5 px-2 gap-3 text-sm min-w-[160px]`;
    const optionClasses = `${optionSizeStyles} hover:bg-base-100 transition-all duration-100 ease-in-out cursor-default`

    return (
        <div
        {...attributes} {...listeners} 
            className={wrapperClasses}
        
    >
        {label && <label className={labelClasses}>
{label}
                </label>}
        <div className={classes}
onClick={() => setOpen(!open)}
        >
{selectedOption ?
selectedOption :
            <span className={'text-base-500'}> 
{placeholder}
            </span>} 
        
        {RightIconComponent}
        {open && (
            <div className={optionsClasses}
             style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1 }}>
                {options.map((option, index) => (
                    <div 
                        key={index}
                        className={optionClasses}
                        /* replace to '                        onClick={(e) => {
                            e.stopPropagation();
                            onSelect(option);
                        }' */
                        >
                    {option}
                    </div>
                ))}
            </div>
        )}
        </div>
        {helperText && <span className={messageClasses}>
{helperText}
        </span>}
    </div>
);  
}

Select.propTypes = {
    width: PropTypes.oneOf(['auto', '1/2', 'full']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string,
    state: PropTypes.oneOf(['default', 'disabled', 'error', 'success']),
    bgColor: PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'none']),
    value: PropTypes.string,
    placeholder: PropTypes.string,
    showOptions: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.string),
    rightIcon: PropTypes.oneOf(['chevron-down','none']),
    hasOutline: PropTypes.bool,
    onSelect: PropTypes.func,
    helperText: PropTypes.string,
};

