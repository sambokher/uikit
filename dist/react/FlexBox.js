import React from 'react';
import PropTypes from 'prop-types';
import { spacingMap } from './helpers.js';

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
// tailwindcss safelist
// gap-0.5 gap-1 gap-1.5 gap-2 gap-2.5 gap-3 gap-3.5 gap-4 gap-5 gap-6 gap-8 gap-10 gap-12 
// px-0.5 px-1 px-1.5 px-2 px-2.5 px-3 px-3.5 px-4 px-5 px-6 px-8 px-10 px-12
// py-0.5 py-1 py-1.5 py-2 py-2.5 py-3 py-3.5 py-4 py-5 py-6 py-8 py-10 py-12

function FlexBox(props) {
        
    const {
        direction = "flex-col",
        width = "full",
        height = "h-auto",
        paddingX = null,
        paddingY = null,
        background = null,
        bgOpacity = null, 
        hasOutline = false,
        flexWrap = "nowrap",
        corners = "none",
        gap = null,
        alignItems = "start",
        justifyContent = "start",
        textSize = "auto",
        maxWidth = null,
        minWidth = null,
        maxHeight = null,
        minHeight = null,
        selfAlign = "auto",
        display = true,
        bgImageSrc = null,
        fontColor = "auto",
        children,
        attributes,
        listeners
      } = props;

    const bgStyles = background ? `bg-${background}` : '';
    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const widthStyles = `w-${width} max-w-full ${maxWidth ? `max-w-[${maxWidth}px]` : ''} ${minWidth ? `min-w-[${minWidth}px]` : ''}`;
    const heightStyles = `${height} ${maxHeight ? `max-h-[${maxHeight}px]` : ''} ${minHeight ? `min-h-[${minHeight}px]` : ''}`;
    const fontSize = textSize != 'auto' ? 'text-'+textSize : '';
    const borderStyles = hasOutline ? 'border border-base-300' : '';
    const gapStyles = gap ? `gap-${spacingMap[gap]}` : '';
    const paddingStyles = `${paddingX ? ` px-${spacingMap[paddingX]}` : ''}${paddingY ? ` py-${spacingMap[paddingY]}` : ''}`;
    const wrapStyles = `flex-${flexWrap}`;
    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';
    const inheritFontStyle = (background == 'none' || !background) ? 'text-inherit' : background == 'base-900' ? `text-base-0` : _optionalChain([background, 'optionalAccess', _2 => _2.startsWith, 'call', _3 => _3('base')]) ? 'text-base-content' : `text-${background}-content`;
    const fontStyles = fontColor == 'auto' ? inheritFontStyle : `text-${fontColor}`;

    let classes = `flex ${direction} ${wrapStyles} ${widthStyles} self-${selfAlign} ${fontStyles} ${fontSize} ${bgStyles} ${borderStyles} ${gapStyles} ${paddingStyles} ${cornerStyles} ${alignItemsStyles} ${justifyContentStyles} ${heightStyles}`;
    
    const inLineStyles = {
        background: bgImageSrc && `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${bgImageSrc}) no-repeat center center / cover`, 
        backgroundColor: bgOpacity ? `color-mix(in srgb, var(--${background}) ${bgOpacity}%, transparent)` : null, 
        maxWidth: maxWidth, 
        minWidth: minWidth,
        maxHeight: maxHeight,
        minHeight: minHeight
    };

    const filteredInLineStyles = Object.fromEntries(
        Object.entries(inLineStyles).filter(([_, value]) => value != null)
    );

    if (display) return (
        React.createElement('div', { 
        ...attributes, ...listeners, 
        className: classes,
        style: Object.keys(filteredInLineStyles).length > 0 ? filteredInLineStyles : undefined,}
        , children
        )
    );
}


FlexBox.propTypes = {
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
    corners: PropTypes.oneOf(["none", "sm", 'base', "md", "lg", 'xl', '2xl', "full"]),
    
    alignItems: PropTypes.oneOf(["start", "center", "end", "stretch"]),
    justifyContent: PropTypes.oneOf(["start", "center", "end", "between"]),
    textSize: PropTypes.oneOf(["auto", 'xs', "sm", "base", "md"]),
    maxWidth: PropTypes.number,
    minWidth: PropTypes.number,
    maxHeight: PropTypes.number,
    minHeight: PropTypes.number,
    selfAlign: PropTypes.oneOf(['auto', 'start', 'center', 'end']),
    display: PropTypes.bool,
    hide_from_ai: PropTypes.bool,
    bgImageSrc: PropTypes.string,
    fontColor: PropTypes.oneOf(['base-0', 'base-100', 'base-200', 'primary', 'accent', 'base-900', 'base-content', 'auto', 'success-content', 'error-content', 'warning-content', 'info-content']),
    children: PropTypes.node
};

export { FlexBox as default };
//# sourceMappingURL=FlexBox.js.map
