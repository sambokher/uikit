import PropTypes from 'prop-types'
import * as IconoirIcons from 'iconoir-react';

const allIconNames = Object.keys(IconoirIcons);

export default function Tab(props) {
    
    const {
        text = 'Tab',
        tabColor = 'accent',
        leftIcon = 'none',
        state = 'inactive',
        size = 'small',
        borderPosition = 'bottom',
        attributes,
        listeners
      } = props;

    let sizeStyles = ''
    const direction = borderPosition == 'left' || borderPosition == 'right' ? 'v' : 'h'
    if (direction == 'h') {
        sizeStyles = size == 'small' ? `py-2xs text-xs gap-xs` :  
        size == 'large' ? `py-base gap-base text-md`: `py-xs gap-sm text-sm`;
    } else {
        sizeStyles = size == 'small' ? `px-sm text-xs gap-xs` :  
        size == 'large' ? `px-md text-md gap-base`: `px-base text-sm gap-sm`;
    }
    
    let wrapperClasses = `flex flex-row items-center justify-center pointer relative ${sizeStyles} border border-transparent group`

    const iconWidth = size == 'small' ? 'w-4' : size == 'large' ? 'w-6' : 'w-5'
    const LeftIcon = leftIcon !== 'none' && IconoirIcons[leftIcon] ? IconoirIcons[leftIcon] : null;

    /* Tailwind safelist
    group-hover:bg-accent, group-hover:bg-accent-content, group-hover:bg-accent-focus,
    group-hover:bg-primary, group-hover:bg-primary-content, group-hover:bg-primary-focus,
    group-hover:bg-base-0, group-hover:bg-base-100, group-hover:bg-base-200, group-hover:bg-base-300, group-hover:bg-base-400, group-hover:bg-base-500, group-hover:bg-base-600, group-hover:bg-base-700, group-hover:bg-base-900, group-hover:bg-base-content,
    */

    const borderClasses = state == 'active' ? `bg-${tabColor}` : `transitiona-all duration-100 group-hover:bg-${tabColor}`
    const borderElement = {
        position: 'absolute',
        top: borderPosition == 'top' ? 0 : null,
        bottom: borderPosition == 'bottom' ? 0 : null,
        left: borderPosition == 'left' ? 0 : null,
        right: borderPosition == 'right' ? 0 : null,
        width: direction == 'h' ? '100%' : size == 'small' ? '2px' : size == 'large' ? '4px' : '3px', 
        height: direction == 'v' ? '100%' : size == 'small' ? '2px' : size == 'large' ? '4px' : '3px',
        borderRadius: 1, 
    }

    return (
        <div
        {...attributes} {...listeners} 
            className={wrapperClasses}
        >
            {LeftIcon && <LeftIcon className={`flex-shrink-0 ${iconWidth}`}/>}
            
                {text}
            <div  className={borderClasses} style={borderElement} />
        </div>
    );
}

Tab.propTypes = {
    text: PropTypes.string,
    leftIcon: PropTypes.oneOf(['none', ...allIconNames]),
    tabColor: PropTypes.oneOf(['primary', 'primary-content', 'accent', 'accent-content', 'base-content', 'base-500', 'base-700', 'base-900']),
    state: PropTypes.oneOf(['active', 'inactive']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    borderPosition: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
};

