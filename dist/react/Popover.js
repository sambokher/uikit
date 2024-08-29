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

function Popover(props) {

    const {
        text = 'Longer message containing important information..',
        title = 'Popover Title',
        backdrop = 'dark',
        primaryAction = 'Confirm',
        secondaryAction = 'Cancel',
        attributes,
        listeners
    } = props;

    // OVERLAY STYLES
    const darkBackground = `color-mix(in srgb, var(--base-content) 24%, transparent)`;
    const lightBackground = `color-mix(in srgb, var(--base-content) 12%, transparent)`;
    const overlayClasses = `absolute top-0 flex flex-col w-full h-full`;

    // Determine background styles
    const bgStyles = `bg-base-0 text-base-content`;
    const borderStyles = `border border-base-300`;
    const sizeStyles = `w-full max-w-[400px] min-h-[200px] max-h-[2/3] rounded-md`;

    let wrapperClasses = `flex flex-col relative items-stretch md:mt-32 justify-start shadow-md mx-auto ${bgStyles} ${sizeStyles} ${borderStyles}`;

    const titleClasses = `flex flex-row items-start text-base font-medium w-full justify-between border-b border-base-200 px-3 py-2`;
    const noTitle = !title || title === '';
    return (
        /* Overlay */
        React.createElement('div', {  className: overlayClasses, 
        ...attributes, ...listeners, 
        style: {
            backgroundColor: backdrop == 'none' ? 'transparent' : backdrop == 'dark' ? darkBackground : lightBackground,
            zIndex: 50, 
            backdropFilter: backdrop == 'blurred' && 'blur(2px)',
            WebkitBackdropFilter: backdrop == 'blurred' && 'blur(2px)', /* For Safari compatibility */
        },}
        , React.createElement('div', { className: wrapperClasses,}

        , React.createElement(Icon, { icon: "close", className: "absolute right-2 p-0.5 rounded bg-base-0 hover:bg-base-100 top-2 cursor-pointer hover:scale-110 transition-all opacity-70 hover:opacity-100"           ,})
        , !noTitle && 
        React.createElement('div', { className: titleClasses,}
            , React.createElement('h2', { className: "font-semibold text-lg" ,}
, title
            )
        )

        , React.createElement('div', { className: `flex flex-col flex-grow justify-between px-3 py-2 pb-3 text-base ${noTitle ? 'pr-8' : '' }`,}
, text
        )
        /* Buttons */
        , React.createElement('div', { className: `flex flex-row items-center flex-grow-0 flex-shrink-0 justify-end gap-2 px-3 py-2`,}
            , secondaryAction && 
            React.createElement(Button, {
                text: secondaryAction, 
                size: 'small',
                type: 'secondary',
                style: 'outlined',
                marginTop: '8px',}
            )
            , primaryAction && 
            React.createElement(Button, { 
                text: primaryAction, 
                size: 'small',
                type: 'primary',
                marginTop: '8px',}
            )
        )
        )
        )
    );
}

Popover.propTypes = {
    text: PropTypes.string,
    title: PropTypes.string,
    backdrop: PropTypes.oneOf(['dark', 'blurred', 'none']),
    primaryAction: PropTypes.string,
    secondaryAction: PropTypes.string,
};

export { Popover as default };
//# sourceMappingURL=Popover.js.map
