import PropTypes from 'prop-types';
import * as IconoirIcons from 'iconoir-react';
import { MediaImage } from 'iconoir-react';

const allIconNames = Object.keys(IconoirIcons);

export default function MiniCardHorizontal(props) {

    const {
        description = "Short description ~50 chars long.",
        textSize = 'small',
        imageSize = '80px',
        title = "Card Title",
        hasMedia = true,
        imageSrc = null,
        secondaryText = "Jun 2, 2023",
        icon = 'Calendar',
        corners = 'md',
        attributes,
        listeners
      } = props;

    const sizeStyles = `w-full h-auto ${textSize == 'small' ? 'text-sm' : 'text-base'}`
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}

    let wrapperClasses = `flex flex-row items-stretch justify-start gap-base ${sizeStyles}`

    const IconComponent = icon !== 'none' && IconoirIcons[icon] ? IconoirIcons[icon] : null;

    const noImage = !imageSrc;
    const imageStyles = {
        background: !noImage && `linear-gradient(rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.12)), url(${imageSrc}) no-repeat center center / cover`, 
        backgroundSize: 'cover', 
        backgroundColor: `color-mix(in srgb, var(--success-content) 20%, transparent)`, 
        minHeight: '100%', 
        minWidth: imageSize, 
        flexShrink: 0
    };

    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const titleFont = textSize == 'small' ? 'text-base' : 'text-lg';
    const smallerFont = textSize == 'small' ? 'text-xs' : 'text-sm';
    
    return (
        <div 
        {...attributes} {...listeners} 
        className={wrapperClasses} 
        >
        {/* IMAGE */}
        {hasMedia &&
        <div className={`relative flex flex-shrink-0 aspect-square h-full items-center justify-center ${cornerStyles}`} style={imageStyles}>
            {noImage && <MediaImage width={40} height={40} style={{opacity: '0.3'}} />}
        </div>}
        
        {/* CONTENT BLOCK */}
        <div style={truncateStyle} className={`flex flex-col flex-grow gap-xs`}>
            
            {/* Title */}
            <div className={`flex flex-col justify-between gap-sm items-start`}>
                <h3 className={`font-semibold ${titleFont}`} style={truncateStyle}>
{title}
                </h3>
                {(secondaryText) && 
                <div className='flex-shrink-0 flex flex-row items-center gap-sm '>
                    {IconComponent && <div className='flex-shrink-0'><IconComponent /></div>}
{secondaryText}
                </div>}
            </div>

            {/* Description */}
            {description && <div className={smallerFont} style={{truncateStyle}}>
{description}
            </div>}
        </div>
        </div>
    );
}

MiniCardHorizontal.propTypes = {
    imageSrc: PropTypes.string,
    textSize: PropTypes.oneOf(['small', 'medium']),
    title: PropTypes.string.isRequired,
    hasMedia: PropTypes.bool,
    icon: PropTypes.oneOf(['none', ...allIconNames]),
    secondaryText: PropTypes.string,
    description: PropTypes.string,
    corners: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
    imageSize: PropTypes.oneOf(['80px', '92px', '120px']),
};

