import PropTypes from 'prop-types'

// Import the SVG files
import sample_symbol from './assets/brand/symbol.svg';
import sample_logo from './assets/brand/logo.svg';
import sample_symbol_inverted from './assets/brand/symbol.svg';
import sample_logo_inverted from './assets/brand/logo_inverted.svg';


export default function Logo(props) {
    
    const {
        type = 'symbol',
        size = '20px',
        customWidth = null,
        customHeight = null,
        selfAlign = 'auto',
        color = 'normal',
        assets,
        attributes,
        listeners
      } = props;

    
    const symbolAsset = assets?.find(asset => asset.api_name == 'symbol')?.file_url || sample_symbol
    const symbolInvertedAsset = assets?.find(asset => asset.api_name == 'symbol_inverted')?.file_url || sample_symbol_inverted
    const logoAsset = assets?.find(asset => asset.api_name == 'logo')?.file_url || sample_logo
    const logoInvertedAsset = assets?.find(asset => asset.api_name == 'logo_inverted')?.file_url || sample_logo_inverted
    
    const imageOptions = [
        {option: 'symbol', url: color != 'inverted' ? symbolAsset : symbolInvertedAsset}, 
        {option: 'logo', url: color != 'inverted' ? logoAsset : logoInvertedAsset}
    ]
    
    const imageURL = imageOptions.find(option => option.option === type)?.url || null;
    
    let classes = `flex-shrink-0 self-${selfAlign}` 
    
    const wrapperInlineStyles = {
        width: customWidth ? customWidth : type == 'symbol' && size,
        height: customHeight || size,
        objectFit: 'contain'
    }
    return (
        <div
            {...attributes} {...listeners} 
            className={classes} style={wrapperInlineStyles}
            > 
            <img src={imageURL} style={wrapperInlineStyles} draggable={false} />
        </div>   
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

