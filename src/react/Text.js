import PropTypes from 'prop-types';
import React from 'react';

export default function Text(props) {
    
    const {
        textSize = 'auto',
        textColor = 'auto',
        marginBottom,
        marginTop,
        lineHeight = 'auto',
        text = 'Text..',
        fontWeight = 'auto',
        textAlign = 'left',
        attributes,
        listeners
      } = props;

    const textSizeStyles = textSize !== 'auto' ? `text-${textSize}` : '';
    const textColorStyles = textColor !== 'auto' ?  `text-${textColor}` : '';
    const marginBottomStyles = marginBottom ? `mb-${marginBottom}` : '';
    const marginTopStyles = marginTop ? `mt-${marginTop}` : '';
    const lineHeightStyles = lineHeight !== 'auto' ? `leading-${lineHeight}` : '';
    const fontWeightStyles = fontWeight !== 'auto' ? `font-${fontWeight}` : '';
    const textAlignStyles = textAlign ? `text-${textAlign}` : '';

    let classes = `inline-flex ${textSizeStyles} ${textColorStyles} ${marginBottomStyles} ${marginTopStyles} ${lineHeightStyles} ${fontWeightStyles} ${textAlignStyles}`
    
    
    return (
        <span
        {...attributes} {...listeners} 
        className={classes} style={{whiteSpace: 'pre-wrap'}}>
        { 
        text}
        </span>
    );
}

Text.propTypes = {
    text: PropTypes.string,
    textColor: PropTypes.oneOfType([
        PropTypes.oneOf(['auto', 'primary', 'primary-content', 'accent', 'accent-content', 'base-content', 'base-500', 'base-700', 'base-900', 'success-content', 'warning-content', 'error-content', 'info-content']),
        PropTypes.string]),
    textSize: PropTypes.oneOf(['auto', 'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl']),
    lineHeight: PropTypes.oneOf(['auto', 'none', 'tight', 'normal', 'relaxed', 'loose']),
    textAlign: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),
    fontWeight: PropTypes.oneOf(['auto', 'hairline', 'thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black']),
    children: PropTypes.node
};

