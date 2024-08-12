import PropTypes from 'prop-types'
import { useState } from 'react';

export default function Slider(props) {
    
    const {
        width = 'auto',
        label = 'label',
        barColor = 'info-content',
        value = 50, // Assuming this should be a number, not a string based on its usage as a slider value
        minValue = 0,
        maxValue = 100,
        size = 'small',
        showProgress = false, // Adding this default since it seems important for functionality but was omitted in the original destructuring
        attributes,
        listeners
      } = props;
    
    const [sliderValue, setSliderValue] = useState(parseInt(value));

    const widthStyle = width != 'auto' ? `w-${width}` : size == 'small' ? 'min-w-[120px]' : size == 'large' ? 'min-w-[200px]' : 'min-w-[160px]'
    const sizeStyles = size == 'small' ? 'gap-2xs' : size == 'large' ? 'gap-sm' : 'gap-xs'
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

    const inputRangeStyles = `[&::-webkit-slider-thumb]:appearance-none ${circleSizeMap[size]} [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-base-0 [&::-webkit-slider-thumb]:ring [&::-webkit-slider-thumb]:ring-info-content`
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
                    cursor: 'pointer',
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
    barColor: PropTypes.oneOf(['info-content', 'primary', 'accent', 'success-content', 'base-content', 'warning-content', 'error-content']),
    value: PropTypes.string,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

