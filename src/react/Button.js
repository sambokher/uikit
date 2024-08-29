import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Loader } from './index'
import { iconMap } from './iconMap'

const allIconNames = Object.keys(iconMap) || []


/**
 * Button compffonent that renders a.. button.
 *
 * @param {Object} props - The props object.
 * @param {string} props.text - The text to display insfide the button.
 * @param {'default', 'disabled', 'loading', 'active'} [props.state] - STATE?
 * @returns {JSX.Element} The rendered button componen!t.
 */
export default function Button(props) {
    
    const {
        leftIcon = 'none',
        rightIcon = 'none',
        text = 'Button',
        
        color = 'base',
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
    const bgColor = color == 'base' ? 'base-200' : (color == 'primary' || color == 'accent') ? color : color+'-content'
    const textColor = color == 'base' ? 'base-content' : 'base-0'
    const statusStyles = (isDisabled || isLoading ) ? '' : isActive ? 'brightness-90' : 'hover:brightness-110 active:brightness-90'
    const filledStyle = `bg-${bgColor} text-${textColor} ${statusStyles}`

    /* Outlined */
    const outlinedColor = color == 'base' ? 'base-700' : (color == 'primary' || color == 'accent') ? color : color+'-content'
    const outlineStatusStyles = (isDisabled || isLoading )  ? '' : isActive ? 'bg-current-10' : 'hover:bg-current-10 active:bg-transparent'
    const outlinedStyle = `ring-1 ring-inset ring-${outlinedColor} text-${outlinedColor} ${outlineStatusStyles}`

    /* Light */
    const lightColor = color == 'base' ? 'base-100' : (color == 'primary' || color == 'accent') ? color+'-content' : color
    const lightTextColor = (color == 'primary' || color == 'accent') ? color : color+'-content'
    const lightStatusStyles = (isDisabled || isLoading ) ? '' : isActive ? `bg-${lightColor}/75` : `hover:bg-${lightColor}/75`
    const lightStyle = `bg-${lightColor} text-${lightTextColor} ${lightStatusStyles}`

    /* Ghost */
    const ghostStatusStyles = (isDisabled || isLoading ) ? '' : isActive ? `bg-current-10` : `hover:bg-current-10`
    const ghostStyle = `text-${lightTextColor} ${ghostStatusStyles}`

    /* Link */
    const linkStatusStyles = !(isDisabled || isLoading || isActive)  ? `hover:underline opacity-80 hover:opacity-100` : ''
    const linkStyle = `text-${lightTextColor} ${linkStatusStyles}`
    
    const fontStyles = `font-medium` 
    
    const styleMap = {
        filled: filledStyle,
        outlined: outlinedStyle,
        ghost: ghostStyle,
        link: linkStyle,
        light: lightStyle
    }
    let typeStyles = styleMap[style]
    
    
    let sizeStyles = `py-2 px-3 gap-3 text-sm`;  // default size
    sizeStyles = size == 'small' ? `py-1 px-1.5 gap-1 text-xs` : size == 'large'  ? `py-3 px-4 gap-4 text-base` : sizeStyles

    const widthStyle = width == 'auto' ? `w-auto` : `w-${width}`
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"
    
    let classes = `${hideOnMobile ? 'hidden md:flex' : ''}
        relative flex flex-row items-center transition-all box-border cursor-pointer justify-between 
        ${fontStyles} ${typeStyles} ${sizeStyles} ${cornerStyles} ${widthStyle}
        ${isDisabled ? 'opacity-50 saturate-50 !cursor-not-allowed' : ''}`
    
     const LeftIconComponent = leftIcon !== 'none' ? <Icon icon={leftIcon?.toLowerCase()} className={'scale-90'}/> : null;
     const RightIconComponent = rightIcon !== 'none' ? <Icon icon={rightIcon?.toLowerCase()}  className={'scale-[0.8]'}/> : null;

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
    color: PropTypes.oneOf(['base', 'primary', 'accent', 'warning', 'info', 'success', 'error']),
    style: PropTypes.oneOf(['filled', 'outlined', 'ghost', 'link', 'light']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    leftIcon: PropTypes.oneOf(['none', ...allIconNames]),
    rightIcon: PropTypes.oneOf(['none', ...allIconNames]),
    marginTop:  PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px', '24px', '32px' ]),
    hideOnMobile: PropTypes.bool,
    onClick: PropTypes.func, 
};

