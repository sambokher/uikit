import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react';
import { RadioButton } from './index'

const sampleOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
];

export default function RadioButtons(props) {
    
    const { 
        direction='flex-col',
        options: externalOptions,
        state='default',
        size='medium', 
        style='standard',
        width='auto',
        onSelect, 
        selectedOption: externalSelectedOption,
        attributes, 
        listeners 
    } = props
    
    
    const [internalOptions, setInternalOptions] = useState(externalOptions || sampleOptions);
    const [internalSelectedOption, setInternalSelectedOption] = useState(externalSelectedOption || null);
    const isControlled = externalOptions !== undefined && onSelect !== undefined;
    const options = isControlled ? externalOptions : internalOptions;
    const selectedOption = isControlled ? externalSelectedOption : internalSelectedOption;

    // Effect to sync internal state with external `tabs` prop
    useEffect(() => {
        if (!isControlled) {
            setInternalOptions(externalOptions || sampleOptions);
        }
    }, [externalOptions, isControlled]);

    let wrapperClasses = `flex ${direction} items-stretch gap-2 w-${width} cursor-default`;

    
    function handleOptionClick(e, value) {
        e.stopPropagation();
        
        if (isControlled && onSelect) {
            onSelect(value);
        } else {
            setInternalSelectedOption(value);
        }
    }


    
    return (
        <div 
        {...attributes} {...listeners} 
        className={wrapperClasses} 
        >
            
            {options.map((option, index) => (
            <RadioButton 
                key={index} 
                size={size}
                style={style}
                width={'full'}
                state={state}
                label={option.label}
                isSelected={selectedOption === option.value}
                onSelect={(e) => handleOptionClick(e, option.value)}
            />
            ))}   
            
        </div>
    );
}


RadioButtons.propTypes = {
    direction: PropTypes.oneOf(['flex-row', 'flex-col']),
    width: PropTypes.oneOf(["auto", "1/2", "full"]),
    style: PropTypes.oneOf(['standard', 'button']),
    state: PropTypes.oneOf(['default', 'disabled', 'error', 'success']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
    })),
};

