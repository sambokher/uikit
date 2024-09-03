import React from 'react'
import PropTypes from 'prop-types';
import { spacingMap } from './helpers.js';

const dummyText = `This medium-length paragraph provides more detail, suitable for sections that require a bit more explanation. It's perfect for content areas where you need to elaborate on a topic without overwhelming the reader with text.`

export default function Paragraph(props) {
   
    const {
        text = dummyText,
        textSize = 'auto',
        textColor = null,
        marginBottom = null, 
        marginTop = null, 
        lineHeight = 'auto',
        textAlign = 'left',
        
        fontWeight,
        attributes,
        listeners
      } = props;

    const textSizeStyles = textSize !== 'auto' && `text-${textSize}`
    const textColorStyles = (textColor == 'none' || !textColor) ? `` : `text-${textColor}`
    const marginBottomStyles = marginBottom ? `mb-${spacingMap[marginBottom]}` : '';
    const marginTopStyles = marginTop ? `mt-${spacingMap[marginTop]}` : '';
    
    const lineHeightStyles = lineHeight !== 'auto' && `leading-${lineHeight}`
    const fontWeightStyles = fontWeight !== 'auto' && `font-${fontWeight}`
    const textAlignStyles = textAlign ? `text-${textAlign}` : ''; 

    let classes = `whitespace-pre-wrap ${textSizeStyles} ${textColorStyles} ${marginBottomStyles} ${marginTopStyles} ${lineHeightStyles} ${fontWeightStyles} ${textAlignStyles}`

    return (
        <span
        className={classes}
        {...attributes} {...listeners} 
        >
        { 
        text}
        </span>
    );
}
Paragraph.propTypes = {
    text: PropTypes.string,
    textSize: PropTypes.oneOf(['auto', 'xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
    marginTop: PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px', '24px', '32px']),
    marginBottom: PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px', '24px', '32px']),
    lineHeight: PropTypes.oneOf(['auto', 'none', 'tight', 'normal', 'relaxed', 'loose']),
    textAlign: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),
    textColor: PropTypes.oneOfType([
        PropTypes.oneOf(['primary', 'primary-content', 'accent', 'accent-content', 'base-0', 'base-50', 'base-100', 'base-content', 'base-500', 'base-700', 'base-900','success-content', 'warning-content', 'error-content', 'info-content']),
        PropTypes.string]),
    children: PropTypes.node
};

