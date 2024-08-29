import React from 'react';
import PropTypes from 'prop-types';
import { spacingMap } from './helpers.js';

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

function FeaturePanel(props) {
    
    const {
        paddingX = null,
        paddingY = null,
        gap = null,

        background = null, 
        
        alignItems = 'stretch',
        justifyContent = 'start',
        display = true,
        textSize = 'base',
        backgroundImageSrc = null,
        children,
        attributes,
        listeners
      } = props;

    const bgStyles = background ?`bg-${background}` : '';
    const fontColor = (!background || background == 'none') ? '' : background == 'base-900' ? `text-base-0` : _optionalChain([background, 'optionalAccess', _ => _.startsWith, 'call', _2 => _2('base')]) ? 'text-base-content' : `text-${background}-content`;
    const paddingStyles = `${paddingX ? ` px-${spacingMap[paddingX]}` : ''}${paddingY ? ` py-${spacingMap[paddingY]}` : ''}`;
    const gapStyles = gap ? `gap-${spacingMap[gap]}` : '';

    const fontSize = `text-`+textSize;
    const alignItemsStyles = `items-${alignItems}`;
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';

    let classes = `flex flex-col flex-grow w-full ${bgStyles} ${justifyContentStyles} ${paddingStyles} ${gapStyles} ${fontColor} ${fontSize} ${alignItemsStyles}`;

    const noImage = !backgroundImageSrc;
    const imageStyles = { 
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${backgroundImageSrc}) no-repeat center center / cover`
    };
    
    if (display) return (
        React.createElement('div', { className: classes, style: noImage ? {} :  imageStyles, 
        ...attributes, ...listeners,}

        , children
        )
    );
}

FeaturePanel.propTypes = {
    background: PropTypes.oneOfType([
        PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'primary', 'accent', 'base-content']),
        PropTypes.string]),
    backgroundImageSrc: PropTypes.string,
    
    paddingX: PropTypes.oneOf(["6px", "8px", "12px", "16px", "24px", "32px", "48px", '64px']),
    paddingY: PropTypes.oneOf(["6px", "8px", "12px", "16px", "24px", "32px", "48px", '64px']),
    gap: PropTypes.oneOf(["4px", "6px", "8px", "10px", "12px", "16px", "24px", "32px", "48px"]),

    alignItems: PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
    justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'evenly']),
    display: PropTypes.bool,
    textSize: PropTypes.oneOf(['sm', 'base', 'md', 'lg', 'xl']),
    children: PropTypes.node
    
};

export { FeaturePanel as default };
//# sourceMappingURL=FeaturePanel.js.map
