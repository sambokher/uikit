import PropTypes from 'prop-types'
import React from 'react';

export default function Badge(props) {
    
    const {
        type = 'filled',
        text = 'Badge',
        color = 'success-content',
        size = 'medium',
        isPill = false,
        alignSelf = 'auto',
        attributes,
        listeners
      } = props;
    
    
    const styleMap = {
        'filled': color == 'base-200' ? `bg-base-200 text-base-content border-transparent` : `bg-${color} text-white border-transparent` ,
        'outline': color == 'base-200' ? `text-base-600 border-base-300` : `text-${color} border-${color}`,
        'light': color == 'base-200' ? `bg-base-100 text-base-content border-base-200` : `text-${color} border-transparent`
    }
    
    const sizeStyleMap = {
        small: `text-xs py-2xs gap-xs ${isPill ? 'rounded-full px-sm' : 'rounded px-xs'}`,
        medium: `text-sm py-xs gap-sm ${isPill ? 'rounded-full px-base' : 'rounded-md px-sm'}`,
    };
    
    const sizeStyles = sizeStyleMap[size]

    let wrapperClasses = `flex font-semibold items-center flex-shrink-0 justify-center leading-tight self-${alignSelf} ${sizeStyles} ${styleMap[type]}`
    
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 120,  }

    return (
        <div 
        {...attributes} {...listeners} 
            className={wrapperClasses} style={{
                borderWidth: size == 'small' ? '1px' : '1.5px',
                backgroundColor: type == 'light' && `color-mix(in srgb, var(--${color}) 16%, transparent)`
            }}
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
    color: PropTypes.oneOf(['info-content', 'primary', 'accent', 'base-200', 'success-content', 'base-content', 'warning-content', 'error-content']),
    size: PropTypes.oneOf(['small', 'medium']),
    isPill: PropTypes.bool,
    alignSelf: PropTypes.oneOf(['auto', 'start', 'end', 'center'])
};

