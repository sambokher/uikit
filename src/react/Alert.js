import React from 'react'
import PropTypes from 'prop-types'
import { Button, Link, Icon } from './index'
import { iconMap } from './iconMap'

const allIconNames = Object.keys(iconMap) || []

// needs mobile behavior
export default function Alert(props) {
    
    const {
        type = 'base',
        size = 'medium',
        icon = 'none',
        hasCloseButton = false,
        text = 'This is an alert message',
        style = 'light',
        actionText = '',
        actionType = 'link',
        title = '',
        width = 'auto',
        attributes,
        listeners
      } = props;

    const styleMap = {
        'filled': type == 'base' ? `bg-base-content text-base-0` : `bg-${type}-content text-base-0` ,
        'outline': type == 'base' ? `text-base-600 ring-1 ring-inset ring-base-300` : `text-${type}-content ring-1 ring-inset ring-${type}-content`,
        'light': type == 'base' ? `bg-base-100 text-base-content` : `bg-${type}  text-${type}-content`
    }

    const typeStyles = `${styleMap[style]}`
    
    const sizeStyles = size == 'small' ? `py-1 px-1.5 gap-1.5 text-xs` : `py-1.5 px-3 gap-3 text-sm`;
    const widthStyle = width == 'auto' ? `w-auto` : `w-${width}`
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"

    let wrapperClasses = `flex flex-row items-start justify-between transition-all duration-100 ${typeStyles} ${sizeStyles} ${cornerStyles} ${widthStyle}`

    const iconStyleMap = {
        info: 'info',
        error: 'warning',
        base: 'info',
        warning: 'warning',
        success: 'check-circle',
    };
    
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}
    
    const useIcon = icon == 'auto' ? iconStyleMap[type] : icon;
    
    const IconComponent = icon !== 'none' ? <Icon icon={useIcon?.toLowerCase()}  className='flex-shrink-0' /> : null;

    return (
        <div 
            {...attributes} {...listeners} 
            className={wrapperClasses}
        >   
            {IconComponent}
            <div className='flex flex-col gap-1.5 flex-grow-1 w-full items-start'>
                {title && title != '' && <h2 className='font-semibold' style={truncateStyle}>
{title}
                </h2>}
{text}
                {(actionText && actionText != '') ? 
                actionType == 'button' ?
                <Button
                    text={actionText} 
                    size={'small'}
                    type={type == 'base' ? 'secondary' : type}
                    style={'filled'}
                    marginTop={'6px'}
            /> : 
                <Link 
                    text={actionText} 
                    underline='always'
                    />
                    : null}
                
            </div>
            
            {hasCloseButton && <Icon icon='close' className='flex-shrink-0 mt-0.5'/>}   
        </div>
    ); 
    
}

Alert.propTypes = {
    width: PropTypes.oneOf(["auto", "1/2", "full"]),
    style: PropTypes.oneOf(['filled', 'outline', 'light']),
    text: PropTypes.string.isRequired,
    title: PropTypes.string,
    type: PropTypes.oneOf(['info', 'base', 'error', 'warning', 'success']),
    actionText: PropTypes.string,
    actionType: PropTypes.oneOf(['button', 'link']),
    size: PropTypes.oneOf(['medium', 'large']),
    icon: PropTypes.oneOfType([
        PropTypes.oneOf(['none', 'auto', ...allIconNames]),
        PropTypes.string
    ]),
    hasCloseButton: PropTypes.bool,
    children: PropTypes.node
};

