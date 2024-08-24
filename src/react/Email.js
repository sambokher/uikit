import React from 'react';
import PropTypes from 'prop-types'
import { spacingMap } from './helpers.js';

export default function Email(props) {
    
    const { 
        pageBackground='base-100', 
        emailBackground='base-0',
        corners='sm',
        paddingX=null,
        paddingY=null,
        alignItems='start', 
        gap=null, 
        marginTop=null, 
        hasOutline=false,
        width='560',
        children, attributes, listeners } = props
    
    const gapStyles = gap ? `gap-${spacingMap[gap]}` : '';
    const paddingStyles = `${paddingX ? ` px-${spacingMap[paddingX]}` : ''}${paddingY ? ` py-${spacingMap[paddingY]}` : ''}`;

    const fontColor = emailBackground.startsWith('base') ? 'text-base-content' : `text-${emailBackground}-content`
    const cornerStyles = corners != 'none' && `rounded-${corners}`
    let borderStyles = hasOutline ? 'ring-[0.5px] ring-base-300' : '';

    let wrapperClasses = `flex flex-col flex-grow w-full h-auto bg-${pageBackground} ${fontColor}`
    
    let innerClasses = `flex flex-col w-full h-auto mx-auto ${gapStyles} ${borderStyles} bg-${emailBackground} ${cornerStyles} ${paddingStyles} items-${alignItems}`

    return (
        <div className={wrapperClasses} style={{paddingTop: marginTop}}>
            <div 
                className={innerClasses} style={{maxWidth: width != 'stretch' ? `${width}px` : '100%'}} 
                {...attributes} {...listeners} 
                >
                {children}
            </div>
        </div>
    );
}



Email.propTypes = {
    width: PropTypes.oneOf(['stretch', '560', '640', '780', '960']),
    pageBackground: PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'base-300', 'primary', 'secondary', 'accent']),
    emailBackground: PropTypes.oneOf(['none', 'base-50', 'base-0', 'base-100', 'base-200', 'base-300', 'primary', 'secondary', 'accent']),
    hasOutline: PropTypes.bool,
    corners: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
    
    marginTop: PropTypes.oneOf(["24px", "32px", "48px", "64px"]),
    paddingX: PropTypes.oneOf([ "4px", "6px", "8px", "10px", "12px", "16px", "24px",]),
    paddingY: PropTypes.oneOf(["4px", "6px", "8px", "10px", "12px", "16px", "24px",]),
    gap: PropTypes.oneOf(["4px", "6px", "8px", "10px", "12px", "16px", "24px", ]),

    alignItems: PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
    
    
    
};

