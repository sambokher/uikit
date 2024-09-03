import React from 'react'
import PropTypes from 'prop-types'

export default function ProgressSemiCircle(props) {
    
    const {
        label = 'label',
        circleRadius = '48px',
        color = 'info',
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
    }
    const labelFontSizeMap = {
        '32px': 'text-sm',
        '48px': 'text-sm',
        '60px': 'text-sm',
        '80px': 'text-base'
    }

    let wrapperClasses = `flex flex-col items-center gap-1`

    return (
        <div   
        {...attributes} {...listeners} 
                className={wrapperClasses}
             >
            <div style={{ position: 'relative', width: radius * 2, height: radius + strokeWidth / 2, overflow: 'hidden' }}>
            
            {/* Semicircle */}
            <svg height={radius * 2} width={radius * 2} style={{ transform: 'rotate(180deg)' }}>
                    <circle 
                            stroke="currentColor"
                            style={{ strokeOpacity: 0.10 }}
                            fill="transparent"
                            strokeWidth={strokeWidth}
                            strokeDasharray={`${circumference} ${circumference}`}
                            r={normalizedRadius}
                            cx={radius}
                            cy={radius}
                            strokeLinecap="round" />
                     <circle 
                        stroke={`var(--${color})`}
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${((progressValue)/ 100) * circumference} ${circumference - ((progressValue - strokeWidth) / 100) * circumference}`}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                        strokeLinecap="round" />
                </svg>

            {/* Label */}
            <div className={`flex flex-col items-center justify-center leading-tight font-semibold absolute bottom-0 left-1/2 -translate-x-1/2`}>
                {radius >= 60 && label ? <h3 className={`whitespace-nowrap text-center font-normal ${labelFontSizeMap[circleRadius]}`} style={{ maxWidth: radius * 1.2 }}>
{label}
                </h3> 
            : null}
                {showProgressValue && <span className={`${fontSizeMap[circleRadius]}`}>{progress}</span>}
            </div>
            </div>
            {radius < 60 && label ? <h3 className={`whitespace-nowrap font-normal ${labelFontSizeMap[circleRadius]}`}>
{label}
            </h3> : null}
        </div>
    );
}

ProgressSemiCircle.propTypes = {
    label: PropTypes.string,
    circleRadius: PropTypes.oneOf(['32px', '48px', '60px', '80px']),
    color: PropTypes.oneOf([ 'base-300', 'primary', 'accent', 'info', 'success', 'warning', 'error']),
    progress: PropTypes.oneOf(['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']),
    showProgressValue: PropTypes.bool,
};

