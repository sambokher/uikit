import React from 'react';
import PropTypes from 'prop-types'
import { Icon } from './index'
import { iconMap } from './iconMap'

const allIconNames = Object.keys(iconMap) || []

export default function Tab(props) {
    
    const {
        text = 'Tab',
        tabColor = 'accent',
        icon = 'none',
        state = 'inactive',
        size = 'small',
        borderPosition = 'bottom',
        attributes,
        listeners
      } = props;

    let sizeStyles = ''
    const direction = borderPosition == 'left' || borderPosition == 'right' ? 'v' : 'h'
    if (direction == 'h') {
        sizeStyles = size == 'small' ? `py-1 text-xs gap-1.5` :  
        size == 'large' ? `py-3 gap-3 text-md`: `py-1.5 gap-2 text-sm`;
    } else {
        sizeStyles = size == 'small' ? `px-2 text-xs gap-1.5` :  
        size == 'large' ? `px-4 text-md gap-3`: `px-3 text-sm gap-2`;
    }
    
    let wrapperClasses = `flex flex-row items-center justify-center pointer relative ${sizeStyles} border border-transparent group`

    const iconWidth = size == 'small' ? '16px' : size == 'large' ? '24px' : '20px'
    const IconComponent = icon !== 'none' ? <Icon icon={icon?.toLowerCase()} size={iconWidth} className={`flex-shrink-0`}/> : null;

    /* Tailwind safelist
    group-hover:bg-accent, group-hover:bg-accent-content, group-hover:bg-accent-focus,
    group-hover:bg-primary, group-hover:bg-primary-content, group-hover:bg-primary-focus,
    group-hover:bg-base-0, group-hover:bg-base-100, group-hover:bg-base-200, group-hover:bg-base-300, group-hover:bg-base-400, group-hover:bg-base-500, group-hover:bg-base-600, group-hover:bg-base-700, group-hover:bg-base-900, group-hover:bg-base-content,
    */

    const borderClasses = state == 'active' ? `bg-${tabColor}` : `transitiona-all duration-100 group-hover:bg-${tabColor}`
    const borderElement = {
        position: 'absolute',
        top: borderPosition == 'top' ? 0 : null,
        bottom: borderPosition == 'bottom' ? 0 : null,
        left: borderPosition == 'left' ? 0 : null,
        right: borderPosition == 'right' ? 0 : null,
        width: direction == 'h' ? '100%' : size == 'small' ? '2px' : size == 'large' ? '4px' : '3px', 
        height: direction == 'v' ? '100%' : size == 'small' ? '2px' : size == 'large' ? '4px' : '3px',
        borderRadius: 1, 
    }

    return (
        <div
        {...attributes} {...listeners} 
            className={wrapperClasses}
        >
            {IconComponent}
                {text}
            <div  className={borderClasses} style={borderElement} />
        </div>
    );
}

Tab.propTypes = {
    text: PropTypes.string,
    leftIcon: PropTypes.oneOf(['none', ...allIconNames]),
    tabColor: PropTypes.oneOf(['primary', 'accent', 'base-content', 'base-500', 'base-700', 'base-900']),
    state: PropTypes.oneOf(['active', 'inactive']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    borderPosition: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
};

