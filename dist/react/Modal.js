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
import { spacingMap } from './helpers.js';

function Modal(props) {
    
    const {
        paddingX = '16px',
        paddingY = '16px',
        gap = '12px',

        modalBackground = 'base-100',
        width = '640px',
        corners = 'base',
        backdrop = 'dark',
        children,
        onClose,
        closeButton,
        attributes,
        listeners
      } = props;
    
    // OVERLAY STYLES
    const darkBackground = `color-mix(in srgb, var(--base-content) 24%, transparent)`;
    const lightBackground = `color-mix(in srgb, var(--base-content) 12%, transparent)`;
    const overlayClasses = `absolute top-0 left-0 flex flex-col w-full h-full`;


    // MODAL STYLES
    const paddingStyles = `${paddingX ? `px-${spacingMap[paddingX]}` : ''} ${paddingY ? `py-${spacingMap[paddingY]}` : ''}`;
    const gapStyles = gap ? `gap-${spacingMap[gap]}` : '';

    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const modalBg = modalBackground ? `bg-${modalBackground} mx-auto` : `mx-auto`;
    const borderStyles = `border border-base-200`;
    
    const shadowStyle = {
        '480px': 'shadow-md',
        '640px': 'shadow-md', 
        '780px': 'shadow-lg',
        '960px': 'shadow-lg',
        '1200px': 'shadow-xl',
        '1440px': 'shadow-xl',
    }[width];
    let modalClasses = `flex flex-col min-h-[120px] relative items-stretch justify-start mx-auto ${shadowStyle} ${modalBg} ${gapStyles} ${borderStyles} ${paddingStyles} ${cornerStyles}`;

    return (
        /* Overlay */
        React.createElement('div', {  className: overlayClasses, 
        ...attributes, ...listeners, 
        style: {
            backgroundColor: backdrop == 'none' ? 'transparent' : backdrop == 'dark' ? darkBackground : lightBackground,
            zIndex: 100, 
            backdropFilter: backdrop == 'blurred' && 'blur(2px)',
            WebkitBackdropFilter: backdrop == 'blurred' && 'blur(2px)', /* For Safari compatibility */
        },}
            /* Modal */
            , React.createElement('div', { className: modalClasses,
            style: {width: '100%', maxWidth: width, marginTop: 80, 
            animation: 'fadeInUp 100ms ease-in-out',
             },}

            , closeButton && React.createElement('div', { className: "absolute right-1 top-1 transition-all rounded-lg"    ,}, React.createElement(ButtonIcon, { icon: "close",
            size: "small",
            type: "ghost",
onClick: onClose,}
          ))
            , children
            )
        )
    );
}


Modal.propTypes = {
    modalBackground: PropTypes.oneOf(['base-100', 'base-0']),
    backdrop: PropTypes.oneOf(['dark', 'blurred', 'none']),
    width: PropTypes.oneOf(['480px', '640px', '780px', '960px', '1200px']),
    paddingX: PropTypes.oneOf(['0px', '8px', '12px', '16px', '24px', '32px', '48px']),
    paddingY: PropTypes.oneOf(['0px', '8px', '12px', '16px', '24px', '32px', '48px']),
    gap: PropTypes.oneOf(['0px', '8px', '12px', '16px', '24px', '32px'],),
    corners: PropTypes.oneOf(['none', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl']),
    closeButton: PropTypes.bool,
    children: PropTypes.node
};

export { Modal as default };
//# sourceMappingURL=Modal.js.map
