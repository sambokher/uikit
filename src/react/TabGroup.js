import PropTypes from 'prop-types';
import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Icon } from './index'
import { iconMap } from './iconMap'

const allIconNames = Object.keys(iconMap) || []

const sampleTabs = [
    { name: 'Home', icon: 'home', isActive: true },
    { name: 'Help', icon: 'support', isActive: false },
    { name: 'Settings', icon: 'settings', isActive: false },
    { name: 'Balances', icon: 'chart-up', isActive: false },
];

export default function TabGroup(props) {
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
            let newTabs = [...tabs]
            newTabs = newTabs.map(tab => tab.name === name ? {...tab, isActive: true} : { ...tab, isActive: false });
            setInternalTabs(newTabs);
        }
    }
    

    let sizeStyles = size === 'small' ? `py-2xs text-xs gap-xs -ml-sm` :  
        size === 'large' ? `py-base gap-base text-md -ml-sm` : `py-xs gap-sm text-sm -ml-sm`;

    let wrapperClasses = `flex flex-row items-center w-full relative`;


    const tabStyles = `px-2 py-0.5 cursor-pointer hover:bg-base-50 rounded-md transition-colors duration-150 font-medium
     opacity-70 hover:opacity-100 items-center transition-opacity`;
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
        <div {...attributes} {...listeners} className={wrapperClasses}
        >
            <div className={`w-full flex flex-row items-center ${sizeStyles}`}>
            {tabs.map((tab, index) => (
                <div key={index}
                onClick={(e) => handleTabClick(e, tab.name)}
                className={`${tabStyles} ${tab.isActive ? activeStyles : ''}`}
                >   
                    <span className='flex flex-row gap-1 whitespace-nowrap items-center'
                    ref={el => tabRefs.current[index] = el}
                    >   
                    {tab.icon && <Icon icon={tab.icon} className='scale-75 -ml-1 stroke-[2px]' />}
                    {tab.name}</span>
                </div>
            ))}
            </div>
            <div 
                className={`absolute bottom-0 left-0 h-px w-full rounded-full
                ${ underlineAll ? 'bg-base-200' : 'bg-transparent'} `}
            ></div>
            <div 
                className={`absolute bottom-0 bg-${selectColor} transition-all rounded-sm`}
                style={underlineStyle}
            ></div>
        </div>
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

