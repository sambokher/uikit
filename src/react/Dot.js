import PropTypes from 'prop-types'

export default function Dot(props) {
    
    const {
        size = '8px',
        color = 'base-300',
        marginX = 'xs',
        marginY = 'xs',
        attributes,
        listeners
      } = props;
    const { junoAttributes, dndProps, setRefs, self, outlineStyle, eventListeners} = props.junoProps || {}
    
    let classes = `py-${marginY} px-${marginX}`
    
    const inlineStyles = {
        width: size, 
        height: size,
        borderRadius: 9999, 
        backgroundColor: `var(--${color})`
    }

    return (
        <div 
        {...attributes} {...listeners} 
            className={classes}
        >
            <div style={inlineStyles}/>
        </div>)
}

Dot.propTypes = {
    color: PropTypes.oneOfType([
        PropTypes.oneOf(['base-0', 'base-100', 'base-200', 'base-300', 'base-content', 'primary', 'accent', 'success', 'warning', 'error', 'info', 'success-content', 'warning-content', 'error-content', 'info-content']),
        PropTypes.string]),
    marginX: PropTypes.oneOf(['none', 'xs', 'sm', 'base', 'md', 'lg']),
    marginY: PropTypes.oneOf(['none', 'xs', 'sm', 'base', 'md', 'lg']),
    size: PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px']),
};

