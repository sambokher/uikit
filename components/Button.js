import PropTypes from 'prop-types';
import Loader from './Loader';
import { Icon } from './index'
import { iconMap } from './iconMap'

const allIconNames = Object.keys(iconMap) || []

export default function Button(props) {
    
    const {
        leftIcon = 'none',
        rightIcon = 'none',
        text = 'Button',
        type = 'secondary',
        size = 'medium',
        isLoading = false,
        width = 'auto',
        style = 'filled',
        marginTop = 'none',
        onClick = () => {},
        isDisabled = false,
        defaultIconSet, 
        hideOnMobile=false,
        attributes,
        listeners
      } = props;

    const filledTypeMap = {
        'primary': `bg-primary ${isDisabled ? '' : 'hover:bg-primary-focus'} text-primary-content border border-transparent`,
        'secondary': `bg-base-100 ${isDisabled ? '' : 'hover:bg-base-200'}  text-base-content border border-transparent`,
        'accent': `bg-accent ${isDisabled ? '' : 'hover:bg-accent-focus'}  text-accent-content border border-transparent`,
        'link': `bg-transparent ${isDisabled ? '' : 'hover:underline'}  border border-transparent`,
        'ghost': `bg-transparent ${isDisabled ? '' : 'juno-current-color-hover-bg'} border border-transparent opacity-70 hover:opacity-100`,
        'warning': `bg-warning-content ${isDisabled ? '' : 'hover:brightness-110'}  text-base-0 border border-transparent`,
        'success': `bg-success-content ${isDisabled ? '' : 'hover:brightness-110'}  text-base-0 border border-transparent`,
        'info': `bg-info-content ${isDisabled ? '' : 'hover:brightness-110'}  text-base-0 border border-transparent`,
        'error': `bg-error-content ${isDisabled ? '' : 'hover:brightness-110'}  text-base-0 border border-transparent`,
    };
    

    const outlinedTypeMap = {
        'primary': `border border-primary bg-transparent text-primary-focus`,
        'secondary': `border border-base-300 bg-transparent`,
        'accent': `border border-accent bg-transparent text-accent-focus`,
        'link': 'bg-transparent text-base-content hover:underline border border-transparent',
        'ghost': `bg-transparent ${isDisabled ? '' : 'border-transparent juno-current-color-hover-bg'} border`,
        'warning': `border border-warning-content bg-transparent text-warning-content`,
        'success': `border border-success-content bg-transparent text-success-content`,
        'error': `border border-error-content bg-transparent text-error-content`,
        'info': `border border-info-content bg-transparent text-info-content`,
    };

    // and just type: primary, accent, base, warning, success, error, info
    
    const fontStyles = `font-medium` 
    
    let typeStyles = filledTypeMap['secondary'] // defaults to secondary button
    typeStyles = style == 'filled' ? filledTypeMap[type] : outlinedTypeMap[type]
    
    
    const sizeStyles = 
        size == 'small' ? `py-2xs px-xs gap-xs text-xs` 
        : size == 'large' ? `py-sm px-md gap-base text-base`
        : `py-xs px-base gap-base text-sm`;

    const widthStyle = width == 'auto' ? `w-auto` : `w-${width}`
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md"
    const marginStyles = marginTop == 'none' ? '' : `mt-${marginTop}`
    
    let classes = `${hideOnMobile ? 'hidden md:flex' : ''}
        relative flex flex-row items-center transition-all box-border cursor-pointer justify-between 
        ${marginStyles} ${fontStyles} ${typeStyles} ${sizeStyles} ${cornerStyles} ${widthStyle}
        ${isDisabled ? 'opacity-50 saturate-50 !cursor-not-allowed' : ''}`
    
     const LeftIconComponent = leftIcon !== 'none' ? <Icon icon={leftIcon?.toLowerCase()} defaultIconSet={defaultIconSet} /> : null;
     const RightIconComponent = rightIcon !== 'none' ? <Icon icon={rightIcon?.toLowerCase()} defaultIconSet={defaultIconSet} /> : null;

    const loaderColor = 'currentColor'

    return (
        <button  type="button" 
            className={classes} {...attributes} {...listeners} 
            onClick={(e)=> !isDisabled && onClick(e)}
            >
            <div className={`flex flex-row items-center justify-end flex-grow ${isLoading ? 'invisible' : ''}`}>
                {LeftIconComponent}
            </div>
            <div className='flex-shrink-0 max-w-full box-border'>
            {isLoading && <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                <Loader 
                size={size == 'small' ? 'small' : 'medium'}
                color={loaderColor}
                type='spinner'
                opacity='50'
                />
            </div>}
             <span className={`${isLoading ? 'opacity-0' : ''} flex flex-row items-center gap-2 whitespace-nowrap truncate max-w-full`}>
{text}
            </span>
            </div>
            <div className={`flex flex-row items-center justify-end flex-grow ${isLoading && 'invisible'}`}>
                {RightIconComponent}
            </div>
        </button>
    ); 
}

Button.propTypes = {
    width: PropTypes.oneOf(["auto", "1/2", "full"]),
    text: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary', 'accent', 'link', 'warning', 'ghost', 'info', 'success', 'error']),   
    style: PropTypes.oneOf(['filled', 'outlined']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    leftIcon: PropTypes.oneOf(['none', ...allIconNames]),
    rightIcon: PropTypes.oneOf(['none', ...allIconNames]),
    isLoading: PropTypes.bool,
    marginTop: PropTypes.oneOf(['none', 'xs', 'sm', 'base', 'md', 'lg', 'xl']),
    isDisabled: PropTypes.bool,
    hideOnMobile: PropTypes.bool,
    onClick: PropTypes.func, 
};

