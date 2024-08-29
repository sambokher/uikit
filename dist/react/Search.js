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
import ButtonIcon from './ButtonIcon.js';
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

function Search(props) {
    
    const {
        size = 'medium',
        state = 'default',
        bgColor = 'base-0',
        placeholder = 'Search',
        includeIcon = true,
        width = 'auto',
        hasOutline = true,
        attributes,
        listeners,
        defaultIconSet
      } = props;
    
    const [ isFocused, setIsFocused ] = useState(false);
    const [ query , setQuery] = useState('');

    const sizeStyles = size == 'small' ? `py-1 px-2 gap-1.5 text-xs` : size == 'large' ? `py-2 px-3 gap-3 text-base` : `py-1.5 px-2 gap-3 text-sm`;
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md";
    
    const widthStyle = width != 'auto' ? `w-${width}` : size == 'small' ? 'min-w-[120px]' : size == 'large' ? 'min-w-[200px]' : 'min-w-[160px]';

    let stateStyles = hasOutline ? isFocused ? `border border-accent` : `border border-base-300` : 'border border-transparent';
    switch (state) {
        case 'disabled':
            stateStyles = `bg-base-100 opacity-70 cursor-not-allowed ${hasOutline ? 'border border-base-300' : ''}`;
            break;
        case 'error':
            stateStyles = `text-warning-content ${hasOutline ? 'border border-warning-content' : ''}`;
            break;
        case 'success':
            stateStyles = `text-success-content ${hasOutline ? 'border border-success-content' : ''}`;
            break;
    }
    const bgStyles = (bgColor && bgColor !== 'none') ? `bg-${bgColor}` : '';
    const fontColor = (bgColor && bgColor !== 'none') ? 'text-base-content' : ''; // inherit from parent
    let classes = `w-full flex items-center justify-between truncate ellipsis relative box-border font-medium ${sizeStyles} ${cornerStyles} ${bgStyles} ${stateStyles} ${fontColor}`;
    
    const gapStyles = size == 'small' ? 'gap-0.5' : size == 'large' ? 'gap-1.5' : 'gap-1';
    let wrapperClasses = `flex flex-col ${widthStyle} ${gapStyles} relative`;

    const iconWidth = size == 'small' ? 'w-4' : size == 'large' ? 'w-6' : 'w-5';
    const IconComponent = includeIcon ? React.createElement(Icon, { icon: 'search', className: `flex-shrink-0 scale-90  ${iconWidth}`, defaultIconSet: defaultIconSet,} ) : null;
    const activeSearch = query && query.length > 0;
    
    return (
    React.createElement('div', { 
    ...attributes, ...listeners, 
        className: wrapperClasses,}

        , React.createElement('div', { className: classes,}
        , IconComponent
            , React.createElement('input', {
            type: "text",
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
            disabled: state == 'disabled',
            className: `flex-grow text-left border-transparent focus:outline-none focus:ring-0 font-medium
            placeholder-base-500 text-base-content bg-transparent w-full truncate ellipsis ${state == 'disabled' && 'cursor-not-allowed'}`,
            value: query,
            onChange: (e) => setQuery(e.target.value),
            placeholder: placeholder,}
            )

        , activeSearch && 
        React.createElement('div', { className: `absolute text-xs bg-${bgColor} cursor-pointer rounded ${size == 'large' ? 'right-2' : 'right-1.5'} top-1/2 -translate-y-1/2 transition-all rounded-lg`,}
            , React.createElement(ButtonIcon, { icon: "close",
            size: "small",
            type: "ghost",
onClick: () => setQuery(''),}
          ))

        )
    )
);  
}

Search.propTypes = {
    width: PropTypes.oneOf(["auto", "1/2", "full"]),
    state: PropTypes.oneOf(['default', 'disabled', 'error', 'success']),
    bgColor: PropTypes.oneOf(['none', 'base-0', 'base-50', 'base-100']),
    placeholder: PropTypes.string,
    includeIcon: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    hasOutline: PropTypes.bool,
};

export { Search as default };
//# sourceMappingURL=Search.js.map
