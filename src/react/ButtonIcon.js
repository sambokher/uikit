import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Loader } from './index'
import { iconMap } from './iconMap'

const allIconNames = Object.keys(iconMap) || []

export default function ButtonIcon(props) {

    const {
        icon = 'heart',
        
        color = 'base-200',
        style = 'light',
        state = 'default',
        
        size = 'medium',
        isPill = false,
        
        onClick = () => {},

        marginTop = 'none',
        alignSelf = 'auto',
        hideOnMobile=false,
        defaultIconSet,
        attributes,
        listeners
      } = props;
    
    const buttonStyles = `flex flex-row items-center relative transition-all flex-shrink-0 flex-grow-0 box-border`

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

    const styleMap = {
        filled: filledStyle,
        outlined: outlinedStyle,
        ghost: ghostStyle,
        light: lightStyle
    }

    let typeStyles = styleMap[style]
     
    const selfAlign = `self-${alignSelf}`
    const sizeStyles = size == 'small' ? `h-7 w-7 text-xs` : size == 'large' ? `w-12 h-12 text-base` : `h-9 w-9 text-sm`;


    const cornerStyles = `${isPill ? `rounded-full` : size == 'small' ? 'rounded' : size == 'large' ? 'rounded-lg' : 'rounded-md'}`
    const marginStyles = marginTop == 'none' ? '' : `mt-${marginTop}`

    let classes = `${hideOnMobile ? 'hidden md:flex ' : 'flex'}
        items-center justify-center
        ${buttonStyles} ${typeStyles} ${sizeStyles} ${cornerStyles} ${selfAlign} ${marginStyles} cursor-pointer
        ${isDisabled ? 'opacity-50 saturate-50 cursor-not-allowed' : ''}`

    const iconSize = size == 'small' ? '16px' : size == 'large' ? '24px' : '20px'
     const iconWidth = size == 'small' ? 'w-4 h-4' : size == 'large' ? 'w-6 h-6' : 'w-5 h-5'
    const IconComponent = icon !== 'none' ? <Icon icon={icon?.toLowerCase()} size={iconSize} className={`hover:scale-105 transition-all duration-75 ${iconWidth}`} /> : null;
    const PlaceHolderIcon = <Icon icon={'heart'} size={iconSize} className={`${iconWidth} hover:scale-110 transition-all duration-150`}  />
    const loaderColor = 'current'

    return (
        <button
            {...attributes} {...listeners} 
            onClick={onClick}
            className={classes}
            style={{marginTop: marginTop}}
        >
            <div className={`${isLoading && 'invisible'}`}>{IconComponent ? IconComponent : PlaceHolderIcon}</div>
            {isLoading && <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                <Loader 
                size={size == 'small' ? '12px' : '16px'}
                color={loaderColor}
                type='spinner'
                opacity={(style == 'filled') ? '50' : '100'}
                />
                </div>}
        </button>
    ); 
}

ButtonIcon.propTypes = {
    color: PropTypes.oneOf(['base-200', 'base-700', 'primary', 'accent',  'warning', 'info', 'success', 'error']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    style: PropTypes.oneOf(['filled', 'outlined', 'ghost', 'light']),
    state: PropTypes.oneOf(['default', 'disabled', 'loading', 'active']),
    icon: PropTypes.oneOf(allIconNames),
    isPill: PropTypes.bool,
    alignSelf: PropTypes.oneOf(['auto', 'start', 'end', 'center']),
    marginTop:  PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px', '24px', '32px' ]),
    hideOnMobile: PropTypes.bool,
    onClick: PropTypes.func
};

