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
import Sidebar from './Sidebar.js';
import SidebarLink from './SidebarLink.js';
import UserMenu from './UserMenu.js';
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
import Logo from './Logo.js';
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

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
const sampleTopLinks = [
    {text: 'Home', icon: 'home', onClick: ()=>{}},
    {text: 'Assessment', icon: 'activity', onClick: ()=>{}, 
        sublinks: [
            {text: 'Sublink 1', indentLevel: '1', icon: 'none', onClick: ()=>{}},
            {text: 'Sublink 2', indentLevel: '1', icon: 'none', onClick: ()=>{}},
        ]
    },
    {text: 'Contact', icon: 'people', onClick: ()=>{}},
];

const sampleBottomLinks = [
    {text: 'Settings', icon: 'settings', onClick: ()=>{}},
    {text: 'Logout', icon: 'log-out', onClick: ()=>{}},
];

function CollapsibleSidebar(props) {
    
    const { 
        bgColor = 'base-0',
        state = 'openOnClick',
        logoColor = 'normal', 
        userMenu = 'top',
        expandWidth = '280px',

        topLinks = sampleTopLinks,
        bottomLinks = sampleBottomLinks,
        assets,
        attributes, 
        } = props;
    
    
    const [activeLink, setActiveLink] = useState(_optionalChain([topLinks, 'access', _ => _[0], 'optionalAccess', _2 => _2.text]) || null);
    const [isOpen, setIsOpen] = useState(state === 'alwaysOpen');
    useEffect(() => {
        setIsOpen(state === 'alwaysOpen');
    }, [state]);

    let classes = `relative flex flex-col h-auto items-start flex-shrink-0 user-select-none transition-all duration-300`;

    const listeners = {
        onClick: () => state === 'openOnClick' && !isOpen && setIsOpen(true),
        onMouseOver: () => state === 'openOnHover' && setIsOpen(true),
        onMouseOut: () => state === 'openOnHover' && setIsOpen(false),
    };
    
    function renderUserMenu() {
        return (
            React.createElement('div', { className: "flex flex-row relative"  ,
            style: {
                marginLeft: `-2px`,
                // marginRight: `calc(${spacing} / -2)`,
                // width: `calc(100% + ${spacing})`,
            },}

            , React.createElement(UserMenu, { 
                isActive: activeLink === 'Profile',
                isCollapsed: !isOpen, 
                avatarType: "initials",
                name: "John Doe" ,
                width: 'full',
                onClick: () => setActiveLink('Profile'),}
                )
            )
        )
        
    }
    return (
        React.createElement('div', {
        ...attributes, ...listeners, 
        className: classes,
        style: {
            width: isOpen ? expandWidth : 60, 
            minHeight: '100%',
        },}

        , React.createElement(Sidebar, {
            background: bgColor, 
            width: '100%',
            paddingX: '12px',
            alignItems: 'start',
            justifyContent: 'between',
            paddingY: '12px',
            gap: '8px',}


            /* Top block */
            , React.createElement('div', { className: "flex flex-col items-start gap-2 w-full relative"     ,}
                , React.createElement('div', { className: `flex flex-row w-full justify-between items-center text-sm transition-all px-1 my-2`,}
                    , React.createElement(Logo, { 
                        type: 'symbol', 
                        size: '28px', 
                        color: logoColor,
                        assets: assets,}
                        )
                    , React.createElement('div', { className: `${(!isOpen || state === 'alwaysOpen' || state == 'openOnHover')? 'opacity-0 hidden' : 'opacity-50'}`,}
                        , React.createElement(ButtonIcon, {
                            icon: 'chevron-left',
                            size: 'small',
                            type: 'link',
                            onClick: () => setIsOpen(false),}
                        )
                    )
                )
            , userMenu == 'top' && renderUserMenu()
            , topLinks.map((link, index) => (
                React.createElement(SidebarLink, { 
                    key: index,
                    isCollapsed: !isOpen, 
                    text: link.text,
                    leftIcon: link.icon,
                    isActive: link.text === activeLink,
                    onClick: () => setActiveLink(link.text),}

                        , link.sublinks && link.sublinks.map((sublink, index) => (
                        React.createElement(SidebarLink, {
                            key: index,
                            isCollapsed: !isOpen,
                            text: sublink.text,
                            leftIcon: sublink.icon,
                            indentLevel: sublink.indentLevel,
                            isActive: sublink.text === activeLink,
                            onClick: (e) => {e.stopPropagation(); setActiveLink(sublink.text);},}
                            )
                    ))
                    )
            ))
            )

            /* bottom block */
            , React.createElement('div', { className: "flex flex-col items-start gap-2 w-full relative"     ,}
            , bottomLinks.map((link, index) => (
                React.createElement(SidebarLink, { 
                    key: index,
                    isCollapsed: !isOpen, 
                    text: link.text,
                    isActive: link.text === activeLink,
                    leftIcon: link.icon,
                    onClick: () => setActiveLink(link.text),}
                    )))
            , userMenu == 'bottom' && renderUserMenu()
            )
        )
        )
    )
}

CollapsibleSidebar.propTypes = {
    bgColor: PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'base-700', 'base-content', 'primary', 'accent']),
    state: PropTypes.oneOf(['openOnClick', 'openOnHover', 'alwaysOpen', 'alwaysClosed']),
    expandWidth: PropTypes.oneOf(['240px', '280px', '320px']),
    logoColor: PropTypes.oneOf(['normal', 'inverted']),
    openStyle: PropTypes.oneOf(['grow', 'overflow']),
    userMenu: PropTypes.oneOf(['top', 'bottom', 'none']),
    activeLink: PropTypes.string,
    topLinks: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        icon: PropTypes.string,
        onClick: PropTypes.func,
    })), 
    bottomLinks: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        icon: PropTypes.string,
        onClick: PropTypes.func,
    }))

};

export { CollapsibleSidebar as default };
//# sourceMappingURL=CollapsibleSidebar.js.map
