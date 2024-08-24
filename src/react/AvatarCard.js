import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Avatar } from './index';

export default function AvatarCard(props) {
    
    const { imageSize, imageSrc, imageColor, imageOnly, type, imagePosition, name, secondaryText, attributes, listeners } = props

    const parsedSize = parseInt(imageSize)
    const fontColor = 'text-inherit'
    const gapStyle = parsedSize >= 42 ? 'gap-4' : parsedSize >=  33 ? 'gap-3' : parsedSize >= 28 ? 'gap-3' : 'gap-2'
    let classes = `flex flex-row items-center justify-start relative ${fontColor} ${gapStyle}`

    
    const noSecondaryText = !secondaryText || secondaryText == '' || parsedSize < 24
    
    const titleSizeStyles = noSecondaryText 
        ? parsedSize >= 42 ? 'text-xl' : parsedSize >= 33 ? 'text-lg' : parsedSize >= 29 ? 'text-base' : parsedSize >= 20 ? 'text-sm' : 'text-xs'
        : parsedSize >= 42 ? 'text-lg' : parsedSize >= 33 ? 'text-base' : parsedSize >= 29 ? 'text-sm' : 'text-xs';
        
    
    const marginStyles = noSecondaryText ? '' :  parsedSize < 29 ? 'mb-0.5' : parsedSize < 33 ? 'mb-1' : parsedSize < 42 ? 'mb-1' : 'mb-1.5'
    const titleClasses = `font-medium leading-none ${titleSizeStyles} ${marginStyles}`

    const secondaryTextFontSize = parsedSize < 29 ? 'text-xs' : parsedSize < 33 ? 'text-xs' : parsedSize < 42 ? 'text-sm' : 'text-sm'
    const secondaryTextClasses = `text-base-500 leading-tight ${secondaryTextFontSize}`
    
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}
    
    return (
        <div
            {...attributes} {...listeners} 
            className={classes}>
         <Avatar size={imageSize} imageSrc={imageSrc} bgColor={imageColor} type={type} initials={name?.slice(0, 1)} />
         
         {!imageOnly &&
         <div 
            className={`flex flex-col ${imagePosition == 'left' ? 'justify-start text-left' : 'justify-end text-right'} transition-all duration-75 ${imageOnly ? 'w-0 pointer-events-none opacity-0' : 'w-auto'}`}
            style={{...truncateStyle, order: imagePosition == 'left' ? 1 : -1}}>
            <h3 style={truncateStyle} className={titleClasses}>
        {name}
            </h3>
            {!noSecondaryText &&  <span style={truncateStyle} className={secondaryTextClasses}>
        {secondaryText}
            </span>}
         </div>}
        </div>
    )
}




AvatarCard.propTypes = {
    imageSize: PropTypes.oneOf(['16px', '20px', '24px', '28px', '32px', '40px', '48px']),
    imageSrc: PropTypes.string,
    imagePosition: PropTypes.oneOf(['left', 'right']),
    imageColor: PropTypes.oneOf(['auto', 'base-0', 'accent', 'primary', 'success-content', 'error-content', 'warning-content', 'base-content']),
    type: PropTypes.oneOf(['image', 'initials']),
    name: PropTypes.string,
    secondaryText: PropTypes.string,
    bgColor: PropTypes.oneOf(["base-0", "base-100", "base-200", "primary", "accent", "base-900", 'base-content', "none"]),
    corners: PropTypes.oneOf(["none", "sm", "md"]),
    hasOutline: PropTypes.bool,
    imageOnly: PropTypes.bool, 
    tooltipText: PropTypes.string
};

