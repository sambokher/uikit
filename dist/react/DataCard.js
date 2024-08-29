import React from 'react';
import PropTypes from 'prop-types';
import './AppShell.js';
import './Email.js';
import './Header.js';
import './IconBar.js';
import './Main.js';
import './FeaturePanel.js';
import './Footer.js';
import './Hero.js';
import './SidePanel.js';
import './CollapsibleSidebar.js';
import './Sidebar.js';
import './SidebarLink.js';
import './UserMenu.js';
import './FlexBox.js';
import './Grid.js';
import './Module.js';
import './Heading.js';
import './Text.js';
import './Paragraph.js';
import './Link.js';
import './Button.js';
import './ButtonIcon.js';
import './KebabMenu.js';
import './Tooltip.js';
import './Form.js';
import './InputText.js';
import './TextArea.js';
import './Checkbox.js';
import './RadioButton.js';
import './RadioButtons.js';
import './ToggleSwitch.js';
import './SegmentedSwitch.js';
import './SegmentedSwitchIcons.js';
import './Select.js';
import './Search.js';
import './InputFile.js';
import './InputPIN.js';
import './FileUpload.js';
import './Slider.js';
import './MiniCalendar.js';
import './Avatar.js';
import './Image.js';
import Icon from './Icon.js';
import './Logo.js';
import './CountryFlag.js';
import './FintechLogo.js';
import './Alert.js';
import './Status.js';
import './Loader.js';
import './Badge.js';
import './Tag.js';
import './StarRatings.js';
import './ProgressBar.js';
import './ProgressCircle.js';
import './ProgressSemiCircle.js';
import './LineChart.js';
import './BarChart.js';
import './AreaChart.js';
import './CodeSnippet.js';
import './MiniSnippet.js';
import './TableWidget.js';
import './Divider.js';
import './Dot.js';
import './HeaderLink.js';
import './Tab.js';
import './TabGroup.js';
import './Pagination.js';
import './Modal.js';
import './Popover.js';
import './Banner.js';
import './Toast.js';
import './Drawer.js';
import './ProductCard.js';
import './InfoCard.js';
import './FolderCard.js';
import './FileCard.js';
import './MiniCardHorizontal.js';
import './StatusCard.js';
import './AvatarCard.js';
import './BlogPostCard.js';
import './MediaCard.js';
import { iconMap } from './iconMap.js';

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
const allIconNames = Object.keys(iconMap) || [];

function DataCard(props) {

    
    const {
        title = "Metric",
        value = "$10,500",
        changeValue = "+12%",
        changeColor = 'none',
        textSize = 'small',
        icon = 'chart-up',
        helpText = null,
        attributes,
        listeners,
        defaultIconSet
      } = props;
      

    const sizeStyles = `w-full h-auto ${textSize == 'small' ? 'text-sm' : 'text-base'}`;
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'};

    let wrapperClasses = `flex flex-row items-stretch justify-start gap-3 ${sizeStyles}`;

    const titleFont = textSize == 'small' ? 'text-base' : 'text-lg';
    const smallerFont = textSize == 'small' ? 'text-sm' : 'text-base';
    
    const IconComponent = icon && icon !== 'none' ? React.createElement(Icon, { icon: _optionalChain([icon, 'optionalAccess', _ => _.toLowerCase, 'call', _2 => _2()]), defaultIconSet: defaultIconSet,} ) : null;

    return (
        React.createElement('div', { 
        ...attributes, ...listeners, 
        className: wrapperClasses,}

        , IconComponent

        /* CONTENT BLOCK */
        , React.createElement('div', { className: `flex flex-col flex-grow items-start ${smallerFont} gap-1.5`, style: truncateStyle,}

            , title && React.createElement('div', { className: `flex-shrink-0 flex flex-row items-center relative group`,}
, title
            )

            /* Value */
            , React.createElement('div', { className: "flex flex-row items-baseline gap-2"   ,}
                    , React.createElement('h3', { className: `${titleFont} flex flex-row font-semibold `, style: truncateStyle,}
, value
                    )
                    , React.createElement('span', { className: `${smallerFont} font-medium text-${changeColor}`, style: truncateStyle,}
, changeValue
                    )
            )


            /* Description */
            , helpText && React.createElement('div', { className: `${smallerFont} -mt-1`, style: truncateStyle,}
, helpText
            )
        )
        )
    );
}


DataCard.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    changeValue: PropTypes.string,
    hasOutline: PropTypes.bool,
    changeColor: PropTypes.oneOf(['none', 'primary', 'primary-content', 'accent', 'accent-content', 'base-content', 'base-500', 'base-700', 'base-900'
    ,'success-content', 'warning-content', 'warning-content', 'error-content', 'info-content']),
    textSize: PropTypes.oneOf(['small', 'medium']),
    icon: PropTypes.oneOf(['none', ...allIconNames]),
    iconColor: PropTypes.oneOf(['none', 'primary', 'primary-content', 'accent', 'accent-content', 'base-content', 'base-500', 'base-700', 'base-900'
    ,'success-content', 'warning-content', 'warning-content', 'error-content', 'info-content']),
    helpText: PropTypes.string,
};

export { DataCard as default };
//# sourceMappingURL=DataCard.js.map
