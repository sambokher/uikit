import PropTypes from 'prop-types';
import * as IconoirIcons from 'iconoir-react';


export default function MediaCard(props) {

    const {
        imageSrc = null,
        imageAspectRatio = '2 / 1',
        textSize = 'small',
        cardTitle = "Title",
        description = "Short description of media",
        type = "mediaGallery",
        corners = "md",
        width = '200px',
        icon = 'MoreVert', // Adding default for 'icon' which was missing in the initial props list
        attributes,
        listeners
      } = props;

    // Determine background styles
    const sizeStyles = `w-full h-auto ${textSize == 'small' ? 'text-sm' : 'text-base'}`
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}

    let wrapperClasses = `flex flex-col items-stretch justify-start gap-base ${sizeStyles}`

    const noImage = !imageSrc;
    const imageStyles = {
        background: !noImage && `linear-gradient(rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.12)), url(${imageSrc}) no-repeat center center / cover`, 
        backgroundSize: 'cover', 
        backgroundColor: `color-mix(in srgb, var(--success-content) 20%, transparent)`, 
        aspectRatio: imageAspectRatio
    };

    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const titleFont = textSize == 'small' ? 'text-base' : 'text-lg';
    const smallerFont = textSize == 'small' ? 'text-xs' : 'text-sm';
    
    const dotStyle = `w-[6px] h-[6px] rounded-full`

    return (
        <div 
        {...attributes} {...listeners} 
        className={wrapperClasses} style={{maxWidth: width}}>
        
        {/* THUMBNAIL */}
        <div className={`group relative w-full flex items-center justify-center ${cornerStyles}`} style={imageStyles}>
            
            {type == 'mediaGallery' && <>
            {/* ARROWS */}
            <div className='absolute top-1/2 -translate-y-1/2 left-0 text-base-0 w-full px-sm justify-between items-center flex flex-row gap-2'>
                    <div style={{backgroundColor: `color-mix(in srgb, var(--base-0) 20%, transparent)`}} className={`rounded-full p-1 transition-all cursor-pointer hover:scale-110 opacity-0 group-hover:opacity-100`}><IconoirIcons.NavArrowLeft  /></div>
                    <div style={{backgroundColor: `color-mix(in srgb, var(--base-0) 20%, transparent)`}} className={`rounded-full p-1 transition-all cursor-pointer hover:scale-110 opacity-0 group-hover:opacity-100`}><IconoirIcons.NavArrowRight  /></div>
            </div>

            {/* DOTS */}
            <div className='absolute bottom-2 -translate-x-1/2 left-1/2 flex flex-row gap-1 cursor-pointer'>
                <div className={dotStyle} style={{backgroundColor: `color-mix(in srgb, var(--base-0) 40%, transparent)`}}/>
                <div className={dotStyle} style={{backgroundColor: `color-mix(in srgb, var(--base-0) 40%, transparent)`}}/>
                <div className={dotStyle} style={{backgroundColor: `color-mix(in srgb, var(--base-0) 80%, transparent)`}}/>
                <div className={dotStyle} style={{backgroundColor: `color-mix(in srgb, var(--base-0) 40%, transparent)`}}/>
            </div>
            </>}
            {noImage && <IconoirIcons.MediaImageList width={40} height={40} style={{opacity: '0.3'}} />}
        </div>
        
        {/* CONTENT BLOCK */}
        {(cardTitle || description) &&
        <div className='flex flex-row gap-sm justify-between items-start group relative'>
            {/* TITLE & DESCRIPTION */}
            <div className='flex-grow flex flex-col gap-xs' style={truncateStyle}>
                <h3 className={`${titleFont} font-semibold`}>
{cardTitle}
                </h3>
                {description && <span className={`${smallerFont} truncate overflow-ellipsis`} style={truncateStyle}>
{description}
                </span>}
            </div>
            {/* ICON */}
            <div className={`rounded transition-all cursor-pointer hover:scale-110 opacity-0 group-hover:opacity-100`}>
                <IconoirIcons.Heart />
            </div>    
        </div>}
        
        </div>
    );
}


MediaCard.propTypes = {
    imageSrc: PropTypes.string,
    imageAspectRatio: PropTypes.oneOf(['2 / 1', '1 / 1', '3 / 2', '4 / 3']),
    textSize: PropTypes.oneOf(['small', 'medium']),
    cardTitle: PropTypes.string.isRequired,
    icon: PropTypes.oneOf(['none', 'Star', 'MoreVert', 'MoreHoriz', 'Link']),
    description: PropTypes.string,
    type: PropTypes.oneOf(['mediaGallery', 'oneMedia']),
    corners: PropTypes.oneOf(["none", "sm", "md", "lg", 'xl']),
    width: PropTypes.oneOf(['100%', '200px', '320px', '400px']),
    
};

