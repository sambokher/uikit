import React from 'react'
import PropTypes from 'prop-types'

export default function ProgressBar(props) {
    
    const {
        label = null,
        color = 'info',
        progress = '50%', 
        showProgress = false,
        corners = 'sm',
        barHeight = '16px',
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
        <div className='flex flex-row gap-2 w-full items-center'>
        <div className={`relative flex-grow w-full rounded-${corners}`}>
            <div className={`rounded-${corners} w-full h-full bg-current-10`} style={{ height: barHeight }}/>
            <div className={`absolute top-0 left-0 rounded-${corners} bg-${color}`} style={{width: progress, height: barHeight}}/>
        </div>
        {(showProgress && noLabel) && <div className='flex-shrink-0 leading-none'>{progress}</div>}
        </div></div>
    ); 
}

ProgressBar.propTypes = {
    label: PropTypes.string,
    color: PropTypes.oneOf([ 'base-300', 'primary', 'accent', 'info', 'success', 'warning', 'error']),
    progress: PropTypes.oneOf(['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']),
    showProgress: PropTypes.bool,
    barHeight: PropTypes.oneOf(['8px', '12px', '16px', '20px']),
    corners: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'full']),
    fontSize: PropTypes.oneOf(['xs', 'sm', 'base'])
};

