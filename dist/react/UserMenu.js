import React, { useState } from 'react';
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
import Tooltip from './Tooltip.js';
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
import Avatar from './Avatar.js';
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
import './DataCard.js';
import './StatusCard.js';
import './AvatarCard.js';
import './BlogPostCard.js';
import './MediaCard.js';

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
function UserMenu(props) {
    
    const {
        size = 'medium',
        width = 'auto',
        color = 'accent',
        name = 'JD',
        avatarPosition = 'left',
        avatarType = 'initials',
        imageSrc = null,
        icon = null,
        isCollapsed,
        isActive,
        onClick,
        children, 
        attributes,
        listeners
      } = props;
    
    const [isOpen, setIsOpen] = useState(false);

    const sizeStylesMap = {
        small: `py-1 px-1 text-xs`,
        medium: `py-1.5 px-1.5 text-sm`,
        large: `py-3 px-3 text-base`
    };
    const borderStyles = `border border-transparent`;
    const gapStyles = isCollapsed ? 'gap-0' : size == 'small' ? 'gap-1.5' : size == 'large' ? 'gap-3' : 'gap-2';
    const imageSize = size == 'small' ? '20px' : size == 'medium' ? '28px' : '40px';
    const bgStyles = (isActive || isOpen) ? 'juno-current-color-bg' : 'juno-current-color-hover-bg';
    const cornerStyles = isCollapsed ? 'rounded-full' : size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md";
    const widthStyles = isCollapsed ? 'w-auto' : `w-${width}`;

    let classes = `relative flex gap-1 ${widthStyles} ${sizeStylesMap[size]} ${cornerStyles} ${bgStyles} ${borderStyles} items-center justify-between cursor-default transition-all duration-500 group`;

    const IconComponent = icon ? React.createElement(Icon, { icon: _optionalChain([icon, 'optionalAccess', _ => _.toLowerCase, 'call', _2 => _2()]), className: "scale-75 opacity-0 group-hover:opacity-100 hover:scale-90 transition-all cursor-pointer"     , 
    style: {order: avatarPosition == 'left' ? 1 : -1},}
    ) : null;

    return (
        React.createElement('div', {
        className: classes,
        ...attributes, ...listeners, 
            onClick: (e) => {e.stopPropagation(); setIsOpen(!isOpen);},}

        , React.createElement('div', { className: `${gapStyles} flex items-center`,}


        , React.createElement(Avatar, { 
            initials: name,
            bgColor: color,
            imageSrc: imageSrc,
            size: imageSize, 
            type: avatarType,}
            
            )
        , React.createElement('div', { className: `${isCollapsed ? 'w-0 opacity-0' : `w-auto ${isActive ? 'opacity-100' : 'opacity-80'}`} 
            transition-all whitespace-nowrap truncate text-ellipsis  select-none
            ${size == 'small' ? 'text-xs' : 'text-sm'} font-medium `,
            style: {order: avatarPosition == 'left' ? 1 : -1},}

        , name
        )
        )
        , isOpen && _optionalChain([children, 'optionalAccess', _3 => _3.length]) > 0 &&
        React.createElement('div', { className: `absolute -bottom-1 translate-y-full right-0 bg-white !bg-base-0 shadow-md p-1.5 border-[0.5px] border-slate-200 !border-base-200 rounded-md z-10
        flex flex-col items-stretch`,}

            , children
        )

        , !isCollapsed && icon && IconComponent

        , isCollapsed && name != '' &&
                React.createElement(Tooltip, {
                    direction: avatarPosition == 'right' ? 'left' : 'right',
                    size: size == 'small' ? 'small' : 'medium', 
                    bgColor: "base-content", 
                    text: name,} 
                    )
            
    )
 )
}



UserMenu.propTypes = {
    color: PropTypes.oneOfType([
        PropTypes.oneOf(["base-0", 'base-50', "base-100", "base-200", "primary", "accent"]),
        PropTypes.string]),
    size: PropTypes.oneOf(['medium', 'small']),
    avatarPosition: PropTypes.oneOf(['left', 'right']),
    icon: PropTypes.oneOf(['chevron-right', 'chevron-down', 'chevron-left']),
    avatarType: PropTypes.oneOf(['image', 'initials']),
    width: PropTypes.oneOf(['auto', 'full']),
    isActive: PropTypes.bool,
    isCollapsed: PropTypes.bool,
    imageSrc: PropTypes.string,
    name: PropTypes.string,
};

export { UserMenu as default };
//# sourceMappingURL=UserMenu.js.map
