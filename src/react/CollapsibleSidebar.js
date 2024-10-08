import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { UserMenu, Sidebar, SidebarLink, ButtonIcon, Logo } from './index';

const sampleTopLinks = [
    {text: 'Home', icon: 'home', onClick: ()=>{}},
    {text: 'Assessment', icon: 'activity', onClick: ()=>{}, 
        sublinks: [
            {text: 'Sublink 1', indentLevel: '1', icon: 'none', onClick: ()=>{}},
            {text: 'Sublink 2', indentLevel: '1', icon: 'none', onClick: ()=>{}},
        ]
    },
    {text: 'Contact', icon: 'people', onClick: ()=>{}},
]

const sampleBottomLinks = [
    {text: 'Settings', icon: 'settings', onClick: ()=>{}},
    {text: 'Logout', icon: 'log-out', onClick: ()=>{}},
]

export default function CollapsibleSidebar(props) {
    
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
        } = props
    
    
    const [activeLink, setActiveLink] = useState(topLinks[0]?.text || null)
    const [isOpen, setIsOpen] = useState(state === 'alwaysOpen')
    useEffect(() => {
        setIsOpen(state === 'alwaysOpen')
    }, [state])

    let classes = `relative flex flex-col h-auto items-start flex-shrink-0 user-select-none transition-all duration-300`

    const listeners = {
        onClick: () => state === 'openOnClick' && !isOpen && setIsOpen(true),
        onMouseOver: () => state === 'openOnHover' && setIsOpen(true),
        onMouseOut: () => state === 'openOnHover' && setIsOpen(false),
    }
    
    function renderUserMenu() {
        return (
            <div className='flex flex-row relative'
            style={{
                marginLeft: `-2px`,
                // marginRight: `calc(${spacing} / -2)`,
                // width: `calc(100% + ${spacing})`,
            }}
            >
            <UserMenu 
                isActive={activeLink === 'Profile'}
                isCollapsed={!isOpen} 
                avatarType='initials'
                name='John Doe'
                width={'full'}
                onClick={() => setActiveLink('Profile')}
                />
            </div>
        )
        
    }
    return (
        <div
        {...attributes} {...listeners} 
        className={classes}
        style={{
            width: isOpen ? expandWidth : 60, 
            minHeight: '100%',
        }}
        >
        <Sidebar
            background={bgColor} 
            width={'100%'}
            paddingX={'12px'}
            alignItems={'start'}
            justifyContent={'between'}
            paddingY={'12px'}
            gap={'8px'}
            >
            
            {/* Top block */}
            <div className='flex flex-col items-start gap-2 w-full relative'>
                <div className={`flex flex-row w-full justify-between items-center text-sm transition-all px-1 my-2`}>
                    <Logo 
                        type={'symbol'} 
                        size={'28px'} 
                        color={logoColor}
                        assets={assets}
                        />
                    <div className={`${(!isOpen || state === 'alwaysOpen' || state == 'openOnHover')? 'opacity-0 hidden' : 'opacity-50'}`}>
                        <ButtonIcon
                            icon={'chevron-left'}
                            size={'small'}
                            type={'link'}
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
                </div>
            {userMenu == 'top' && renderUserMenu()}
            {topLinks.map((link, index) => (
                <SidebarLink 
                    key={index}
                    isCollapsed={!isOpen} 
                    text={link.text}
                    leftIcon={link.icon}
                    isActive={link.text === activeLink}
                    onClick={() => setActiveLink(link.text)}
                    >
                        {link.sublinks && link.sublinks.map((sublink, index) => (
                        <SidebarLink
                            key={index}
                            isCollapsed={!isOpen}
                            text={sublink.text}
                            leftIcon={sublink.icon}
                            indentLevel={sublink.indentLevel}
                            isActive={sublink.text === activeLink}
                            onClick={(e) => {e.stopPropagation(); setActiveLink(sublink.text)}}
                            />
                    ))}
                    </SidebarLink>
            ))}
            </div>
                
            {/* bottom block */}
            <div className='flex flex-col items-start gap-2 w-full relative'>
            {bottomLinks.map((link, index) => (
                <SidebarLink 
                    key={index}
                    isCollapsed={!isOpen} 
                    text={link.text}
                    isActive={link.text === activeLink}
                    leftIcon={link.icon}
                    onClick={() => setActiveLink(link.text)}
                    />))}
            {userMenu == 'bottom' && renderUserMenu()}
            </div>
        </Sidebar>  
        </div>
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

}

