import React from 'react'
import PropTypes from 'prop-types';

export default function Loader(props) {

    const { size='16px', type='spinner', color='primary', opacity='70', attributes, listeners } = props
    
    const borderSizeMap = {
        '12px': 'border',
        '16px': 'border-2',
        '20px': 'border-[3px]',
        '24px': 'border-4',
        '28px': 'border-5'
    };
    // border-current

    const typeClasses = type == 'spinner' ? `${borderSizeMap[size]} border-solid border-${color} border-t-transparent` : 
    `bg-${color} `
    
    const animation = 
        type == 'spinner' ? 'animate-spin' : 'pulsate-125' 
    let loaderClasses = `${typeClasses} rounded-full opacity-${opacity} ${animation}`

    return (
            <div 
                style={{width: size, height: size}}
                className={loaderClasses} {...attributes} {...listeners} />
    );
}

Loader.propTypes = {
    type: PropTypes.oneOf(['spinner', 'pulse']),
    size: PropTypes.oneOf(['12px', '16px', '20px', '24px', '28px']),
    color: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'accent', 'base-content', 'error-content', 'warning-content', 'success-content', 'base-0', 'base-100', 'info-content']),
    PropTypes.string
    ]),
    opacity: PropTypes.oneOf(['100', '70', '50']),
    children: PropTypes.node
};

