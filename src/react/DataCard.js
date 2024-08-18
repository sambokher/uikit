import PropTypes from 'prop-types';
import * as IconoirIcons from 'iconoir-react';
import Icon from './Icon'
import { iconMap } from './iconMap'
import React from 'react';

const allIconNames = Object.keys(iconMap) || []

export default function DataCard(props) {

    
    const {
        name = "Metric",
        value = "$10,500",
        changeValue = "+12%",
        hasOutline = false,
        changeColor = 'none',
        textSize = 'small',
        icon = 'chart-up',
        iconColor = 'none',
        helpText = "Updated Feb 03, 2024",
        attributes,
        listeners,
        defaultIconSet
      } = props;
      

    const sizeStyles = `w-full h-auto ${textSize == 'small' ? 'text-sm' : 'text-base'}`
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}

    let wrapperClasses = `flex flex-row items-stretch justify-start gap-base ${sizeStyles}`

    const titleFont = textSize == 'small' ? 'text-base' : 'text-lg';
    const smallerFont = textSize == 'small' ? 'text-sm' : 'text-base';
    
    const IconComponent = icon && icon !== 'none' ? <Icon icon={icon?.toLowerCase()} defaultIconSet={defaultIconSet} /> : null;

    return (
        <div 
        {...attributes} {...listeners} 
        className={wrapperClasses}>
        
        {IconComponent}

        {/* CONTENT BLOCK */}
        <div className={`flex flex-col flex-grow items-start ${smallerFont} gap-xs`} style={truncateStyle}>
            
            {name && <div className={`flex-shrink-0 flex flex-row items-center relative group`}>
{name}
            </div>}

            {/* Value */}
            <div className='flex flex-row items-baseline gap-sm' >
                    <h3 className={`${titleFont} flex flex-row font-semibold `} style={truncateStyle}>
{value}
                    </h3>
                    <span className={`${smallerFont} font-medium text-${changeColor}`} style={truncateStyle}>
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
    name: PropTypes.string,
    value: PropTypes.string,
    changeValue: PropTypes.string,
    hasOutline: PropTypes.bool,
    changeColor: PropTypes.oneOf(['none', 'primary', 'primary-content', 'accent', 'accent-content', 'base-content', 'base-500', 'base-700', 'base-900'
    ,'success-content', 'warning-content', 'warning-content', 'error-content', 'info-content']),
    textSize: PropTypes.oneOf(['small', 'medium']),
    icon: PropTypes.oneOf(['none', ...allIconNames]),
    iconColor: PropTypes.oneOf(['none', 'primary', 'primary-content', 'accent', 'accent-content', 'base-content', 'base-500', 'base-700', 'base-900'
    ,'success-content', 'warning-content', 'warning-content', 'error-content', 'info-content']),
    helpText: PropTypes.string,
};

