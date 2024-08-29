import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Icon } from './index'
import { iconMap } from './iconMap'

const allIconNames = Object.keys(iconMap) || []

const sampleOptions = [
    { label: 'Option A', value: 'option-a', icon: 'heart' },
    { label: 'Option B', value: 'option-b', icon: 'circle' },
    { label: 'Option C', value: 'option-c', icon: 'star' },
]
export default function SegmentedSwitch(props) {
    
    const {
        size = 'medium',
        value: externalValue,
        width = 'auto',
        bgColor = 'base-100',
        selectedOptionColor = 'base-0',
        options: externalOptions,
        onChange,
        hasOutline = false,
        attributes,
        listeners
      } = props;


    const [internalOptions, setInternalOptions] = useState(externalOptions || sampleOptions);
    const [selectedOption, setSelectedOption] = useState(externalValue || internalOptions[0].value);
    const isControlled = externalOptions !== undefined && onChange !== undefined;
    const options = isControlled ? externalOptions : internalOptions;

    useEffect(() => {
        if (externalOptions) {
            setInternalOptions(externalOptions);
        }
    }
    , [externalOptions]);

    useEffect(() => {
        if (externalValue) {
            setSelectedOption(externalValue);
        }
    }
    , [externalValue]);

    /* Wrapper */ 
    const widthStyle = `w-${width}`
    const gapStyles = size == 'small' ? 'gap-0.5' : size == 'large' ? 'gap-1.5' : 'gap-1'
    const sizeStyles = size == 'small' ? `gap-0.5 text-xs p-0.5` : size == 'large' ? `gap-1.5 text-base p-1` : `gap-1 text-sm p-0.5`;
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"
    const bgStyles = bgColor != 'none' ? `bg-${bgColor} text-${bgColor}-content` : ''
    const borderStyles = hasOutline ? 'ring-1 ring-inset ring-base-200' : ''
    let wrapperClasses = `flex flex-row items-center justify-between font-medium whitespace-nowrap ${widthStyle} ${gapStyles} select-none
    ${bgStyles} ${borderStyles} ${sizeStyles} ${cornerStyles}`
    
    const textColor = bgColor.startsWith('base-') ? 'text-base-content' : `text-${bgColor}-content`

    /* Options */ 
    const optionSizeStyles = size == 'small' ? `py-0.5 px-2 rounded-sm` : size == 'large' ? `py-2 px-3 rounded-md` : `py-1.5 px-2.5 rounded`;
    const optionClasses = `cursor-pointer  flex flex-row flex-grow items-center justify-center text-center ${optionSizeStyles} ${textColor} ${gapStyles}`
    const selectedTextColor = selectedOptionColor.startsWith('success') || selectedOptionColor.startsWith('info') ? `text-${selectedOptionColor.replace('-content', '')}` : `text-${selectedOptionColor}-content`
    const selectedOptionClasses = `bg-${selectedOptionColor} ring-1 ring-base-200  ${selectedTextColor}`
    
    
    function handleSelect(value) {
        if (isControlled && onChange) {
            onChange(value);
        } else {
            setSelectedOption(value);
        }
    }

    
    return (
        <div
        {...attributes} {...listeners} 
            className={wrapperClasses}
        >
        
                {options
                .slice(0, 5) // up to 5 options
                .map((option, index) => (
                    <div className={`${optionClasses} ${option.value == selectedOption ? selectedOptionClasses : ''}`}
                    style={{minWidth: `auto`}}
                    key={index}
onClick={() => handleSelect(option.value)}
                    >
                        {option.icon && <Icon icon={option.icon} className='scale-75' />}
                        <span className='text-center' >
                            {option.label}
                        </span>
                    </div>
                ))}
        
        
    </div>
);  
}

SegmentedSwitch.propTypes = {
    width: PropTypes.oneOf(['auto', '1/2', 'full']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    bgColor: PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'base-300']),
    selectedOptionColor: PropTypes.oneOf(['base-0', 'accent', 'primary', 'success-content', 'info-content']),
    defaultOption: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
        icon: PropTypes.string,
    })),
    hasOutline: PropTypes.bool,
};

