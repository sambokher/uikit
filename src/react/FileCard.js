import PropTypes from 'prop-types';
import Icon from './Icon'
import { iconMap } from './iconMap'
import React, { useMemo } from 'react';

const allIconNames = Object.keys(iconMap) || []

export default function FileCard(props) {

    const {
        description = "File • 2Mb",
        thumbnailAspectRatio = '2 / 1',
        textSize = 'small',
        thumbnailImageSrc = null,
        title = "File Name",
        icon = 'page',
        corners = "none",
        width = '200px',
        defaultIconSet,
        attributes,
        listeners
      } = props;

    const sizeStyles = `w-full h-auto ${textSize == 'small' ? 'text-sm' : 'text-base'}`
    let wrapperClasses = `flex flex-col items-stretch justify-start gap-base ${sizeStyles}`

    const contentClasses = `flex flex-col flex-grow`
    
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}

    const noImage = !thumbnailImageSrc;
    const imageStyles = useMemo(() => ({
        background: !noImage && `linear-gradient(rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.12)), url(${thumbnailImageSrc}) no-repeat center center / cover`, 
        backgroundSize: 'cover', 
        backgroundColor: `color-mix(in srgb, var(--base-content) 20%, transparent)`, 
        aspectRatio: thumbnailAspectRatio
    }), [thumbnailImageSrc, noImage, thumbnailAspectRatio]);

    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const titleFont = textSize == 'small' ? 'text-base' : 'text-lg';
    const smallerFont = textSize == 'small' ? 'text-xs' : 'text-sm';

    const IconComponent = icon !== 'none' ? <Icon icon={icon?.toLowerCase()} defaultIconSet={defaultIconSet} className='flex-shrink-0' /> : null;

    return (
        <div 
        {...attributes} {...listeners} 
        className={wrapperClasses} style={{maxWidth: width}}
        >
        
        {/* THUMBNAIL */}
        <div className={`relative group w-full aspect-square flex items-center justify-center ${cornerStyles}`} style={imageStyles}>
            {noImage && <Icon icon={'page'} defaultIconSet={defaultIconSet} className='flex-shrink-0' />}
        </div>
        
        {/* CONTENT BLOCK */}
        <div className={contentClasses}>
            
            {/* Title */}
            <div className={`flex flex-row justify-between gap-sm items-start ${titleFont} group `}>
                {IconComponent}
                <div className='flex-grow flex flex-col gap-2xs' style={truncateStyle}>
                    <h3 className={`font-semibold`}>
{title}
                    </h3>
                    {description && <span className={`${smallerFont} opacity-70`} style={truncateStyle}>
{description}
                    </span>}
                </div>
                <Icon icon='star' className='flex-shrink-0 transition-all cursor-pointer opacity-0 group-hover:opacity-100 scale-75' />
            </div>
        </div>
        </div>
    );
}

FileCard.propTypes = {
    thumbnailImageSrc: PropTypes.string,
    thumbnailAspectRatio: PropTypes.oneOf(['2 / 1', '1 / 1', '3 / 2', '4 / 3']),
    textSize: PropTypes.oneOf(['small', 'medium']),
    title: PropTypes.string.isRequired,
    icon: PropTypes.oneOf(['none', ...allIconNames]),
    description: PropTypes.string,
    corners: PropTypes.oneOf(["none", "sm", "md", "lg", 'xl']),
    width: PropTypes.oneOf(['100%', '200px', '320px']),
};

