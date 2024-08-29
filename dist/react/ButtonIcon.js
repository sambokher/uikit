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
import Loader from './Loader.js';
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

function ButtonIcon(props) {

    const {
        icon = 'heart',
        
        color = 'base',
        style = 'light',
        state = 'default',
        
        size = 'medium',
        isPill = false,
        
        onClick = () => {},

        marginTop = 'none',
        alignSelf = 'auto',
        hideOnMobile=false,
        defaultIconSet,
        attributes,
        listeners
      } = props;
    
    const buttonStyles = `flex flex-row items-center relative transition-all flex-shrink-0 flex-grow-0 box-border`;

    const isDisabled = state == 'disabled';
    const isLoading = state == 'loading';
    const isActive = state == 'active';

    /* Filled */
    const bgColor = color == 'base' ? 'base-200' : (color == 'primary' || color == 'accent') ? color : color+'-content';
    const textColor = color == 'base' ? 'base-content' : 'base-0';
    const statusStyles = (isDisabled || isLoading ) ? '' : isActive ? 'brightness-90' : 'hover:brightness-110 active:brightness-90';
    const filledStyle = `bg-${bgColor} text-${textColor} ${statusStyles}`;

    /* Outlined */
    const outlinedColor = color == 'base' ? 'base-700' : (color == 'primary' || color == 'accent') ? color : color+'-content';
    const outlineStatusStyles = (isDisabled || isLoading )  ? '' : isActive ? 'bg-current-10' : 'hover:bg-current-10 active:bg-transparent';
    const outlinedStyle = `ring-1 ring-inset ring-${outlinedColor} text-${outlinedColor} ${outlineStatusStyles}`;

    /* Light */
    const lightColor = color == 'base' ? 'base-100' : (color == 'primary' || color == 'accent') ? color+'-content' : color;
    const lightTextColor = (color == 'primary' || color == 'accent') ? color : color+'-content';
    const lightStatusStyles = (isDisabled || isLoading ) ? '' : isActive ? `bg-${lightColor}/75` : `hover:bg-${lightColor}/75`;
    const lightStyle = `bg-${lightColor} text-${lightTextColor} ${lightStatusStyles}`;

    /* Ghost */
    const ghostStatusStyles = (isDisabled || isLoading ) ? '' : isActive ? `bg-current-10` : `hover:bg-current-10`;
    const ghostStyle = `text-${lightTextColor} ${ghostStatusStyles}`;

    const styleMap = {
        filled: filledStyle,
        outlined: outlinedStyle,
        ghost: ghostStyle,
        light: lightStyle
    };

    let typeStyles = styleMap[style];
     
    const selfAlign = `self-${alignSelf}`;
    const sizeStyles = size == 'small' ? `p-1 text-xs` : size == 'large' ? `p-2 text-base` : `p-1.5 text-sm`;


    const cornerStyles = `${isPill ? `rounded-full` : size == 'small' ? 'rounded' : size == 'large' ? 'rounded-lg' : 'rounded-md'}`;
    const marginStyles = marginTop == 'none' ? '' : `mt-${marginTop}`;

    let classes = `${hideOnMobile ? 'hidden md:flex' : ''}
        ${buttonStyles} ${typeStyles} ${sizeStyles} ${cornerStyles} ${selfAlign} ${marginStyles} cursor-pointer
        ${isDisabled ? 'opacity-50 saturate-50 cursor-not-allowed' : ''}`;


    const IconComponent = icon !== 'none' ? React.createElement(Icon, { icon: _optionalChain([icon, 'optionalAccess', _ => _.toLowerCase, 'call', _2 => _2()]), className: 'scale-90',}) : null;
    const PlaceHolderIcon = React.createElement(Icon, { icon: 'heart', className: 'scale-90',} );
    const loaderColor = 'current';

    return (
        React.createElement('button', {
            ...attributes, ...listeners, 
            onClick: onClick,
            className: classes,
            style: {marginTop: marginTop},}

            , React.createElement('div', { className: `${isLoading && 'invisible'}`,}, IconComponent ? IconComponent : PlaceHolderIcon)
            , isLoading && React.createElement('div', { className: "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"    ,}
                , React.createElement(Loader, { 
                size: size == 'small' ? '12px' : '16px',
                color: loaderColor,
                type: "spinner",
                opacity: (style == 'filled') ? '50' : '100',}
                )
                )
        )
    ); 
}

ButtonIcon.propTypes = {
    color: PropTypes.oneOf(['base', 'primary', 'accent', 'warning', 'info', 'success', 'error']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    style: PropTypes.oneOf(['filled', 'outlined', 'ghost', 'light']),
    state: PropTypes.oneOf(['default', 'disabled', 'loading', 'active']),
    icon: PropTypes.oneOf(allIconNames),
    isPill: PropTypes.bool,
    alignSelf: PropTypes.oneOf(['auto', 'start', 'end', 'center']),
    marginTop:  PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px', '24px', '32px' ]),
    hideOnMobile: PropTypes.bool,
    onClick: PropTypes.func
};

export { ButtonIcon as default };
//# sourceMappingURL=ButtonIcon.js.map
