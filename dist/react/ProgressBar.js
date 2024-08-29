import React from 'react';
import PropTypes from 'prop-types';

function ProgressBar(props) {
    
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
    
    const noLabel = !label || label === '';

    let wrapperClasses = `flex flex-col w-full items-start justify-start whitespace-nowrap text-${fontSize}`;
    
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'};

    return (
        React.createElement('div', { 
            ...attributes, ...listeners, 
            className: wrapperClasses,}

        , label && React.createElement('div', { className: "flex flex-row items-center justify-between w-full mb-1"     ,}
            , React.createElement('span', { style: truncateStyle, className: "font-semibold",}
, label
            )
            , React.createElement('div', { className: "flex-shrink-0 leading-none" ,}, progress)
        )
        
        , React.createElement('div', { className: "flex flex-row gap-2 w-full items-center"    ,}
        , React.createElement('div', { className: "relative flex-grow w-full rounded-full"   ,}
            , React.createElement('div', { className: "rounded-full w-full h-full"  , style: { backgroundColor: 'currentColor', opacity: 0.08, height: barHeight },})
            , React.createElement('div', { className: `absolute top-0 left-0 rounded-full bg-${color}`, style: {width: progress, height: barHeight},})
        )
        , (showProgress && noLabel) && React.createElement('div', { className: "flex-shrink-0 leading-none" ,}, progress)
        ))
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

export { ProgressBar as default };
//# sourceMappingURL=ProgressBar.js.map
