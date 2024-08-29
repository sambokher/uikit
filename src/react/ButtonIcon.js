import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Loader } from './index'
import { iconMap } from './iconMap'

const allIconNames = Object.keys(iconMap) || []

export default function ButtonIcon(props) {

    const {
        icon = 'heart',
        
        color = 'base',
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

    const styleMap = {
        filled: filledStyle,
        outlined: outlinedStyle,
        ghost: ghostStyle,
        light: lightStyle
    }

    let typeStyles = styleMap[style]
     
    const selfAlign = `self-${alignSelf}`
    const sizeStyles = size == 'small' ? `p-1 text-xs` : size == 'large' ? `p-2 text-base` : `p-1.5 text-sm`;


    const cornerStyles = `${isPill ? `rounded-full` : size == 'small' ? 'rounded' : size == 'large' ? 'rounded-lg' : 'rounded-md'}`
    const marginStyles = marginTop == 'none' ? '' : `mt-${marginTop}`

    let classes = `${hideOnMobile ? 'hidden md:flex' : ''}
        ${buttonStyles} ${typeStyles} ${sizeStyles} ${cornerStyles} ${selfAlign} ${marginStyles} cursor-pointer
        ${isDisabled ? 'opacity-50 saturate-50 cursor-not-allowed' : ''}`


    const IconComponent = icon !== 'none' ? <Icon icon={icon?.toLowerCase()} className={'scale-90'}/> : null;
    const PlaceHolderIcon = <Icon icon={'heart'} className={'scale-90'} />
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
    color: PropTypes.oneOf(['base', 'primary', 'accent', 'warning', 'info', 'success', 'error']),
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

