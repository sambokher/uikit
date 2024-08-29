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
import './UserMenu.js';
import './FlexBox.js';
import './Grid.js';
import './Module.js';
import './Heading.js';
import './Text.js';
import './Paragraph.js';
import './Link.js';
import Button from './Button.js';
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
import Select from './Select.js';
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

const sample = `function greet(name) {
    const greeting = "Hello, " + name + "!";
    console.log(greeting);
}

greet("Alice");
greet("Bob");`;

function CodeSnippet(props) {

    const {
        size = 'medium',
        width = 'auto',
        hasOutline = true,
        text = sample,
        attributes,
        listeners
      } = props;


    const widthStyle = width == 'auto' ? `w-auto` : `w-${width}`;
    const sizeStyles =  size == 'small' ? `py-1 px-1.5 gap-1.5 text-xs` : `py-1.5 px-2 gap-3 text-sm`;
    const cornerStyles = size == "small" ? "rounded" :  "rounded-md";
    const headerCorners = size == "small" ? "rounded-t" :  "rounded-t-md";
    const bgStyles = `bg-base-0 text-base-content`;
    const borderStyles = hasOutline ? `border border-base-300` : `border border-transparent`;
    let wrapperClasses = `flex flex-col ${widthStyle} ${borderStyles} ${cornerStyles} ${bgStyles} relative group`;

    const snippetClasses = `w-full ${sizeStyles}`;

    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); 
      })
      .catch(err => {
        console.log('Something went wrong', err);
      });
    };

    return (
        React.createElement('div', {
            className: wrapperClasses,
            ...attributes, ...listeners,}

            , React.createElement('div', { className: `flex flex-row items-center justify-between w-full ${sizeStyles} bg-base-100 ${headerCorners}`,}
                , React.createElement(Select, { size: "small", options: ['javascript', 'python', 'sql'], defaultValue: "Javascript", bgColor: "none",})
                , React.createElement(Button, { 
                    size: 'small',
                    text: 'copy', 
                    type: 'secondary', 
                    style: "outlined", 
                    leftIcon: copied ? 'check' : 'copy',
                    onClick: copyToClipboard,})
            )
            , React.createElement('pre', { className: snippetClasses, style: { whiteSpace: 'pre-wrap' },}
, text
            )
        )
    );
}

CodeSnippet.propTypes = {
    width: PropTypes.oneOf(['auto', '1/2', 'full']),
    size: PropTypes.oneOf(['small', 'medium']),
    theme: PropTypes.oneOf(['dark', 'light']),
    hasOutline: PropTypes.bool,
    text: PropTypes.string,
};

export { CodeSnippet as default };
//# sourceMappingURL=CodeSnippet.js.map
