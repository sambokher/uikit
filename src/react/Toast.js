import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from './index';

export default function Toast(props) {
    
    const {
        text = 'This is a toast message usually used for short dismissable notifications that disappear',
        type = 'base',
        action = 'Learn more',
        position = 'bottom_right',
        attributes,
        listeners
      } = props;
    const { junoAttributes, showTag, outlineStyle, onPropertyUpdate=()=>{}, preview } = props.junoProps || {}

    // CONTAINER STYLES
    const alertStyles = 'flex flex-row items-start justify-between font-normal transition duration-100';

    const typeStyles = type == 'base' ? `bg-base-0 text-base-content ring-1 ring-base-300` : `bg-${type}-surface text-${type}-content ring-1 ring-${type}`

    let wrapperClasses = `w-full max-w-[320px] flex flex-row relative text-base px-3 py-2 rounded-md gap-2  items-start justify-start shadow-md mx-auto ${alertStyles} ${typeStyles}`
    
    const positionMap = { 
        bottom_right: {bottom: 20, right: 20}, 
        top_right: {top: 20, right: 20}, 
    }

    return (
        <div className={`absolute flex flex-col`} 
        {...attributes} {...listeners} 
         style={positionMap[position]}>
            <div className={wrapperClasses}>
                
            <div className='flex flex-col gap-2 flex-grow-1 w-full items-start'
            >
{text}
                    
                {action && 
                <Button
                    text={action} 
                    size={'small'}
                    color={type == 'base' ? 'base-700' : type}
                    style={'filled'}
                />}
            </div>
                <Icon icon='close' className='flex-shrink-0 -mr-1 hover:scale-110 cursor-pointer transition-all' />
            </div>
        </div>
         
    ); 
    
}

Toast.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['base', 'error', 'warning', 'success', 'info']),
    action: PropTypes.string,
    position: PropTypes.oneOf(['bottom_right', 'top_right']),

};

