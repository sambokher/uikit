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
import RadioButton from './RadioButton.js';
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
import './Icon.js';
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
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
];

function RadioButtons(props) {
    
    const { 
        direction='flex-col',
        options: externalOptions,
        state='default',
        size='medium', 
        style='standard',
        width='auto',
        onSelect, 
        selectedOption: externalSelectedOption,
        attributes, 
        listeners 
    } = props;
    
    
    const [internalOptions, setInternalOptions] = useState(externalOptions || sampleOptions);
    const [internalSelectedOption, setInternalSelectedOption] = useState(externalSelectedOption || null);
    const isControlled = externalOptions !== undefined && onSelect !== undefined;
    const options = isControlled ? externalOptions : internalOptions;
    const selectedOption = isControlled ? externalSelectedOption : internalSelectedOption;

    // Effect to sync internal state with external `tabs` prop
    useEffect(() => {
        if (!isControlled) {
            setInternalOptions(externalOptions || sampleOptions);
        }
    }, [externalOptions, isControlled]);

    let wrapperClasses = `flex ${direction} items-stretch gap-2 w-${width} cursor-default`;

    
    function handleOptionClick(e, value) {
        e.stopPropagation();
        
        if (isControlled && onSelect) {
            onSelect(value);
        } else {
            setInternalSelectedOption(value);
        }
    }


    
    return (
        React.createElement('div', { 
        ...attributes, ...listeners, 
        className: wrapperClasses,}


            , options.map((option, index) => (
            React.createElement(RadioButton, { 
                key: index, 
                size: size,
                style: style,
                width: 'full',
                state: state,
                label: option.label,
                isSelected: selectedOption === option.value,
                onSelect: (e) => handleOptionClick(e, option.value),}
            )
            ))

        )
    );
}


RadioButtons.propTypes = {
    direction: PropTypes.oneOf(['flex-row', 'flex-col']),
    width: PropTypes.oneOf(["auto", "1/2", "full"]),
    style: PropTypes.oneOf(['standard', 'button']),
    state: PropTypes.oneOf(['default', 'disabled', 'error', 'success']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
    })),
};

export { RadioButtons as default };
//# sourceMappingURL=RadioButtons.js.map
