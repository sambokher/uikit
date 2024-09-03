import React from 'react';
import PropTypes from 'prop-types'
import { spacingMap } from './helpers.js';

export default function Dot(props) {
    
    const {
        size = '8px',
        color = 'base-300',
        marginX = null,
        marginY = null, 
        attributes,
        listeners
      } = props;
    
      const { junoAttributes, outlineStyle} = props.junoProps || {}
    
    let classes = `py-${spacingMap[marginY]} px-${spacingMap[marginX]}`
    
    const inlineStyles = {
        width: size, 
        height: size,
    }

    return (
        <div 
        {...attributes} {...listeners} 
            className={classes}
        >
            <div className={`bg-slate-300 !bg-${color} rounded-full`} style={inlineStyles} />
        </div>)
}

Dot.propTypes = {
    color: PropTypes.oneOfType([
        PropTypes.oneOf(['base-0', 'base-100', 'base-200', 'base-300', 'base-content', 'primary', 'accent', 'success', 'warning', 'error', 
    'info', 'success-surface', 'warning-surface', 'error-surface', 'info-surface']),
        PropTypes.string]),
    marginX: PropTypes.oneOf(['6px', '8px', '12px', '16px', '24px']),
    marginY: PropTypes.oneOf(['6px', '8px', '12px', '16px', '24px']),
    size: PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px']),
};

