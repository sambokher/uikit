import PropTypes from 'prop-types';

export default function Loader(props) {

    const { size='small', type='spinner', color='primary', opacity='70', attributes, listeners } = props

    const spinnerSizeClasses = {
        small: 'w-4 h-4 border-2',
        medium: 'w-6 h-6 border-4',
        large: 'w-8 h-8 border-4',
    };

    const pulseSizeClasses = {
        small: 'w-3 h-3',
        medium: 'w-5 h-5',
        large: 'w-7 h-7',
    };
    
    const typeClasses = type == 'spinner' ? `${spinnerSizeClasses[size]} border-solid border-${color} border-t-transparent` : 
    `${pulseSizeClasses[size]} bg-${color} `
    
    const animation = 
        type == 'spinner' ? 'animate-spin' : 'pulsate-125' 
    let loaderClasses = `${typeClasses} rounded-full opacity-${opacity} ${animation}`

    return (
            <div className={loaderClasses} {...attributes} {...listeners} />
    );
}

Loader.propTypes = {
    type: PropTypes.oneOf(['spinner', 'pulse']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'accent', 'base-content', 'error-content', 'warning-content', 'success-content', 'base-0', 'base-100', 'info-content']),
    PropTypes.string
    ]),
    opacity: PropTypes.oneOf(['100', '70', '50']),
    children: PropTypes.node
};

