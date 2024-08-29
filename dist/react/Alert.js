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
import Link from './Link.js';
import Button from './Button.js';
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
import './DataCard.js';
import './StatusCard.js';
import './AvatarCard.js';
import './BlogPostCard.js';
import './MediaCard.js';
import { iconMap } from './iconMap.js';

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
const allIconNames = Object.keys(iconMap) || [];

// needs mobile behavior
function Alert(props) {
    
    const {
        type = 'base',
        size = 'medium',
        icon = 'none',
        hasCloseButton = false,
        text = 'This is an alert message',
        style = 'light',
        actionText = '',
        actionType = 'link',
        title = '',
        width = 'auto',
        onActionClick,
        attributes,
        listeners
      } = props;

    const styleMap = {
        'filled': type == 'base' ? `bg-base-content text-base-0` : `bg-${type}-content text-base-0` ,
        'outline': type == 'base' ? `text-base-600 ring-1 ring-inset ring-base-300` : `text-${type}-content ring-1 ring-inset ring-${type}-content`,
        'light': type == 'base' ? `bg-base-100 text-base-content` : `bg-${type}  text-${type}-content`
    };

    const typeStyles = `${styleMap[style]}`;
    
    const sizeStyles = size == 'small' ? `py-2 px-2 gap-2 text-xs` : `py-2.5 px-4 gap-3 text-sm`;
    const widthStyle = width == 'auto' ? `w-auto` : `w-${width}`;
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md";

    let wrapperClasses = `flex flex-row items-start justify-between transition-all duration-100 ${typeStyles} ${sizeStyles} ${cornerStyles} ${widthStyle}`;

    const iconStyleMap = {
        info: 'info',
        error: 'warning',
        base: 'info',
        warning: 'warning',
        success: 'check-circle',
    };
    
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'};
    
    const useIcon = icon == 'auto' ? iconStyleMap[type] : icon;
    
    const IconComponent = icon !== 'none' ? React.createElement(Icon, { icon: _optionalChain([useIcon, 'optionalAccess', _ => _.toLowerCase, 'call', _2 => _2()]),  className: "flex-shrink-0",} ) : null;

    return (
        React.createElement('div', { 
            ...attributes, ...listeners, 
            className: wrapperClasses,}

            , IconComponent
            , React.createElement('div', { className: `flex flex-col flex-grow-1 w-full items-start ${size == 'small' ? 'gap-0.5' : 'gap-1'}`,}
                , title && title != '' && React.createElement('h2', { className: "font-semibold", style: truncateStyle,}
, title
                )
, text
                , (actionText && actionText != '') ? 
                actionType == 'button' ?
                React.createElement(Button, {
                    text: actionText, 
                    size: 'small',
                    type: type == 'base' ? 'secondary' : type,
                    style: 'filled',
                    marginTop: '6px',
                    onClick: onActionClick,}
            ) : 
                React.createElement(Link, { 
                    text: actionText, 
                    onClick: onActionClick,
                    underline: "always",}
                    )
                    : null

            )

            , hasCloseButton && React.createElement(Icon, { icon: "close", className: "flex-shrink-0 mt-0.5" ,})
        )
    ); 
    
}

Alert.propTypes = {
    width: PropTypes.oneOf(["auto", "1/2", "full"]),
    style: PropTypes.oneOf(['filled', 'outline', 'light']),
    text: PropTypes.string.isRequired,
    title: PropTypes.string,
    type: PropTypes.oneOf(['info', 'base', 'error', 'warning', 'success']),
    actionText: PropTypes.string,
    actionType: PropTypes.oneOf(['button', 'link']),
    size: PropTypes.oneOf(['small', 'medium']),
    icon: PropTypes.oneOfType([
        PropTypes.oneOf(['none', 'auto', ...allIconNames]),
        PropTypes.string
    ]),
    hasCloseButton: PropTypes.bool,
    children: PropTypes.node
};

export { Alert as default };
//# sourceMappingURL=Alert.js.map
