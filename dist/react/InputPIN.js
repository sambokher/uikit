import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';

function InputPIN(props) {
    const {
        length = 4, 
        state = 'default',
        bgColor = 'base-0',
        size = 'medium',
        width = 'auto',
        hasOutline = true,
        onComplete = () => {},
        onChange = () => {}, 
        attributes,
        listeners
    } = props;


    const [code, setCode] = useState([...Array(length)].map(() => ""));
    useEffect(() => {
        setCode([...Array(length)].map(() => ""));
    }, [length]);

    const inputs = useRef([]);

    const handleFocus = (slot) => {
        inputs.current[slot].focus();
    };

    const processInput = (e, slot) => {
        const num = e.target.value;
        if (/[^0-9]/.test(num)) return; // Only allow digits
        const newCode = [...code];
        newCode[slot] = num;
        setCode(newCode);

        if (slot !== length - 1 && num !== "") {
            handleFocus(slot + 1);
        }

        if (newCode.every(num => num !== "")) {
            onComplete(newCode.join(""));
        }

        onChange(newCode.join("")); // Trigger onChange with the full PIN code
    };

    const sizeStyles = size === 'small' ? `text-xs w-5 py-1` : size === 'large' ? `text-base w-8 py-2` : `text-sm w-7 py-1.5`;
    const cornerStyles = size === "small" ? "rounded" : size === "large" ? "rounded-lg" : "rounded-md";
    const gapStyles = size == 'small' ? 'gap-2' : size == 'large' ? 'gap-4' : 'gap-3';
    
    let stateStyles = hasOutline ? `ring-1 ring-inset ring-base-300` : 'ring-1 ring-inset ring-transparent';
    if (state === 'disabled') {
        stateStyles = `bg-base-100 opacity-70 cursor-not-allowed ${hasOutline ? 'ring-1 ring-inset ring-base-300' : ''}`;
    } else if (state === 'error') {
        stateStyles = `text-warning-content ${hasOutline ? 'ring-1 ring-inset ring-warning-content' : ''}`;
    } else if (state === 'success') {
        stateStyles = `text-success-content ${hasOutline ? 'ring-1 ring-inset ring-success-content' : ''}`;
    }

    const bgStyles = (bgColor && bgColor !== 'none') ? `bg-${bgColor}` : '';

    const widthStyle = width !== 'auto' ? `w-${width}` : 'w-auto';
    
    let wrapperClasses = `flex flex-row items-center justify-evenly ${widthStyle} ${gapStyles} border border-transparent`;

    return (
        React.createElement('div', {
        ...attributes, ...listeners,  
        className: wrapperClasses,}

                , code.map((num, idx) => (
                    React.createElement('input', {
                        key: idx,
                        type: "text",
                        inputMode: "numeric",
                        maxLength: 1,
                        value: num,
disabled: state === 'disabled',
                        className: `
                            ${sizeStyles} ${cornerStyles} ${bgStyles} ${stateStyles}
                             text-center focus:ring-2 focus:ring-accent 
                            ${state === 'disabled' && 'cursor-not-allowed'}`,
onChange: (e) => processInput(e, idx),
                        /* replace to  'onKeyUp={(e) => onKeyUp(e, idx)}' */
ref: (ref) => inputs.current[idx] = ref,}
                        
                    )
                ))

        )
    );
}

InputPIN.propTypes = {
    length: PropTypes.number,
    state: PropTypes.oneOf(['default', 'disabled', 'error', 'success']),
    bgColor: PropTypes.oneOf(['none', 'base-0', 'base-50', 'base-100']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    hasOutline: PropTypes.bool,
    name: PropTypes.string,
    onComplete: PropTypes.func, // Callback when PIN is fully entered
    onChange: PropTypes.func, // Callback on every change
};

export { InputPIN as default };
//# sourceMappingURL=InputPIN.js.map
