import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Avatar, Tooltip, Heading } from './index.js';
import { Icon } from './index'
import { iconMap } from './iconMap'

export default function UserMenu(props) {
    
    const {
        size = 'medium',
        width = 'auto',
        color = 'accent',
        name = 'JD',
        avatarPosition = 'left',
        avatarType = 'initials',
        icon = null,
        isCollapsed,
        isActive,
        onClick,
        children, 
        defaultIconSet,
        attributes,
        listeners
      } = props;
    
    const [isOpen, setIsOpen] = useState(true)

    const sizeStylesMap = {
        small: `py-2xs px-2xs text-xs`,
        medium: `py-xs px-xs text-sm`,
        large: `py-base px-base text-base`
    }
    const borderStyles = `border border-transparent`
    const gapStyles = isCollapsed ? 'gap-0' : size == 'small' ? 'gap-xs' : size == 'large' ? 'gap-base' : 'gap-sm'
    const imageSize = size == 'small' ? '20px' : size == 'medium' ? '28px' : '40px'
    const bgStyles = (isActive || isOpen) ? 'juno-current-color-bg' : 'juno-current-color-hover-bg'
    const cornerStyles = isCollapsed ? 'rounded-full' : size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"
    const widthStyles = isCollapsed ? 'w-auto' : `w-${width}`

    let classes = `relative flex gap-1 ${widthStyles} ${sizeStylesMap[size]} ${cornerStyles} ${bgStyles} ${borderStyles} items-center justify-between cursor-default transition-all duration-500 group`

    const IconComponent = icon ? <Icon icon={icon?.toLowerCase()} defaultIconSet={defaultIconSet} 
    className='scale-75 opacity-0 group-hover:opacity-100 hover:scale-90 transition-all cursor-pointer' 
    style={{order: avatarPosition == 'left' ? 1 : -1}}
    /> : null;

    return (
        <div
        className={classes}
        {...attributes} {...listeners} 
            onClick={(e) => {e.stopPropagation(); setIsOpen(!isOpen)}}
        >
        <div className={`${gapStyles} flex items-center`}
        
        >
        <Avatar 
            initials={name}
            bgColor={color}
            size={imageSize} 
            type={avatarType}
            
            />
        {<div className={`${isCollapsed ? 'w-0 opacity-0' : `w-auto ${isActive ? 'opacity-100' : 'opacity-80'}`} 
            transition-all whitespace-nowrap truncate text-ellipsis  select-none
            ${size == 'small' ? 'text-xs' : 'text-sm'} font-medium `}
            style={{order: avatarPosition == 'left' ? 1 : -1}}
            >
        {name}
        </div>}
        </div>
        {isOpen && children?.length > 0 &&
        <div className={`absolute -bottom-1 translate-y-full right-0 bg-base-0 shadow-md p-xs border-[0.5px] border-base-200 rounded-md z-10
        flex flex-col items-stretch`}
        >
            {children}
        </div>}

        {!isCollapsed && icon && IconComponent}
        
        {isCollapsed && name != '' &&
                <Tooltip
                    direction={avatarPosition == 'right' ? 'left' : 'right'}
                    size={size == 'small' ? 'small' : 'medium'} 
                    bgColor='base-content' 
                    text={name} 
                    />
            }
    </div>
 )
}



UserMenu.propTypes = {
    color: PropTypes.oneOfType([
        PropTypes.oneOf(["base-0", 'base-50', "base-100", "base-200", "primary", "accent", "none"]),
        PropTypes.string]),
    size: PropTypes.oneOf(['medium', 'small']),
    avatarPosition: PropTypes.oneOf(['left', 'right']),
    icon: PropTypes.oneOf(['chevron-right', 'chevron-down', 'chevron-left']),
    avatarType: PropTypes.oneOf(['image', 'initials']),
    width: PropTypes.oneOf(['auto', 'full']),
    name: PropTypes.string,
}

