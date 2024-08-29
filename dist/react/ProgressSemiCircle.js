import React from 'react';
import PropTypes from 'prop-types';

function ProgressSemiCircle(props) {
    
    const {
        label = 'label',
        circleRadius = '48px',
        color = 'info-content',
        progress = '50%',
        showProgressValue = true,
        attributes,
        listeners
      } = props;
      
    
    const radius = parseInt(circleRadius, 10);
    const strokeWidth = {
        '32px': 8,
        '48px': 10,
        '60px': 12,
        '80px': 14
    }[circleRadius] || 10;
    
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * Math.PI;

    const progressValue = parseInt(progress, 10);

    const fontSizeMap = {
        '32px': 'text-base',
        '48px': 'text-lg',
        '60px': 'text-xl',
        '80px': 'text-2xl'
    };
    const labelFontSizeMap = {
        '32px': 'text-sm',
        '48px': 'text-sm',
        '60px': 'text-sm',
        '80px': 'text-base'
    };

    let wrapperClasses = `flex flex-col items-center gap-1`;

    return (
        React.createElement('div', {   
        ...attributes, ...listeners, 
                className: wrapperClasses,}

            , React.createElement('div', { style: { position: 'relative', width: radius * 2, height: radius + strokeWidth / 2, overflow: 'hidden' },}

            /* Semicircle */
            , React.createElement('svg', { height: radius * 2, width: radius * 2, style: { transform: 'rotate(180deg)' },}
                    , React.createElement('circle', { 
                            stroke: "currentColor",
                            style: { strokeOpacity: 0.08 },
                            fill: "transparent",
                            strokeWidth: strokeWidth,
                            strokeDasharray: `${circumference} ${circumference}`,
                            r: normalizedRadius,
                            cx: radius,
                            cy: radius,
                            strokeLinecap: "round",} )
                     , React.createElement('circle', { 
                        stroke: `var(--${color})`,
                        fill: "transparent",
                        strokeWidth: strokeWidth,
                        strokeDasharray: `${((progressValue)/ 100) * circumference} ${circumference - ((progressValue - strokeWidth) / 100) * circumference}`,
                        r: normalizedRadius,
                        cx: radius,
                        cy: radius,
                        strokeLinecap: "round",} )
                )

            /* Label */
            , React.createElement('div', { className: `flex flex-col items-center justify-center leading-tight font-semibold absolute bottom-0 left-1/2 -translate-x-1/2`,}
                , radius >= 60 && label ? React.createElement('h3', { className: `whitespace-nowrap text-center font-normal ${labelFontSizeMap[circleRadius]}`, style: { maxWidth: radius * 1.2 },}
, label
                ) 
            : null
                , showProgressValue && React.createElement('span', { className: `${fontSizeMap[circleRadius]}`,}, progress)
            )
            )
            , radius < 60 && label ? React.createElement('h3', { className: `whitespace-nowrap font-normal ${labelFontSizeMap[circleRadius]}`,}
, label
            ) : null
        )
    );
}

ProgressSemiCircle.propTypes = {
    label: PropTypes.string,
    circleRadius: PropTypes.oneOf(['32px', '48px', '60px', '80px']),
    color: PropTypes.oneOf(['info-content', 'primary', 'accent', 'success-content', 'base-content', 'warning-content', 'error-content']),
    progress: PropTypes.oneOf(['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']),
    showProgressValue: PropTypes.bool,
};

export { ProgressSemiCircle as default };
//# sourceMappingURL=ProgressSemiCircle.js.map
