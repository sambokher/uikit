import PropTypes from 'prop-types'
import * as IconoirIcons from 'iconoir-react';

const allIconNames = Object.keys(IconoirIcons);

export default function Tag(props) {
    
    const {
        text = 'Tag',
        type = 'filled',
        color = 'info-content',
        size = 'medium',
        leftIcon = 'none',
        rightIcon = 'Xmark',
        isPill = true,
        attributes,
        listeners
      } = props;
    
    // CONTAINER STYLES
    const styleMap = {
        'filled': color == 'base-200' ? `bg-base-200 text-base-content border-transparent` : `bg-${color} text-white border-transparent` ,
        'outline': color == 'base-200' ? `text-base-600 border-base-300` : `text-${color} border-${color}`,
        'light': color == 'base-200' ? `bg-base-100 text-base-content border-base-200` : `text-${color} border-transparent`
    }
    
    const sizeStyleMap = {
        small: `text-xs py-3xs gap-xs ${isPill ? 'rounded-full px-sm' : 'rounded px-xs'}`,
        medium: `text-sm py-2xs gap-sm ${isPill ? 'rounded-full px-base' : 'rounded-md px-sm'}`,
    };

    const sizeStyles = sizeStyleMap[size]

    let wrapperClasses = `flex font-semibold items-center flex-shrink-0 justify-center ${sizeStyles} ${styleMap[type]}`
    
    const LeftIconComponent = leftIcon !== 'none' && IconoirIcons[leftIcon] ? IconoirIcons[leftIcon] : null;
    const RightIconComponent = rightIcon !== 'none' && IconoirIcons[rightIcon] ? IconoirIcons[rightIcon] : null;

    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}

    return (
        <div 
            {...attributes} {...listeners} 
            className={wrapperClasses} style={{
                borderWidth: 1,
                backgroundColor: type == 'light' && `color-mix(in srgb, var(--${color}) 16%, transparent)`
            }}
        >   
        {LeftIconComponent && <LeftIconComponent className='flex-shrink-0' />}
        <span style={truncateStyle} className='flex-grow'>
            {text}
        </span>
        {RightIconComponent && <RightIconComponent className='flex-shrink-0 scale-90' />}
        </div>
    ); 
}

Tag.propTypes = {
    text: PropTypes.string,
    type: PropTypes.oneOf(['filled', 'outline', 'light']),
    color: PropTypes.oneOf(['info-content', 'primary', 'accent', 'base-200', 'success-content', 'base-content', 'warning-content', 'error-content']),
    size: PropTypes.oneOf(['small', 'medium']),
    leftIcon: PropTypes.oneOf(['none', ...allIconNames]),
    rightIcon: PropTypes.oneOf(['none', 'Xmark', 'Check', 'CheckCircle', 'XmarkCircleSolid', 'XmarkCircle']), 
    isPill: PropTypes.bool,
};

