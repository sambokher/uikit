import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
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
import './DataCard.js';
import './StatusCard.js';
import './AvatarCard.js';
import './BlogPostCard.js';
import './MediaCard.js';
import { iconMap } from './iconMap.js';

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
const allIconNames = Object.keys(iconMap) || [];

function SidebarLink(props) {
    
    const {
        text = 'Item',
        fontWeight = 'auto',
        leftIcon = 'Home',
        size = 'medium',
        displayChildren = true,
        width = 'full',
        indentLevel = '0',
        color = 'none',
        isCollapsed = false,
        isActive = false,
        usePadding = true,
        hoverEffect = false,
        onClick = () => {},
        children,
        attributes,
        listeners,
        defaultIconSet
      } = props;


    const fontWeightStyles = fontWeight == 'auto' ? 'font-normal' : `font-${fontWeight}`;
    
    const sizeStylesMap = {
        small: usePadding ? `p-1 text-xs` : `py-1 px-0 text-xs`,
        medium: usePadding ? `p-1.5 text-sm` : `py-1.5 px-0 text-sm`,
        large: usePadding ? `p-2.5 text-base` : `py-3 px-0 text-base`
        
    };
    const gapStyles = isCollapsed ? 'gap-0' : size == 'small' ? 'gap-2' : size == 'large' ? 'gap-3' : 'gap-2.5'; // was 3 for medium
    
    const sizeStyles = sizeStylesMap[size] || sizeStylesMap['medium'];

    const widthStyle = (width == 'auto' || isCollapsed) ? `w-auto` : `w-${width} self-stretch`;
    
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md";
    const borderStyles = `border border-transparent`;
    
    const innerGap = size == 'small' ? 'gap-0' : size == 'large' ? 'gap-1.5' : 'gap-1';
    let wrapperClasses = `transition-all relative group flex flex-col duration-75
        ${widthStyle} ${fontWeightStyles} ${innerGap}`;

    const hoverStyles = 
    hoverEffect ? isActive ? 'juno-current-color-bg' : 
'juno-current-color-hover-bg'
    : isActive ? 'opacity-100'
: 'opacity-70 hover:opacity-100';
    

    let innerClasses = `transition-all relative flex flex-row items-center justify-between cursor-default duration-150 
        ${hoverStyles} w-full ${sizeStyles} ${cornerStyles} ${borderStyles} ${gapStyles}`; 

    const iconWidth = size == 'small' ? 'w-4' : size == 'large' ? 'w-6' : 'w-5';
    const IndentElement = React.createElement(React.Fragment, null, React.createElement('div', { className: `flex-shrink-0 ${iconWidth}`,}));
    const indentValue = parseInt(indentLevel) || 0;

    const LeftIconComponent = leftIcon !== 'none' ? React.createElement(Icon, { icon: _optionalChain([leftIcon, 'optionalAccess', _2 => _2.toLowerCase, 'call', _3 => _3()]), className: `flex-shrink-0  ${iconWidth}`, defaultIconSet: defaultIconSet,} ) : null;

    const [isOpen, setIsOpen] = useState(displayChildren);
    useEffect(() => {
        setIsOpen(displayChildren);
    }, [displayChildren]);
    
    
    return (
        React.createElement('div', { className: wrapperClasses, 
        ...attributes, ...listeners,}
        , React.createElement('div', {
            className: innerClasses,
            onClick: onClick,
            style: {
                color: color != 'none' && `var(--${color})`,
                },}

            , !isCollapsed && _optionalChain([Array, 'call', _4 => _4(indentValue), 'optionalAccess', _5 => _5.fill, 'call', _6 => _6(), 'optionalAccess', _7 => _7.map, 'call', _8 => _8((_, index) => (
            React.createElement(React.Fragment, { key: index,}, IndentElement)
            ))])
            , LeftIconComponent



            , React.createElement('div', { className: `flex flex-row flex-grow justify-between ${gapStyles} transition-all duration-0 ${isCollapsed ? 'w-0 h-0 pointer-events-none opacity-0' : 'w-auto'}`,}
                , text
                , _optionalChain([children, 'optionalAccess', _9 => _9.length]) > 0 ?
                        React.createElement(Icon, { icon: 'chevron-down', 
                        defaultIconSet: defaultIconSet,
                        onClick: ()=>setIsOpen(!isOpen),
                        className: `flex-shrink-0 text-xs my-auto transition-all ${isCollapsed ? 'opacity-0' : 'opacity-0 group-hover:opacity-60'} transition-all ${isOpen ? 'rotate-180' : 'rotate-0'}`,} 
                        )
                : null
                
            )
            , isCollapsed && text != '' &&
                React.createElement(Tooltip, { 
                    direction: "right", // up, down, left, right // need to add a prop
                    size: size == 'small' ? 'small' : 'medium', 
                    bgColor: "base-content", 
                    text: text,} 
                    )
            
        )
        , isOpen && !isCollapsed && _optionalChain([children, 'optionalAccess', _10 => _10.length]) > 0 &&
        React.createElement('div', { className: `${isOpen ? 'h-auto' : 'h-0'} w-full flex flex-col ${innerGap} transition-all`,}
        , children
        )
        )
    );
}

SidebarLink.propTypes = {
    color: PropTypes.oneOfType([
        PropTypes.oneOf(["base-0", 'base-50', "base-100", "base-200", "primary", "accent", "none"]),
        PropTypes.string]),
    text: PropTypes.string,
    fontWeight: PropTypes.oneOf(['auto', 'light', 'normal', 'medium', 'semibold']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    leftIcon: PropTypes.oneOf(['none', ...allIconNames]),
    width: PropTypes.oneOf(['auto', 'full']),
    indentLevel: PropTypes.oneOf(['0', '1', '2']),
    isActive: PropTypes.bool,
    isCollapsed: PropTypes.bool,
    displayChildren: PropTypes.bool,
    children: PropTypes.node,
    usePadding: PropTypes.bool,
    hoverEffect: PropTypes.bool,
    onClick: PropTypes.func
};

export { SidebarLink as default };
//# sourceMappingURL=SidebarLink.js.map
