import PropTypes from 'prop-types'
import React from 'react';

export default function ProgressCircle(props) {
    
    const {
        label = 'label',
        circleRadius = '48px',
        color = 'info-content',
        progress = '50%',
        showProgressValue = true,
        attributes,
        listeners
      } = props;
      
    const noLabel = !label || label === ''
    const radius = parseInt(circleRadius, 10);
    const strokeWidth = {
        '32px': 8,
        '48px': 10,
        '60px': 12,
        '80px': 14
    }[circleRadius] || 10;

    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    // Parse the percentage string to extract the numerical value
    const progressValue = parseInt(progress, 10);
    const strokeDashoffset = circumference - (progressValue / 100) * circumference;
    
    const fontSizeMap = {
        '32px': 'text-lg',
        '48px': 'text-xl',
        '60px': 'text-2xl',
        '80px': 'text-3xl'
    }
    const labelFontSizeMap = {
        '32px': 'text-sm',
        '48px': 'text-sm',
        '60px': 'text-base',
        '80px': 'text-base'
    }

    let wrapperClasses = `flex flex-col items-center gap-2xs`

    return (
        <div 
        {...attributes} {...listeners} 
            className={wrapperClasses}
        >   
         <div style={{ position: 'relative', width: radius * 2, height: radius * 2 }}>
            <svg height={radius * 2} width={radius * 2} style={{ transform: 'rotate(-90deg)' }}>
                {/* Background circle in light gray */}
                <circle
                    stroke="currentColor"
                    style={{ strokeOpacity: 0.08 }}
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${circumference} ${circumference}`}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    strokeLinecap="round" 
                />
                {/* Foreground circle in blue showing the progress */}
                <circle
                    stroke={`var(--${color})`}
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${circumference} ${circumference}`}
                    style={{ strokeDashoffset }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    strokeLinecap="round" 
                />
            </svg>

            {/* LABELING */}
            <div className={`flex flex-col items-center justify-center max-w-full gap-2xs leading-tight font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                {radius >= 60 && !noLabel ? 
                <h3 className={`whitespace-nowrap text-center font-normal ${labelFontSizeMap[circleRadius]}`} style={{ maxWidth: radius * 1.2 }}>
{label}
                    </h3> 
                : null}
                {showProgressValue && <span className={`${fontSizeMap[circleRadius]}`}>{progress}</span>}
            </div>
        </div>
        {radius < 60 && !noLabel ? <h3 className={`whitespace-nowrap font-normal ${labelFontSizeMap[circleRadius]}`}>
{label}
                </h3>
        : null}
        </div>
    ); 
}

ProgressCircle.propTypes = {
    label: PropTypes.string,
    circleRadius: PropTypes.oneOf(['32px', '48px', '60px', '80px']),
    color: PropTypes.oneOf(['info-content', 'primary', 'accent', 'success-content', 'base-content', 'warning-content', 'error-content']),
    progress: PropTypes.oneOf(['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']),
    showProgressValue: PropTypes.bool,
    children: PropTypes.node
};

