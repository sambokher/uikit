import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Loader } from './index'
import { iconMap } from './iconMap'

const allIconNames = Object.keys(iconMap) || []

export default function Button(props) {
    
    const {
        leftIcon = 'none',
        rightIcon = 'none',
        text = 'Button',
        type = 'secondary',
        size = 'medium',
        width = 'auto',
        style = 'filled',
        marginTop,
        state = 'default',
        onClick = () => {},
        defaultIconSet, 
        hideOnMobile=false,
        attributes,
        listeners
      } = props;

    const isDisabled = state == 'disabled'
    const isLoading = state == 'loading'

    const filledTypeMap = {
        'primary': `bg-primary ${isDisabled ? '' : 'hover:bg-primary-focus'} text-primary-content border border-transparent`,
        'secondary': `bg-base-100 ${isDisabled ? '' : 'hover:bg-base-200'} text-base-content border border-transparent`,
        'accent': `bg-accent ${isDisabled ? '' : 'hover:bg-accent-focus'} text-accent-content border border-transparent`,
        'link': `bg-transparent ${isDisabled ? '' : 'hover:underline'} text-base-content border border-transparent`,
        'ghost': `bg-transparent ${isDisabled ? '' : 'juno-current-color-hover-bg'} border border-transparent opacity-70 hover:opacity-100`,
        'warning': `bg-warning-content ${isDisabled ? '' : 'hover:brightness-110'} text-white text-base-0 border border-transparent`,
        'success': `bg-success-content ${isDisabled ? '' : 'hover:brightness-110'} text-white text-base-0 border border-transparent`,
        'info': `bg-info-content ${isDisabled ? '' : 'hover:brightness-110'} text-white text-base-0 border border-transparent`,
        'error': `bg-error-content ${isDisabled ? '' : 'hover:brightness-110'} text-white text-base-0 border border-transparent`,
    };

    const outlinedTypeMap = {
        'primary': `border-primary bg-transparent text-primary-focus ${isDisabled ? '' : 'hover:border-primary-focus'}`,
        'secondary': `border-base-300 bg-transparent ${isDisabled ? '' : 'hover:border-base-400'}`,
        'accent': `border-accent bg-transparent text-accent-focus ${isDisabled ? '' : 'hover:border-accent-focus'}`,
        'link': `bg-transparent text-base-content ${isDisabled ? '' : 'hover:underline'} border border-transparent`,
        'ghost': `bg-transparent ${isDisabled ? '' : 'juno-current-color-hover-bg'} border`,
        'warning': `border-warning-content bg-transparent text-warning-content ${isDisabled ? '' : 'hover:border-warning-focus'}`,
        'success': `border-success-content bg-transparent text-success-content ${isDisabled ? '' : 'hover:border-success-focus'}`,
        'error': `border-error-content bg-transparent text-error-content ${isDisabled ? '' : 'hover:border-error-focus'}`,
        'info': `border-info-content bg-transparent text-info-content ${isDisabled ? '' : 'hover:border-info-focus'}`,
    };

    // and just type: primary, accent, base, warning, success, error, info
    
    const fontStyles = `font-medium` 
    
    let typeStyles = filledTypeMap['secondary'] // defaults to secondary button
    typeStyles = style == 'filled' ? filledTypeMap[type] : outlinedTypeMap[type]
    
    
    let sizeStyles = `py-2 px-3 gap-3 text-sm`;  // default size
    sizeStyles = size == 'small' ? `py-1 px-1.5 gap-1 text-xs` : size == 'large'  ? `py-3 px-4 gap-4 text-base` : sizeStyles

    const widthStyle = width == 'auto' ? `w-auto` : `w-${width}`
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"
    
    let classes = `${hideOnMobile ? 'hidden md:flex' : ''}
        relative flex flex-row items-center transition-all box-border cursor-pointer justify-between 
        ${fontStyles} ${typeStyles} ${sizeStyles} ${cornerStyles} ${widthStyle}
        ${isDisabled ? 'opacity-50 saturate-50 !cursor-not-allowed' : ''}`
    
     const LeftIconComponent = leftIcon !== 'none' ? <Icon icon={leftIcon?.toLowerCase()} defaultIconSet={defaultIconSet} /> : null;
     const RightIconComponent = rightIcon !== 'none' ? <Icon icon={rightIcon?.toLowerCase()} defaultIconSet={defaultIconSet} /> : null;

    const loaderColor = 'currentColor'

    // 'mt-0.5', 'mt-1', 'mt-1.5', 'mt-2', 'mt-3', 'mt-4', 'mt-6', 'mt-8', 'mt-12', 'mt-16',
    // mt-[1px] mt-[2px] mt-[6px] mt-[8px] mt-[12px] mt-[16px] mt-[24px] mt-[32px] mt-[40px] mt-[48px] mt-[56px] mt-[64px]

    return (
        <button  type="button" 
            className={classes} {...attributes} {...listeners} 
            style={{marginTop: marginTop}}
            onClick={(e)=> !isDisabled && onClick(e)}
            >
            <div className={`flex flex-row items-center justify-end flex-grow ${isLoading ? 'invisible' : ''}`}>
                {LeftIconComponent}
            </div>
            <div className='flex-shrink-0 max-w-full box-border'>
            {isLoading && <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                <Loader 
                size={size == 'small' ? 'small' : 'medium'}
                color={loaderColor}
                type='spinner'
                opacity='50'
                />
            </div>}
             <span className={`${isLoading ? 'opacity-0' : ''} flex flex-row items-center gap-2 whitespace-nowrap truncate max-w-full`}>
{text}
            </span>
            </div>
            <div className={`flex flex-row items-center justify-end flex-grow ${isLoading && 'invisible'}`}>
                {RightIconComponent}
            </div>
        </button>
    ); 
}

Button.propTypes = {
    width: PropTypes.oneOf(["auto", "1/2", "full"]),
    text: PropTypes.string,
    state: PropTypes.oneOf(['default', 'disabled', 'loading']),
    type: PropTypes.oneOf(['primary', 'secondary', 'accent', 'link', 'warning', 'ghost', 'info', 'success', 'error']),   
    style: PropTypes.oneOf(['filled', 'outlined']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    leftIcon: PropTypes.oneOf(['none', ...allIconNames]),
    rightIcon: PropTypes.oneOf(['none', ...allIconNames]),
    marginTop:  PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px', '24px', '32px' ]),
    hideOnMobile: PropTypes.bool,
    onClick: PropTypes.func, 
};

