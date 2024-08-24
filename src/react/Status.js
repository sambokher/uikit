import React from 'react'
import PropTypes from 'prop-types'

export default function Status(props) {

    const {
        color = 'info',
        size = 'medium',
        text = 'Status',
        isPill = false,
        style = 'subtle',
        attributes,
        listeners
      } = props;
    
    const sizeStyleMap = {
        small: `py-1 px-2 gap-1.5 text-xs max-w-[120px]`,
        medium: `py-1.5 px-2 gap-2 text-sm max-w-[160px]`
    };
    const cornerStyles = isPill ? 'rounded-full' : size === 'small' ? 'rounded' : 'rounded-md';
    const sizeStyles = sizeStyleMap[size]

    const fontColor = `text-base-content`
    const borderStyles = style == 'bright' ? `border border-${color}-focus` : `border border-base-300`
    
    let wrapperClasses = `${borderStyles} ${fontColor} ${sizeStyles} flex flex-row items-center font-medium justify-start leading-tight flex-shrink-0 flex-grow-0 whitespace-nowrap ${cornerStyles}`
    
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'};
    const circleSize = size == 'small' ? 7 : 9;

    return (
        <div 
        {...attributes} {...listeners} 
            className={wrapperClasses}>   
        
        {/* Status Indicator */}
        <div className={`flex-shrink-0 rounded-full ${color == 'base-content' ? 'bg-base-500' : `bg-${color}-content`} `}
            style={{
            width: circleSize, 
            height: circleSize, 
            boxShadow: style == 'bright' && `0 0 0 ${size === 'small' ? '2px' : '3px'} var(--${color == 'base-content' ? 'base-300' : `${color}`})`
        }} />

        {/* Text */}
        <span style={truncateStyle}>
{text}
        </span>
        </div>
    ); 
}

Status.propTypes = {
    text: PropTypes.string,
    color: PropTypes.oneOf(['info', 'success', 'base', 'warning', 'error']),
    size: PropTypes.oneOf(['small', 'medium']),
    style: PropTypes.oneOf(['bright', 'subtle']),
    isPill: PropTypes.bool,
};

