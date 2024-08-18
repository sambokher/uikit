import PropTypes from 'prop-types'
import * as IconoirIcons from 'iconoir-react';
import Button from './Button';
import React from 'react';

export default function Toast(props) {
    
    const {
        text = 'This is a toast message usually used for short dismissable notifications that disappear',
        type = 'base',
        style = 'outline',
        action = 'Learn more',
        position = 'bottom_right',
        attributes,
        listeners
      } = props;
    const { junoAttributes, junoListeners, dndProps, showTag, setRefs, self, outlineStyle, eventListeners, onPropertyUpdate=()=>{}, preview } = props.junoProps || {}

    // CONTAINER STYLES
    const alertStyles = 'flex flex-row items-start justify-between font-normal transition duration-100';

    const styleMap = {
        'outline': type == 'base' ? `bg-base-0 text-base-content border-base-300` : `bg-base-0 text-base-content border-${type}-content`,
        'light': type == 'base' ? `bg-base-100 text-base-content border-base-300` : `bg-${type} text-base-content border-${type}-focus`,
        'filled': type == 'base' ? `bg-base-100 text-base-content border-base-300` : `bg-${type}-content text-white border-${type}-content ` ,
    }
    
    const typeStyles = styleMap[style] || styleMap['outline']

    let wrapperClasses = `w-full max-w-[320px] flex flex-row relative text-base px-base py-sm rounded-md gap-sm  items-start justify-start shadow-md mx-auto ${alertStyles} border ${typeStyles}`
    
    const positionMap = { 
        bottom_right: {bottom: 20, right: 20}, 
        top_right: {top: 20, right: 20}, 
    }

    return (
        <div className={`absolute flex flex-col`} 
        {...attributes} {...listeners} 
         style={positionMap[position]}>
            <div 
            ref={setRefs} {...eventListeners} {...dndProps?.dndAttributes} {...dndProps?.dndListeners}
            className={wrapperClasses}>
                
            <div className='flex flex-col gap-sm flex-grow-1 w-full items-start'>
{text}
                    
                {action && 
                <Button
                    text={action} 
                    size={'small'}
                    type={type == 'base' ? 'primary' : style == 'filled' ? 'secondary' :  type}
                    marginTop={'none'}
                />}
            </div>
                <IconoirIcons.Xmark className='flex-shrink-0 -mr-1 hover:scale-110 cursor-pointer transition-all' />
            </div>
        </div>
         
    ); 
    
}

Toast.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['base', 'error', 'warning', 'success', 'info']),
    style: PropTypes.oneOf(['filled', 'outline', 'light']),
    action: PropTypes.string,
    position: PropTypes.oneOf(['bottom_right', 'top_right']),

};

