import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from './index'
import { MediaImage } from 'iconoir-react';
import { useMemo } from 'react';


export default function ProductCard(props) {

    const {
        title = "Product Name",
        descriptionFirstLine = "Description line 1",
        descriptionSecondLine = null,
        width = '100%',
        corners = 'md',
        textSize = 'small',
        
        price = "$50",
        imageSrc = null,
        rating = "4.5",
        tag = null,
        priceNote = "total",
        attributes,
        listeners
      } = props;

    const sizeStyles = `w-full h-auto ${textSize == 'small' ? 'text-sm' : 'text-base'}`
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}

    let wrapperClasses = `flex flex-col items-stretch justify-start gap-3 ${sizeStyles}`
    
    const contentClasses = `flex flex-col flex-grow`
    
    const noImage = !imageSrc;
    const imageStyles = useMemo(() => ({
        background: !noImage && `linear-gradient(rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.12)), url(${imageSrc}) no-repeat center center / cover`, 
        backgroundSize: 'cover', 
        backgroundColor: `color-mix(in srgb, var(--base-content) 20%, transparent)`
    }), [imageSrc, noImage]);

    
    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const titleFont = textSize == 'small' ? 'text-base' : 'text-lg';
    const smallerFont = textSize == 'small' ? 'text-xs' : 'text-sm';


    return (
        <div 
        {...attributes} {...listeners} 
        className={wrapperClasses} style={{maxWidth: width}}
        >
        {/* IMAGE */}
        <div className={`relative w-full aspect-square flex items-center justify-center ${cornerStyles}`} style={imageStyles}>
            
            {/* TAG */}
            {tag && 
                <div className='absolute top-1.5 left-2 rounded-full px-3 py-1.5 bg-base-0 shadow font-medium max-w-[160px] truncate overflow-ellipsis whitespace-nowrap'>
{tag}
            </div>}
                
            {/* ICON */}
            {<div className='absolute top-1.5 right-2 rounded-full transition-all cursor-pointer p-2 hover:bg-base-0'>
                <Icon icon={'heart'} />
            </div>}
        {noImage && <MediaImage width={60} height={60} style={{opacity: '0.3'}} />}
        </div>
        
        {/* Description */}
        <div className={contentClasses}>
        
        {/* Title */}
        <div className={`mb-sm flex flex-row gap-2 justify-between items-center ${titleFont}`}>
            <h3 className={`font-semibold`} style={truncateStyle}>
{title}
            </h3>
            {rating && <div className='flex-shrink-0 flex flex-row items-center gap-0.5'>
                <Icon icon='star' className='flex-shrink-0 scale-75'/>
{rating}
            </div>}
        </div>

        {/* Description Lines */}
        {descriptionFirstLine && <span className={`${smallerFont} font-normal truncate overflow-ellipsis`} style={truncateStyle}>
{descriptionFirstLine}
        </span>}
        {descriptionSecondLine && <span className={`${smallerFont} font-light`} style={truncateStyle}>
{descriptionSecondLine}
        </span>}

        {/* Price and Price Note */}
        {price && 
            <div className={`mt-2 flex flex-row gap-1 items-end items-baseline ${smallerFont}`}>
                <span style={truncateStyle} className={`font-semibold ${titleFont}`}>
{price}
                </span>
                <span style={truncateStyle}>
{priceNote}
                </span>
            </div>
        }
        </div>
        </div>
    );
}

ProductCard.propTypes = {
    imageSrc: PropTypes.string,
    textSize: PropTypes.oneOf(['small', 'medium']),
    width: PropTypes.oneOf(['100%', '200px', '320px']),
    title: PropTypes.string.isRequired,
    tag: PropTypes.string,
    rating: PropTypes.string,
    descriptionFirstLine: PropTypes.string,
    descriptionSecondLine: PropTypes.string,
    price: PropTypes.string,
    priceNote: PropTypes.string,
    corners: PropTypes.oneOf(["none", "sm", "md", "lg", 'xl']),
};

