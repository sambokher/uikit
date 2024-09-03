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
        
        color = 'base-200',
        style = 'light',

        size = 'medium',
        width = 'auto',
        
        marginTop,
        state = 'default',
        onClick = () => {},
        hideOnMobile=false,
        attributes,
        listeners
      } = props;

    const isDisabled = state == 'disabled'
    const isLoading = state == 'loading'
    const isActive = state == 'active'

    /* Filled */
    const textColor = color == 'base-200' ? 'base-content' : 'base-0'
    const statusStyles = (isDisabled || isLoading ) ? '' : isActive ? 'brightness-90' : 'hover:brightness-110 active:brightness-90'
    const filledStyle = `bg-${color} text-${textColor} ${statusStyles}`

    /* Outlined */
    const outlineStatusStyles = (isDisabled || isLoading )  ? '' : isActive ? 'bg-current-10' : 'hover:bg-current-10 active:bg-transparent'
    const outlinedStyle = `ring-1 ring-inset ring-${color} text-${color} ${outlineStatusStyles}`

    /* Light */
    const lightColor = color == 'base-200' ? 'base-100' : color == 'base-700' ? 'base-500' : color+'-surface'
    const lightTextColor =  color == 'base-700' ? 'base-0' : color == 'base-200' ? 'base-content' : color+'-content'
    const lightStatusStyles = (isDisabled || isLoading ) ? '' : isActive ? `bg-${lightColor}/75` : `hover:bg-${lightColor}/75`
    const lightStyle = `bg-${lightColor} text-${lightTextColor} ${lightStatusStyles}`

    /* Ghost */
    const ghostStatusStyles = (isDisabled || isLoading ) ? '' : isActive ? `bg-current-10` : `hover:bg-current-10`
    const ghostStyle = `text-${color} ${ghostStatusStyles}`

    /* Link */
    const linkStatusStyles = !(isDisabled || isLoading || isActive)  ? `hover:underline opacity-80 hover:opacity-100` : ''
    const linkStyle = `text-${color} ${linkStatusStyles}`
    
    const fontStyles = `font-medium` 
    
    const styleMap = {
        filled: filledStyle,
        outlined: outlinedStyle,
        ghost: ghostStyle,
        link: linkStyle,
        light: lightStyle
    }
    let typeStyles = styleMap[style]
    
    
    let sizeStyles = `h-9 px-2.5 gap-2 text-sm`;  // default size
    sizeStyles = size == 'small' ? `h-7 px-1.5 gap-1 text-xs` : size == 'large'  ? `h-12 px-3 gap-2.5 text-base` : sizeStyles

    const widthStyle = width == 'auto' ? `w-auto` : `w-${width}`
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"
    
    let classes = `${hideOnMobile ? 'hidden md:flex' : ''}
        relative flex flex-row items-center transition-all duration-75 box-border cursor-pointer justify-between 
        ${fontStyles} ${typeStyles} ${sizeStyles} ${cornerStyles} ${widthStyle}
        ${isDisabled ? 'opacity-50 saturate-50 !cursor-not-allowed' : ''}`
    
     const iconSize = size == 'small' ? '16px' : size == 'large' ? '24px' : '20px'
     const iconWidth = size == 'small' ? 'w-4 h-4' : size == 'large' ? 'w-6 h-6' : 'w-5 h-5'
     const LeftIconComponent = leftIcon !== 'none' ? <Icon icon={leftIcon?.toLowerCase()} size={iconSize} className={`scale-90 ${iconWidth}`} /> : null;
     const RightIconComponent = rightIcon !== 'none' ? <Icon icon={rightIcon?.toLowerCase()} size={iconSize} className={`scale-[0.8] ${iconWidth}`} /> : null;

    const loaderColor = 'current'

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
                size={size == 'small' ? '12px' : '16px'}
                color={loaderColor}
                type='spinner'
                opacity={(style == 'filled') ? '50' : '100'}
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
    state: PropTypes.oneOf(['default', 'disabled', 'loading', 'active']),
    color: PropTypes.oneOf(['base-200', 'base-700', 'primary', 'accent', 'warning', 'info', 'success', 'error']),
    style: PropTypes.oneOf(['filled', 'outlined', 'ghost', 'link', 'light']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    leftIcon: PropTypes.oneOf(['none', ...allIconNames]),
    rightIcon: PropTypes.oneOf(['none', ...allIconNames]),
    marginTop:  PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px', '24px', '32px' ]),
    hideOnMobile: PropTypes.bool,
    onClick: PropTypes.func, 
};

