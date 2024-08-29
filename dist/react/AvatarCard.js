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
import './InputFile.js';
import './InputPIN.js';
import './FileUpload.js';
import './Slider.js';
import './MiniCalendar.js';
import Avatar from './Avatar.js';
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
import './BlogPostCard.js';
import './MediaCard.js';

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
function AvatarCard(props) {
    
    const { imageSize, imageSrc, imageColor, imageOnly, type, imagePosition, name, secondaryText, attributes, listeners } = props;

    const parsedSize = parseInt(imageSize);
    const fontColor = 'text-inherit';
    const gapStyle = parsedSize >= 42 ? 'gap-4' : parsedSize >=  33 ? 'gap-3' : parsedSize >= 28 ? 'gap-3' : 'gap-2';
    let classes = `flex flex-row items-center justify-start relative ${fontColor} ${gapStyle}`;

    
    const noSecondaryText = !secondaryText || secondaryText == '' || parsedSize < 24;
    
    const titleSizeStyles = noSecondaryText 
        ? parsedSize >= 42 ? 'text-xl' : parsedSize >= 33 ? 'text-lg' : parsedSize >= 29 ? 'text-base' : parsedSize >= 20 ? 'text-sm' : 'text-xs'
        : parsedSize >= 42 ? 'text-lg' : parsedSize >= 33 ? 'text-base' : parsedSize >= 29 ? 'text-sm' : 'text-xs';
        
    
    const marginStyles = noSecondaryText ? '' :  parsedSize < 29 ? 'mb-0.5' : parsedSize < 33 ? 'mb-1' : parsedSize < 42 ? 'mb-1' : 'mb-1.5';
    const titleClasses = `font-medium leading-none ${titleSizeStyles} ${marginStyles}`;

    const secondaryTextFontSize = parsedSize < 29 ? 'text-xs' : parsedSize < 33 ? 'text-xs' : parsedSize < 42 ? 'text-sm' : 'text-sm';
    const secondaryTextClasses = `text-base-500 leading-tight ${secondaryTextFontSize}`;
    
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'};
    
    return (
        React.createElement('div', {
            ...attributes, ...listeners, 
            className: classes,}
         , React.createElement(Avatar, { size: imageSize, imageSrc: imageSrc, bgColor: imageColor, type: type, initials: _optionalChain([name, 'optionalAccess', _ => _.slice, 'call', _2 => _2(0, 1)]),} )

         , !imageOnly &&
         React.createElement('div', { 
            className: `flex flex-col ${imagePosition == 'left' ? 'justify-start text-left' : 'justify-end text-right'} transition-all duration-75 ${imageOnly ? 'w-0 pointer-events-none opacity-0' : 'w-auto'}`,
            style: {...truncateStyle, order: imagePosition == 'left' ? 1 : -1},}
            , React.createElement('h3', { style: truncateStyle, className: titleClasses,}
        , name
            )
            , !noSecondaryText &&  React.createElement('span', { style: truncateStyle, className: secondaryTextClasses,}
        , secondaryText
            )
         )
        )
    )
}




AvatarCard.propTypes = {
    imageSize: PropTypes.oneOf(['16px', '20px', '24px', '28px', '32px', '40px', '48px']),
    imageSrc: PropTypes.string,
    imagePosition: PropTypes.oneOf(['left', 'right']),
    imageColor: PropTypes.oneOf(['auto', 'base-0', 'accent', 'primary', 'success-content', 'error-content', 'warning-content', 'base-content']),
    type: PropTypes.oneOf(['image', 'initials']),
    name: PropTypes.string,
    secondaryText: PropTypes.string,
    bgColor: PropTypes.oneOf(["base-0", "base-100", "base-200", "primary", "accent", "base-900", 'base-content', "none"]),
    corners: PropTypes.oneOf(["none", "sm", "md"]),
    hasOutline: PropTypes.bool,
    imageOnly: PropTypes.bool, 
    tooltipText: PropTypes.string
};

export { AvatarCard as default };
//# sourceMappingURL=AvatarCard.js.map
