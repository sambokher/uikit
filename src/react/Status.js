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
        small: `py-1 ${isPill ? 'px-2' : 'px-1.5'} gap-1.5 text-xs max-w-[120px]`,
        medium: `py-1 ${isPill ? 'px-2.5' : 'px-2'} gap-2 text-sm max-w-[160px]`
    };
    const cornerStyles = isPill ? 'rounded-full' : size === 'small' ? 'rounded' : 'rounded-md';
    const sizeStyles = sizeStyleMap[size]

    const fontColor = `text-base-content`
    const borderStyles = style == 'bright' ? `ring-1 ring-${color}` : ``
    const bgStyles = style == 'bright' ? `bg-${color}/20` : `bg-${color}/10`
    
    let wrapperClasses = `${borderStyles} ${fontColor} ${sizeStyles} ${bgStyles} flex flex-row items-center font-medium justify-start leading-tight flex-shrink-0 flex-grow-0 whitespace-nowrap ${cornerStyles}`
    
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'};
    const circleSize = size == 'small' ? 7 : 9;
    const ringStyles = size == 'small' ? 'ring-1' : 'ring-2';

    // ring-info/50 ring-success/50 ring-base-200/50 ring-base-700/50 ring-warning/50 ring-error/50
    // bg-info/10 bg-success/10 bg-base-200/10 bg-base-700/10 bg-warning/10 bg-error/10
    // bg-info/20 bg-success/20 bg-base-200/20 bg-base-700/20 bg-warning/20 bg-error/20

    return (
        <div 
        {...attributes} {...listeners} 
            className={wrapperClasses}>   
        
        {/* Status Indicator */}
        <div className={`flex-shrink-0 rounded-full bg-${color} 
        ${style == 'bright' ? `${ringStyles} ring-${color}/50` : ''} `}
            style={{
            width: circleSize, 
            height: circleSize, 
            
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
    color: PropTypes.oneOf(['info', 'success', 'base-200', 'base-700', 'warning', 'error']),
    size: PropTypes.oneOf(['small', 'medium']),
    style: PropTypes.oneOf(['bright', 'subtle']), // maybe add 'clean' style with base-0 background and current-20 border
    isPill: PropTypes.bool,
};

