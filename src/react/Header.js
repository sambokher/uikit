import PropTypes from 'prop-types';
import React from 'react';

export default function Header(props) {
    
    const {
        width = 'stretch',
        paddingX = null,
        paddingY = null,
        background = 'none',
        hasBorder = false,
        gap = 'lg',
        alignItems = 'center',
        justifyContent = 'between',
        fontSize = 'base',
        minHeight = null,
        children,
        attributes,
        listeners
      } = props;
    
    const heightStyles = minHeight ? `min-h-[${minHeight}px]` : ''
    const bgStyles = `bg-${background}`;
    const borderStyles = hasBorder ? 'border-b border-base-300' : '';
    const gapStyles = gap === 'none' ? '' : `gap-${gap}`;
    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const fontSizeStyles = `text-${fontSize}`;
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';
    const fontColor = background && background != 'none' ?  background == 'base-900' ? `text-base-0` : background?.startsWith('base') ? 'text-base-content' : `text-${background}-content` : ''
    const paddingStyles = `${paddingX ? `px-${paddingX}` : ''} ${paddingY ? `py-${paddingY}` : ''}`;    
    
    let classes = `flex flex-row min-h-[60px] w-full border-box ${fontSizeStyles} ${fontColor} ${paddingStyles} ${heightStyles} ${gapStyles} ${alignItemsStyles} ${justifyContentStyles}`

    let outerClasses = `w-full flex flex-col items-center ${bgStyles} ${borderStyles} relative`

    return (
        <div 
        {...attributes} {...listeners} 
        className={outerClasses}>
            <div 
            className={classes} style={{width: '100%', maxWidth: width != 'stretch' ? `${width}px` : '100%'}}>
                {children}
                </div>
        </div>
    );
}

Header.propTypes = {
    background: PropTypes.oneOfType([
        PropTypes.oneOf(['base-0', 'base-100', 'base-200', 'none', 'base-700', 'base-900']),
        PropTypes.string]),
    width: PropTypes.oneOf(['stretch', '780', '960', '1200', '1440']),
    paddingX: PropTypes.oneOf(["none", "sm", "base", "md", "lg", 'xl', '2xl']),
    paddingY: PropTypes.oneOf(["none", "sm", "base", "md", "lg", 'xl', '2xl']),
    hasBorder: PropTypes.bool,
    gap: PropTypes.oneOf(['none', 'sm', 'base', 'md', 'lg']),
    alignItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
    justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'between']),
    fontSize: PropTypes.oneOf(['xs', 'sm', 'base', 'md', 'lg', 'xl']),
    minHeight: PropTypes.number,
    children: PropTypes.node
};

