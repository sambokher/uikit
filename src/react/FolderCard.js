import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from './index'
import { iconMap } from './iconMap'
import { useMemo } from 'react';

const allIconNames = Object.keys(iconMap) || []

export default function FolderCard(props) {

    const {
        description = "Folder • 4 files",
        thumbnailAspectRatio = '2 / 1',
        textSize = 'small',
        thumbnailImageSrc = null,
        title = "Folder Name",
        icon = 'Folder',
        corners = "none",
        width = '200px',
        defaultIconSet,
        attributes,
        listeners
      } = props;
      

    const sizeStyles = `w-full h-auto ${textSize == 'small' ? 'text-sm' : 'text-base'}`
    let wrapperClasses = `flex flex-col items-stretch justify-start gap-3 ${sizeStyles}`

    const contentClasses = `flex flex-col flex-grow`
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}

    const noImage = !thumbnailImageSrc;
    const imageStyles = useMemo(() => ({
        background: !noImage && `linear-gradient(rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.12)), url(${thumbnailImageSrc}) no-repeat center center / cover`, 
        backgroundSize: 'cover', 
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
        <div className={`relative group w-full aspect-square flex items-center justify-center bg-current-10 ${cornerStyles}`} style={imageStyles}>
            {noImage && <Icon icon={'folder'} defaultIconSet={defaultIconSet} className='flex-shrink-0' />}
        </div>
        
        {/* CONTENT BLOCK */}
        <div className={contentClasses}>
            
            {/* Title */}
            <div className={`flex flex-row justify-between gap-2 items-start ${titleFont} group `}>
                {IconComponent}
                <div className='flex-grow flex flex-col gap-1' style={truncateStyle}>
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


FolderCard.propTypes = {
    thumbnailAspectRatio: PropTypes.oneOf(['2 / 1', '3 / 1', '4 / 1', '1 / 1', '3 / 2', '4 / 3']),
    thumbnailImageSrc: PropTypes.string,
    width: PropTypes.oneOf(['100%', '200px', '320px']),
    textSize: PropTypes.oneOf(['small', 'medium']),
    title: PropTypes.string.isRequired,
    icon: PropTypes.oneOf(['none', ...allIconNames]),
    description: PropTypes.string,
    corners: PropTypes.oneOf(["none", "sm", "md", "lg", 'xl']),
    children: PropTypes.node
};

