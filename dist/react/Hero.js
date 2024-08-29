import React from 'react';
import PropTypes from 'prop-types';
import { spacingMap } from './helpers.js';

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
function Hero(props) {
    
    const {
        paddingX = null,
        paddingY = null,
        gap = null, 

        background = null,

        hasBorder = false,
        
        alignItems = 'center',
        flexDirection = 'flex-col',
        fontSize = 'base',
        bgImageSrc = null,
        bgOverlay = 'darker',
        height = 320,
        justifyContent = 'between',
        width = 'stretch',
        children,
        attributes,
        listeners
      } = props;
    

    const bgStyles = background ?`bg-${background}` : '';
    const fontColor = (!background || background == 'none') ? '' : background == 'base-900' ? `text-base-0` : _optionalChain([background, 'optionalAccess', _ => _.startsWith, 'call', _2 => _2('base')]) ? 'text-base-content' : `text-${background}-content`;
    const paddingStyles = `${paddingX ? ` px-${spacingMap[paddingX]}` : ''}${paddingY ? ` py-${spacingMap[paddingY]}` : ''}`;
    const gapStyles = gap ? `gap-${spacingMap[gap]}` : '';
    
    const heightStyles = height ? `h-[${height}px]` : '';
    const borderStyles = hasBorder ? 'border-b border-base-300' : '';
    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const fontSizeStyles = `text-${fontSize}`;
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';
    

    let classes = `flex w-full border-box flex-grow flex-shrink-0
        ${flexDirection}
        ${fontSizeStyles}
        ${fontColor}
        ${paddingStyles}
        ${heightStyles}
        ${gapStyles} 
        ${alignItemsStyles}
        ${justifyContentStyles}
        `;


    let outerClasses = `w-full flex flex-col items-center ${bgStyles} ${borderStyles} relative`;

    const noImage = !bgImageSrc;

    return (
        React.createElement('div', { 
        ...attributes, ...listeners, 
        className: outerClasses, style: noImage ? {} : getImageStyles(bgOverlay, bgImageSrc),}
            , React.createElement('div', { className: classes, style: {maxWidth: width != 'stretch' ? width : '100%'},}
                , children
            )
        )
    );
}

function getImageStyles(bgOverlay, bgImageSrc) {
    switch (bgOverlay) {
        case 'darker':
            return {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${bgImageSrc})`,
                backgroundSize: 'cover'
            };
        case 'white':
            return {
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.5)), url(${bgImageSrc})`,
                backgroundSize: 'cover'
            };
        default:
            return {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${bgImageSrc})`,
                backgroundSize: 'cover'
            };
    }
}

Hero.propTypes = {
    width: PropTypes.oneOf(['stretch', '780px', '960px', '1200px', '1440px']),
    paddingX: PropTypes.oneOf(["6px", "8px", "12px", "16px", "24px", "32px", "48px", '64px']),
    paddingY: PropTypes.oneOf(["6px", "8px", "12px", "16px", "24px", "32px", "48px", '64px']),
    gap: PropTypes.oneOf(["4px", "6px", "8px", "10px", "12px", "16px", "24px", "32px", "48px"]),

    background: PropTypes.oneOfType([
        PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'base-700', 'base-900']),
        PropTypes.string]),
    bottomBorder: PropTypes.bool,
    flexDirection: PropTypes.oneOf(["flex-col", "flex-row"]),
    alignItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
    justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'between']),
    fontSize: PropTypes.oneOf(['xs', 'sm', 'base', 'md', 'lg', 'xl']),
    height: PropTypes.number,
    bgImageSrc: PropTypes.string,
    bgOverlay: PropTypes.oneOf(['none', 'darker', 'white']),
    children: PropTypes.node
};

export { Hero as default };
//# sourceMappingURL=Hero.js.map
