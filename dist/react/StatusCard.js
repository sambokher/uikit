import React from 'react';
import PropTypes from 'prop-types';

function StatusCard(props) {

    const {
        title = "Status",
        value = "Active",
        textSize = 'small',
        statusColor = 'success-content',
        helpText = null,
        attributes,
        listeners,
      } = props;
      

    const sizeStyles = `w-full h-auto ${textSize == 'small' ? 'text-sm' : 'text-base'}`;
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'};

    let wrapperClasses = `flex flex-row items-stretch justify-start gap-3 ${sizeStyles}`;

    const titleFont = textSize == 'small' ? 'text-base' : 'text-lg';
    const smallerFont = textSize == 'small' ? 'text-sm' : 'text-base';

    return (
        React.createElement('div', { 
        ...attributes, ...listeners, 
        className: wrapperClasses,}

        /* Status Circle */
        , React.createElement('div', { className: `flex-shrink-0 w-5 h-5 mt-1 flex items-center justify-center rounded-full`,
        style: {backgroundColor: `color-mix(in srgb, var(--${statusColor}) 50%, transparent)`},}
            , React.createElement('div', { className: `flex-shrink-0 w-3 h-3 rounded-full`, style: {backgroundColor:`var(--${statusColor})`},})
        )

        /* CONTENT BLOCK */
        , React.createElement('div', { className: `flex flex-col flex-grow items-start ${smallerFont} gap-1.5`, style: truncateStyle,}

            , title && React.createElement('div', { className: `flex-shrink-0 flex flex-row items-center relative group`,}
, title
            )

            /* Value */
            , React.createElement('h3', { className: `${titleFont} flex flex-row font-semibold px-3 rounded`, 
            style: {
                ...truncateStyle, 
                color: `var(--${statusColor})`,
                backgroundColor: `color-mix(in srgb, var(--${statusColor}) 12%, transparent)`
            },}
, value
            )


            /* Description */
            , helpText && React.createElement('div', { className: smallerFont, style: truncateStyle,}
, helpText
            )
        )
        )
    );
}


StatusCard.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    textSize: PropTypes.oneOf(['small', 'medium']),
    statusColor: PropTypes.oneOf(['primary', 'accent', 'info-content', 'error-content', 'success-content', 'warning-content']),
    helpText: PropTypes.string,
};

export { StatusCard as default };
//# sourceMappingURL=StatusCard.js.map
