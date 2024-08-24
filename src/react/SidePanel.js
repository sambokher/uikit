import React from 'react';
import PropTypes from 'prop-types';
import { spacingMap } from './helpers.js';


export default function SidePanel(props) {
    
    const {
        paddingX = null,
        paddingY = null,
        gap = null,

        background = 'base-50',

        position = 'left',
        hasOutline = true,
        
        alignItems = 'stretch',
        justifyContent = 'start',
        display = true,
        textSize = 'base',
        width = '280px',
        children,
        attributes,
        listeners
      } = props;

    const bgStyles = background ?`bg-${background}` : '';
    const fontColor = (!background || background == 'none') ? '' : background == 'base-900' ? `text-base-0` : background?.startsWith('base') ? 'text-base-content' : `text-${background}-content`
    const paddingStyles = `${paddingX ? ` px-${spacingMap[paddingX]}` : ''}${paddingY ? ` py-${spacingMap[paddingY]}` : ''}`;
    const gapStyles = gap ? `gap-${spacingMap[gap]}` : '';

    const fontSize = `text-`+textSize
    const borderStyles = !hasOutline ? '' : position == 'left' ? 'border-r-[0.5px] border-base-300' : 'border-l-[0.5px] border-base-300';
    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';
    
    let classes = `flex flex-col flex-grow-0 flex-shrink-0 z-30 h-full relative ${paddingStyles} ${fontColor} ${fontSize} ${bgStyles} ${borderStyles} ${gapStyles} ${alignItemsStyles} ${justifyContentStyles}`

    if (display) return (
        <div 
        {...attributes} {...listeners} 
        className={classes}
        style={{
            order: position == 'left' ? '-1' : 1, 
            width: width,
            maxWidth: width,
            minWidth: width
        }}>
        {children}
        </div>
    );
}

SidePanel.propTypes = {
    background: PropTypes.oneOfType(
        [PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'base-700', 'base-900']),
        PropTypes.string]),
    width: PropTypes.oneOf(['240px', '280px', '320px', '360px', '480px']),
    position: PropTypes.oneOf(['left', 'right']),
    paddingX: PropTypes.oneOf(["6px", "8px", "12px", "16px", "24px", "32px", "48px", '64px']),
    paddingY: PropTypes.oneOf(["6px", "8px", "12px", "16px", "24px", "32px", "48px", '64px']),
    gap: PropTypes.oneOf(["4px", "6px", "8px", "10px", "12px", "16px", "24px", "32px", "48px"]),
    hasOutline: PropTypes.bool,
    alignItems: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
    justifyContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'evenly']),
    display: PropTypes.bool,
    textSize: PropTypes.oneOf(['sm', 'base', 'md']),
};

