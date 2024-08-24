import React from 'react';
import PropTypes from 'prop-types'
import { spacingMap } from './helpers.js';

export default function Sidebar(props) {
    
    const {
        background = 'base-0',

        paddingX = null,
        paddingY = null,
        gap = null, 
        
        position = 'left',
        hasOutline = true,
        
        alignItems = 'stretch',
        justifyContent = 'start',
        display = true,
        width = '280px',
        textSize = 'base',
        children,
        attributes,
        listeners
      } = props;
    
    // STYLES
    const paddingStyles = `${paddingX ? ` px-${spacingMap[paddingX]}` : ''}${paddingY ? ` py-${spacingMap[paddingY]}` : ''}`;
    const gapStyles = gap ? `gap-${spacingMap[gap]}` : '';

    const fontSize = `text-`+textSize
    const bgStyles = background ? `bg-${background}` : '';
    const borderStyles = !hasOutline ? '' : position == 'left' ? 'border-r' : 'border-l';
    
    const borderColor = `color-mix(in srgb, var(--base-content) 12%, transparent)`


    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';
    const fontColor = (background == 'none' || !background) ? '' : (background == 'base-900' || background == 'base-700' || background == 'base-content') ? `text-base-0` : background?.startsWith('base') ? 'text-base-content' : `text-${background}-content`
    
    let classes = `flex flex-col relative flex-grow-0 z-40 flex-shrink-0 transition-all
    ${paddingStyles} ${fontColor} ${fontSize} ${bgStyles} ${gapStyles} ${alignItemsStyles} ${justifyContentStyles} ${borderStyles} `

    if (display) return (
        <div 
        {...attributes} {...listeners} 
        className={classes}
        style={{
            order: position == 'left' ? '-2' : 2, 
            width: width,
            maxWidth: width,
            minWidth: width,
            borderColor: borderColor,
            minHeight: '100%',
        }}>
        {children}
        </div>
    );
}


Sidebar.propTypes = {
    background: PropTypes.oneOfType([    
        PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'base-700', 'base-content', 'primary', 'accent']),
        PropTypes.string]),
    width: PropTypes.oneOf(['auto', '64px', '240px', '280px', '320px', '360px', '480px', '100%']),
    
    paddingX: PropTypes.oneOf(["6px", "8px", "12px", "16px", "24px", "32px", "48px"]),
    paddingY: PropTypes.oneOf(["6px", "8px", "12px", "16px", "24px", "32px", "48px"]),
    gap: PropTypes.oneOf(["6px", "8px", "12px", "16px", "24px", "32px"]),

    alignItems: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
    justifyContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'evenly']),
    hasOutline: PropTypes.bool,
    textSize: PropTypes.oneOf(['sm', 'base', 'md']),
    display: PropTypes.bool,    
    children: PropTypes.node
};

