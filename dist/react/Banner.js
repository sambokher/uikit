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
import './Popover.js';
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

// needs mobile behavior
function Banner(props) {
    
    const {
        title = 'Banner Title',
        text = 'Banner message',
        width = '640px',
        type = 'info',
        primaryAction = 'Learn more',
        secondaryAction = 'Discard',
        icon = 'auto',
        backdrop = 'none',
        attributes,
        listeners
      } = props;

    
    // OVERLAY STYLES
    const darkBackground = `color-mix(in srgb, var(--base-content) 24%, transparent)`;
    const lightBackground = `color-mix(in srgb, var(--base-content) 12%, transparent)`;
    const overlayClasses = `absolute top-0 flex flex-col w-full h-full`;

    // BANNER STYLES
    const alertStyles = 'flex flex-row items-start justify-between font-normal transition duration-100';
    const typeStyleMap = {
        info: `text-info-content border border-info-content`,
        error: `text-error-content border border-error-focus bg-error`,
        base: `text-base-content border border-base-300`,
        warning: `text-warning-content border border-warning-content`,
        success: `text-success-content border border-success-content`,
    };    
    const typeStyles = typeStyleMap[type] || typeStyleMap['base'];

    let wrapperClasses = `bg-base-0 text-base px-3 py-2 pb-3 rounded-lg gap-2 flex flex-row items-start justify-start shadow-md mx-auto ${alertStyles} ${typeStyles}`;

    // ICON Styles
    const iconStyleMap = {
        info: 'info',
        error: 'warning',
        base: 'info',
        warning: 'warning',
        success: 'check-circle',
    };

    const useIcon = icon == 'auto' ? iconStyleMap[type] : icon;
    const IconComponent = icon !== 'none' ? React.createElement(Icon, { icon: _optionalChain([useIcon, 'optionalAccess', _ => _.toLowerCase, 'call', _2 => _2()]), className: "flex-shrink-0 mt-0.5" ,} ) : null;
    
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

        /* Modal */
            , React.createElement('div', { className: wrapperClasses, 
            style: {width: '100%', width: '100%', maxWidth: width, marginTop: 60 },}
            , IconComponent
            , React.createElement('div', { className: "flex flex-col gap-1.5 flex-grow-1 w-full items-start"     ,}
                , title && React.createElement('h2', { className: "font-semibold text-lg" ,}
, title
                )
, text
                , React.createElement('div', { className: `flex flex-row flex-shrink-0 items-center gap-2`,}
            , primaryAction && 
                React.createElement(Button, { 
                    text: primaryAction, 
                    size: 'small',
                    type: type == 'base' ? 'primary' : type,
                    marginTop: '8px',}
                )
            , secondaryAction && 
                React.createElement(Button, { 
                    text: secondaryAction, 
                    size: 'small',
                    type: type == 'base' ? 'secondary' : type,
                    style: 'outlined',
                    marginTop: '8px',}
                )
            )
            )
            , React.createElement(Icon, { icon: "close", className: "flex-shrink-0 hover:scale-110 cursor-pointer transition-all"   ,} )
            )
        )
    );
}



Banner.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['base', 'error', 'warning', 'success', 'info']),
    width: PropTypes.oneOf(['480px', '640px', '780px', '960px', '1200px', '100%']),
    primaryAction: PropTypes.string,
    secondaryAction: PropTypes.string,
    icon: PropTypes.oneOf(['none', 'auto', ...allIconNames]),
    backdrop: PropTypes.oneOf(['dark', 'blurred', 'none']),
};

export { Banner as default };
//# sourceMappingURL=Banner.js.map
