import React from 'react';
import PropTypes from 'prop-types';
import { spacingMap } from './helpers.js';

function Text(props) {
    
    const {
        textSize = 'auto',
        textColor = 'auto',
        marginBottom = null, 
        marginTop = null, 
        lineHeight = 'auto',
        text = 'Text..',
        fontWeight = 'auto',
        textAlign = 'left',
        attributes,
        listeners
      } = props;

    const textSizeStyles = textSize !== 'auto' ? `text-${textSize}` : '';
    const textColorStyles = textColor !== 'auto' ?  `text-${textColor}` : '';
    const marginBottomStyles = marginBottom ? `mb-${spacingMap[marginBottom]}` : '';
    const marginTopStyles = marginTop ? `mt-${spacingMap[marginTop]}` : '';
    
    const lineHeightStyles = lineHeight !== 'auto' ? `leading-${lineHeight}` : '';
    const fontWeightStyles = fontWeight !== 'auto' ? `font-${fontWeight}` : '';
    const textAlignStyles = textAlign ? `text-${textAlign}` : '';

    let classes = `inline-flex ${textSizeStyles} ${textColorStyles} ${marginBottomStyles} ${marginTopStyles} ${lineHeightStyles} ${fontWeightStyles} ${textAlignStyles}`;
    
    
    return (
        React.createElement('span', {
        ...attributes, ...listeners, 
        className: classes, style: {whiteSpace: 'pre-wrap'},}
        ,  
        text
        )
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
    children: PropTypes.node, 
    marginTop: PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px', '24px', '32px']),
    marginBottom: PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px', '24px', '32px']),
};

export { Text as default };
//# sourceMappingURL=Text.js.map
