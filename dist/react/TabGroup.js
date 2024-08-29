import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
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
import { iconMap } from './iconMap.js';

const allIconNames = Object.keys(iconMap) || [];

const sampleTabs = [
    { name: 'Home', icon: 'home', isActive: true },
    { name: 'Help', icon: 'support', isActive: false },
    { name: 'Settings', icon: 'settings', isActive: false },
    { name: 'Balances', icon: 'chart-up', isActive: false },
];

function TabGroup(props) {
    const {
        tabs: externalTabs,
        selectColor = 'accent',
        size = 'medium',
        underlineAll=true,
        onSelect, 
        attributes,
        listeners
    } = props;
    

    const [internalTabs, setInternalTabs] = useState(externalTabs || sampleTabs);
    const isControlled = externalTabs !== undefined && onSelect !== undefined;
    const tabs = isControlled ? externalTabs : internalTabs;
    
    function handleTabClick(e, name) {
        e.stopPropagation();
        
        if (isControlled && onSelect) {
            onSelect(name);
        } else {
            let newTabs = [...tabs];
            newTabs = newTabs.map(tab => tab.name === name ? {...tab, isActive: true} : { ...tab, isActive: false });
            setInternalTabs(newTabs);
        }
    }
    

    let sizeStyles = size === 'small' ? `py-1 text-xs gap-1.5 -ml-2` :  
        size === 'large' ? `py-3 gap-3 text-md -ml-2` : `py-1.5 gap-2 text-sm -ml-2`;

    let wrapperClasses = `flex flex-row items-center w-full relative`;


    const tabStyles = `px-2 py-0.5 cursor-pointer hover:bg-base-50 rounded-md transition-colors duration-150 font-medium
     opacity-70 hover:opacity-100 items-center transition-opacity select-none`;
    const activeStyles = `text-${selectColor} !opacity-100`;
    
    const tabRefs = useRef([]);
    // Effect to sync internal state with external `tabs` prop
    useEffect(() => {
        if (!isControlled) {
            setInternalTabs(externalTabs || sampleTabs);
        }
    }, [externalTabs, isControlled]);

    const [underlineStyle, setUnderlineStyle] = useState({});
    useLayoutEffect(() => {
        const activeTab = tabs.findIndex(tab => tab.isActive);
        if (tabRefs.current[activeTab]) {
            const { offsetLeft, clientWidth } = tabRefs.current[activeTab];
            setUnderlineStyle({
                left: offsetLeft + 'px',
                width: clientWidth + 'px',
                height: size === 'small' ? '2px' : size === 'large' ? '3px' : '2.5px',
            });
        }
    }, [tabs, size]); 

    return (
        React.createElement('div', { ...attributes, ...listeners, className: wrapperClasses,}

            , React.createElement('div', { className: `w-full flex flex-row items-center ${sizeStyles}`,}
            , tabs.map((tab, index) => (
                React.createElement('div', { key: index,
                onClick: (e) => handleTabClick(e, tab.name),
                className: `${tabStyles} ${tab.isActive ? activeStyles : ''}`,}

                    , React.createElement('span', { className: "flex flex-row gap-1 whitespace-nowrap items-center"    ,
                    ref: el => tabRefs.current[index] = el,}

                    , tab.icon && React.createElement(Icon, { icon: tab.icon, className: "scale-75 -ml-1 stroke-[2px]"  ,} )
                    , tab.name)
                )
            ))
            )
            , React.createElement('div', { 
                className: `absolute bottom-0 left-0 h-px w-full rounded-full
                ${ underlineAll ? 'bg-base-200' : 'bg-transparent'} `,}
)
            , React.createElement('div', { 
                className: `absolute bottom-0 bg-${selectColor} transition-all rounded-sm`,
                style: underlineStyle,}
)
        )
    );
}

TabGroup.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.oneOf(allIconNames),
        isActive: PropTypes.bool
    })),
    selectColor: PropTypes.oneOf(['primary', 'accent', 'base-content', 'base-700', 'base-500', 'base-300', 'base-100']),
    onSelect: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    underlineAll: PropTypes.bool,
};

export { TabGroup as default };
//# sourceMappingURL=TabGroup.js.map
