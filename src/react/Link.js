import React from 'react'
import PropTypes from 'prop-types';
import { spacingMap } from './helpers.js';

export default function Link(props) {

    const {
        text = 'Link',
        URL = '#',
        openInNewWindow = false,
        textSize = 'auto',
        textColor = 'auto',
        lineHeight = 'auto',
        fontWeight = 'auto',
        underline = 'onlyOnHover',
        marginBottom = null, 
        marginTop = null, 
        attributes,
        listeners
      } = props;

    const textSizeStyles = textSize != 'auto' && `text-${textSize}`;
    const textColorStyles = `text-${textColor}`;
    const lineHeightStyles = lineHeight != 'auto' ? `leading-${lineHeight}` : '';
    const fontWeightStyles = fontWeight != 'auto' ? `font-${fontWeight}` : '';
    const marginBottomStyles = marginBottom ? `mb-${spacingMap[marginBottom]}` : '';
    const marginTopStyles = marginTop ? `mt-${spacingMap[marginTop]}` : '';
    
    const underlineStyles = underline == 'always' ? 'underline' : underline == 'onlyOnHover' ? 'hover:underline' : 'no-underline';

    let classes = `inline-flex ${textSizeStyles} ${textColorStyles} ${lineHeightStyles} ${fontWeightStyles} ${underlineStyles}  ${marginBottomStyles} ${marginTopStyles} cursor-pointer`

    return (
        <a
            className={classes}
            href={URL}
            target={openInNewWindow ? "_blank" : "_self"}
            rel={openInNewWindow ? "noopener noreferrer" : ""}
            {...attributes} {...listeners} 
        >
            {
            text} 
        </a>
    );
}

Link.propTypes = {
    text: PropTypes.string,
    URL: PropTypes.string,
    openInNewWindow: PropTypes.bool,
    textSize: PropTypes.oneOf(['auto', 'xs', 'sm', 'base', 'lg', 'xl', '2xl']),
    textColor: PropTypes.oneOfType([
        PropTypes.oneOf(['auto', 'primary', 'primary-content', 'accent', 'accent-content', 'base-content', 'info-content', 'base-500', 'base-700', 'base-900']),
        PropTypes.string]),
    lineHeight: PropTypes.oneOf(['auto', 'tight', 'normal', 'relaxed', 'loose']),
    fontWeight: PropTypes.oneOf(['auto', 'hairline', 'thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black']),
    underline: PropTypes.oneOf(['always', 'onlyOnHover', 'never']),
    marginTop: PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px', '24px', '32px']),
    marginBottom: PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px', '24px', '32px']),
    children: PropTypes.node
};

