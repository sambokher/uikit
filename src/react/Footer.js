import PropTypes from 'prop-types';
import React from 'react';

export default function Footer(props) {
    
    const {
        paddingX = null,
        paddingY = null,
        background = 'none',
        hasBorder = false,
        gap = 'lg',
        alignItems = 'stretch',
        fontSize = 'base',
        minHeight = null,
        width = 'stretch',
        children,
        attributes,
        listeners
      } = props;

    const paddingStyles = `${paddingX ? `px-${paddingX}` : ''} ${paddingY ? `py-${paddingY}` : ''}`;    
    const bgStyles = `bg-${background}`;
    const borderStyles = hasBorder ? 'border-t border-base-300' : '';
    const gapStyles = gap === 'none' ? '' : `gap-${gap}`;
    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const heightStyles = minHeight ? `min-h-[${minHeight}px]` : '';
    const fontSizeStyles = `text-${fontSize}`;

    let innerClasses = `flex flex-col justify-between w-full min-h-[60px] mx-auto border-box ${fontSizeStyles} ${paddingStyles} ${gapStyles} ${heightStyles} ${alignItemsStyles}` 

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
        PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'none']),
        PropTypes.string]),
    width: PropTypes.oneOf(['stretch', '780px', '960px', '1200px','1440px']),
    minHeight: PropTypes.number,
    paddingX: PropTypes.oneOf(["none", "sm", "base", "md", "lg", 'xl', '2xl']),
    paddingY: PropTypes.oneOf(["none", "sm", "base", "md", "lg", 'xl', '2xl']),
    hasBorder: PropTypes.bool,
    gap: PropTypes.oneOf(['none', 'sm', 'base', 'md', 'lg']),
    alignItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
    fontSize: PropTypes.oneOf(['sm', 'base', 'md', 'lg']),
    children: PropTypes.node
};


