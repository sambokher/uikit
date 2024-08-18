import PropTypes from 'prop-types';
import Icon from './Icon'
import { iconMap } from './iconMap'
import Loader from './Loader';

const allIconNames = Object.keys(iconMap) || []

export default function ButtonIcon(props) {

    const {
        icon = 'heart',
        type = 'ghost',
        size = 'medium',
        hideOnMobile=false,
        isLoading = false,
        isPill = false,
        alignSelf = 'auto',
        style = 'filled',
        onClick = () => {},
        marginTop = 'none',
        isDisabled = false,
        defaultIconSet,
        attributes,
        listeners
      } = props;
    
    const buttonStyles = `flex flex-row items-center relative transition-all flex-shrink-0 flex-grow-0 box-border`

    const filledTypeMap = {
        'primary': `bg-primary ${isDisabled ? '' : 'hover:bg-primary-focus'} text-primary-content border border-transparent`,
        'secondary': `bg-base-100 ${isDisabled ? '' : 'hover:bg-base-200'}  text-base-content border border-transparent`,
        'accent': `bg-accent ${isDisabled ? '' : 'hover:bg-accent-focus'}  text-accent-content border border-transparent`,
        'link': `bg-transparent ${isDisabled ? '' : 'hover:underline'}  border border-transparent`,
        'ghost': `bg-transparent ${isDisabled ? '' : 'juno-current-color-hover-bg'}  border border-transparent`,
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
    
    let typeStyles = filledTypeMap['secondary'] // defaults to secondary button
    typeStyles = style == 'filled' ? filledTypeMap[type] : outlinedTypeMap[type]
     
    const selfAlign = `self-${alignSelf}`
    const sizeStyles = size == 'small' ? `p-2xs text-xs` : size == 'large' ? `p-sm text-base` : `p-xs text-sm`;
    const cornerStyles = `${isPill ? `rounded-full` : size == 'small' ? 'rounded' : size == 'large' ? 'rounded-lg' : 'rounded-md'}`
    const marginStyles = marginTop == 'none' ? '' : `mt-${marginTop}`

    let classes = `${hideOnMobile ? 'hidden md:flex' : ''}
        ${buttonStyles} ${typeStyles} ${sizeStyles} ${cornerStyles} ${selfAlign} ${marginStyles} cursor-pointer
        ${isDisabled ? 'opacity-50 saturate-50 cursor-not-allowed' : ''}`


    const IconComponent = icon !== 'none' ? <Icon icon={icon?.toLowerCase()} defaultIconSet={defaultIconSet} /> : null;
    const PlaceHolderIcon = <Icon icon={'heart'} defaultIconSet={defaultIconSet} />
    const loaderColor = (type === 'primary' || type === 'accent' || type === 'warning') ? 'base-0' : 'base-500';

    return (
        <button
            {...attributes} {...listeners} 
            onClick={onClick}
            className={classes}
        >
            <div className={`${isLoading && 'invisible'}`}>{IconComponent ? IconComponent : PlaceHolderIcon}</div>
            {isLoading && <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
            <Loader 
                size={size == 'small' ? 'small' : 'medium'}
                color={loaderColor}
                type='spinner'
                opacity='50'
                />
                </div>}
        </button>
    ); 
}

ButtonIcon.propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary', 'accent', 'link', 'warning', 'ghost', 'info', 'success', 'error']),   
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    style: PropTypes.oneOf(['filled', 'outlined']),
    icon: PropTypes.oneOf(allIconNames),
    isLoading: PropTypes.bool,
    isPill: PropTypes.bool,
    alignSelf: PropTypes.oneOf(['auto', 'start', 'end', 'center']),
    marginTop: PropTypes.oneOf(['none', 'xs', 'sm', 'base', 'md', 'lg', 'xl']),
    isDisabled: PropTypes.bool,
    hideOnMobile: PropTypes.bool,
    onClick: PropTypes.func
};

