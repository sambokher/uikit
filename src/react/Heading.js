import PropTypes from 'prop-types';
import React from 'react';

export default function Heading(props) {

    const {
        textSize = '2xl',
        textColor = 'none',
        marginBottom = 'none',
        marginTop = 'none',
        lineHeight = 'auto',
        text = 'Heading',
        fontWeight = 'semibold',
        textAlign = 'left',
        alignSelf = 'auto',
        attributes,
        listeners
      } = props;
    
    const textSizeStyles = `text-${textSize}`;
    const textColorStyles = textColor != 'none' ? `text-${textColor}` : '';
    const marginBottomStyles = marginBottom != 'none' ? `mb-${marginBottom}` : '';
    const marginTopStyles = marginTop != 'none' ? `mt-${marginTop}` : '';
    const lineHeightStyles = lineHeight != 'auto' ? `leading-${lineHeight}` : '';
    const fontWeightStyles = `font-${fontWeight}`
    const textAlignStyles = textAlign != 'auto' ? `text-${textAlign}` : '';
    const alignSelfStyles = alignSelf != 'auto' ? `self-${alignSelf}` : '';

    let classes = `text-ellipsis ${textSizeStyles} ${textColorStyles} ${marginBottomStyles} ${marginTopStyles} ${lineHeightStyles} ${fontWeightStyles} ${textAlignStyles} ${alignSelfStyles}`

    return (
        <h1 
        {...attributes} {...listeners} 
        style={{whiteSpace: 'pre-wrap'}} className={classes}
        >
        {
        text}
        </h1>
    );
}

Heading.propTypes = {
    textColor: PropTypes.oneOfType([
        PropTypes.oneOf(['none', 'primary', 'primary-content', 'accent', 'accent-content', 'base-content', 'info-content', 'base-500', 'base-700', 'base-900']),
        PropTypes.string]),
    text: PropTypes.string,
    textSize: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']),
    marginTop: PropTypes.oneOf(['none', 'xs', 'sm', 'base', 'md', 'lg', 'xl']),
    marginBottom: PropTypes.oneOf(['none', 'xs', 'sm', 'base', 'md', 'lg', 'xl']),
    lineHeight: PropTypes.oneOf(['auto', 'none', 'tight', 'normal', 'relaxed', 'loose']),
    fontWeight: PropTypes.oneOf(['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black']),
    textAlign: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),
    alignSelf: PropTypes.oneOf(['auto', 'start', 'end', 'center', 'stretch']),
    children: PropTypes.node
};

