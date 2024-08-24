import React from 'react';
import PropTypes from 'prop-types';
import { spacingMap } from './helpers.js';

export default function IconBar(props) {

    const {
        paddingX = null,
        paddingY = null,
        gap = null,

        background = 'base-0',
        
        alignItems = 'stretch',
        justifyContent = 'start',
        position = 'left',
        width = '64px',
        display = true,
        textSize = 'base',
        children,
        attributes,
        listeners
      } = props;
    
      const bgStyles = background ?`bg-${background}` : '';
      const fontColor = (!background || background == 'none') ? '' : (background == 'base-900' || background == 'base-700') ? `text-base-0` : background?.startsWith('base') ? 'text-base-content' : `text-${background}-content`
      const paddingStyles = `${paddingX ? ` px-${spacingMap[paddingX]}` : ''}${paddingY ? ` py-${spacingMap[paddingY]}` : ''}`;
      const gapStyles = gap ? `gap-${spacingMap[gap]}` : '';
    
    
    const fontSize = `text-`+textSize
    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';
    

    let classes = `flex flex-col flex-shrink-0 flex-grow-0 z-50 relative ${fontColor} ${fontSize} ${paddingStyles} ${bgStyles} ${gapStyles} ${alignItemsStyles} ${justifyContentStyles} transition-all`

    if (display) return (
        <div 
        {...attributes} {...listeners} 
        style={{
            order: position == 'left' ? '-2' : 2,
            minWidth: width, 
            minHeight: '100%', 
        }}
        className={classes}
        >
        {children}
        </div>
    );
}

IconBar.propTypes = {
    background: PropTypes.oneOfType([
        PropTypes.oneOf(['base-0', 'base-50',  'base-100', 'base-200', 'base-700', 'base-content', 'primary', 'accent']),
        PropTypes.string]),
    position: PropTypes.oneOf(['left', 'right']),
    width: PropTypes.oneOf(['48px', '64px', '80px', '96px']),
    paddingX: PropTypes.oneOf(["6px", "8px", "12px", "16px", "24px", "32px", "48px", '64px']),
    paddingY: PropTypes.oneOf(["6px", "8px", "12px", "16px", "24px", "32px", "48px", '64px']),
    gap: PropTypes.oneOf(["4px", "6px", "8px", "10px", "12px", "16px", "24px", "32px", "48px"]),

    alignItems: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
    justifyContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'evenly']),
    hasOutline: PropTypes.bool,
    textSize: PropTypes.oneOf(['sm', 'base', 'md']),
    display: PropTypes.bool,
    children: PropTypes.node
};

