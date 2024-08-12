import PropTypes from 'prop-types'

export default function ProgressBar(props) {
    
    const {
        label = null,
        color = 'info-content',
        progress = '50%', 
        showProgress = false,
        barHeight = '8px',
        fontSize = 'sm',
        attributes,
        listeners
      } = props;
    
    const noLabel = !label || label === ''

    let wrapperClasses = `flex flex-col w-full items-start justify-start whitespace-nowrap text-${fontSize}`
    
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}

    return (
        <div 
            {...attributes} {...listeners} 
            className={wrapperClasses} 
        >   
        {label && <div className='flex flex-row items-center justify-between w-full mb-1'>
            <span style={truncateStyle} className='font-semibold'>
{label}
            </span>
            <div className='flex-shrink-0 leading-none'>{progress}</div>
        </div>
        }
        <div className='flex flex-row gap-sm w-full items-center'>
        <div className='relative flex-grow w-full rounded-full'>
            <div className='rounded-full w-full h-full' style={{ backgroundColor: 'currentColor', opacity: 0.08, height: barHeight }}/>
            <div className={`absolute top-0 left-0 rounded-full bg-${color}`} style={{width: progress, height: barHeight}}/>
        </div>
        {(showProgress && noLabel) && <div className='flex-shrink-0 leading-none'>{progress}</div>}
        </div></div>
    ); 
}

ProgressBar.propTypes = {
    label: PropTypes.string,
    color: PropTypes.oneOf(['info-content', 'primary', 'accent', 'success-content', 'base-content', 'warning-content', 'error-content']),
    progress: PropTypes.oneOf(['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']),
    showProgress: PropTypes.bool,
    barHeight: PropTypes.oneOf(['8px', '12px', '16px']),
    fontSize: PropTypes.oneOf(['xs', 'sm', 'base'])
};

