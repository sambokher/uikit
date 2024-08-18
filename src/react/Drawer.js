import PropTypes from 'prop-types';
import React from 'react';

export default function Drawer(props) {
    
    const {
        backdrop = 'none',
        position = 'right',
        paddingX = 'md',
        paddingY = 'md',
        bgColor = 'base-0',
        gap = 'base',
        alignItems = 'stretch',
        justifyContent = 'start',
        width = '360px',
        children,
        attributes,
        listeners
      } = props;
    const { junoAttributes, dndProps, showTag, setRefs, outlineStyle, eventListeners } = props.junoProps || {}

    
    const darkBackground = `color-mix(in srgb, var(--base-content) 24%, transparent)`
    const lightBackground = `color-mix(in srgb, var(--base-content) 12%, transparent)`
    const overlayClasses = `absolute top-0 flex flex-col w-full h-full`

    // STYLES
    const bgStyles = `flex bg-${bgColor}`;
    const borderStyles = position == 'left' ? 'border-l border-base-300' : 'border-r border-base-300';
    const gapStyles = gap === 'none' ? '' : `gap-${gap}`;
    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';
    const paddingStyles = `${paddingX ? `px-${paddingX}` : ''} ${paddingY ? `py-${paddingY}` : ''}`;

    let wrapperClasses = `flex flex-col relative h-full w-full flex-grow-0 flex-shrink-0 shadow-md ${paddingStyles} ${bgStyles} ${borderStyles}  ${gapStyles} ${alignItemsStyles} ${justifyContentStyles}`
    
    return (
        /* Overlay */
        <div  className={overlayClasses} 
        {...attributes} {...listeners} 
        style={{
            backgroundColor: backdrop == 'none' ? 'transparent' : backdrop == 'dark' ? darkBackground : lightBackground,
            zIndex: 50, 
            backdropFilter: backdrop == 'blurred' && 'blur(2px)',
            overflowX: 'auto',
            overflowY: 'hidden',
            alignItems: position == 'left' ? 'flex-start' : 'flex-end',
            WebkitBackdropFilter: backdrop == 'blurred' && 'blur(2px)', /* For Safari compatibility */
        }}>
            <div className={wrapperClasses}
            style={{width: '100%', maxWidth: width, pointerEvents: 'all' }}>
            {children}
            </div>
        </div>
    );
}

Drawer.propTypes = {
    backdrop: PropTypes.oneOf(['dark', 'blurred', 'none']),
    position: PropTypes.oneOf(['right', 'left']),
    paddingX: PropTypes.oneOf(["none", "sm", "base", "md", "lg", 'xl', '2xl']),
    paddingY: PropTypes.oneOf(["none", "sm", "base", "md", "lg", 'xl', '2xl']),
    bgColor: PropTypes.oneOf(['base-0', 'base-100', 'base-200', 'none']),
    border: PropTypes.oneOf(['left', 'right', 'none']),
    gap: PropTypes.oneOf(['none', 'xs', 'sm', 'base', 'md', 'lg', 'xl']),
    alignItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
    justifyContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'evenly']),
    display: PropTypes.bool,
    width: PropTypes.oneOf(['360px', '480px', '640px', '780px', '50%', '33%', '25%']),
    children: PropTypes.node
};

