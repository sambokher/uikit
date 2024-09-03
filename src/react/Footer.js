import React from 'react';
import PropTypes from 'prop-types';
import { spacingMap } from './helpers.js';

export default function Footer(props) {
    
    const {
        paddingX = null,
        paddingY = null,
        gap = null, 

        background = null,
        hasBorder = false,
        
        alignItems = 'stretch',
        fontSize = 'base',
        minHeight = null,
        width = 'stretch',
        children,
        attributes,
        listeners
      } = props;

    const bgStyles = background ? `bg-${background}` : '';
    const fontColor = (!background || background == 'none') ? '' : (background?.startsWith('base') && background != 'base-content') ? 'text-base-content' : `text-base-0`
    const paddingStyles = `${paddingX ? ` px-${spacingMap[paddingX]}` : ''}${paddingY ? ` py-${spacingMap[paddingY]}` : ''}`;
    const gapStyles = gap ? `gap-${spacingMap[gap]}` : '';

    const borderStyles = hasBorder ? 'border-t border-base-300' : '';
    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const heightStyles = minHeight ? `min-h-[${minHeight}px]` : '';
    const fontSizeStyles = `text-${fontSize}`;

    let innerClasses = `flex flex-col justify-between w-full min-h-[60px] mx-auto border-box ${fontSizeStyles} ${paddingStyles} ${gapStyles} ${heightStyles} ${alignItemsStyles} ${fontColor}` 

    let outerClasses = `w-full flex flex-col items-center relative ${bgStyles} ${borderStyles}`

    return (
        <div className={outerClasses}
        {...attributes} {...listeners} 
        >
            <div 
            className={innerClasses} style={{maxWidth: width != 'stretch' ? width : '100%'}}>
            {children}
            </div>
        </div>
    );
}

Footer.propTypes = {
    background: PropTypes.oneOfType([
        PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200']),
        PropTypes.string]),
    width: PropTypes.oneOf(['stretch', '780px', '960px', '1200px','1440px']),
    minHeight: PropTypes.number,
    paddingX: PropTypes.oneOf(["6px", "8px", "12px", "16px", "24px", "32px", "48px", '64px']),
    paddingY: PropTypes.oneOf(["6px", "8px", "12px", "16px", "24px", "32px", "48px", '64px']),
    gap: PropTypes.oneOf(["4px", "6px", "8px", "10px", "12px", "16px", "24px", "32px", "48px"]),
    hasBorder: PropTypes.bool,
    alignItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
    fontSize: PropTypes.oneOf(['sm', 'base', 'md', 'lg']),
    children: PropTypes.node
};


