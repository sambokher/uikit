import PropTypes from 'prop-types';
import * as IconoirIcons from 'iconoir-react';
import React from 'react';

const allIconNames = Object.keys(IconoirIcons); 

export default function IcoNoirIcon(props) {
    
    const { name, color, size, thickness, attributes, listeners } = props
    
    const colorStyles = color == 'auto' ? '' : `text-${color}`
    let classes = `${colorStyles}`

    let wrapperClasses = `flex items-center justify-center`

    const IconComponent = IconoirIcons[name]; // Dynamic icon component
    
    const dimensions = size == 'auto' ? size : `${size}px`

    if (!IconComponent) {
        return null; // or render a default icon
    }
    
    return (
        <div 
            {...attributes} {...listeners} 
            className={wrapperClasses} style={{width: dimensions, height: dimensions}}>
        <IconComponent 
            className={classes}
            {...(size !== 'auto' ? { height: size, width: size } : {})}
            strokeWidth={thickness}
        /></div>
    )
}

IcoNoirIcon.propTypes = {
    name: PropTypes.oneOf(allIconNames),
    color: PropTypes.oneOf(['auto', 'primary', 'accent', 'base-content', 'info-content', 'warning-content', 'success-content', 'error-content', 'base-100', 'base-200', 'base-300']),
    size: PropTypes.oneOf(['auto', '12', '16', '20', '24', '32']),
    thickness: PropTypes.oneOf(['0.5px', '1px', '1.2px', '2px', '3px']),
};

IcoNoirIcon.defaultProps = {
    name: 'HeartSolid',
    color: 'auto',
    size: 'auto',
    thickness: '1.2px'
};

