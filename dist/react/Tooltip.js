import React from 'react';
import PropTypes from 'prop-types';

function Tooltip(props) {
    const { text, direction, size, bgColor, attributes, listeners } = props;
    
    const sizeStylesMap = {
        small: `py-0.5 px-2 text-xs rounded-sm shadow-sm`,
        medium: `py-1 px-3 text-sm rounded shadow-sm`
    };

    // tailwind safelist -left-2 -left-4 -right-2 -right-4 -top-2 -top-4 -bottom-2 -bottom-4

    const distance = size === 'small' ? 2 : 4;
    const directionStylesMap = {
        up: `-top-${distance} -translate-y-full left-1/2 -translate-x-1/2`,
        down: `-bottom-${distance} translate-y-full left-1/2 -translate-x-1/2`,
        left: `-left-${distance} -translate-x-full top-1/2 -translate-y-1/2`,
        right: `-right-${distance} translate-x-full top-1/2 -translate-y-1/2`
    };

    const bgStyles = bgColor === 'base-content' ? 'bg-base-content text-base-0' : `bg-${bgColor} text-base-content`;
    let classes = `absolute bg-${bgColor} ${sizeStylesMap[size]} transform ${directionStylesMap[direction]} ${bgStyles} transition-all duration-100
opacity-0 group-hover:opacity-100`;
    
    return (
        React.createElement('div', { 
        ...attributes, ...listeners, 
        className: classes, style: {pointerEvents: 'none', whiteSpace: 'nowrap'},}
                , text
        )
        )
}

Tooltip.propTypes = {
    text: PropTypes.string,
    direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
    size: PropTypes.oneOf(['small', 'medium']),
    bgColor: PropTypes.oneOf(['base-0', 'base-100', 'base-content']),
};

Tooltip.defaultProps = {
    text: 'Tooltip',
    direction: 'up',
    size: 'medium',
    bgColor: 'base-content',
};

export { Tooltip as default };
//# sourceMappingURL=Tooltip.js.map
