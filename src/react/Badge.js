import React from 'react'
import PropTypes from 'prop-types'

export default function Badge(props) {
    
    const {
        type = 'filled',
        text = 'Badge',
        color = 'success',
        size = 'medium',
        isPill = false,
        alignSelf = 'auto',
        attributes,
        listeners
      } = props;
    
    
    const styleMap = {
        'filled': `bg-${color} text-${color == 'base-200' ? 'base-content' : 'base-0'} `,
        'outline': `text-${color} ring-1 ring-inset ring-${color}`,
        'light': color == 'base-200' ? `bg-base-100 text-base-content` : color == 'base-700' ? `bg-base-200 text-base-content` : `text-${color}-content bg-${color}-surface`
    }
    
    const sizeStyleMap = {
        small: `text-xs py-1 gap-1.5 ${isPill ? 'rounded-full px-2' : 'rounded px-1.5'}`,
        medium: `text-sm py-1.5 gap-2 ${isPill ? 'rounded-full px-3' : 'rounded-md px-2'}`,
    };
    
    const sizeStyles = sizeStyleMap[size]

    let wrapperClasses = `flex font-semibold items-center flex-shrink-0 justify-center leading-tight self-${alignSelf} ${sizeStyles} ${styleMap[type]}`
    
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 120 }

    return (
        <div 
        {...attributes} {...listeners} 
            className={wrapperClasses}
        >   
            <span className='w-full' style={{...truncateStyle}} >
            {text}
            </span>
        </div>
    ); 
}

Badge.propTypes = {
    type: PropTypes.oneOf(['filled', 'outline', 'light']),
    text: PropTypes.string,
    color: PropTypes.oneOf(['base-200', 'base-700',  'primary', 'accent', 'info', 'success', 'warning', 'error']),
    size: PropTypes.oneOf(['small', 'medium']),
    isPill: PropTypes.bool,
    alignSelf: PropTypes.oneOf(['auto', 'start', 'end', 'center'])
};

