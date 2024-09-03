import React from 'react';
import PropTypes from 'prop-types'
import { spacingMap } from './helpers.js';

export default function Divider(props) {
    
    const {
        length = 'full',
        color = 'base-300',
        thickness = '1px',
        
        margins = null,
        
        direction = 'horizontal',
        attributes,
        listeners
      } = props;

    const marginStyles = direction == 'vertical' ? `h-${length} px-${spacingMap[margins]}` : `w-${length} py-${spacingMap[margins]}`
    
    let wrapperClasses = `${marginStyles}`

    const inlineStyles = {
        height: direction == 'horizontal' ? thickness : '100%',
        width: direction == 'vertical' ? thickness : '100%',
        backgroundColor: `var(--${color})`
    }
    
    return (
        <div
            className={wrapperClasses} 
            {...attributes} {...listeners} 
        >
            <div style={inlineStyles}/>
        </div>)
}

Divider.propTypes = {
    color: PropTypes.oneOf(['base-0', 'base-100', 'base-200', 'base-300', 'base-content', 'primary', 'accent', 'success', 'warning', 'error', 
    'info', 'success-surface', 'warning-surface', 'error-surface', 'info-surface']),
    margins: PropTypes.oneOf(['6px', '8px', '12px', '16px', '24px']),
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    thickness: PropTypes.oneOf(['0.5px', '1px', '2px', '3px', '4px']),
    length: PropTypes.oneOf(['full', '3/4', '2/3', '1/2', '1/3']),
};

