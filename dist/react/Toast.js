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
import './Banner.js';
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

function Toast(props) {
    
    const {
        text = 'This is a toast message usually used for short dismissable notifications that disappear',
        type = 'base',
        style = 'outline',
        action = 'Learn more',
        position = 'bottom_right',
        attributes,
        listeners
      } = props;
    props.junoProps || {};

    // CONTAINER STYLES
    const alertStyles = 'flex flex-row items-start justify-between font-normal transition duration-100';

    const styleMap = {
        'outline': type == 'base' ? `bg-base-0 text-base-content border-base-300` : `bg-base-0 text-base-content border-${type}-content`,
        'light': type == 'base' ? `bg-base-100 text-base-content border-base-300` : `bg-${type} text-base-content border-${type}-focus`,
        'filled': type == 'base' ? `bg-base-100 text-base-content border-base-300` : `bg-${type}-content text-white border-${type}-content ` ,
    };
    
    const typeStyles = styleMap[style] || styleMap['outline'];

    let wrapperClasses = `w-full max-w-[320px] flex flex-row relative text-base px-3 py-2 rounded-md gap-2  items-start justify-start shadow-md mx-auto ${alertStyles} border ${typeStyles}`;
    
    const positionMap = { 
        bottom_right: {bottom: 20, right: 20}, 
        top_right: {top: 20, right: 20}, 
    };

    return (
        React.createElement('div', { className: `absolute flex flex-col`, 
        ...attributes, ...listeners, 
         style: positionMap[position],}
            , React.createElement('div', { className: wrapperClasses,}

            , React.createElement('div', { className: "flex flex-col gap-2 flex-grow-1 w-full items-start"     ,}

, text

                , action && 
                React.createElement(Button, {
                    text: action, 
                    size: 'small',
                    type: type == 'base' ? 'primary' : style == 'filled' ? 'secondary' :  type,}
                )
            )
                , React.createElement(Icon, { icon: "close", className: "flex-shrink-0 -mr-1 hover:scale-110 cursor-pointer transition-all"    ,} )
            )
        )
         
    ); 
    
}

Toast.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['base', 'error', 'warning', 'success', 'info']),
    style: PropTypes.oneOf(['filled', 'outline', 'light']),
    action: PropTypes.string,
    position: PropTypes.oneOf(['bottom_right', 'top_right']),

};

export { Toast as default };
//# sourceMappingURL=Toast.js.map
