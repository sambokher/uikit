import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'; 

export default function ToggleSwitch(props) { 
    
    const {
        label = 'toggle label',
        type = 'standard',
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

    const typeMap = {
        'primary': `bg-primary text-primary-content`,
        'standard': `bg-base-content text-base-content`,
        'accent': `bg-accent text-accent-content`,
        'warning': 'bg-warning-content text-warning-content',
        'success': 'bg-success-content text-success-content',
        'disabled': 'bg-base-300 text-base-300',
    };

    let wrapperClasses = `flex flex-row items-start ${sizeStyles} cursor-default`
    
    const switchSizeMap = {
        'small': 'w-7 p-[px]',
        'medium': 'w-8 p-[px]',
        'large': 'w-10 p-[px]',
    }

    const switchStyles = isToggled ? typeMap[type] : `bg-base-300`;
    const switchClasses = `relative flex flex-row justify-${isToggled ? 'end' : 'start'} ${switchStyles} ${switchSizeMap[size]} rounded-full items-center select-none transition duration-200 ease-in`
    const labelClasses = `${type == 'disabled' ? 'opacity-60' : ''} cursor-default`

    const borderMap = {
        'primary': `border-primary`,
        'standard': `border-base-content`,
        'accent': `border-accent`,
        'warning': 'border-warning-content',
        'success': 'border-success-content',
        'disabled': 'border-base-300',
    };
    
    const toggleSize = {
        'small': 18,
        'medium': 21,
        'large': 24
    }
    const toggleSpanStyle = `${type == 'disabled' ? 'bg-base-200 cursor-not-allowed': 'bg-white'} ${isToggled ? borderMap[type] : 'border-base-300'}  rounded-full shadow transform transition ease-in-out duration-200`    
    
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
    type: PropTypes.oneOf(['primary', 'standard', 'accent', 'warning', 'disabled', 'success']),
    label: PropTypes.string,
    isChecked: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

