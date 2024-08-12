import PropTypes from 'prop-types'
import * as IconoirIcons from 'iconoir-react';

export default function Image(props) {
    
    const {
        src = null,
        placeholderThumbnail = 'default',
        objectFit = 'cover',
        altText = '',
        width = '120px',
        height = '120px',
        minWidth = null,
        maxWidth = null,
        minHeight = null,
        maxHeight = null,
        corners = 'none',
        selfAlign = 'auto',
        attributes,
        listeners
      } = props;
    const { junoAttributes, self, dndProps, showTag, setRefs, outlineStyle, eventListeners} = props.junoProps || {} 
    
    const noImage = !src || !src.startsWith('https')

    let classes = `flex-shrink-0 rounded-${corners} self-${selfAlign}`
    
    const imageStyles = {
        width: width,
        height: height,
        minWidth: minWidth,
        maxWidth: maxWidth,
        minHeight: minHeight,
        maxHeight: maxHeight,
        backgroundImage: !noImage && `url(${src})`,
        backgroundSize: objectFit,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (<div
            {...attributes} {...listeners} 
            aria-label={altText} className={classes} style={imageStyles}
            >
                {noImage && <div className={`relative w-full h-full flex items-center justify-center oveflow-hidden flex-col gap-2 text-xs border rounded-${corners}`}
                style={{ 
                    backgroundColor: 'color-mix(in srgb, var(--accent) 10%, transparent)',
                    color: 'var(--accent)',
                    borderColor: 'color-mix(in srgb, var(--accent) 30%, transparent)',
                }}>
                {placeholderThumbnail === 'default' && <IconoirIcons.MediaImage />}
                {placeholderThumbnail === 'ecom_product' && <IconoirIcons.MediaImage />}
                </div>}
            </div>
    )
}

Image.propTypes = {
    src: PropTypes.string,
    placeholderThumbnail: PropTypes.oneOf(['default', 'ecom_product', 'vector_illustration']),
    objectFit: PropTypes.oneOf(['contain', 'cover', 'fill', 'none', 'scale-down']),
    altText: PropTypes.string,
    width: PropTypes.oneOfType([
        PropTypes.oneOf(['100%', '50%', '33%', '25%', '75%', '36px', '48px', '64px', '80px', '120px']),
        PropTypes.string
    ]),
    maxWidth: PropTypes.number,
    minWidth: PropTypes.number,
    height: PropTypes.oneOfType([
        PropTypes.oneOf(['100%', '50%', '33%', '25%', '75%', '36px', '48px', '64px', '80px', '120px']),
        PropTypes.string
    ]),
    maxHeight: PropTypes.number,
    minHeight: PropTypes.number,
    corners: PropTypes.oneOf(['none', 'sm', 'base', 'md', 'lg', 'full']),
    selfAlign: PropTypes.oneOf(['auto', 'start', 'center', 'end']),
};

