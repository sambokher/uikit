import React from 'react';
import PropTypes from 'prop-types';
import { spacingMap } from './helpers.js';

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
function Header(props) {
    
    const {
        width = 'stretch',
        
        paddingX = null,
        paddingY = null,
        gap = null, 

        background = null,
        hasBorder = false,
        
        alignItems = 'center',
        justifyContent = 'between',
        fontSize = 'base',
        minHeight = null,
        children,
        attributes,
        listeners
      } = props;
    
    const bgStyles = background ?`bg-${background}` : '';
    const fontColor = (!background || background == 'none') ? '' : background == 'base-900' ? `text-base-0` : _optionalChain([background, 'optionalAccess', _ => _.startsWith, 'call', _2 => _2('base')]) ? 'text-base-content' : `text-${background}-content`;
    const paddingStyles = `${paddingX ? ` px-${spacingMap[paddingX]}` : ''}${paddingY ? ` py-${spacingMap[paddingY]}` : ''}`;
    const gapStyles = gap ? `gap-${spacingMap[gap]}` : '';

    const heightStyles = minHeight ? `min-h-[${minHeight}px]` : '';
    const borderStyles = hasBorder ? 'border-b border-base-300' : '';
    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const fontSizeStyles = `text-${fontSize}`;
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';
    
    
    
    
    let classes = `flex flex-row min-h-[60px] w-full border-box ${fontSizeStyles} ${fontColor} ${paddingStyles} ${heightStyles} ${gapStyles} ${alignItemsStyles} ${justifyContentStyles}`;

    let outerClasses = `w-full flex flex-col items-center ${bgStyles} ${borderStyles} relative`;

    return (
        React.createElement('div', { 
        ...attributes, ...listeners, 
        className: outerClasses,}
            , React.createElement('div', { 
            className: classes, style: {width: '100%', maxWidth: width != 'stretch' ? `${width}px` : '100%'},}
                , children
                )
        )
    );
}

Header.propTypes = {
    background: PropTypes.oneOfType([
        PropTypes.oneOf(['base-0', 'base-100', 'base-200', 'base-700', 'base-900']),
        PropTypes.string]),
    width: PropTypes.oneOf(['stretch', '780', '960', '1200', '1440']),
    paddingX: PropTypes.oneOf(["6px", "8px", "12px", "16px", "24px", "32px", "48px", '64px']),
    paddingY: PropTypes.oneOf(["6px", "8px", "12px", "16px", "24px", "32px", "48px", '64px']),
    gap: PropTypes.oneOf(["4px", "6px", "8px", "10px", "12px", "16px", "24px", "32px", "48px"]),
    
    hasBorder: PropTypes.bool,
    alignItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
    justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'between']),
    fontSize: PropTypes.oneOf(['xs', 'sm', 'base', 'md', 'lg', 'xl']),
    minHeight: PropTypes.number,
    children: PropTypes.node
};

export { Header as default };
//# sourceMappingURL=Header.js.map
