import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './index'
import { iconMap } from './iconMap'

const allIconNames = Object.keys(iconMap) || []

export default function Tag(props) {
    
    const {
        text = 'Tag',
        type = 'filled',
        color = 'base-200',
        size = 'medium',
        leftIcon = 'none',
        rightIcon = 'close',
        isPill = true,
        onRightIconClick,
        attributes,
        listeners
      } = props;
    
    // CONTAINER STYLES
    const styleMap = {
        'filled': `bg-${color} text-${color == 'base-200' ? 'base-content' : 'base-0'}` ,
        'outline': `text-${color} ring-1 ring-${color}` ,
        'light': `bg-${color}/20 text-${color?.startsWith('base') ? 'base-content' : color+'-content'}` ,
    }
    
    const sizeStyleMap = {
        small: `text-xs py-0.5 gap-0.5 ${isPill ? 'rounded-full px-2' : 'rounded px-1.5'}`,
        medium: `text-sm py-1 gap-1 ${isPill ? 'rounded-full px-3' : 'rounded-md px-2'}`,
    };

    const sizeStyles = sizeStyleMap[size]

    let wrapperClasses = `flex font-semibold items-center flex-shrink-0 justify-center ${sizeStyles} ${styleMap[type]}`
    
    const LeftIconComponent = leftIcon !== 'none' ? <Icon icon={leftIcon?.toLowerCase()} className={`flex-shrink-0 scale-90 -ml-${size == 'small' ? '1' : '1.5'}`}/> : null;
    const RightIconComponent = rightIcon !== 'none' ? <Icon 
        icon={rightIcon?.toLowerCase()} 
        className={`flex-shrink-0 scale-[0.8] active:scale-100 transition-all duration-150 -mr-${size == 'small' ? '1' : '1.5'}`}
onClick={onRightIconClick}
        /> : null;
        
    // -mr-1 -mr-1.5
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}

    return (
        <div 
            {...attributes} {...listeners} 
            className={wrapperClasses} 
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
    color: PropTypes.oneOf(['base-200', 'base-700',  'primary', 'accent', 'info', 'success', 'warning', 'error']),
    size: PropTypes.oneOf(['small', 'medium']),
    leftIcon: PropTypes.oneOf(['none', ...allIconNames]),
    rightIcon: PropTypes.oneOf(['none', 'close', 'check', 'check-circle']), 
    onRightIconClick: PropTypes.func,
    isPill: PropTypes.bool,
};

