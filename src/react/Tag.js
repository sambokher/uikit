import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './index'
import { iconMap } from './iconMap'

const allIconNames = Object.keys(iconMap) || []

export default function Tag(props) {
    
    const {
        text = 'Tag',
        type = 'filled',
        color = 'info-content',
        size = 'medium',
        leftIcon = 'none',
        rightIcon = 'close',
        isPill = true,
        attributes,
        listeners
      } = props;
    
    // CONTAINER STYLES
    const styleMap = {
        'filled': color == 'base-200' ? `bg-base-200 text-base-content border-transparent` : `bg-${color} text-white border-transparent` ,
        'outline': color == 'base-200' ? `text-base-600 border-base-300` : `text-${color} border-${color}`,
        'light': color == 'base-200' ? `bg-base-100 text-base-content border-base-200` : `text-${color} border-transparent`
    }
    
    const sizeStyleMap = {
        small: `text-xs py-0.5 gap-1.5 ${isPill ? 'rounded-full px-2' : 'rounded px-1.5'}`,
        medium: `text-sm py-1 gap-2 ${isPill ? 'rounded-full px-3' : 'rounded-md px-2'}`,
    };

    const sizeStyles = sizeStyleMap[size]

    let wrapperClasses = `flex font-semibold items-center flex-shrink-0 justify-center ${sizeStyles} ${styleMap[type]}`
    
    const LeftIconComponent = leftIcon !== 'none' ? <Icon icon={leftIcon?.toLowerCase()} className={`flex-shrink-0`}/> : null;
    const RightIconComponent = rightIcon !== 'none' ? <Icon icon={rightIcon?.toLowerCase()} className='flex-shrink-0 scale-90'/> : null;

    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}

    return (
        <div 
            {...attributes} {...listeners} 
            className={wrapperClasses} style={{
                borderWidth: 1,
                backgroundColor: type == 'light' && `color-mix(in srgb, var(--${color}) 16%, transparent)`
            }}
        >   
        {LeftIconComponent}
        <span style={truncateStyle} className='flex-grow'>
            {text}
        </span>
        {RightIconComponent}
        </div>
    ); 
}

Tag.propTypes = {
    text: PropTypes.string,
    type: PropTypes.oneOf(['filled', 'outline', 'light']),
    color: PropTypes.oneOf(['info-content', 'primary', 'accent', 'base-200', 'success-content', 'base-content', 'warning-content', 'error-content']),
    size: PropTypes.oneOf(['small', 'medium']),
    leftIcon: PropTypes.oneOf(['none', ...allIconNames]),
    rightIcon: PropTypes.oneOf(['none', 'close', 'check', 'check-circle']), 
    isPill: PropTypes.bool,
};

