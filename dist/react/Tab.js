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

function Tab(props) {
    
    const {
        text = 'Tab',
        tabColor = 'accent',
        icon = 'none',
        state = 'inactive',
        size = 'small',
        borderPosition = 'bottom',
        attributes,
        listeners
      } = props;

    let sizeStyles = '';
    const direction = borderPosition == 'left' || borderPosition == 'right' ? 'v' : 'h';
    if (direction == 'h') {
        sizeStyles = size == 'small' ? `py-1 text-xs gap-1.5` :  
        size == 'large' ? `py-3 gap-3 text-md`: `py-1.5 gap-2 text-sm`;
    } else {
        sizeStyles = size == 'small' ? `px-2 text-xs gap-1.5` :  
        size == 'large' ? `px-4 text-md gap-3`: `px-3 text-sm gap-2`;
    }
    
    let wrapperClasses = `flex flex-row items-center justify-center pointer relative ${sizeStyles} border border-transparent group`;

    const iconWidth = size == 'small' ? '16px' : size == 'large' ? '24px' : '20px';
    const IconComponent = icon !== 'none' ? React.createElement(Icon, { icon: _optionalChain([icon, 'optionalAccess', _ => _.toLowerCase, 'call', _2 => _2()]), size: iconWidth, className: `flex-shrink-0`,}) : null;

    /* Tailwind safelist
    group-hover:bg-accent, group-hover:bg-accent-content, group-hover:bg-accent-focus,
    group-hover:bg-primary, group-hover:bg-primary-content, group-hover:bg-primary-focus,
    group-hover:bg-base-0, group-hover:bg-base-100, group-hover:bg-base-200, group-hover:bg-base-300, group-hover:bg-base-400, group-hover:bg-base-500, group-hover:bg-base-600, group-hover:bg-base-700, group-hover:bg-base-900, group-hover:bg-base-content,
    */

    const borderClasses = state == 'active' ? `bg-${tabColor}` : `transitiona-all duration-100 group-hover:bg-${tabColor}`;
    const borderElement = {
        position: 'absolute',
        top: borderPosition == 'top' ? 0 : null,
        bottom: borderPosition == 'bottom' ? 0 : null,
        left: borderPosition == 'left' ? 0 : null,
        right: borderPosition == 'right' ? 0 : null,
        width: direction == 'h' ? '100%' : size == 'small' ? '2px' : size == 'large' ? '4px' : '3px', 
        height: direction == 'v' ? '100%' : size == 'small' ? '2px' : size == 'large' ? '4px' : '3px',
        borderRadius: 1, 
    };

    return (
        React.createElement('div', {
        ...attributes, ...listeners, 
            className: wrapperClasses,}

            , IconComponent
                , text
            , React.createElement('div', {  className: borderClasses, style: borderElement,} )
        )
    );
}

Tab.propTypes = {
    text: PropTypes.string,
    leftIcon: PropTypes.oneOf(['none', ...allIconNames]),
    tabColor: PropTypes.oneOf(['primary', 'primary-content', 'accent', 'accent-content', 'base-content', 'base-500', 'base-700', 'base-900']),
    state: PropTypes.oneOf(['active', 'inactive']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    borderPosition: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
};

export { Tab as default };
//# sourceMappingURL=Tab.js.map
