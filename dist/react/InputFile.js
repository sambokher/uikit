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
import React, { useRef } from 'react';
import { iconMap } from './iconMap.js';

const allIconNames = Object.keys(iconMap) || [];

function InputFile(props) {
    
    const {
        state = 'default',
        text = 'Choose File',
        bgColor = null,
        size = 'medium',
        label = 'File Upload',
        helperText = 'help text',
        icon = 'cloud-upload',
        textAlign,
        hasOutline = true,
        width = 'auto',
        onChange = () => console.log('File uploaded'),
        accept = '',
        attributes,
        listeners
      } = props;


    const sizeStyles = size == 'small' ? `py-0.5 px-2 gap-1.5 text-xs` : size == 'large' ? `py-2 px-3 gap-3 text-base` : `py-1.5 px-2 gap-3 text-sm`;
    const cornerStyles = size == "small" ? "rounded" : size == "large" ? "rounded-lg" : "rounded-md";
    
    let stateStyles = hasOutline ? `border border-base-300` : 'border border-transparent';
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
    let classes = `w-full flex items-center justify-between relative truncate ellipsis box-border font-medium ${sizeStyles} ${cornerStyles} ${bgStyles} ${stateStyles}`;
    
    const labelTextSize = size == 'small' ? `text-xs` :  size == 'large' ? `text-lg`: `text-sm`;
    const labelClasses = `${labelTextSize} font-medium`;

    const messageTextColor = state == 'error' ? stateStyles = 'text-warning-content' : state == 'success' ? stateStyles = 'text-success-content' : '';
    const messageClasses = `text-sm font-sm ${messageTextColor}`;

    const widthStyle = width != 'auto' ? `w-${width}` : size == 'small' ? 'min-w-[120px]' : size == 'large' ? 'min-w-[200px]' : 'min-w-[160px]';

    const gapStyles = size == 'small' ? 'gap-0.5' : size == 'large' ? 'gap-1.5' : 'gap-1';
    let wrapperClasses = `flex flex-col ${widthStyle} ${gapStyles}`;

    const IconComponent = icon == 'none' ? null : React.createElement(Icon, { icon: icon, className: "flex-shrink-0 flex-grow-0" ,} );

    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        if (onChange) {
            onChange(event.target.files);
        }
    };

    return (
        React.createElement('div', {
        ...attributes, ...listeners, 
            className: wrapperClasses,}

            , label && React.createElement('label', { className: labelClasses,}
, label
            )

                , React.createElement('div', { className: classes, style: {boxSizing: 'border-box'},}
                , React.createElement('input', {
                    ref: fileInputRef,
                    type: "file",
                    style: { 
                        opacity: '0', 
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        cursor: 'pointer',
                    },
                    onChange: handleFileChange,
                    accept: accept,}
                )

                    , state == 'loading' ? React.createElement(Loader, { size: 'small', type: "spinner", opacity: "50",} ) : IconComponent
                    , React.createElement('div', { className: `flex-grow text-${textAlign}`,}
                    , state == 'loading' ? 'Uploading' : 
text
                    )
                )

                , helperText && React.createElement('span', { className: messageClasses,}
, helperText
                )

            )
        
    );
}

InputFile.propTypes = {
    state: PropTypes.oneOf(['loading', 'default', 'disabled', 'error', 'success']),
    label: PropTypes.string,
    text: PropTypes.string,
    helperText: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    width: PropTypes.oneOf(['auto', '1/2', 'full']),
    bgColor: PropTypes.oneOf(['none', 'base-0', 'base-100']),
    icon: PropTypes.oneOf(['none', ...allIconNames]),
    hasOutline: PropTypes.bool, 
    onChange: PropTypes.func,
    accept: PropTypes.string,
};

export { InputFile as default };
//# sourceMappingURL=InputFile.js.map
