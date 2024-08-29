import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react';

export default function Checkbox(props) {
    
    const {
        width = 'auto',
        state = 'default',
        label = 'checkbox',
        style = 'standard',
        isChecked = false,
        isPartial = false,
        size = 'medium',
        onChange = () => {},
        attributes,
        listeners
      } = props;
    
    const [checked, setChecked] = useState(isChecked); 
    useEffect(() => {
        setChecked(isChecked);
    }, [isChecked]);
    
    const onCheckboxChange = (e) => {
        if (onChange) {
            onChange(e);
        } else {
            setChecked(!checked)
        }
    }

    const sizeStyles = size == 'small' ? `gap-1.5 text-xs`: size == 'large' ? `gap-3 text-base` : `gap-2 text-sm`;
    const paddingStyles = size == 'small' ? `py-1 px-1.5` : size == 'large' ? `py-2 px-3` : `py-1.5 px-2`;
    const borderStyles = checked ? `border border-primary` : `border border-base-200`
    const bgSttyles = checked ? `bg-transparent` : `bg-transparent hover:bg-base-100 transition-all duration-75`
    
    const styleMap  = {
        standard: `flex items-start ${sizeStyles} cursor-default w-${width}`, 
        button: `flex flex-row ${paddingStyles} rounded items-center ${sizeStyles} cursor-pointer w-${width} ${borderStyles} ${bgSttyles}`
    }

    const fillColorMap = {
        'default': `border border-primary bg-primary`,
        'warning': `border border-warning-content bg-warning-content`,
        'success': `border border-success-content bg-success-content`,
        'disabled': 'bg-base-200 border border-base-300 bg-base-200'
    };

    const stateStyles = checked ? fillColorMap[state] : 'border border-base-300'
    
    let wrapperClasses = styleMap[style] || styleMap['standard']

    const checkboxDimensions = 
        style == 'standard' ? 
        size == 'small' ? 'w-4 h-4 mt-px rounded' : size == 'large' ? 'w-6 h-6 rounded-lg' : 'w-5 h-5 rounded-md' :
        size == 'small' ? 'w-3 h-3 mt-px rounded-sm' : size == 'large' ? 'w-5 h-5 rounded-md' : 'w-4 h-4 rounded'
    const checkboxClasses = `${checkboxDimensions} flex items-center justify-center ${stateStyles} `    

    const labelClasses = `whitespace-nowrap ${state == 'disabled' ? 'opacity-60' : ''}`
    const checkColor = 'base-0'
    const noLabel = !label || label == ''
    return (
        <div 
        {...attributes} {...listeners} 
            className={wrapperClasses} 
onClick={onCheckboxChange}
        >
            <div className="relative flex-shrink-0 inline-block">
                <span className={checkboxClasses}>
                    {checked ? !isPartial ? 
                        <svg className="w-5 h-5" viewBox="0 0 20 20" aria-hidden="true" fill={`var(--${checkColor})`}>
                            <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg> :
                        <svg className="w-5 h-5" viewBox="0 0 20 20" aria-hidden="true" fill={`var(--${checkColor})`}>
                            <rect x="4" y="9" width="12" height="2" />
                        </svg>
                        : null
                    }
                </span>
            </div>
            {label && <span className={labelClasses} style={{textWrap: 'nowrap'}}>
{label}
            </span>}
        </div>
    );
}
Checkbox.propTypes = {
    width: PropTypes.oneOf(["auto", "1/2", "full"]),
    type: PropTypes.oneOf(['standard', 'button']),
    state: PropTypes.oneOf(['default', 'warning', 'disabled', 'success']),
    label: PropTypes.string,
    isChecked: PropTypes.bool,
    isPartial: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onChange: PropTypes.func
    
};

