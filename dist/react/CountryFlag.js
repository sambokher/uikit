import React from 'react';
import PropTypes from 'prop-types';
import { allFlags } from './assets/flags/flags.js';
import * as index from './assets/flags/index.js';

const countryNames = allFlags.map(f => f.name); 

function CountryFlag(props) {
    
    const {
        country = 'United States of America',
        corners = 'none',
        aspectRatio = '4x3',
        height = '16px',
        attributes,
        listeners
      } = props;
    
    let classes = `flex-shrink-0 flex-grow-0 rounded-${corners}`;

    // Find correct flag SVG
    const flag = allFlags.find(f => f.name === country);
    const aspectSuffix = aspectRatio === 'square' ? '1By1' : '4By3';
    const flagCodeCamel = flag.code;
    const flagSvg = index[`${flagCodeCamel}${aspectSuffix}`];
    const imageStyles = {
        backgroundImage: flagSvg ? `url(${flagSvg})` : placeholderImg(),
        backgroundSize: 'cover',
        height: height, 
        aspectRatio: aspectRatio === 'square' ? '1 / 1' : '4 / 3'
    };
    
    return (
        React.createElement('div', {
            ...attributes, ...listeners, 
            className: classes,
            style: imageStyles,}
        )
    );
}

function placeholderImg() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect x="1" y="1" width="100" height="32" fill="#EEEEEE" /> <!-- Top rectangle with lightest grey -->
                    <rect x="1" y="33" width="100" height="34" fill="#CCCCCC" /> <!-- Middle rectangle with medium grey -->
                    <rect x="1" y="67" width="100" height="33" fill="#AAAAAA" /> <!-- Bottom rectangle with darkest grey -->
                 </svg>`;
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(svg)}')`;
}


CountryFlag.propTypes = {
    country: PropTypes.oneOf(['none', ...countryNames]),
    corners: PropTypes.oneOf(['none', 'sm', 'base', 'md', 'lg', 'full']),
    aspectRatio: PropTypes.oneOf(['square', '4x3']),
    height: PropTypes.oneOf(['12px', '16px', '20px', '24px', '28px', '32px']),
};

export { CountryFlag as default };
//# sourceMappingURL=CountryFlag.js.map
