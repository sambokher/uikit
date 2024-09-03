import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from './index'
import { iconMap } from './iconMap'

const allIconNames = Object.keys(iconMap) || []

export default function DataCard(props) {

    
    const {
        title = "Metric",
        value = "$10,500",
        changeValue = "+12%",
        changeColor = null,
        textSize = 'small',
        icon = 'chart-up',
        helpText = null,
        attributes,
        listeners,
        defaultIconSet
      } = props;
      

    const sizeStyles = `w-full h-auto ${textSize == 'small' ? 'text-sm' : 'text-base'}`
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}

    let wrapperClasses = `flex flex-row items-stretch justify-start gap-3 ${sizeStyles}`

    const titleFont = textSize == 'small' ? 'text-base' : 'text-lg';
    const smallerFont = textSize == 'small' ? 'text-sm' : 'text-base';
    
    const IconComponent = icon && icon !== 'none' ? <Icon icon={icon?.toLowerCase()} defaultIconSet={defaultIconSet} /> : null;

    return (
        <div 
        {...attributes} {...listeners} 
        className={wrapperClasses}>
        
        {IconComponent}

        {/* CONTENT BLOCK */}
        <div className={`flex flex-col flex-grow items-start ${smallerFont} gap-1.5`} style={truncateStyle}>
            
            {title && <div className={`flex-shrink-0 flex flex-row items-center relative group`}>
{title}
            </div>}

            {/* Value */}
            <div className='flex flex-row items-baseline gap-2' >
                    <h3 className={`${titleFont} flex flex-row font-semibold `} style={truncateStyle}>
{value}
                    </h3>
                    <span className={`${smallerFont} font-semibold text-${changeColor}`} style={truncateStyle}>
{changeValue}
                    </span>
            </div>
            

            {/* Description */}
            {helpText && <div className={`${smallerFont} -mt-1`} style={truncateStyle}>
{helpText}
            </div>}
        </div>
        </div>
    );
}


DataCard.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    changeValue: PropTypes.string,
    hasOutline: PropTypes.bool,
    changeColor: PropTypes.oneOf(['primary', 'accent', 'base-content', 'success', 'warning', 'error', 'info']),
    textSize: PropTypes.oneOf(['small', 'medium']),
    icon: PropTypes.oneOf(['none', ...allIconNames]),
    helpText: PropTypes.string,
};

