import PropTypes from 'prop-types'
import { useState } from 'react'

export default function SegmentedSwitch(props) {
    
    const {
        size = 'medium',
        defaultOption = 0,
        width = 'auto',
        bgColor = 'base-200',
        selectedOptionColor = 'base-0',
        options = ['Creativity', 'Uniqueness', 'Nerve', 'Talent'],
        hasOutline = false,
        attributes,
        listeners
      } = props;


    const [selectedOption, setSelectedOption] = useState(defaultOption)
    function handleSelect(index) {
        setSelectedOption(index)
    }

    const widthStyle = `w-${width}`
    const sizeStyles = size == 'small' ? `gap-3xs text-xs` : size == 'large' ? `gap-xs text-base` : `gap-2xs text-sm`;
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"
    const textColor = bgColor.startsWith('base-') ? 'text-base-content' : `text-${bgColor}-content`
    
    const bgStyles = bgColor != 'none' ? `bg-${bgColor} text-${bgColor}-content` : ''
    const borderStyles = hasOutline ? 'border border-base-300' : 'border border-transparent';
    const classes = `flex flex-row items-center justify-between font-medium whitespace-nowrap flex-shrink-0 relative ${bgStyles} ${borderStyles} ${sizeStyles} ${cornerStyles}`
    
    const optionSizeStyles = size == 'small' ? `py-3xs px-xs border-2 rounded` : size == 'large' ? `py-xs px-sm border-2 rounded-lg` : `py-3xs px-sm border-2 rounded-md`;
    const optionClasses = `cursor-pointer  flex flex-row items-center justify-center text-center border-${bgColor} ${optionSizeStyles} ${textColor}`
    
    const selectedTextColor = 
        selectedOptionColor.startsWith('success') || selectedOptionColor.startsWith('info') ? `text-${selectedOptionColor.replace('-content', '')}`
        : `text-${selectedOptionColor}-content`

    const selectedOptionClasses = `cursor-pointer text-center bg-${selectedOptionColor} border-${bgColor} ${selectedTextColor} ${optionSizeStyles}`

    const gapStyles = size == 'small' ? 'gap-3xs' : size == 'large' ? 'gap-xs' : 'gap-2xs'
    let wrapperClasses = `flex flex-col ${widthStyle} ${gapStyles} select-none`

    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',}



    return (
        <div
        {...attributes} {...listeners} 
            className={wrapperClasses}
        >
        <div className={classes}>
                {options
                .slice(0, 5) // up to 5 options
                .map((option, index) => (
                    <div className={selectedOption == index ? selectedOptionClasses : optionClasses}
                    style={{...truncateStyle, width: `${100/options.length}%`}}
                    key={index}
onClick={()=> handleSelect(index)}
                    >
                        <span className='text-center' style={truncateStyle}>
{option}
                        </span>
                    </div>
                ))}
        </div>
        
    </div>
);  
}

SegmentedSwitch.propTypes = {
    width: PropTypes.oneOf(['auto', '1/2', 'full']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    bgColor: PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'base-300']),
    selectedOptionColor: PropTypes.oneOf(['base-0', 'accent', 'primary', 'success-content', 'info-content']),
    defaultOption: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.string),
    hasOutline: PropTypes.bool,
};

