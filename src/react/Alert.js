import PropTypes from 'prop-types'
import * as IconoirIcons from 'iconoir-react';
import Button from './Button';
import Link from './Link';

const allIconNames = Object.keys(IconoirIcons);

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
        'filled': type == 'base' ? `bg-base-content text-base-0 border-base-content` : `bg-${type}-content text-white border-${type}-content ` ,
        'outline': type == 'base' ? `text-base-600 border-base-300` : `text-${type}-content border-${type}-content`,
        'light': type == 'base' ? `bg-base-100 text-base-content border-base-300` : `bg-${type} border-${type}-focus text-${type}-content`
    }

    const typeStyles = styleMap[style] || '';
    
    const sizeStyles = size == 'small' ? `py-2xs px-xs gap-xs text-xs` : `py-xs px-base gap-base text-sm`;
    const widthStyle = width == 'auto' ? `w-auto` : `w-${width}`
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"

    let wrapperClasses = `flex flex-row items-start justify-between transition-all duration-100 border ${typeStyles} ${sizeStyles} ${cornerStyles} ${widthStyle}`

    const iconStyleMap = {
        info: IconoirIcons['InfoCircle'],
        error: IconoirIcons['WarningTriangle'],
        base: IconoirIcons['InfoCircle'],
        warning: IconoirIcons['WarningTriangle'],
        success: IconoirIcons['CheckCircle'],
    };

    const buttonStyleMap = {
        info: style == 'filled' ? `bg-base-0 text-base-content` : `bg-info-content text-base-0`,
        error: style == 'filled' ? `bg-base-0 text-base-content` : `bg-error-content text-base-0`,
        base: style == 'filled' ? `bg-base-0 text-base-content` : `bg-base-content  text-base-0`,
        warning: style == 'filled' ?`bg-base-0 text-base-content` : `bg-warning-content  text-base-0`,
        success: style == 'filled' ? `bg-base-0 text-base-content`:  `bg-success-content text-base-0`,
    };   

    
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}
    
    const DefaultIcon = iconStyleMap[type] || IconoirIcons['InfoCircle'];
    const IconComponent = icon == 'none' ? null :
        icon == 'auto' || !IconoirIcons[icon] ? DefaultIcon :
        IconoirIcons[icon] ? IconoirIcons[icon] : null;
    

    return (
        <div 
            {...attributes} {...listeners} 
            className={wrapperClasses}
        >   
            {IconComponent && <IconComponent className='flex-shrink-0' />}
            <div className='flex flex-col gap-xs flex-grow-1 w-full items-start'>
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
                    marginTop={'sm'}
            /> : 
                <Link 
                    text={actionText} 
                    underline='always'
                    />
                    : null}
                
            </div>
            
            {hasCloseButton && <IconoirIcons.Xmark className='flex-shrink-0 mt-[px]'/>}   
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

