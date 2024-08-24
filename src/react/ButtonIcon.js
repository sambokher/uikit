import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Loader } from './index'
import { iconMap } from './iconMap'

const allIconNames = Object.keys(iconMap) || []

export default function ButtonIcon(props) {

    const {
        icon = 'heart',
        type = 'ghost',
        size = 'medium',
        hideOnMobile=false,
        state = 'default',
        isPill = false,
        alignSelf = 'auto',
        style = 'filled',
        onClick = () => {},
        marginTop = 'none',
        defaultIconSet,
        attributes,
        listeners
      } = props;
    
    const buttonStyles = `flex flex-row items-center relative transition-all flex-shrink-0 flex-grow-0 box-border`

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

    let typeStyles = filledTypeMap['secondary'] // defaults to secondary button
    typeStyles = style == 'filled' ? filledTypeMap[type] : outlinedTypeMap[type]
     
    const selfAlign = `self-${alignSelf}`
    const sizeStyles = size == 'small' ? `p-1 text-xs` : size == 'large' ? `p-2 text-base` : `p-1.5 text-sm`;


    const cornerStyles = `${isPill ? `rounded-full` : size == 'small' ? 'rounded' : size == 'large' ? 'rounded-lg' : 'rounded-md'}`
    const marginStyles = marginTop == 'none' ? '' : `mt-${marginTop}`

    let classes = `${hideOnMobile ? 'hidden md:flex' : ''}
        ${buttonStyles} ${typeStyles} ${sizeStyles} ${cornerStyles} ${selfAlign} ${marginStyles} cursor-pointer
        ${isDisabled ? 'opacity-50 saturate-50 cursor-not-allowed' : ''}`


    const IconComponent = icon !== 'none' ? <Icon icon={icon?.toLowerCase()} defaultIconSet={defaultIconSet} /> : null;
    const PlaceHolderIcon = <Icon icon={'heart'} defaultIconSet={defaultIconSet} />
    const loaderColor = (type === 'primary' || type === 'accent' || type === 'warning') ? 'base-0' : 'base-500';

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
                size={size == 'small' ? 'small' : 'medium'}
                color={loaderColor}
                type='spinner'
                opacity='50'
                />
                </div>}
        </button>
    ); 
}

ButtonIcon.propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary', 'accent', 'link', 'warning', 'ghost', 'info', 'success', 'error']),   
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    style: PropTypes.oneOf(['filled', 'outlined']),
    state: PropTypes.oneOf(['default', 'disabled', 'loading']),
    icon: PropTypes.oneOf(allIconNames),
    isPill: PropTypes.bool,
    alignSelf: PropTypes.oneOf(['auto', 'start', 'end', 'center']),
    marginTop:  PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px', '24px', '32px' ]),
    hideOnMobile: PropTypes.bool,
    onClick: PropTypes.func
};

