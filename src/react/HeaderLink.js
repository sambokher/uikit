import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react';
import Icon from './Icon'
import { iconMap } from './iconMap'

const allIconNames = Object.keys(iconMap) || []

export default function HeaderLink(props) {
    
    const {
        text = 'Item',
        fontWeight = 'medium',
        leftIcon = 'none',
        rightIcon = null,
        size = 'medium',
        width = 'auto',
        dropdownBgColor = 'base-0',
        background = 'none',
        showDropdown = false,
        onClick = () => {},
        defaultIconSet,
        children,
        attributes,
        listeners,
        openDirection = 'downward-right'
        // openBehavior = 'onClick', // Commented until hover is also implemented
      } = props;

    const fontWeightStyles = fontWeight !== 'inherit' ? `font-${fontWeight}` : '';
    const sizeStyles = size == 'small' ? `py-2xs px-xs gap-xs text-xs` : `py-xs px-base gap-sm text-sm`;
    const widthStyle = width == 'full' ? `w-full self-stretch` : `w-${width}`
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"
    const borderStyles = `border border-transparent`
    const bgStyles = background == 'none' ? '' : `bg-${background} transition-all hover:brightness-95` 
    const fontColor = background == 'none' ? '' : background?.startsWith('base') ? 'text-base-content' : `text-${background}-content`;

    let linkClasses = `flex flex-row items-center justify-between relative cursor-default ${widthStyle} ${fontWeightStyles} ${sizeStyles} ${bgStyles} ${cornerStyles} ${fontColor} ${borderStyles}`
    
    const iconStrokeWidth = fontWeight === 'light' ? 1 : (fontWeight === 'medium' || fontWeight === 'semibold') ? 2 : 1.5
    const iconWidth = size == 'small' ? 'w-4' : size == 'large' ? 'w-6' : 'w-5'
    
    const LeftIcon = leftIcon !== 'none' ? <Icon icon={leftIcon?.toLowerCase()} defaultIconSet={defaultIconSet} className={`flex-shrink-0 scale-90 ${iconWidth}`}/> : null;
    const RightIcon = rightIcon ? <Icon icon={rightIcon?.toLowerCase()} defaultIconSet={defaultIconSet} className={`flex-shrink-0 opacity-60 scale-[0.8]`} /> : null;
    
    

    const shadowStyles = size == 'small' ? 'shadow-sm' : 'shadow'
    const dropdownSizeStyles = size == 'small' ? 'py-xs px-xs rounded-md gap-2xs' : 'p-sm rounded-lg gap-xs'
    const dropwdownClasses = `absolute -bottom-2 left-1/2 -translate-x-1/2 text-base-content translate-y-full border flex flex-col min-w-full bg-${dropdownBgColor} ${dropdownSizeStyles} ${shadowStyles}` 
    
    const [ open, setOpen ] = useState(showDropdown)
    useEffect(() => {
        setOpen(showDropdown);
    }, [showDropdown]);

    let wrapperClasses = `relative flex-shrink-0 flex items-center justify-center`

    return (
        <div
            {...attributes} {...listeners} 
            className={wrapperClasses}
        onClick={() => children && children?.length > 0 ? setOpen(!open) : onClick()}
            >
            <div className={linkClasses}>
                {LeftIcon}
                <div className='flex-grow w-full'>
                {text}
                </div>
                {RightIcon}
            </div>
            {open && <div className={dropwdownClasses} 
            style={{ minWidth: size == 'small' ? 120 : 180, minHeight: size == 'small' ? 28 : 36}}>
                    {children}
            </div>}
        </div>
    );
}

HeaderLink.propTypes = {
    background: PropTypes.oneOfType([
        PropTypes.oneOf(["base-0", "base-100", "base-200", "primary", "accent", "base-900", "none"]),
        PropTypes.string]),
    text: PropTypes.string,
    fontWeight: PropTypes.oneOf(['auto', 'light', 'normal', 'medium', 'semibold']),
    size: PropTypes.oneOf(['small', 'medium']),
    leftIcon: PropTypes.oneOf(['none', ...allIconNames]),
    rightIcon: PropTypes.oneOf(['none', 'chevron-down', 'plus']),
    width: PropTypes.oneOf(['auto', 'full']),
    showDropdown: PropTypes.bool,
    openDirection: PropTypes.oneOf(['downward-right', 'downward-left']),
    dropdownBgColor: PropTypes.oneOf(['base-0', 'base-100', 'base-200', 'none',]),
    // openBehavior: PropTypes.oneOf(['onHover', 'onClick']),
};

