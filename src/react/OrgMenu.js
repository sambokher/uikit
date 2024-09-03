import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import { Logo, Tooltip } from './index.js';
import { Icon } from './index'

export default function OrgMenu(props) {
    
    const {
        size = 'medium',
        width = 'auto',
        color = 'accent',
        name = 'Organization',
        logoPosition = 'left',
        icon = null,
        isCollapsed,
        tooltip=true,
        isActive,
        onClick,
        children, 
        attributes,
        listeners
      } = props;
    
    const [isOpen, setIsOpen] = useState(false)

    const sizeStylesMap = {
        small: `py-1.5 px-1.5 text-xs`,
        medium: `py-2 px-2.5 text-sm`,
        large: `py-2.5 px-3.5 text-base`
    }
    const borderStyles = `border border-transparent`
    const gapStyles = isCollapsed ? 'gap-0' : size == 'small' ? 'gap-1.5' : size == 'large' ? 'gap-2.5' : 'gap-2'
    const imageSize = size == 'small' ? '20px' : size == 'large' ? '28px' : '24px'
    const bgStyles = (isActive || isOpen) ? 'juno-current-color-bg' : 'juno-current-color-hover-bg'
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"
    const widthStyles = isCollapsed ? 'w-auto' : `w-${width}`

    let classes = `relative flex gap-1 ${widthStyles} ${sizeStylesMap[size]} ${cornerStyles} ${bgStyles} ${borderStyles} items-center justify-between cursor-default transition-all duration-300`

    const IconComponent = icon ? <Icon icon={icon?.toLowerCase()} className='scale-75 opacity-0 group-hover:opacity-100 hover:scale-90 transition-all cursor-pointer' /> : null;


    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [dropdownRef])

    return (
        <div
        className={classes}
        {...attributes} {...listeners} 
ref={dropdownRef}
            onClick={(e) => {e.stopPropagation(); setIsOpen(!isOpen)}}
        >
        <div className={`${gapStyles} flex items-center relative w-full group`}>
            <Logo
            type={'symbol'}
            size={imageSize} 
            />
        {<div className={`${isCollapsed ? 'w-0 opacity-0' : `w-auto ${isActive ? 'opacity-100' : 'opacity-80'}`} 
                transition-all whitespace-nowrap truncate text-ellipsis  select-none flex justify-between items-center w-full
                ${size == 'small' ? 'text-xs' : 'text-sm'} font-medium `}
                style={{order: logoPosition == 'left' ? 1 : -1}}
                >
            {name}
            {!isCollapsed && icon && IconComponent}
            </div>}
            {isCollapsed && name != '' && tooltip &&
                <Tooltip
                    direction={logoPosition == 'right' ? 'left' : 'right'}
                    size={size == 'small' ? 'small' : 'medium'} 
                    bgColor='base-content' 
                    text={name} 
                    />}
        </div>
        {isOpen && children &&
        <div 
        
        className={`absolute -bottom-1 translate-y-full right-0 bg-base-0 shadow-md p-1.5 border-[0.5px] border-base-200 rounded-md z-10
        flex flex-col items-stretch w-full animate-fadeInDown transition-all duration-150`}
        >
            {children}
        </div>}
    </div>
 )
}



OrgMenu.propTypes = {
    color: PropTypes.oneOfType([
        PropTypes.oneOf(["base-0", "base-100", "base-200", "primary", "accent"]),
        PropTypes.string]),
    size: PropTypes.oneOf(['medium', 'small']),
    logoPosition: PropTypes.oneOf(['left', 'right']),
    icon: PropTypes.oneOf(['chevron-right', 'chevron-down', 'chevron-left', 'arrows-up-down']),
    avatarType: PropTypes.oneOf(['image', 'initials']),
    width: PropTypes.oneOf(['auto', 'full']),
    isActive: PropTypes.bool,
    isCollapsed: PropTypes.bool,
    imageSrc: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    tooltip: PropTypes.bool,
}

