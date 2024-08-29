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

const sampleOptions = [
    { label: 'Option A', value: 'option-a', icon: 'heart' },
    { label: 'Option B', value: 'option-b', icon: 'circle' },
    { label: 'Option C', value: 'option-c', icon: 'star' },
];
function SegmentedSwitch(props) {
    
    const {
        size = 'medium',
        value: externalValue,
        width = 'auto',
        bgColor = 'base-100',
        selectedOptionColor = 'base-0',
        options: externalOptions,
        onChange,
        hasOutline = false,
        attributes,
        listeners
      } = props;


    const [internalOptions, setInternalOptions] = useState(externalOptions || sampleOptions);
    const [selectedOption, setSelectedOption] = useState(externalValue || internalOptions[0].value);
    const isControlled = externalOptions !== undefined && onChange !== undefined;
    const options = isControlled ? externalOptions : internalOptions;

    useEffect(() => {
        if (externalOptions) {
            setInternalOptions(externalOptions);
        }
    }
    , [externalOptions]);

    useEffect(() => {
        if (externalValue) {
            setSelectedOption(externalValue);
        }
    }
    , [externalValue]);

    /* Wrapper */ 
    const widthStyle = `w-${width}`;
    const gapStyles = size == 'small' ? 'gap-0.5' : size == 'large' ? 'gap-1.5' : 'gap-1';
    const sizeStyles = size == 'small' ? `gap-0.5 text-xs p-0.5` : size == 'large' ? `gap-1.5 text-base p-1` : `gap-1 text-sm p-0.5`;
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md";
    const bgStyles = bgColor != 'none' ? `bg-${bgColor} text-${bgColor}-content` : '';
    const borderStyles = hasOutline ? 'ring-1 ring-inset ring-base-200' : '';
    let wrapperClasses = `flex flex-row items-center justify-between font-medium whitespace-nowrap ${widthStyle} ${gapStyles} select-none
    ${bgStyles} ${borderStyles} ${sizeStyles} ${cornerStyles}`;
    
    const textColor = bgColor.startsWith('base-') ? 'text-base-content' : `text-${bgColor}-content`;

    /* Options */ 
    const optionSizeStyles = size == 'small' ? `py-0.5 px-2 rounded-sm` : size == 'large' ? `py-2 px-3 rounded-md` : `py-1.5 px-2.5 rounded`;
    const optionClasses = `cursor-pointer  flex flex-row flex-grow items-center justify-center text-center ${optionSizeStyles} ${textColor} ${gapStyles}`;
    const selectedTextColor = selectedOptionColor.startsWith('success') || selectedOptionColor.startsWith('info') ? `text-${selectedOptionColor.replace('-content', '')}` : `text-${selectedOptionColor}-content`;
    const selectedOptionClasses = `bg-${selectedOptionColor} ring-1 ring-base-200  ${selectedTextColor}`;
    
    
    function handleSelect(value) {
        if (isControlled && onChange) {
            onChange(value);
        } else {
            setSelectedOption(value);
        }
    }

    
    return (
        React.createElement('div', {
        ...attributes, ...listeners, 
            className: wrapperClasses,}


                , options
                .slice(0, 5) // up to 5 options
                .map((option, index) => (
                    React.createElement('div', { className: `${optionClasses} ${option.value == selectedOption ? selectedOptionClasses : ''}`,
                    style: {minWidth: `auto`},
                    key: index,
onClick: () => handleSelect(option.value),}

                        , option.icon && React.createElement(Icon, { icon: option.icon, className: "scale-75",} )
                        , React.createElement('span', { className: "text-center",}
                            , option.label
                        )
                    )
                ))


    )
);  
}

SegmentedSwitch.propTypes = {
    width: PropTypes.oneOf(['auto', '1/2', 'full']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    bgColor: PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'base-300']),
    selectedOptionColor: PropTypes.oneOf(['base-0', 'accent', 'primary', 'success-content', 'info-content']),
    defaultOption: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
        icon: PropTypes.string,
    })),
    hasOutline: PropTypes.bool,
};

export { SegmentedSwitch as default };
//# sourceMappingURL=SegmentedSwitch.js.map
