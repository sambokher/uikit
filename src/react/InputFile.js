import PropTypes from 'prop-types'
import * as IconoirIcons from 'iconoir-react';
import Loader from './Loader';
import React, { useRef } from 'react';

const iconNames = Object.keys(IconoirIcons);

export default function InputFile(props) {
    
    const {
        state = 'default',
        text = 'Choose File',
        bgColor = 'none',
        size = 'medium',
        label = 'File Upload',
        helperText = 'help text',
        icon = 'CloudUpload',
        textAlign,
        hasOutline = true,
        width = 'auto',
        onChange = () => console.log('File uploaded'),
        accept = '',
        attributes,
        listeners
      } = props;


    const sizeStyles = size == 'small' ? `py-2xs px-sm gap-xs text-xs` : size == 'large' ? `py-sm px-base gap-base text-base` : `py-xs px-sm gap-base text-sm`;
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"
    
    let stateStyles = hasOutline ? `border border-base-300` : 'border border-transparent';
    switch (state) {
        case 'disabled':
            stateStyles = `bg-base-100 opacity-70 cursor-not-allowed ${hasOutline ? 'border border-base-300' : ''}`;
            break;
        case 'error':
            stateStyles = `text-warning-content ${hasOutline ? 'border border-warning-content' : ''}`;
            break;
        case 'success':
            stateStyles = `text-success-content ${hasOutline ? 'border border-success-content' : ''}`;
            break;
    }
    
    const bgStyles = (bgColor && bgColor !== 'none') ? `bg-${bgColor}` : '';
    let classes = `w-full flex items-center justify-between relative truncate ellipsis box-border font-medium ${sizeStyles} ${cornerStyles} ${bgStyles} ${stateStyles}`
    
    const labelTextSize = size == 'small' ? `text-xs` :  size == 'large' ? `text-lg`: `text-sm`;
    const labelClasses = `${labelTextSize} font-medium`

    const messageTextColor = state == 'error' ? stateStyles = 'text-warning-content' : state == 'success' ? stateStyles = 'text-success-content' : ''
    const messageClasses = `text-sm font-sm ${messageTextColor}`

    const widthStyle = width != 'auto' ? `w-${width}` : size == 'small' ? 'min-w-[120px]' : size == 'large' ? 'min-w-[200px]' : 'min-w-[160px]'

    const gapStyles = size == 'small' ? 'gap-3xs' : size == 'large' ? 'gap-xs' : 'gap-2xs'
    let wrapperClasses = `flex flex-col ${widthStyle} ${gapStyles}`

    const IconComponent = icon == 'none' ? null : IconoirIcons[icon] || IconoirIcons['CloudUpload']

    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        if (onChange) {
            onChange(event.target.files);
        }
    };

    return (
        <div
        {...attributes} {...listeners} 
            className={wrapperClasses}
        >
            {label && <label className={labelClasses}>
{label}
            </label>}

                <div className={classes} style={{boxSizing: 'border-box'}}>
                <input
                    ref={fileInputRef}
                    type="file"
                    style={{ 
                        opacity: '0', 
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        cursor: 'pointer',
                    }}
                    onChange={handleFileChange}
                    accept={accept}
                />

                    {state == 'loading' ? <Loader size={'small'} type='spinner' opacity='50' /> : IconComponent && <IconComponent className='flex-shrink-0 flex-grow-0' />}
                    <div className={`flex-grow text-${textAlign}`}>
                    {state == 'loading' ? 'Uploading' : 
text}
                    </div>
                </div>
                
                {helperText && <span className={messageClasses}>
{helperText}
                </span>}
            
            </div>
        
    );
}

InputFile.propTypes = {
    state: PropTypes.oneOf(['loading', 'default', 'disabled', 'error', 'success']),
    label: PropTypes.string,
    text: PropTypes.string,
    helperText: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    width: PropTypes.oneOf(['auto', '1/2', 'full']),
    bgColor: PropTypes.oneOf(['none', 'base-0', 'base-100']),
    icon: PropTypes.oneOf(['none', ...iconNames]),
    hasOutline: PropTypes.bool, 
    onChange: PropTypes.func,
    accept: PropTypes.string,
};

