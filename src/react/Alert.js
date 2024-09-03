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
        onActionClick,
        attributes,
        listeners
      } = props;

    const styleMap = {
        'filled': type == 'base' ? `bg-base-content text-base-0` : `bg-${type} text-base-0` ,
        'outline': type == 'base' ? `text-base-600 ring-1 ring-inset ring-base-300` : `text-${type}-content ring-1 ring-inset ring-${type}-focus`,
        'light': type == 'base' ? `bg-base-100 text-base-content` : `bg-${type}-surface text-${type}-content`
    }

    const typeStyles = `${styleMap[style]}`
    
    const sizeStyles = size == 'small' ? `py-2 px-2 gap-2 text-xs` : `py-2.5 px-4 gap-3 text-sm`;
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
            <div className={`flex flex-col flex-grow-1 w-full items-start ${size == 'small' ? 'gap-0.5' : 'gap-1'}`}>
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
                    onClick={onActionClick}
            /> : 
                <Link 
                    text={actionText} 
                    onClick={onActionClick}
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
    size: PropTypes.oneOf(['small', 'medium']),
    icon: PropTypes.oneOfType([
        PropTypes.oneOf(['none', 'auto', ...allIconNames]),
        PropTypes.string
    ]),
    hasCloseButton: PropTypes.bool,
    children: PropTypes.node
};

