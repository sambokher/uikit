import React from 'react';
import PropTypes from 'prop-types';

export default function StatusCard(props) {

    const {
        title = "Status",
        value = "Active",
        textSize = 'small',
        statusColor = 'success',
        helpText = null,
        attributes,
        listeners,
      } = props;
      

    const sizeStyles = `w-full h-auto ${textSize == 'small' ? 'text-sm' : 'text-base'}`
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}

    let wrapperClasses = `flex flex-row items-stretch justify-start gap-3 ${sizeStyles}`

    const titleFont = textSize == 'small' ? 'text-base' : 'text-lg';
    const smallerFont = textSize == 'small' ? 'text-sm' : 'text-base';

    // bg-base-content/10 bg-primary/10 bg-accent/10 bg-success/10 bg-warning/10 bg-error/10 bg-info/10
    return (
        <div 
        {...attributes} {...listeners} 
        className={wrapperClasses}>
        
        {/* Status Circle */}
        <div className={`flex-shrink-0 w-5 h-5 mt-1 flex items-center justify-center rounded-full `}
        style={{backgroundColor: `color-mix(in srgb, var(--${statusColor}) 50%, transparent)`}}>
            <div className={`flex-shrink-0 w-3 h-3 rounded-full`} style={{backgroundColor:`var(--${statusColor})`}}/>
        </div>

        {/* CONTENT BLOCK */}
        <div className={`flex flex-col flex-grow items-start ${smallerFont} gap-1.5`} style={truncateStyle}>
            
            {title && <div className={`flex-shrink-0 flex flex-row items-center relative group`}>
{title}
            </div>}

            {/* Value */}
            <h3 className={`${titleFont} flex flex-row font-semibold px-3 rounded text-${statusColor} bg-${statusColor}/10`} style={truncateStyle}>
{value}
            </h3>
            

            {/* Description */}
            {helpText && <div className={smallerFont} style={truncateStyle}>
{helpText}
            </div>}
        </div>
        </div>
    );
}


StatusCard.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    textSize: PropTypes.oneOf(['small', 'medium']),
    statusColor: PropTypes.oneOf(['primary', 'accent', 'base-content', 'success', 'warning', 'error', 'info']),
    helpText: PropTypes.string,
};


