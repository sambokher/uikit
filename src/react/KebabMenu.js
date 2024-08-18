import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'; 
import * as IconoirIcons from 'iconoir-react';

export default function KebabMenu(props) {
    
    const {
        icon = 'MoreHoriz',
        buttonBgColor = 'none',
        buttonOutline = true,
        size = '20px',
        showMenu = false,
        menuMinWidth = '120px',
        padding = 'sm',
        bgColor = 'base-0',
        corners = 'md',
        gap = 'sm',
        openDirection = 'downward-right',
        children,
        attributes,
        listeners
      } = props;
    
    const [ open, setOpen ] = useState(showMenu)
    useEffect(() => {
        setOpen(showMenu);
    }, [showMenu]);

    /* Kebab Button */
    const iconColor = buttonBgColor === 'none' ? '' : parseInt(buttonBgColor.replace('base-', ''), 10) > 301 ? 'text-base-0' : 'text-base-content'
    const borderStyles = buttonOutline ? 'border border-base-300' : ''
    const menuPositionStyle = getMenuPositionStyle(openDirection)
    let wrapperClasses = `relative flex-shrink-0 flex items-center justify-center`
    
    /* Icon */
    const iconSize = parseInt(size.replace('px', ''), 10) - 4
    const IconComponent = IconoirIcons[icon] || IconoirIcons['MoreHoriz'];
    

    /* Drop Area */
    const gapStyles = gap === 'none' ? '' : `gap-${gap}`;
    const paddingStyles = padding === 'none' ? 'p-0' : `p-${padding}`;
    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const borderClasses = `border border-base-300` 
    let optionsClasses = `w-auto flex flex-col items-start justify-start mt-sm bg-${bgColor} z-5 absolute ${borderClasses} ${gapStyles} ${paddingStyles} ${cornerStyles} `
    
    function getMenuPositionStyle(direction) {
        switch (direction) {
            case 'upward-right':
                return { bottom: '100%', left: 0 };
            case 'upward-left':
                return { bottom: '100%', right: 0 };
            case 'downward-left':
                return { top: '100%', right: 0 };
            default: // 'downward-right'
                return { top: '100%', left: 0 };
        }
    }

    
    return (
        <div 
        {...attributes} {...listeners} 
        className={wrapperClasses}
        onClick={() => setOpen(!open) }
    >
        <div className={`p-[2px] rounded bg-${buttonBgColor} hover:brightness-95 transition-all ${borderStyles}`}>
        {IconComponent && <IconComponent 
            style={{height: iconSize, width: iconSize, strokeWidth: parseInt(size.replace('px', ''), 10) > 20 ? 2 : 1}} 
            className={`flex-shrink-0 flex-grow-0 ${iconColor}`}
            />}</div>
        
        {open && (<div 
                    style={{ 
                        ...menuPositionStyle,
                        position: 'absolute', 
                        zIndex: 5000, 
                        minWidth: menuMinWidth
                    }}
                    className={optionsClasses}
                    >
                        {children}
        </div>)}
    </div>
);  
}


KebabMenu.propTypes = {
    icon: PropTypes.oneOf(['MoreHoriz', 'MoreVert', 'MoreHorizCircle', 'MoreVertCircle', 'NavArrowDown', 'Plus', 'PlusCircle']),
    buttonBgColor: PropTypes.oneOf(['none', 'base-0', 'base-100']),
    buttonOutline: PropTypes.bool,
    size: PropTypes.oneOf(['16px', '20px', '24px', '32px']),
    showMenu: PropTypes.bool,
    menuMinWidth: PropTypes.oneOf(['fitContent', '120px', '160px', '240px', '320px']),
    padding: PropTypes.oneOf(['none', 'sm', 'base', 'md']),
    bgColor: PropTypes.oneOf(['base-0', 'base-100', 'none']),
    corners: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
    gap: PropTypes.oneOf(['none', '2xs', 'xs', 'sm', 'base', 'md']),
    openDirection: PropTypes.oneOf(['downward-right', 'downward-left', 'upward-right', 'upward-left']),
};

