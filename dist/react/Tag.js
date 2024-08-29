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
import './DataCard.js';
import './StatusCard.js';
import './AvatarCard.js';
import './BlogPostCard.js';
import './MediaCard.js';
import { iconMap } from './iconMap.js';

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
const allIconNames = Object.keys(iconMap) || [];

function Tag(props) {
    
    const {
        text = 'Tag',
        type = 'filled',
        color = 'info-content',
        size = 'medium',
        leftIcon = 'none',
        rightIcon = 'close',
        isPill = true,
        attributes,
        listeners
      } = props;
    
    // CONTAINER STYLES
    const styleMap = {
        'filled': color == 'base-200' ? `bg-base-200 text-base-content border-transparent` : `bg-${color} text-white border-transparent` ,
        'outline': color == 'base-200' ? `text-base-600 border-base-300` : `text-${color} border-${color}`,
        'light': color == 'base-200' ? `bg-base-100 text-base-content border-base-200` : `text-${color} border-transparent`
    };
    
    const sizeStyleMap = {
        small: `text-xs py-0.5 gap-1.5 ${isPill ? 'rounded-full px-2' : 'rounded px-1.5'}`,
        medium: `text-sm py-1 gap-2 ${isPill ? 'rounded-full px-3' : 'rounded-md px-2'}`,
    };

    const sizeStyles = sizeStyleMap[size];

    let wrapperClasses = `flex font-semibold items-center flex-shrink-0 justify-center ${sizeStyles} ${styleMap[type]}`;
    
    const LeftIconComponent = leftIcon !== 'none' ? React.createElement(Icon, { icon: _optionalChain([leftIcon, 'optionalAccess', _ => _.toLowerCase, 'call', _2 => _2()]), className: `flex-shrink-0`,}) : null;
    const RightIconComponent = rightIcon !== 'none' ? React.createElement(Icon, { icon: _optionalChain([rightIcon, 'optionalAccess', _3 => _3.toLowerCase, 'call', _4 => _4()]), className: "flex-shrink-0 scale-90" ,}) : null;

    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'};

    return (
        React.createElement('div', { 
            ...attributes, ...listeners, 
            className: wrapperClasses, style: {
                borderWidth: 1,
                backgroundColor: type == 'light' && `color-mix(in srgb, var(--${color}) 16%, transparent)`
            },}

        , LeftIconComponent
        , React.createElement('span', { style: truncateStyle, className: "flex-grow",}
            , text
        )
        , RightIconComponent
        )
    ); 
}

Tag.propTypes = {
    text: PropTypes.string,
    type: PropTypes.oneOf(['filled', 'outline', 'light']),
    color: PropTypes.oneOf(['info-content', 'primary', 'accent', 'base-200', 'success-content', 'base-content', 'warning-content', 'error-content']),
    size: PropTypes.oneOf(['small', 'medium']),
    leftIcon: PropTypes.oneOf(['none', ...allIconNames]),
    rightIcon: PropTypes.oneOf(['none', 'close', 'check', 'check-circle']), 
    isPill: PropTypes.bool,
};

export { Tag as default };
//# sourceMappingURL=Tag.js.map
