import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react';

export default function RadioButton(props) {
    
    const { 
        state='default', 
        label='radio button', 
        isSelected=false, 
        style='standard',
        size='medium', 
        width='auto',
        onSelect,
        attributes, listeners } = props
    

    const sizeStyles = size == 'small' ? `gap-xs text-xs`: size == 'large' ? `gap-base text-base` : `gap-sm text-sm`;
    const paddingStyles = size == 'small' ? `py-2xs px-xs` : size == 'large' ? `py-sm px-base` : `py-xs px-sm`;
        
    const fillColorMap = {
        'default': `border border-primary`,
        'warning': `border border-warning-content`,
        'success': `border border-success-content`,
        'disabled': 'bg-base-200 border border-base-300'
    };
    
    const stateStyles = isSelected ? fillColorMap[state] : 'border border-base-300'
    const borderStyles = isSelected ? `border border-primary` : `border border-base-200`
    const bgSttyles = isSelected ? `bg-transparent` : `bg-transparent hover:bg-base-100 transition-all duration-75`
    
    const styleMap  = {
        standard: `flex items-start ${sizeStyles} cursor-default w-${width}`, 
        button: `flex flex-row ${paddingStyles} rounded items-center ${sizeStyles} cursor-pointer w-${width} ${borderStyles} ${bgSttyles}`
    }

    let wrapperClasses = styleMap[style] || styleMap['standard']

    const outerCircleDimensions = 
        style == 'standard' ? 
        size == 'small' ? 'w-4 h-4 mt-px' : size == 'large' ? 'w-6 h-6 ' : 'w-5 h-5' :
        size == 'small' ? 'w-3 h-3 mt-px' : size == 'large' ? 'w-5 h-5 ' : 'w-4 h-4'
    const outerCircleClasses = `${outerCircleDimensions} rounded-full flex items-center justify-center ${stateStyles} `

    const labelClasses = `whitespace-nowrap  ${state == 'disabled' ? 'opacity-60' : ''}`
    const checkColorMap = {
        'default': 'primary',
        'warning': 'warning-content',
        'success': 'success-content',
        'disabled': 'base-300'
    }
    const innerCircleSize = size == 'small' ? 8 : size == 'large' ? 12 : 10
    
    return (
        <div 
        {...attributes} {...listeners} 
            className={wrapperClasses} 
onClick={onSelect}
        >
            <div className="relative flex-shrink-0 inline-block">
                <span className={outerCircleClasses}>
                    {isSelected && <div
                    style={{width: innerCircleSize, height: innerCircleSize}}
                    className={`flex-shrink-0 rounded-full bg-${checkColorMap[state]}`}
                    />}
                </span>
            </div>
            {label && <span className={labelClasses} style={{textWrap: 'nowrap'}}>
{label}
            </span>}
        </div>
    );
}



RadioButton.propTypes = {
    width: PropTypes.oneOf(["auto", "1/2", "full"]),
    style: PropTypes.oneOf(['standard', 'button']),
    state: PropTypes.oneOf(['default', 'disabled', 'error', 'success']),
    label: PropTypes.string,
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};  

