import PropTypes from 'prop-types';
import * as IconoirIcons from 'iconoir-react';
import { MediaImage } from 'iconoir-react';
import Button from './Button';

const allIconNames = Object.keys(IconoirIcons);

export default function InfoCard(props) {

    const {
        width = '200px',
        imageSrc = null,
        imageAspectRatio = '2 / 1',
        textSize = 'small',
        title = "Card Title",
        icon = 'Calendar',
        secondaryText = "Jun 2, 2023",
        description = "Short description that should be about 80-100 characters long.",
        primaryAction = null,
        secondaryAction = null,
        corners = 'md',
        attributes,
        listeners
      } = props;

    const sizeStyles = `w-full h-auto ${textSize == 'small' ? 'text-sm' : 'text-base'}`
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}

    let wrapperClasses = `flex flex-col items-stretch justify-start gap-base ${sizeStyles}`

    const IconComponent = icon !== 'none' && IconoirIcons[icon] ? IconoirIcons[icon] : null;

    const noImage = !imageSrc;
    const imageStyles = {
        background: !noImage && `linear-gradient(rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.12)), url(${imageSrc}) no-repeat center center / cover`, 
        backgroundSize: 'cover', 
        backgroundColor: `color-mix(in srgb, var(--accent) 20%, transparent)`, 
        aspectRatio: imageAspectRatio
    };

    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const titleFont = textSize == 'small' ? 'text-base' : 'text-lg';
    const smallerFont = textSize == 'small' ? 'text-xs' : 'text-sm';

    return (
        <div 
        {...attributes} {...listeners} 
        className={wrapperClasses} style={{maxWidth: width}}
        >

        {/* IMAGE / THUMBNAIL */}
        <div className={`relative w-full aspect-square flex items-center justify-center ${cornerStyles}`} style={imageStyles}>
            {noImage && <MediaImage width={40} height={40} className='opacity-30' />}
        </div>
        
        {/* Content Block */}
        <div style={truncateStyle} className={`flex flex-col flex-grow`}>
            
            {/* Title */}
            <div className={`mb-sm flex flex-col justify-between gap-sm items-start ${titleFont}`}>
                <h3 className={`font-semibold`} style={truncateStyle}>
{title}
                </h3>
                
                {(secondaryText || icon) && 
                <div className={`flex-shrink-0 flex flex-row items-center gap-xs ${smallerFont}`}>
                    {IconComponent && <IconComponent className='flex-shrink-0'/>}
{secondaryText}
                </div>}
            </div>

            {/* Card Description */}
            {description && 
            <div className={`${smallerFont} font-normal`} style={{minHeight: '2rem'}}>
{description}
            </div>}
        </div>

        {/* Actions */}
        {(primaryAction || secondaryAction) && 
        <div className={`flex flex-row items-center flex-grow-0 flex-shrink-0 justify-start text-base gap-sm pointer-events-none`}>
            {primaryAction && <Button size='small' type='primary' text={primaryAction} onClick={()=>{}} marginTop={'sm'}/>} 
            {secondaryAction && <Button size='small' type='secondary' text={secondaryAction} onClick={()=>{}} marginTop={'sm'}/>} 
        </div>}
        </div>
    );
}


InfoCard.propTypes = {
    width: PropTypes.oneOf(['100%', '200px', '320px']),
    imageSrc: PropTypes.string,
    imageAspectRatio: PropTypes.oneOf(['2 / 1', '1 / 1', '3 / 2', '4 / 3']),
    textSize: PropTypes.oneOf(['small', 'medium']),
    title: PropTypes.string.isRequired,
    icon: PropTypes.oneOf(['none', ...allIconNames]),
    secondaryText: PropTypes.string,
    description: PropTypes.string,
    primaryAction: PropTypes.string,
    secondaryAction: PropTypes.string,
    corners: PropTypes.oneOf(["none", "sm", "md", "lg", 'xl']),
    
};
