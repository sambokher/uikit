import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from './index'
import { useMemo } from 'react';

export default function MediaCard(props) {

    const {
        imageSrc = null,
        imageAspectRatio = '2 / 1',
        textSize = 'small',
        title = "Title",
        description = "Short description of media",
        type = "oneMedia",
        corners = "md",
        width = '100%',
        defaultIconSet,
        attributes,
        listeners
      } = props;

    // Determine background styles
    const sizeStyles = `w-full h-auto ${textSize == 'small' ? 'text-sm' : 'text-base'}`
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}

    let wrapperClasses = `flex flex-col items-stretch justify-start gap-3 ${sizeStyles}`

    const noImage = !imageSrc;
    
    const imageStyles = useMemo(() => ({
        background: !noImage && `linear-gradient(rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.12)), url(${imageSrc}) no-repeat center center / cover`,
        backgroundSize: 'cover',
        backgroundColor: `color-mix(in srgb, var(--base-content) 20%, transparent)`,
        aspectRatio: imageAspectRatio
    }), [imageSrc, noImage, imageAspectRatio]);

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
                    <div style={{backgroundColor: `color-mix(in srgb, var(--base-0) 20%, transparent)`}} className={`rounded-full p-1 transition-all cursor-pointer hover:scale-110 opacity-0 group-hover:opacity-100`}><Icon icon='chevron-left'  /></div>
                    <div style={{backgroundColor: `color-mix(in srgb, var(--base-0) 20%, transparent)`}} className={`rounded-full p-1 transition-all cursor-pointer hover:scale-110 opacity-0 group-hover:opacity-100`}><Icon icon='chevron-right'  /></div>
            </div>

            {/* DOTS */}
            <div className='absolute bottom-2 -translate-x-1/2 left-1/2 flex flex-row gap-1 cursor-pointer'>
                <div className={dotStyle} style={{backgroundColor: `color-mix(in srgb, var(--base-0) 40%, transparent)`}}/>
                <div className={dotStyle} style={{backgroundColor: `color-mix(in srgb, var(--base-0) 40%, transparent)`}}/>
                <div className={dotStyle} style={{backgroundColor: `color-mix(in srgb, var(--base-0) 80%, transparent)`}}/>
                <div className={dotStyle} style={{backgroundColor: `color-mix(in srgb, var(--base-0) 40%, transparent)`}}/>
            </div>
            </>}
            {noImage && <Icon icon={'image'} defaultIconSet={defaultIconSet} className='flex-shrink-0' />}
        </div>
        
        {/* CONTENT BLOCK */}
        {(title || description) &&
        <div className='flex flex-row gap-2 justify-between items-start group relative'>
            {/* TITLE & DESCRIPTION */}
            <div className='flex-grow flex flex-col gap-1.5' style={truncateStyle}>
                <h3 className={`${titleFont} font-semibold`}>
{title}
                </h3>
                {description && <span className={`${smallerFont} truncate overflow-ellipsis`} style={truncateStyle}>
{description}
                </span>}
            </div>
            {/* ICON */}
            <div className={`rounded transition-all cursor-pointer hover:scale-110 opacity-0 group-hover:opacity-100`}>
                <Icon icon='heart' />
            </div>    
        </div>}
        
        </div>
    );
}


MediaCard.propTypes = {
    imageSrc: PropTypes.string,
    imageAspectRatio: PropTypes.oneOf(['2 / 1', '1 / 1', '3 / 2', '4 / 3']),
    textSize: PropTypes.oneOf(['small', 'medium']),
    title: PropTypes.string.isRequired,
    icon: PropTypes.oneOf(['none', 'Star', 'MoreVert', 'MoreHoriz', 'Link']),
    description: PropTypes.string,
    type: PropTypes.oneOf(['mediaGallery', 'oneMedia']),
    corners: PropTypes.oneOf(["none", "sm", "md", "lg", 'xl']),
    width: PropTypes.oneOf(['100%', '200px', '320px', '400px']),
    
};

