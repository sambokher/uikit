import React from 'react';
import PropTypes from 'prop-types';
import * as IconoirIcons from 'iconoir-react';

function StarRatings(props) {
    
    const {
        label = '4.5',
        ratingValue = '90%', // This should be considered whether it should be a percentage string or a numeric value depending on your implementation.
        labelPosition = 'right',
        color = 'orange-500',
        size = 'sm', // consider making this px value
        attributes,
        listeners
      } = props;
    
    let classes = `flex flex-row gap-2 items-center text-${size}`;
    
    let starClasses = `flex flex-row gap-1.5 flex-shrink-0 text-${color}`;

    /* text-orange-500 */

    return (
        React.createElement('div', { 
        ...attributes, ...listeners, 
            className: classes,}

            , React.createElement('div', { className: "relative flex flex-row gap-1.5 opacity-100"    , style: { width: 'max-content' },}
                    , React.createElement('div', { className: "flex flex-row gap-1.5 opacity-10"   ,}
                        , Array.from({ length: 5 }, (_, index) => React.createElement(IconoirIcons.StarSolid, { key: index, className: "flex-shrink-0",} ))
                    )
                    , React.createElement('div', { className: starClasses, style: { position: 'absolute', width: ratingValue, overflow: 'hidden'},}
                        , Array.from({ length: 5 }, (_, index) => React.createElement(IconoirIcons.StarSolid, { key: index, className: "flex-shrink-0",} ))
                    )
            )
            , label && React.createElement('div', { className: `flex-shrink-0 leading-none font-normal`, style: {order: labelPosition === 'left' ? '-1' : 1},}
            , label
            )
        )
    ); 
}


StarRatings.propTypes = {
    ratingValue: PropTypes.oneOf(['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']),
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf(['left', 'right']),
    color: PropTypes.oneOfType([
        PropTypes.oneOf(['info-content', 'primary', 'accent', 'success-content', 'base-content', 'warning-content', 'error-content', 'orange-500']),
        PropTypes.string]),
    size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', ]),
};

export { StarRatings as default };
//# sourceMappingURL=StarRatings.js.map
