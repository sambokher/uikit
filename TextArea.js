import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { Icon } from './index'
import { iconMap } from './iconMap'

const allIconNames = Object.keys(iconMap) || []

export default function TextArea(props) {
    
    const {
        state = 'default',
        bgColor = 'base-0',
        size = 'medium',
        maxRows = 5,
        defaultRows = 3,
        placeholder = 'placeholder text',
        label = 'Label',
        helperText = '',
        value = '',
        maxCharacters = 200,
        onChange = () => {},
        prefix = '',
        hasCharacterCount = true,
        textAlign = 'left',
        width = 'auto',
        rightIcon = 'none',
        hasOutline = true,
        defaultIconSet,
        attributes,
        listeners
      } = props;
    
    const textAreaRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);


    const sizeStyles = size == 'small' ? `py-2xs px-sm gap-xs text-xs` : size == 'large' ? `py-sm px-base gap-base text-base` : `py-xs px-sm gap-base text-sm`;
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"
    

    let stateStyles = '';
    switch (state) {
        case 'default':
            stateStyles = hasOutline ? isFocused ? `border border-accent` : `border border-base-300` : 'border border-transparent'
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

    
    
    const bgStyles = (bgColor && bgColor !== 'none') ? `bg-${bgColor}` : '';
    let classes = `w-full flex items-center justify-between truncate ellipsis box-border font-medium ${sizeStyles} ${cornerStyles} ${bgStyles} ${stateStyles}`
    
    const labelTextSize = size == 'small' ? `text-sm` :  size == 'large' ? `text-lg`: `text-md`;
    const labelClasses = `text-base-content ${labelTextSize} font-medium`
    
    const messageTextColor = state == 'error' ? stateStyles = 'text-warning-content' : state == 'success' ? stateStyles = 'text-success-content' : ''
    const messageClasses = `text-sm font-sm ${messageTextColor}`
    const widthStyle = width != 'auto' ? `w-${width}` : size == 'small' ? 'min-w-[120px]' : size == 'large' ? 'min-w-[200px]' : 'min-w-[160px]'

    let wrapperClasses = `flex flex-col gap-1 ${widthStyle}`

    const RightIconComponent = rightIcon !== 'none' ? <Icon icon={rightIcon?.toLowerCase()} defaultIconSet={defaultIconSet} className='flex-shrink-0 flex-grow-0 -mr-1 self-start'/> : null;

    // Code to auto-resize the textarea
    const lineHeight = size == 'small' ? 1 : size == 'large' ? 1.5 : 1.25
    const textAreaStyles = {
        lineHeight,
        height: 'auto',
        minHeight: Math.min(defaultRows, maxRows) * lineHeight + 'em',
        maxHeight: maxRows * lineHeight + 'em',
        overflow: 'auto'
    }
    
    const adjustTextAreaHeight = (lineHeight, maxRows) => {
        const textAreaElement = textAreaRef.current;
        if (!textAreaElement) return;
        textAreaElement.style.height = 'auto';
        const newHeight = textAreaElement.scrollHeight;
        const maxHeight = lineHeight * maxRows * 16; // Assuming lineHeight is in rem
        textAreaElement.style.height = `${Math.min(newHeight, maxHeight)}px`;
    };

    useEffect(() => {
        adjustTextAreaHeight(parseFloat(textAreaStyles.lineHeight), maxRows);
        // Optional: If the value is part of the state and could change externally,
        // you might want to observe changes and adjust the height accordingly.
    }, [maxRows, value]); // Add other dependencies as necessary

    // Code to count characters
    const countCharacters = (text) => { return text.length || 0 }
    const [ charCount, setCharCount ] = useState(countCharacters(value.length));

    function handleChange(e) {
        adjustTextAreaHeight(parseFloat(textAreaStyles.lineHeight), maxRows);
        setCharCount(countCharacters(e.target.value)); 
        onChange(e.target.value);
    }
    

    return (
        <div
        {...attributes} {...listeners} 
            className={wrapperClasses}
        >
            {label && <label className={labelClasses}>
{label}
                </label>}
            <div style={{boxSizing: 'border-box'}} className={classes}>
            {prefix}
            
            <textarea
            type='text'
            ref={textAreaRef}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={state == 'disabled'}
            className={`flex-grow text-${textAlign} border-transparent focus:outline-none focus:ring-0 font-medium resize-none
            placeholder-base-500 text-base-content bg-transparent w-full ${state == 'disabled' && 'cursor-not-allowed'}`}
            value={value}
            style={textAreaStyles}
            placeholder={placeholder}
            onChange={e => handleChange(e)}
            />  
            {RightIconComponent}
            </div>
            {(helperText || hasCharacterCount) &&
            <div className={`flex flex-row gap-2 items-start justify-between w-full ${messageClasses}`}>
            <span>
{helperText}
            </span>
            <span className={`opacity-70 flex-shrink-0 text-xs ${charCount > maxCharacters ? 'text-warning' : '' }`}>{charCount}/{maxCharacters}</span>
            </div>
            }            
        </div>
        
    );
}

TextArea.propTypes = {
    width: PropTypes.oneOf(["auto", "1/2", "full"]),
    textAlign: PropTypes.oneOf(['left', 'center', 'right']),
    defaultRows: PropTypes.number,
    maxRows: PropTypes.number,
    state: PropTypes.oneOf(['default', 'disabled', 'error', 'success']),
    bgColor: PropTypes.oneOf(['none', 'base-0', 'base-100']),
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    helperText: PropTypes.string,
    hasCharacterCount: PropTypes.bool,
    prefix: PropTypes.string,
    rightIcon: PropTypes.oneOf(['none', ...allIconNames]),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    maxCharacters: PropTypes.number,
    hasOutline: PropTypes.bool,
};

