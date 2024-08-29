import React, { useState, useEffect } from 'react';
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

function HeaderLink(props) {
    
    const {
        text = 'Item',
        fontWeight = 'medium',
        leftIcon = 'none',
        rightIcon = null,
        size = 'medium',
        width = 'auto',
        dropdownBgColor = 'base-0',
        background = null,
        showDropdown = false,
        onClick = () => {},
        defaultIconSet,
        children,
        attributes,
        listeners,
        openDirection = 'downward-right'
        // openBehavior = 'onClick', // Commented until hover is also implemented
      } = props;

    const fontWeightStyles = fontWeight !== 'inherit' ? `font-${fontWeight}` : '';
    const sizeStyles = size == 'small' ? `py-1 px-1.5 gap-1.5 text-xs` : `py-1.5 px-3 gap-2 text-sm`;
    const widthStyle = width == 'full' ? `w-full self-stretch` : `w-${width}`;
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md";
    const borderStyles = `border border-transparent`;
    const bgStyles = (!background || background == 'none') ? '' : `bg-${background} transition-all hover:brightness-95`; 
    const fontColor = (!background || background == 'none') ? 'text-inherit' : _optionalChain([background, 'optionalAccess', _ => _.startsWith, 'call', _2 => _2('base')]) ? 'text-base-content' : `text-${background}-content`;

    let linkClasses = `flex flex-row items-center justify-between relative cursor-default ${widthStyle} ${fontWeightStyles} ${sizeStyles} ${bgStyles} ${cornerStyles} ${fontColor} ${borderStyles}`;
    const iconWidth = size == 'small' ? 'w-4' : size == 'large' ? 'w-6' : 'w-5';
    
    const LeftIcon = leftIcon !== 'none' ? React.createElement(Icon, { icon: _optionalChain([leftIcon, 'optionalAccess', _3 => _3.toLowerCase, 'call', _4 => _4()]), defaultIconSet: defaultIconSet, className: `flex-shrink-0 scale-90 ${iconWidth}`,}) : null;
    const RightIcon = rightIcon ? React.createElement(Icon, { icon: _optionalChain([rightIcon, 'optionalAccess', _5 => _5.toLowerCase, 'call', _6 => _6()]), defaultIconSet: defaultIconSet, className: `flex-shrink-0 opacity-60 scale-[0.8]`,} ) : null;
    
    

    const shadowStyles = size == 'small' ? 'shadow-sm' : 'shadow';
    const dropdownSizeStyles = size == 'small' ? 'py-1.5 px-1.5 rounded-md gap-1' : 'p-2 rounded-lg gap-1.5';
    const dropwdownClasses = `absolute -bottom-2 left-1/2 -translate-x-1/2 text-base-content translate-y-full border flex flex-col min-w-full bg-${dropdownBgColor} ${dropdownSizeStyles} ${shadowStyles}`; 
    
    const [ open, setOpen ] = useState(showDropdown);
    useEffect(() => {
        setOpen(showDropdown);
    }, [showDropdown]);

    let wrapperClasses = `relative flex-shrink-0 flex items-center justify-center`;

    return (
        React.createElement('div', {
            ...attributes, ...listeners, 
            className: wrapperClasses,
        onClick: () => children && _optionalChain([children, 'optionalAccess', _7 => _7.length]) > 0 ? setOpen(!open) : onClick(),}

            , React.createElement('div', { className: linkClasses,}
                , LeftIcon
                , React.createElement('div', { className: "flex-grow w-full" ,}
                , text
                )
                , RightIcon
            )
            , open && React.createElement('div', { className: dropwdownClasses, 
            style: { minWidth: size == 'small' ? 120 : 180, minHeight: size == 'small' ? 28 : 36},}
                    , children
            )
        )
    );
}

HeaderLink.propTypes = {
    background: PropTypes.oneOfType([
        PropTypes.oneOf(["base-0", "base-100", "base-200", "primary", "accent", "base-900"]),
        PropTypes.string]),
    text: PropTypes.string,
    fontWeight: PropTypes.oneOf(['auto', 'light', 'normal', 'medium', 'semibold']),
    size: PropTypes.oneOf(['small', 'medium']),
    leftIcon: PropTypes.oneOf(['none', ...allIconNames]),
    rightIcon: PropTypes.oneOf(['none', 'chevron-down', 'plus']),
    width: PropTypes.oneOf(['auto', 'full']),
    showDropdown: PropTypes.bool,
    openDirection: PropTypes.oneOf(['downward-right', 'downward-left']),
    dropdownBgColor: PropTypes.oneOf(['base-0', 'base-100', 'base-200', 'none',]),
    // openBehavior: PropTypes.oneOf(['onHover', 'onClick']),
};

export { HeaderLink as default };
//# sourceMappingURL=HeaderLink.js.map
