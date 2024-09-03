import PropTypes from 'prop-types'
import React, { useState } from 'react';
import { ButtonIcon, Icon } from './index'

export default function Search(props) {
    
    const {
        size = 'medium',
        state = 'default',
        bgColor = 'base-0',
        placeholder = 'Search',
        includeIcon = true,
        width = 'auto',
        hasOutline = true,
        attributes,
        listeners,
        defaultIconSet
      } = props;
    
    const [ isFocused, setIsFocused ] = useState(false);
    const [ query , setQuery] = useState('')

    const sizeStyles = size == 'small' ? `py-1 px-2 gap-1.5 text-xs` : size == 'large' ? `py-2 px-3 gap-3 text-base` : `py-1.5 px-2 gap-3 text-sm`;
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"
    
    const widthStyle = width != 'auto' ? `w-${width}` : size == 'small' ? 'min-w-[120px]' : size == 'large' ? 'min-w-[200px]' : 'min-w-[160px]'

    let stateStyles = hasOutline ? isFocused ? `border border-accent` : `border border-base-300` : 'border border-transparent'
    switch (state) {
        case 'disabled':
            stateStyles = `bg-base-100 opacity-70 cursor-not-allowed ${hasOutline ? 'border border-base-300' : ''}`
            break;
        case 'error':
            stateStyles = `text-warning ${hasOutline ? 'border border-warning' : ''}`
            break;
        case 'success':
            stateStyles = `text-success ${hasOutline ? 'border border-success' : ''}`
            break;
    }
    const bgStyles = (bgColor && bgColor !== 'none') ? `bg-${bgColor}` : '';
    const fontColor = (bgColor && bgColor !== 'none') ? 'text-base-content' : '' // inherit from parent
    let classes = `w-full flex items-center justify-between truncate ellipsis relative box-border font-medium ${sizeStyles} ${cornerStyles} ${bgStyles} ${stateStyles} ${fontColor}`
    
    const gapStyles = size == 'small' ? 'gap-0.5' : size == 'large' ? 'gap-1.5' : 'gap-1'
    let wrapperClasses = `flex flex-col ${widthStyle} ${gapStyles} relative`

    const iconWidth = size == 'small' ? 'w-4' : size == 'large' ? 'w-6' : 'w-5'
    const IconComponent = includeIcon ? <Icon icon={'search'} className={`flex-shrink-0 scale-90  ${iconWidth}`} defaultIconSet={defaultIconSet} /> : null
    const activeSearch = query && query.length > 0;
    
    return (
    <div 
    {...attributes} {...listeners} 
        className={wrapperClasses}
    >
        <div className={classes}>
        {IconComponent}
            <input
            type='text'
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={state == 'disabled'}
            className={`flex-grow text-left border-transparent focus:outline-none focus:ring-0 font-medium
            placeholder-base-500 text-base-content bg-transparent w-full truncate ellipsis ${state == 'disabled' && 'cursor-not-allowed'}`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            />  
        
        {activeSearch && 
        <div className={`absolute text-xs bg-${bgColor} cursor-pointer rounded ${size == 'large' ? 'right-2' : 'right-1.5'} top-1/2 -translate-y-1/2 transition-all rounded-lg`}>
            <ButtonIcon icon='close'
            size="small"
            type={"ghost"}
onClick={() => setQuery('')}
          /></div>}

        </div>
    </div>
);  
}

Search.propTypes = {
    width: PropTypes.oneOf(["auto", "1/2", "full"]),
    state: PropTypes.oneOf(['default', 'disabled', 'error', 'success']),
    bgColor: PropTypes.oneOf(['none', 'base-0', 'base-50', 'base-100']),
    placeholder: PropTypes.string,
    includeIcon: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    hasOutline: PropTypes.bool,
};

