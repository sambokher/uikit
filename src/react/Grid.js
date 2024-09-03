import React from 'react';
import PropTypes from 'prop-types';
import { spacingMap } from './helpers.js';

export default function Grid(props) {
    
    const {
        paddingX = null,
        paddingY = null,
        gap = null,

        background = null,
        
        display = true,
        columnCount = 3,
        alignItems = 'start',
        corners = 'none',
        hasOutline = false,
        width = 'full',
        height = 'auto',
        fontColor = null,
        children,
        attributes,
        listeners
    } = props;


    const bgStyles = background ? `bg-${background}` : '';
    
    const gapStyles = gap ? `gap-${spacingMap[gap]}` : '';
    const paddingStyles = `${paddingX ? ` px-${spacingMap[paddingX]}` : ''}${paddingY ? ` py-${spacingMap[paddingY]}` : ''}`;
    
    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const widthStyles = `w-${width}`;
    const heightStyles = `h-${height}`;
    const inheritFontStyle = (background == 'none' || !background) ? '' : (background?.startsWith('base') && background != 'base-900') ? `text-base-content` : `text-base-0`;
    const fontStyles = (fontColor == 'auto' || !fontColor) ? inheritFontStyle : `text-${fontColor}`
    
    let borderStyles = hasOutline ? 'border border-base-300' : '';
    let classes = `grid ${borderStyles} ${widthStyles} ${bgStyles} ${cornerStyles} ${gapStyles} ${paddingStyles} ${heightStyles} ${fontStyles}`;
    
    if (display) return (
        <div 
        {...attributes} {...listeners} 
        className={classes} style={{ alignItems: alignItems, gridTemplateColumns: columnCount ? `repeat(${columnCount}, minmax(0, 1fr))` : undefined }}
        >
        {children}
        </div>
    );
}

Grid.propTypes = {
    columnCount: PropTypes.number,
    background: PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'primary', 'accent', 'base-900']),
    fontColor: PropTypes.oneOf(['base-0', 'base-100', 'base-200', 'base-300', 'base-500', 'base-700', 'primary', 'accent', 'base-900', 'base-content', 'auto', 
        'success', 'error', 'warning', 'info', 'success-content', 'error-content', 'warning-content', 'info-content']),
    
    paddingX: PropTypes.oneOf(["2px", "4px", "6px", "8px", "10px", "12px", "16px", "24px", "32px", "48px"]),
    paddingY: PropTypes.oneOf(["2px", "4px", "6px", "8px", "10px", "12px", "16px", "24px", "32px", "48px"]),
    gap: PropTypes.oneOf(["2px", "4px", "6px", "8px", "10px", "12px", "16px", "24px", "32px", "48px"]),
    
    display: PropTypes.bool,
    corners: PropTypes.oneOf(["none", "sm", "md", "lg", "full"]),
    hasOutline: PropTypes.bool,
    width: PropTypes.oneOf(["full", "auto", "1/2", "1/3", "1/4", "2/3", '3/4']),
    height: PropTypes.oneOf(["full", "auto", "1/2", "1/3", "1/4", "2/3"]),
    alignItems: PropTypes.oneOf(["start", "center", "end", "stretch"]),
    children: PropTypes.node
};

