import React from 'react';
import PropTypes from 'prop-types';
import { spacingMap } from './helpers.js';

export default function Main(props) {
        
    const {
        background = 'base-0',
        direction = 'flex-col',

        marginX = null,
        marginY = null,
        paddingX = null,
        paddingY = null,
        gap = null, 
        
        alignItems = 'start',
        justifyContent = 'start',
        textSize = 'base',
        width = '960',
        selfAlign = 'center',
        corners = 'none',
        children,
        attributes,
        listeners
      } = props;
    
    const bgStyles = background ?`bg-${background}` : '';
    
    const marginStyles = `${marginX ? ` px-${spacingMap[marginX]}` : ''}${marginY ? ` py-${spacingMap[marginY]}` : ''}`;
    const paddingStyles = `${paddingX ? ` px-${spacingMap[paddingX]}` : ''}${paddingY ? ` py-${spacingMap[paddingY]}` : ''}`;
    const gapStyles = gap ? `gap-${spacingMap[gap]}` : '';
    
    const fontSize = `text-`+textSize
    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';
    
    const fontColor = (!background || background == 'none') ? '' : background == 'base-900' ? `text-base-0` : background?.startsWith('base') ? 'text-base-content' : `text-${background}-content`
    const alignMain = `items-${selfAlign}`
    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    
    
    let outerClasses = `flex flex-col flex-grow w-full relative ${alignMain} ${fontColor} ${fontSize} ${marginStyles}`

    let innerClasses = `flex ${direction} flex-grow w-full z-0 relative  ${bgStyles} ${paddingStyles} ${gapStyles} ${alignItemsStyles} ${justifyContentStyles} ${cornerStyles}`
    
    return (
        <div 
        {...attributes} {...listeners} 
        style={{
            minHeight: '100%', 
overflow: 'scroll'
        }}
        className={outerClasses}
        >
        <div 
        className={innerClasses} style={{width: '100%', maxWidth: width != 'stretch' ? `${width}px` : '100%'}}>
        {children}
        </div>
        </div>
    );
}

Main.propTypes = {
    background: PropTypes.oneOfType([
        PropTypes.oneOf(['base-0',  'base-50', 'base-100', 'base-200', 'primary', 'accent', 'base-900']),
        PropTypes.string]),
    width: PropTypes.oneOf(['stretch', '780', '960', '1200', '1440']),
    direction: PropTypes.oneOf(["flex-col", "flex-row"]),
    
    paddingX: PropTypes.oneOf(["6px", "8px", "12px", "16px", "24px", "32px", "48px", '64px']),
    paddingY: PropTypes.oneOf(["6px", "8px", "12px", "16px", "24px", "32px", "48px", '64px']),
    gap: PropTypes.oneOf(["4px", "6px", "8px", "10px", "12px", "16px", "24px", "32px", "48px"]),
    marginX: PropTypes.oneOf(["6px", "8px", "12px", "16px", "24px", "32px", "48px", '64px']),
    marginY: PropTypes.oneOf(["6px", "8px", "12px", "16px", "24px", "32px", "48px", '64px']),
    

    corners: PropTypes.oneOf(['none', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl']),
    selfAlign: PropTypes.oneOf(['start', 'center', 'end']),
    alignItems: PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
    justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'evenly']),
    textSize: PropTypes.oneOf(['sm', 'base', 'md']),
    children: PropTypes.node
};

