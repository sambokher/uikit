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
import React, { useState } from 'react';

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
function SegmentedSwitchIcons(props) {
    
    const {
        size = 'medium',
        defaultOption = 0,
        width = 'auto',
        bgColor = 'base-200',
        options = ['heart', 'star', 'check'],
        selectedOptionColor = 'base-0',
        hasOutline = true,
        attributes,
        listeners
      } = props;

    const [selectedOption, setSelectedOption] = useState(defaultOption);
    function handleSelect(index) {
        setSelectedOption(index);
    }

    const widthStyle = `w-${width}`;
    const sizeStyles = size == 'small' ? `text-xs` : size == 'large' ? `text-base` : `text-sm`;
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md";
    const textColor = bgColor.startsWith('base-') ? 'text-base-content' : `text-${bgColor}-content`;

    const bgStyles = bgColor != 'none' ? `bg-${bgColor} text-${bgColor}-content` : '';
    const borderStyles = hasOutline ? 'border border-base-300' : 'border border-transparent';
    const classes = `flex flex-row items-center justify-between font-medium whitespace-nowrap flex-shrink-0 relative
    ${bgStyles} ${borderStyles} ${sizeStyles} ${cornerStyles}`;
    
    
    const optionSizeStyles = size == 'small' ? `p-0.5 border-2 rounded` : size == 'large' ? `p-1.5 border-2 rounded-lg` : `p-0.5 border-2 rounded-md`;
    const optionClasses = `flex flex-row items-center justify-center text-center cursor-pointer border-${bgColor} ${optionSizeStyles} ${textColor}`;
    
    const selectedTextColor = 
        selectedOptionColor.startsWith('success') || selectedOptionColor.startsWith('info') ? `text-${selectedOptionColor.replace('-content', '')}`
        : `text-${selectedOptionColor}-content`;

    const selectedOptionClasses = `cursor-pointer text-center bg-${selectedOptionColor} border-${bgColor} ${selectedTextColor} ${optionSizeStyles}`;

    const gapStyles = size == 'small' ? 'gap-0.5' : size == 'large' ? 'gap-1.5' : 'gap-1';
    let wrapperClasses = `flex flex-col ${widthStyle} ${gapStyles} select-none`;

    return (
        React.createElement('div', {
        ...attributes, ...listeners, 
            className: wrapperClasses,}

        , React.createElement('div', { className: classes,}
        , options.map((icon, index) => {
            const IconComponent = React.createElement(Icon, { icon: icon, className: "flex-shrink-0 mx-auto scale-75"  ,} );
            return (
                React.createElement('div', { 
                    className: selectedOption == index ? selectedOptionClasses : optionClasses,
                    style: {
                        width: `${100 / _optionalChain([options, 'optionalAccess', _ => _.length])}%`,
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden', 
                    },
                    key: index,
onClick: ()=> handleSelect(index),}

                    , IconComponent
                )
            );})
        )
    )
);  
}



SegmentedSwitchIcons.propTypes = {
    width: PropTypes.oneOf(['auto', '1/2', 'full']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    bgColor: PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'base-300']),
    selectedOptionColor: PropTypes.oneOf(['base-0', 'accent', 'primary', 'success-content', 'info-content']),
    defaultOption: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.string),
    hasOutline: PropTypes.bool,
};

export { SegmentedSwitchIcons as default };
//# sourceMappingURL=SegmentedSwitchIcons.js.map
