import PropTypes from 'prop-types'
import { Icon } from './index'
import { iconMap } from './iconMap'
import React, { useState } from 'react';

export default function SegmentedSwitchIcons(props) {
    
    const {
        size = 'medium',
        defaultOption = 0,
        width = 'auto',
        bgColor = 'base-200',
        options = ['heart', 'star', 'check'],
        selectedOptionColor = 'base-0',
        hasOutline = true,
        attributes,
        listeners
      } = props;

    const [selectedOption, setSelectedOption] = useState(defaultOption)
    function handleSelect(index) {
        setSelectedOption(index)
    }

    const widthStyle = `w-${width}`
    const sizeStyles = size == 'small' ? `text-xs` : size == 'large' ? `text-base` : `text-sm`;
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"
    const textColor = bgColor.startsWith('base-') ? 'text-base-content' : `text-${bgColor}-content`

    const bgStyles = bgColor != 'none' ? `bg-${bgColor} text-${bgColor}-content` : ''
    const borderStyles = hasOutline ? 'border border-base-300' : 'border border-transparent';
    const classes = `flex flex-row items-center justify-between font-medium whitespace-nowrap flex-shrink-0 relative
    ${bgStyles} ${borderStyles} ${sizeStyles} ${cornerStyles}`
    
    
    const optionSizeStyles = size == 'small' ? `p-0.5 border-2 rounded` : size == 'large' ? `p-1.5 border-2 rounded-lg` : `p-0.5 border-2 rounded-md`;
    const optionClasses = `flex flex-row items-center justify-center text-center cursor-pointer border-${bgColor} ${optionSizeStyles} ${textColor}`
    
    const selectedTextColor = selectedOptionColor?.startsWith('base') ? `text-base-content` : `!text-base-0`

    const selectedOptionClasses = `cursor-pointer text-center bg-${selectedOptionColor} border-${bgColor} ${selectedTextColor} ${optionSizeStyles}`

    const gapStyles = size == 'small' ? 'gap-0.5' : size == 'large' ? 'gap-1.5' : 'gap-1'
    let wrapperClasses = `flex flex-col ${widthStyle} ${gapStyles} select-none`

    return (
        <div
        {...attributes} {...listeners} 
            className={wrapperClasses}
        >
        <div className={classes}>
        {options.map((icon, index) => {
            const IconComponent = <Icon icon={icon} className='flex-shrink-0 mx-auto scale-75' />
            return (
                <div 
                    className={selectedOption == index ? selectedOptionClasses : optionClasses}
                    style={{
                        width: `${100 / options?.length}%`,
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden', 
                    }}
                    key={index}
onClick={()=> handleSelect(index)}
                >
                    {IconComponent}
                </div>
            );})}
        </div>
    </div>
);  
}

SegmentedSwitchIcons.propTypes = {
    width: PropTypes.oneOf(['auto', '1/2', 'full']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    bgColor: PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'base-300']),
    selectedOptionColor: PropTypes.oneOf(['base-0', 'accent', 'primary', 'success', 'info']),
    defaultOption: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.string),
    hasOutline: PropTypes.bool,
};

