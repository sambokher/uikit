import PropTypes from 'prop-types'
import React, { useState } from 'react';

export default function Slider(props) {
    
    const {
        width = 'auto',
        label = 'label',
        barColor = 'info',
        value = 50, 
        minValue = 0,
        maxValue = 100,
        size = 'small',
        attributes,
        listeners
      } = props;
    
    const [sliderValue, setSliderValue] = useState(parseInt(value));

    const widthStyle = width != 'auto' ? `w-${width}` : size == 'small' ? 'min-w-[120px]' : size == 'large' ? 'min-w-[200px]' : 'min-w-[160px]'
    const sizeStyles = size == 'small' ? 'gap-0.5' : size == 'large' ? 'gap-2' : 'gap-1.5'
    let wrapperClasses = `flex flex-col ${widthStyle} ${sizeStyles}`
    
    const handleSliderChange = (event) => {
        const newValue = event.target.value;
        setSliderValue(newValue);
        // add your onChange logic here
    };

    const heightMap = {
        small: 8,
        medium: 10,
        large: 12
    }    

    const circleSizeMap = {
        small: `[&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2`,
        medium: `[&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3`,
        large: `[&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4`
    }

    // [&::-webkit-slider-thumb]:ring-info [&::-webkit-slider-thumb]:ring-success  [&::-webkit-slider-thumb]:ring-warning [&::-webkit-slider-thumb]:ring-error [&::-webkit-slider-thumb]:ring-accent [&::-webkit-slider-thumb]:ring-primary [&::-webkit-slider-thumb]:ring-base-content
    const inputRangeStyles = `[&::-webkit-slider-thumb]:appearance-none ${circleSizeMap[size]} [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-base-0 [&::-webkit-slider-thumb]:ring [&::-webkit-slider-thumb]:ring-${barColor}`
    const labelTextSize = size == 'small' ? `text-xs` :  size == 'large' ? `text-lg`: `text-sm`;
    const labelClasses = `${labelTextSize} font-medium`

    return (
        <div 
        {...attributes} {...listeners} 
            className={wrapperClasses}
        >   
        {label && <label className={labelClasses}>
{label}
        </label>}
        <input
                type="range"
                min={minValue}
                className={inputRangeStyles}
                max={maxValue}
                value={sliderValue}
onChange={handleSliderChange}
                style={{
                    width: '100%', 
                    height: heightMap[size],
                    cursor: 'ew-resize',
                    background: `linear-gradient(to right, var(--${barColor}) 0%, var(--${barColor}) ${(sliderValue-minValue)/(maxValue-minValue)*100}%,  var(--base-200) ${(sliderValue-minValue)/(maxValue-minValue)*100}%, var(--base-200) 100%)`,
                    appearance: 'none', 
                    borderRadius: 100 
                }}
            />
        <div className='justify-between flex flex-row w-full text-sm'>
                <div className='flex-shrink-0 leading-none'>{minValue}</div>
                <div className='flex-shrink-0 leading-none'>{maxValue}</div>
            </div>
        </div>
    ); 
}

Slider.propTypes = {
    width: PropTypes.oneOf(['auto', '1/2', 'full']),
    label: PropTypes.string,
    barColor: PropTypes.oneOf(['info', 'primary', 'accent', 'success', 'base-content', 'warning', 'error']),
    value: PropTypes.string,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    value: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

