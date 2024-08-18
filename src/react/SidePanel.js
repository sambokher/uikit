import PropTypes from 'prop-types'
import React from 'react';

export default function SidePanel(props) {
    
    const {
        paddingX = null,
        paddingY = null,
        background = 'base-50',
        position = 'left',
        hasOutline = true,
        gap = 'base',
        alignItems = 'stretch',
        justifyContent = 'start',
        display = true,
        textSize = 'base',
        width = '280px',
        children,
        attributes,
        listeners
      } = props;

    // STYLES
    const paddingStyles = `${paddingX ? `px-${paddingX}` : ''} ${paddingY ? `py-${paddingY}` : ''}`;
    const fontSize = `text-`+textSize
    const bgStyles = `bg-${background}`;
    const borderStyles = !hasOutline ? '' : position == 'left' ? 'border-r-[0.5px] border-base-300' : 'border-l-[0.5px] border-base-300';
    const gapStyles = gap === 'none' ? '' : `gap-${gap}`;
    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';
    const fontColor = background != 'none' ? background == 'base-900' || background == 'base-700' ? `text-base-0` : background?.startsWith('base') ? 'text-base-content' : `text-${background}-content` : ''
    
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
        [PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'base-700', 'base-900', 'none']),
        PropTypes.string]),
    width: PropTypes.oneOf(['240px', '280px', '320px', '360px', '480px']),
    position: PropTypes.oneOf(['left', 'right']),
    paddingX: PropTypes.oneOf(["0", "sm", "base", "md", "lg", 'xl', '2xl']),
    paddingY: PropTypes.oneOf(["0", "sm", "base", "md", "lg", 'xl', '2xl']),
    gap: PropTypes.oneOf(['none', 'xs', 'sm', 'base', 'md', 'lg', 'xl']),
    hasOutline: PropTypes.bool,
    alignItems: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
    justifyContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'evenly']),
    display: PropTypes.bool,
    textSize: PropTypes.oneOf(['sm', 'base', 'md']),
};

