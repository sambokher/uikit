import PropTypes from 'prop-types';
import Loader from './Loader';
import Icon from './Icon'
import { iconMap } from './iconMap'
import React from 'react';

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
    'primary': `bg-slate-800 !bg-primary ${isDisabled ? '' : 'hover:bg-slate-700 !hover:bg-primary-focus'} text-slate-50 !text-primary-content border border-transparent`,
    'secondary': `bg-slate-700 !bg-base-100 ${isDisabled ? '' : 'hover:bg-slate-600 !hover:bg-base-200'} text-slate-300 !text-base-content border border-transparent`,
    'accent': `bg-teal-600 !bg-accent ${isDisabled ? '' : 'hover:bg-teal-500 !hover:bg-accent-focus'} text-teal-50 !text-accent-content border border-transparent`,
    'link': `bg-transparent ${isDisabled ? '' : 'hover:text-blue-500 !hover:underline'} text-blue-600 !text-base-content border border-transparent`,
    'ghost': `bg-transparent ${isDisabled ? '' : 'hover:bg-gray-200 !juno-current-color-hover-bg'} border border-transparent opacity-70 hover:opacity-100`,
    'warning': `bg-yellow-600 !bg-warning-content ${isDisabled ? '' : 'hover:bg-yellow-500 !hover:brightness-110'} text-white !text-base-0 border border-transparent`,
    'success': `bg-green-600 !bg-success-content ${isDisabled ? '' : 'hover:bg-green-500 !hover:brightness-110'} text-white !text-base-0 border border-transparent`,
    'info': `bg-blue-600 !bg-info-content ${isDisabled ? '' : 'hover:bg-blue-500 !hover:brightness-110'} text-white !text-base-0 border border-transparent`,
    'error': `bg-red-600 !bg-error-content ${isDisabled ? '' : 'hover:bg-red-500 !hover:brightness-110'} text-white !text-base-0 border border-transparent`,
};

const outlinedTypeMap = {
    'primary': `border-slate-800 !border-primary bg-transparent text-slate-800 !text-primary-focus ${isDisabled ? '' : 'hover:border-slate-600 !hover:border-primary-focus'}`,
    'secondary': `border-slate-700 !border-base-300 bg-transparent ${isDisabled ? '' : 'hover:border-slate-600 !hover:border-base-400'}`,
    'accent': `border-teal-600 !border-accent bg-transparent text-teal-600 !text-accent-focus ${isDisabled ? '' : 'hover:border-teal-500 !hover:border-accent-focus'}`,
    'link': `bg-transparent text-blue-600 !text-base-content ${isDisabled ? '' : 'hover:text-blue-500 !hover:underline'} border border-transparent`,
    'ghost': `bg-transparent ${isDisabled ? '' : 'hover:bg-gray-200 !juno-current-color-hover-bg'} border`,
    'warning': `border-yellow-600 !border-warning-content bg-transparent text-yellow-600 !text-warning-content ${isDisabled ? '' : 'hover:border-yellow-500 !hover:border-warning-focus'}`,
    'success': `border-green-600 !border-success-content bg-transparent text-green-600 !text-success-content ${isDisabled ? '' : 'hover:border-green-500 !hover:border-success-focus'}`,
    'error': `border-red-600 !border-error-content bg-transparent text-red-600 !text-error-content ${isDisabled ? '' : 'hover:border-red-500 !hover:border-error-focus'}`,
    'info': `border-blue-600 !border-info-content bg-transparent text-blue-600 !text-info-content ${isDisabled ? '' : 'hover:border-blue-500 !hover:border-info-focus'}`,
};

    // and just type: primary, accent, base, warning, success, error, info
    
    const fontStyles = `font-medium` 
    
    let typeStyles = filledTypeMap['secondary'] // defaults to secondary button
    typeStyles = style == 'filled' ? filledTypeMap[type] : outlinedTypeMap[type]
    
    
    const sizeStyles = 
    size == 'small' 
    ? `py-1 !py-2xs px-1.5 !px-xs gap-1 !gap-xs text-xs`
    : size == 'large' 
    ? `py-3 !py-sm px-4 !px-md gap-4 !gap-base text-base`
    : `py-2 !py-xs px-3 !px-base gap-3 !gap-base text-sm`;

    const widthStyle = width == 'auto' ? `w-auto` : `w-${width}`
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"
    const marginStyles = marginTop ? `mt-${marginTop}` : ''
    
    let classes = `${hideOnMobile ? 'hidden md:flex' : ''}
        relative flex flex-row items-center transition-all box-border cursor-pointer justify-between 
        ${marginStyles} ${fontStyles} ${typeStyles} ${sizeStyles} ${cornerStyles} ${widthStyle}
        ${isDisabled ? 'opacity-50 saturate-50 !cursor-not-allowed' : ''}`
    
     const LeftIconComponent = leftIcon !== 'none' ? <Icon icon={leftIcon?.toLowerCase()} defaultIconSet={defaultIconSet} /> : null;
     const RightIconComponent = rightIcon !== 'none' ? <Icon icon={rightIcon?.toLowerCase()} defaultIconSet={defaultIconSet} /> : null;

    const loaderColor = 'currentColor'

    // 'mt-0.5', 'mt-1', 'mt-1.5', 'mt-2', 'mt-3', 'mt-4', 'mt-6', 'mt-8', 'mt-12', 'mt-16',

    return (
        <button  type="button" 
            className={classes} {...attributes} {...listeners} 
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
             <span className={`${isLoading ? 'opacity-0' : ''} flex flex-row items-center gap-2 !gap-sm whitespace-nowrap truncate max-w-full`}>
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
    marginTop:  PropTypes.oneOf(['1', '1.5', '2', '3', '4', '6', '8' ]),
    hideOnMobile: PropTypes.bool,
    onClick: PropTypes.func, 
};

//marginTop: PropTypes.oneOf(['xs', 'sm', 'base', 'md', 'lg', 'xl']),
