import React from 'react';
import PropTypes from 'prop-types';
import { spacingMap } from './helpers.js';

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
function Grid(props) {
    
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
        fontColor = 'auto',
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
    const autoFontStyle = (!background || background == 'none') ? 'text-inherit' : background == 'base-900' ? `text-base-0` : _optionalChain([background, 'optionalAccess', _ => _.startsWith, 'call', _2 => _2('base')]) ? 'text-base-content' : `text-${background}-content`;
    const fontStyles = fontColor == 'auto' ? autoFontStyle : `text-${fontColor}`;
    
    let borderStyles = hasOutline ? 'border border-base-300' : '';
    let classes = `grid ${borderStyles} ${widthStyles} ${bgStyles} ${cornerStyles} ${gapStyles} ${paddingStyles} ${heightStyles} ${fontStyles}`;
    
    if (display) return (
        React.createElement('div', { 
        ...attributes, ...listeners, 
        className: classes, style: { alignItems: alignItems, gridTemplateColumns: columnCount ? `repeat(${columnCount}, minmax(0, 1fr))` : undefined },}

        , children
        )
    );
}

Grid.propTypes = {
    columnCount: PropTypes.number,
    background: PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'primary', 'accent', 'base-900']),
    fontColor: PropTypes.oneOf(['base-0', 'base-100', 'base-200', 'primary', 'accent', 'base-content', 'auto', 'success-content', 'error-content', 'warning-content', 'info-content']),
    
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

export { Grid as default };
//# sourceMappingURL=Grid.js.map
