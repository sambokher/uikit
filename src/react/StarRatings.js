import React from 'react'
import PropTypes from 'prop-types';
import * as IconoirIcons from 'iconoir-react';

export default function StarRatings(props) {
    
    const {
        label = '4.5',
        ratingValue = '90%', // This should be considered whether it should be a percentage string or a numeric value depending on your implementation.
        labelPosition = 'right',
        color = 'error',
        size = 'sm', // consider making this px value
        attributes,
        listeners
      } = props;
    
    let classes = `flex flex-row gap-2 items-center text-${size}`
    
    let starClasses = `flex flex-row gap-1.5 flex-shrink-0 text-${color}`

    /* text-orange-500 */

    return (
        <div 
        {...attributes} {...listeners} 
            className={classes}
        >
            <div className='relative flex flex-row gap-1.5 opacity-100' style={{ width: 'max-content' }}>
                    <div className='flex flex-row gap-1.5 opacity-10'>
                        {Array.from({ length: 5 }, (_, index) => <IconoirIcons.StarSolid key={index} className='flex-shrink-0' />)}
                    </div>
                    <div className={starClasses} style={{ position: 'absolute', width: ratingValue, overflow: 'hidden'}}>
                        {Array.from({ length: 5 }, (_, index) => <IconoirIcons.StarSolid key={index} className='flex-shrink-0' />)}
                    </div>
            </div>
            {label && <div className={`flex-shrink-0 leading-none font-normal`} style={{order: labelPosition === 'left' ? '-1' : 1}}>
            {label}
            </div>}
        </div>
    ); 
}


StarRatings.propTypes = {
    ratingValue: PropTypes.oneOf(['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']),
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf(['left', 'right']),
    color: PropTypes.oneOfType([
        PropTypes.oneOf(['base-300', 'primary', 'accent', 'info',  'success',  'warning', 'error']),
        PropTypes.string]),
    size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', ]),
};
 
