import PropTypes from 'prop-types';
import React, { useState } from 'react';
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

function InputText(props) {
    
    const {
        state = 'default',
        placeholder = 'placeholder text',
        bgColor = 'base-0',
        size = 'medium',
        label = '',
        helperText = '',
        rightIcon = 'none',
        leftIcon = 'none',
        value = '',
        prefix = '',
        suffix = '',
        textAlign = 'left',
        width = 'auto',
        onFocus=()=>{},
        hasOutline = true,
        attributes,
        listeners,
        name,
        type,
        onChange,
        onBlur,
      } = props;
    useState(value);
    
    // const sizeStyles = size == 'small' ? `py-1 px-2 gap-1.5` : size == 'large' ? `py-2 px-3 gap-3` : `py-1.5 px-2 gap-3`;
    const paddingX = size == 'small' ? `px-2` : size == 'large' ? `px-3` : `px-2.5`;
    const gapUnit = size == 'small' ? 1.5 : size == 'large' ? 2.5 : 2;
    const paddingY = size == 'small' ? `py-1.5` : size == 'large' ? `py-3` : `py-2`;

    const textSize = size == 'small' ? 'text-xs' : size == 'large' ? 'text-base' : 'text-sm';
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md";
    
    // default
    let stateStyles = hasOutline ? `ring-1 ring-inset ring-base-200 focus-within:ring-[1.5px] focus-within:ring-accent` : '';
    switch (state) {
        case 'disabled':
            stateStyles = `bg-base-100 opacity-70 cursor-not-allowed ${hasOutline ? 'ring-1 ring-inset ring-base-200' : ''}`;
            break;
        case 'error':
            stateStyles = `text-warning-content ${hasOutline ? 'ring-1 ring-inset ring-warning-content' : ''}`;
            break;
        case 'success':
            stateStyles = `text-success-content ${hasOutline ? 'ring-1 ring-inset ring-success-content' : ''}`;
            break;
    }
    
    const bgStyles = (bgColor && bgColor !== 'none') ? `bg-${bgColor} ${!hasOutline && 'brightness-95'}` : '';
    
    
    let inputWrapper = `w-full relative flex flex-row items-center ${paddingX} ${textSize} ${cornerStyles} ${bgStyles} ${stateStyles} `;


    
    const labelTextSize = size == 'small' ? `text-xs` :  size == 'large' ? `text-lg`: `text-sm`;
    const labelClasses = `text-base-content ${labelTextSize} font-medium`;

    const messageTextColor = state == 'error' ? stateStyles = 'text-warning-content' : state == 'success' ? stateStyles = 'text-success-content' : '';
    const messageClasses = size == 'large' ? `text-sm  ${messageTextColor}` : `text-xs ${messageTextColor}`;
    const widthStyle = width != 'auto' ? `w-${width}` : size == 'small' ? '' : size == 'large' ? 'min-w-[200px]' : 'min-w-[160px]';
    
    
    const iconSize = size == 'small' ? '16px' : size == 'large' ? '24px' : '20px';
    const iconStyle = size == 'small' ? 'w-4' : size == 'large' ? 'w-6' : 'w-5'; // temporary before we fix Icon
    const LeftIconComponent = leftIcon !== 'none' ? React.createElement(Icon, { icon: _optionalChain([leftIcon, 'optionalAccess', _ => _.toLowerCase, 'call', _2 => _2()]), size: iconSize, className: `flex-shrink-0 scale-90 ${iconStyle}`,}) : null;
    const RightIconComponent = rightIcon !== 'none' ? React.createElement(Icon, { icon: _optionalChain([rightIcon, 'optionalAccess', _3 => _3.toLowerCase, 'call', _4 => _4()]), size: iconSize, className: `flex-shrink-0 scale-90 ${iconStyle}`,}) : null;

    const gapStyles = size == 'small' ? 'gap-0.5' : size == 'large' ? 'gap-1.5' : 'gap-1';
    let wrapperClasses = `flex flex-col ${widthStyle} ${gapStyles}`;

    const inputPaddingX = `${(prefix || LeftIconComponent) ? 'pl-'+gapUnit : ''} ${(suffix || RightIconComponent) ? 'pr-'+gapUnit : ''}`;

    // pr-0.5 pr-1 pr-1.5 pr-2 pr-2.5 pl-0.5 pl-1 pl-1.5 pl-2 pl-2.5
    // ml-0.5 ml-1 ml-1.5 ml-2 ml-2.5 mr-0.5 mr-1 mr-1.5 mr-2 mr-2.5

    return (
        React.createElement('div', {
        ...attributes, ...listeners, 
            className: wrapperClasses,}

            , label && ( 
                React.createElement('label', { className: labelClasses,}
, label
                )
            )
            , React.createElement('div', { className: inputWrapper,}
            , LeftIconComponent
            , React.createElement('span', { className: `flex-shrink-0 ${LeftIconComponent && prefix ? `pl-${gapUnit}` : ''}`,}, prefix)
            , React.createElement('input', {
            type: type,
            name: name,
            onBlur: () => onBlur(),
            onChange: (e) => onChange(e),
disabled: state == 'disabled',
            onFocus: () => onFocus(),
            className: `block w-full text-${textAlign} ${paddingY} border-0 border-transparent focus:outline-none focus:ring-0 font-medium placeholder:font-normal
            placeholder-base-500 text-base-content ${state == 'disabled' && 'cursor-not-allowed'} ${inputPaddingX}`,
            value: value,
            placeholder: placeholder,}
            )
            , React.createElement('span', { className: `flex-shrink-0 ${RightIconComponent && suffix ? `pr-${gapUnit}` : ''}`,}
            , suffix
            )
            , RightIconComponent
            )
            , helperText && React.createElement('span', {
            className: messageClasses,}

, helperText
            )
        )
        
    );
}

InputText.propTypes = {
    width: PropTypes.oneOf(["auto", "1/2", "full"]),
    state: PropTypes.oneOf(['default', 'disabled', 'error', 'success']),
    bgColor: PropTypes.oneOf(['none', 'base-0', 'base-50', 'base-100']),
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    helperText: PropTypes.string,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    textAlign: PropTypes.oneOf(['left', 'right', 'center']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    leftIcon: PropTypes.oneOf(['none', ...allIconNames]),
    rightIcon: PropTypes.oneOf(['none', ...allIconNames]),
    hasOutline: PropTypes.bool,
    type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel', 'url']),
    name: PropTypes.string,
};

export { InputText as default };
//# sourceMappingURL=InputText.js.map
