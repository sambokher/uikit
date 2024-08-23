import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react';
import Tooltip from './Tooltip';
import Icon from './Icon'
import { iconMap } from './iconMap'

const allIconNames = Object.keys(iconMap) || []

export default function SidebarLink(props) {
    
    const {
        text = 'Item',
        fontWeight = 'auto',
        leftIcon = 'Home',
        size = 'medium',
        displayChildren = true,
        width = 'full',
        indentLevel = '0',
        color = 'none',
        isCollapsed = false,
        isActive = false,
        usePadding = true,
        hoverEffect = false,
        onClick = () => {},
        children,
        attributes,
        listeners,
        defaultIconSet
      } = props;


    const fontWeightStyles = fontWeight == 'auto' ? 'font-normal' : `font-${fontWeight}`
    
    const sizeStylesMap = {
        small: usePadding ? `py-2xs px-sm text-xs` : `py-2xs px-0 text-xs`,
        medium: usePadding ? `py-xs px-sm text-sm` : `py-xs px-0 text-sm`,
        large: usePadding ? `py-base px-base text-base` : `py-base px-0 text-base`
        
    }
    const gapStyles = isCollapsed ? 'gap-0' : size == 'small' ? 'gap-xs' : size == 'large' ? 'gap-base' : 'gap-base'
    
    const sizeStyles = sizeStylesMap[size] || sizeStylesMap['medium']

    const widthStyle = (width == 'auto' || isCollapsed) ? `w-auto` : `w-${width} self-stretch`
    
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"
    const borderStyles = `border border-transparent`
    
    const innerGap = size == 'small' ? 'gap-0' : size == 'large' ? 'gap-xs' : 'gap-2xs'
    let wrapperClasses = `transition-all relative group flex flex-col duration-75
        ${widthStyle} ${fontWeightStyles} ${innerGap}`

    const hoverStyles = 
    hoverEffect ? isActive ? 'juno-current-color-bg' : 
'juno-current-color-hover-bg'
    : isActive ? 'opacity-100'
: 'opacity-70 hover:opacity-100'
    

    let innerClasses = `transition-all relative flex flex-row items-center justify-between cursor-default duration-150 
        ${hoverStyles} w-full ${sizeStyles} ${cornerStyles} ${borderStyles} ${gapStyles}` 

    const iconWidth = size == 'small' ? 'w-4' : size == 'large' ? 'w-6' : 'w-5'
    const IndentElement = <><div className={`flex-shrink-0 ${iconWidth}`}/></>
    const indentValue = parseInt(indentLevel) || 0

    const LeftIconComponent = leftIcon !== 'none' ? <Icon icon={leftIcon?.toLowerCase()} className={`flex-shrink-0  ${iconWidth}`} defaultIconSet={defaultIconSet} /> : null;

    const [isOpen, setIsOpen] = useState(displayChildren)
    useEffect(() => {
        setIsOpen(displayChildren)
    }, [displayChildren])
    
    
    return (
        <div className={wrapperClasses} 
        {...attributes} {...listeners} >
        <div
            className={innerClasses}
            onClick={onClick}
            style={{
                color: color != 'none' && `var(--${color})`,
                }}>

            {!isCollapsed && Array(indentValue)?.fill()?.map((_, index) => (
            <React.Fragment key={index}>{IndentElement}</React.Fragment>
            ))}
            {LeftIconComponent}

            
            
            <div className={`flex flex-row flex-grow justify-between ${gapStyles} transition-all duration-0 ${isCollapsed ? 'w-0 h-0 pointer-events-none opacity-0' : 'w-auto'}`}>
                {text}
                {children?.length > 0 ?
                        <Icon icon={'chevron-down'} 
                        defaultIconSet={defaultIconSet}
                        onClick={()=>setIsOpen(!isOpen)}
                        className={`flex-shrink-0 text-xs my-auto transition-all ${isCollapsed ? 'opacity-0' : 'opacity-0 group-hover:opacity-60'} transition-all ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                        />
                : null
                }
            </div>
            {isCollapsed && text != '' &&
                <Tooltip 
                    direction='right' // up, down, left, right // need to add a prop
                    size={size == 'small' ? 'small' : 'medium'} 
                    bgColor='base-content' 
                    text={text} 
                    />
            }
        </div>
        {isOpen && !isCollapsed && children?.length > 0 &&
        <div className={`${isOpen ? 'h-auto' : 'h-0'} w-full flex flex-col ${innerGap} transition-all`}>
        {children}
        </div>}
        </div>
    );
}

SidebarLink.propTypes = {
    color: PropTypes.oneOfType([
        PropTypes.oneOf(["base-0", 'base-50', "base-100", "base-200", "primary", "accent", "none"]),
        PropTypes.string]),
    text: PropTypes.string,
    fontWeight: PropTypes.oneOf(['auto', 'light', 'normal', 'medium', 'semibold']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    leftIcon: PropTypes.oneOf(['none', ...allIconNames]),
    width: PropTypes.oneOf(['auto', 'full']),
    indentLevel: PropTypes.oneOf(['0', '1', '2']),
    isActive: PropTypes.bool,
    isCollapsed: PropTypes.bool,
    displayChildren: PropTypes.bool,
    children: PropTypes.node,
    usePadding: PropTypes.bool,
    hoverEffect: PropTypes.bool,
    onClick: PropTypes.func
};

