import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'; 

export default function ToggleSwitch(props) { 
    
    const {
        label = 'toggle label',
        type = 'base-300',
        isChecked = false,
        size = 'medium',
        attributes,
        listeners
      } = props;

    const [isToggled, setIsToggled] = useState(isChecked);
    useEffect(() => {
        setIsToggled(isChecked);
    }, [isChecked]);

    const sizeStyles = size == 'small' ? `gap-1.5 text-xs` : size == 'large' ? `gap-3 text-base` : `gap-2 text-sm`;

    let wrapperClasses = `flex flex-row items-start ${sizeStyles} cursor-default`
    
    const switchSizeMap = {
        'small': 'w-7',
        'medium': 'w-8',
        'large': 'w-10',
    }

    const switchStyles = !isToggled ? `bg-current-20` : `bg-${type} text-${type}-content`
    const switchClasses = `relative flex flex-row justify-${isToggled ? 'end' : 'start'} ${switchStyles} ${switchSizeMap[size]} rounded-full items-center select-none transition duration-200 ease-in`
    const labelClasses = `${type == 'disabled' ? 'opacity-60' : ''} cursor-default`

    
    const toggleSize = {
        'small': 18,
        'medium': 21,
        'large': 24
    }
    const toggleSpanStyle = `${type == 'disabled' ? 'bg-base-200 cursor-not-allowed': 'bg-base-0'} ${isToggled ? `border-${type}`: 'border-current-20'}  rounded-full shadow transform transition ease-in-out duration-200`    
    
    return (
        <div 
            {...attributes} {...listeners} 
            className={wrapperClasses}
onClick={() => setIsToggled(!isToggled)}
        >
            <div className={switchClasses}>
                <div className={toggleSpanStyle}
                style={{
                    borderWidth: size == 'large' ? '2.5px' : '2px', 
                    height: toggleSize[size],
                    width: toggleSize[size],
                
                }}
                />
            </div>
            {label && <span className={labelClasses} style={{textWrap: 'balance'}}>
{label}
            </span>}
        </div>
    );
}

ToggleSwitch.propTypes = {
    type: PropTypes.oneOf(['primary', 'base-300', 'accent', 'warning', 'disabled', 'success']),
    label: PropTypes.string,
    isChecked: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

