import React from 'react';
import PropTypes from 'prop-types';
import { spacingMap } from './helpers.js';

function Drawer(props) {
    
    const {
        backdrop = 'none',
        position = 'right',
        
        paddingX = '16px',
        paddingY = '16px',
        gap = '12px',

        bgColor = 'base-0',
        
        alignItems = 'stretch',
        justifyContent = 'start',
        width = '360px',
        children,
        attributes,
        listeners
      } = props;
    props.junoProps || {};

    
    const darkBackground = `color-mix(in srgb, var(--base-content) 24%, transparent)`;
    const lightBackground = `color-mix(in srgb, var(--base-content) 12%, transparent)`;
    const overlayClasses = `absolute top-0 flex flex-col w-full h-full`;

    // STYLES
    const bgStyles = bgColor ? `bg-${bgColor}` : '';
    const borderStyles = position == 'left' ? 'border-l border-base-300' : 'border-r border-base-300';
    
    const paddingStyles = `${paddingX ? `px-${spacingMap[paddingX]}` : ''} ${paddingY ? `py-${spacingMap[paddingY]}` : ''}`;
    const gapStyles = gap ? `gap-${spacingMap[gap]}` : '';

    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';

    let wrapperClasses = `flex flex-col relative h-full w-full flex-grow-0 flex-shrink-0 shadow-md ${paddingStyles} ${bgStyles} ${borderStyles}  ${gapStyles} ${alignItemsStyles} ${justifyContentStyles}`;
    
    return (
        /* Overlay */
        React.createElement('div', {  className: overlayClasses, 
        ...attributes, ...listeners, 
        style: {
            backgroundColor: backdrop == 'none' ? 'transparent' : backdrop == 'dark' ? darkBackground : lightBackground,
            zIndex: 50, 
            backdropFilter: backdrop == 'blurred' && 'blur(2px)',
            overflowX: 'auto',
            overflowY: 'hidden',
            alignItems: position == 'left' ? 'flex-start' : 'flex-end',
            WebkitBackdropFilter: backdrop == 'blurred' && 'blur(2px)', /* For Safari compatibility */
        },}
            , React.createElement('div', { className: wrapperClasses,
            style: {width: '100%', maxWidth: width, pointerEvents: 'all' },}
            , children
            )
        )
    );
}

Drawer.propTypes = {
    backdrop: PropTypes.oneOf(['dark', 'blurred', 'none']),
    position: PropTypes.oneOf(['right', 'left']),
    paddingX: PropTypes.oneOf(["0px", "8px", "12px", "16px", "24px", "32px", "48px"]),
    paddingY: PropTypes.oneOf(["0px", "8px", "12px", "16px", "24px", "32px", "48px"]),
    bgColor: PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200']),
    border: PropTypes.oneOf(['left', 'right', 'none']),
    gap: PropTypes.oneOf(["0px", "8px", "12px", "16px", "24px", "32px"]),
    alignItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
    justifyContent: PropTypes.oneOf(['start', 'end', 'center', 'between']),
    display: PropTypes.bool,
    width: PropTypes.oneOf(['360px', '480px', '640px', '780px', '50%', '33%', '25%']),
    children: PropTypes.node
};

export { Drawer as default };
//# sourceMappingURL=Drawer.js.map
