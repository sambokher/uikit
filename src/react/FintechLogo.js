import React from 'react';
import PropTypes from 'prop-types'
import * as FintechLogos from './assets/fintechs/index'

const allFintechs= ['alipay', 'amex', 'code-front', 'code', 'diners', 'discover', 'elo', 'generic', 'hiper', 'hipercard', 'jcb', 'maestro', 'mastercard', 'mir', 'paypal', 'unionpay', 'visa']

export default function FintechLogo(props) {
    
    const {
        company = 'visa',
        corners = 'none',
        style = 'logo',
        height = '16',
        hasOutline = false,
        attributes,
        listeners
      } = props;

    const logoType = style || 'logo';
    const logoKey = `${company}${logoType.charAt(0).toUpperCase() + logoType.slice(1)}`;
    const logoSvg = FintechLogos[logoKey];

    const borderStyle = hasOutline ? 'border border-base-200' : '';

    let classes = `flex-shrink-0 flex-grow-0 rounded-${corners} ${borderStyle}`;

    const aspect = 780 / 500
    const imageStyles = {
        backgroundImage: logoSvg ? `url(${logoSvg})` : placeholderImg(),
        backgroundSize: 'cover',
        height: `${height}px`,
        width: `${Math.round(height * aspect, 0)}px`
    };
    
    return (
        <div
            {...attributes} {...listeners} 
            className={classes}
            style={imageStyles}
        />
    );
}

function placeholderImg() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect x="0" y="0" width="100" height="100" fill="#EEEEEE" />
                    <circle cx="50" cy="50" r="30" fill="#CCCCCC" /> 
                 </svg>`;
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(svg)}')`;
}


FintechLogo.propTypes = {
    company: PropTypes.oneOf(allFintechs),
    corners: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
    style: PropTypes.oneOf(['mono', 'flat', 'logo']),
    height: PropTypes.oneOf(['12', '16', '20', '24', '28', '32', '40', '60']),
    hasOutline: PropTypes.bool,
};

