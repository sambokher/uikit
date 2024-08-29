import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
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

function TextArea(props) {
    
    const {
        state = 'default',
        bgColor = 'base-0',
        size = 'medium',
        maxRows = 5,
        defaultRows = 3,
        placeholder = 'placeholder text',
        label = 'Label',
        helperText = '',
        value = '',
        maxCharacters = 200,
        onChange = () => {},
        prefix = '',
        hasCharacterCount = true,
        textAlign = 'left',
        width = 'auto',
        rightIcon = 'none',
        hasOutline = true,
        defaultIconSet,
        attributes,
        listeners
      } = props;
    
    const textAreaRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);


    const sizeStyles = size == 'small' ? `py-0.5 px-2 gap-1.5 text-xs` : size == 'large' ? `py-2 px-3 gap-3 text-base` : `py-1.5 px-2 gap-3 text-sm`;
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md";
    

    let stateStyles = '';
    switch (state) {
        case 'default':
            stateStyles = hasOutline ? isFocused ? `border border-accent` : `border border-base-300` : 'border border-transparent';
            break;
        case 'disabled':
            stateStyles = `bg-base-100 opacity-70 cursor-not-allowed ${hasOutline ? 'border border-base-300' : ''}`;
            break;
        case 'error':
            stateStyles = `text-warning-content ${hasOutline ? 'border border-warning-content' : ''}`;
            break;
        case 'success':
            stateStyles = `${hasOutline ? 'border border-success-content' : ''}`;
            break;
    }

    
    
    const bgStyles = (bgColor && bgColor !== 'none') ? `bg-${bgColor}` : '';
    let classes = `w-full flex items-center justify-between truncate ellipsis box-border font-medium ${sizeStyles} ${cornerStyles} ${bgStyles} ${stateStyles}`;
    
    const labelTextSize = size == 'small' ? `text-sm` :  size == 'large' ? `text-lg`: `text-md`;
    const labelClasses = `text-base-content ${labelTextSize} font-medium`;
    
    const messageTextColor = state == 'error' ? stateStyles = 'text-warning-content' : state == 'success' ? stateStyles = 'text-success-content' : '';
    const messageClasses = `text-sm font-sm ${messageTextColor}`;
    const widthStyle = width != 'auto' ? `w-${width}` : size == 'small' ? 'min-w-[120px]' : size == 'large' ? 'min-w-[200px]' : 'min-w-[160px]';

    let wrapperClasses = `flex flex-col gap-1 ${widthStyle}`;

    const RightIconComponent = rightIcon !== 'none' ? React.createElement(Icon, { icon: _optionalChain([rightIcon, 'optionalAccess', _ => _.toLowerCase, 'call', _2 => _2()]), defaultIconSet: defaultIconSet, className: "flex-shrink-0 flex-grow-0 -mr-1 self-start"   ,}) : null;

    // Code to auto-resize the textarea
    const lineHeight = size == 'small' ? 1 : size == 'large' ? 1.5 : 1.25;
    const textAreaStyles = {
        lineHeight,
        height: 'auto',
        minHeight: Math.min(defaultRows, maxRows) * lineHeight + 'em',
        maxHeight: maxRows * lineHeight + 'em',
        overflow: 'auto'
    };
    
    const adjustTextAreaHeight = (lineHeight, maxRows) => {
        const textAreaElement = textAreaRef.current;
        if (!textAreaElement) return;
        textAreaElement.style.height = 'auto';
        const newHeight = textAreaElement.scrollHeight;
        const maxHeight = lineHeight * maxRows * 16; // Assuming lineHeight is in rem
        textAreaElement.style.height = `${Math.min(newHeight, maxHeight)}px`;
    };

    useEffect(() => {
        adjustTextAreaHeight(parseFloat(textAreaStyles.lineHeight), maxRows);
        // Optional: If the value is part of the state and could change externally,
        // you might want to observe changes and adjust the height accordingly.
    }, [maxRows, value]); // Add other dependencies as necessary

    // Code to count characters
    const countCharacters = (text) => { return text.length || 0 };
    const [ charCount, setCharCount ] = useState(countCharacters(value.length));

    function handleChange(e) {
        adjustTextAreaHeight(parseFloat(textAreaStyles.lineHeight), maxRows);
        setCharCount(countCharacters(e.target.value)); 
        onChange(e.target.value);
    }
    

    return (
        React.createElement('div', {
        ...attributes, ...listeners, 
            className: wrapperClasses,}

            , label && React.createElement('label', { className: labelClasses,}
, label
                )
            , React.createElement('div', { style: {boxSizing: 'border-box'}, className: classes,}
            , prefix

            , React.createElement('textarea', {
            type: "text",
            ref: textAreaRef,
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
            disabled: state == 'disabled',
            className: `flex-grow text-${textAlign} border-transparent focus:outline-none focus:ring-0 font-medium resize-none placeholder:font-normal
            placeholder-base-500 text-base-content bg-transparent w-full ${state == 'disabled' && 'cursor-not-allowed'}`,
            value: value,
            style: textAreaStyles,
            placeholder: placeholder,
            onChange: e => handleChange(e),}
            )
            , RightIconComponent
            )
            , (helperText || hasCharacterCount) &&
            React.createElement('div', { className: `flex flex-row gap-2 items-start justify-between w-full ${messageClasses}`,}
            , React.createElement('span', null
, helperText
            )
            , React.createElement('span', { className: `opacity-70 flex-shrink-0 text-xs ${charCount > maxCharacters ? 'text-warning' : '' }`,}, charCount, "/", maxCharacters)
            )
            
        )
        
    );
}

TextArea.propTypes = {
    width: PropTypes.oneOf(["auto", "1/2", "full"]),
    textAlign: PropTypes.oneOf(['left', 'center', 'right']),
    defaultRows: PropTypes.number,
    maxRows: PropTypes.number,
    state: PropTypes.oneOf(['default', 'disabled', 'error', 'success']),
    bgColor: PropTypes.oneOf(['none', 'base-0', 'base-50', 'base-100']),
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    helperText: PropTypes.string,
    hasCharacterCount: PropTypes.bool,
    prefix: PropTypes.string,
    rightIcon: PropTypes.oneOf(['none', ...allIconNames]),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    maxCharacters: PropTypes.number,
    hasOutline: PropTypes.bool,
};

export { TextArea as default };
//# sourceMappingURL=TextArea.js.map
