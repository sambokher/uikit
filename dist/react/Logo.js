import React from 'react';
import PropTypes from 'prop-types';
import img from './assets/brand/symbol.svg.js';
import img$1 from './assets/brand/logo.svg.js';
import img$2 from './assets/brand/logo_inverted.svg.js';

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

function Logo(props) {
    
    const {
        type = 'symbol',
        size = '28px',
        customWidth = null,
        customHeight = null,
        selfAlign = 'auto',
        color = 'normal',
        assets,
        attributes,
        listeners
      } = props;

    
    const symbolAsset = _optionalChain([assets, 'optionalAccess', _ => _.find, 'call', _2 => _2(asset => asset.api_name == 'symbol'), 'optionalAccess', _3 => _3.file_url]) || img;
    const symbolInvertedAsset = _optionalChain([assets, 'optionalAccess', _4 => _4.find, 'call', _5 => _5(asset => asset.api_name == 'symbol_inverted'), 'optionalAccess', _6 => _6.file_url]) || img;
    const logoAsset = _optionalChain([assets, 'optionalAccess', _7 => _7.find, 'call', _8 => _8(asset => asset.api_name == 'logo'), 'optionalAccess', _9 => _9.file_url]) || img$1;
    const logoInvertedAsset = _optionalChain([assets, 'optionalAccess', _10 => _10.find, 'call', _11 => _11(asset => asset.api_name == 'logo_inverted'), 'optionalAccess', _12 => _12.file_url]) || img$2;
    
    const imageOptions = [
        {option: 'symbol', url: color != 'inverted' ? symbolAsset : symbolInvertedAsset}, 
        {option: 'logo', url: color != 'inverted' ? logoAsset : logoInvertedAsset}
    ];
    
    const imageURL = _optionalChain([imageOptions, 'access', _13 => _13.find, 'call', _14 => _14(option => option.option === type), 'optionalAccess', _15 => _15.url]) || null;
    
    let classes = `flex-shrink-0 self-${selfAlign}`; 
    
    const wrapperInlineStyles = {
        width: customWidth ? customWidth : type == 'symbol' && size,
        height: customHeight || size,
        objectFit: 'contain'
    };
    return (
        React.createElement('div', {
            ...attributes, ...listeners, 
            className: classes, style: wrapperInlineStyles,}

            , React.createElement('img', { src: imageURL, style: wrapperInlineStyles, draggable: false,} )
        )   
    )
}

Logo.propTypes = {
    type: PropTypes.oneOf(['logo', 'symbol']),
    size: PropTypes.oneOf(['20px', '24px', '28px', '36px', '40px', '48px', '60px', '96px']),
    color: PropTypes.oneOf(['normal', 'inverted']),
    customWidth: PropTypes.number,
    customHeight: PropTypes.number,
    selfAlign: PropTypes.oneOf(['auto', 'start', 'center', 'end']),
};

export { Logo as default };
//# sourceMappingURL=Logo.js.map
