import PropTypes from 'prop-types'
import * as IconoirIcons from 'iconoir-react';
import { useState } from 'react';

export default function SegmentedSwitchIcons(props) {
    
    const {
        size = 'medium',
        defaultOption = 0,
        width = 'auto',
        bgColor = 'base-200',
        iconOptions = ['Heart', 'Star', 'Check'],
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
    
    
    const optionSizeStyles = size == 'small' ? `p-3xs border-2 rounded` : size == 'large' ? `p-xs border-2 rounded-lg` : `p-3xs border-2 rounded-md`;
    const optionClasses = `flex flex-row items-center justify-center text-center cursor-pointer border-${bgColor} ${optionSizeStyles} ${textColor}`
    
    const selectedTextColor = 
        selectedOptionColor.startsWith('success') || selectedOptionColor.startsWith('info') ? `text-${selectedOptionColor.replace('-content', '')}`
        : `text-${selectedOptionColor}-content`

    const selectedOptionClasses = `cursor-pointer text-center bg-${selectedOptionColor} border-${bgColor} ${selectedTextColor} ${optionSizeStyles}`

    const gapStyles = size == 'small' ? 'gap-3xs' : size == 'large' ? 'gap-xs' : 'gap-2xs'
    let wrapperClasses = `flex flex-col ${widthStyle} ${gapStyles} select-none`

    return (
        <div
        {...attributes} {...listeners} 
            className={wrapperClasses}
        >
        <div className={classes}>
        {iconOptions.map((icon, index) => {
            const IconComponent = IconoirIcons[icon] ? IconoirIcons[icon] : null;
            return (
                <div 
                    className={selectedOption == index ? selectedOptionClasses : optionClasses}
                    style={{
                        width: `${100 / iconOptions?.length}%`,
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden', 
                    }}
                    key={index}
onClick={()=> handleSelect(index)}
                >
                    {IconComponent && <IconComponent className='flex-shrink-0 mx-auto'/>}
                </div>
            );})}
        </div>
    </div>
);  
}



SegmentedSwitchIcons.propTypes = {
    width: PropTypes.oneOf(['auto', '1/2', 'full']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    bgColor: PropTypes.oneOf(['base-0', 'base-100', 'base-200', 'base-300']),
    selectedOptionColor: PropTypes.oneOf(['base-0', 'accent', 'primary', 'success-content', 'info-content']),
    defaultOption: PropTypes.number,
    iconOptions: PropTypes.arrayOf(PropTypes.string),
    hasOutline: PropTypes.bool,
};

