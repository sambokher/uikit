import React from 'react';
import PropTypes from 'prop-types';
import { spacingMap } from './helpers.js';

export default function Form(props) {
        
    const {
        direction = "flex-col",
        width = "full",
        height = "h-auto",
        
        paddingX = null,
        paddingY = null,
        gap = null,

        fontColor = "auto",
        bgImageSrc = null,
        background = null,
        bgOpacity = "100",

        hasOutline = false,
        flexWrap = "nowrap",
        corners = "none",
        
        alignItems = "start",
        justifyContent = "start",
        textSize = "auto",
        maxWidth = null,
        minWidth = null,
        maxHeight = null,
        minHeight = null,
        selfAlign = "auto",
        display = true,
        
        
        onSubmit=()=>{},
        children,
        attributes,
        listeners
      } = props;

    const bgStyles = background ? `bg-${background}` : '';
    const autoFontStyle = (!background || background == 'none') ? 'text-inherit' : background == 'base-900' ? `text-base-0` : background?.startsWith('base') ? 'text-base-content' : `text-${background}-content`
    const fontStyles = fontColor == 'auto' ? autoFontStyle : `text-${fontColor}`
    
    const gapStyles = gap ? `gap-${spacingMap[gap]}` : '';
    const paddingStyles = `${paddingX ? ` px-${spacingMap[paddingX]}` : ''}${paddingY ? ` py-${spacingMap[paddingY]}` : ''}`;
    
    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const widthStyles = `w-${width} max-w-full ${maxWidth ? `max-w-[${maxWidth}px]` : ''} ${minWidth ? `min-w-[${minWidth}px]` : ''}`;
    const heightStyles = `${height} ${maxHeight ? `max-h-[${maxHeight}px]` : ''} ${minHeight ? `min-h-[${minHeight}px]` : ''}`;
    const fontSize = textSize != 'auto' ? 'text-'+textSize : '';
    const borderStyles = hasOutline ? 'border border-base-300' : '';
    
    const wrapStyles = `flex-${flexWrap}`;
    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';
    

    let classes = `flex ${direction} ${wrapStyles} ${paddingStyles} ${widthStyles} self-${selfAlign} ${fontStyles} ${fontSize} ${bgStyles} ${borderStyles} ${gapStyles} ${cornerStyles} ${alignItemsStyles} ${justifyContentStyles} ${heightStyles}`
    
    const inLineStyles = {
        background: bgImageSrc && `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${bgImageSrc}) no-repeat center center / cover`, 
        backgroundColor: (background && background != 'none') ? bgOpacity ? `color-mix(in srgb, var(--${background}) ${bgOpacity}%, transparent)` : `var(--${background})` : '',
        maxWidth: maxWidth, 
        minWidth: minWidth,
        maxHeight: maxHeight,
        minHeight: minHeight
    };

    const filteredInLineStyles = Object.fromEntries(
        Object.entries(inLineStyles).filter(([_, value]) => value != null)
    );


    if (display) return (
        <form

        onSubmit={(e) => {e.preventDefault(); onSubmit && onSubmit(e)}}
        {...attributes} {...listeners} 
        className={classes}
        style={Object.keys(filteredInLineStyles).length > 0 ? filteredInLineStyles : undefined}>
        {children}
        </form>
    );
}


Form.propTypes = {
    background: PropTypes.oneOfType([
        PropTypes.oneOf(["base-0", 'base-50', "base-100", "base-200", "primary", "accent", "base-900" ]),
        PropTypes.string]),
    bgOpacity: PropTypes.oneOf(["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]),
    direction: PropTypes.oneOf(["flex-col", "flex-row"]),
    width: PropTypes.oneOf(["full", "auto", "1/2", "1/3", "1/4", "2/3", '3/4']),
    height: PropTypes.oneOf(['h-full', 'h-1/2', 'h-1/3', 'h-1/4', 'h-2/3', 'h-[integer]px', 'h-auto']),
    
    paddingX: PropTypes.oneOf(["2px", "4px", "6px", "8px", "10px", "12px", "16px", "24px", "32px", "48px"]),
    paddingY: PropTypes.oneOf(["2px", "4px", "6px", "8px", "10px", "12px", "16px", "24px", "32px", "48px"]),
    gap: PropTypes.oneOf(["2px", "4px", "6px", "8px", "10px", "12px", "16px", "24px", "32px", "48px"]),
    
    
    hasOutline: PropTypes.bool,
    flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
    corners: PropTypes.oneOf(["none", "sm", "md", "lg", 'xl', '2xl', "full"]),
    
    alignItems: PropTypes.oneOf(["start", "center", "end", "stretch"]),
    justifyContent: PropTypes.oneOf(["start", "center", "end", "between", "around", "evenly"]),
    textSize: PropTypes.oneOf(["auto", 'xs', "sm", "base", "md"]),
    maxWidth: PropTypes.number,
    minWidth: PropTypes.number,
    maxHeight: PropTypes.number,
    minHeight: PropTypes.number,
    selfAlign: PropTypes.oneOf(['auto', 'start', 'center', 'end']),
    display: PropTypes.bool,
    onSubmit: PropTypes.func,
    bgImageSrc: PropTypes.string,
    fontColor: PropTypes.oneOf(['base-0', 'base-100', 'base-200', 'primary', 'accent', 'base-900', 'base-content', 'auto', 'success-content', 'error-content', 'warning-content', 'info-content']),
    children: PropTypes.node
};



