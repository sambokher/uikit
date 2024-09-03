import React from 'react';
import PropTypes from 'prop-types';
import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Icon } from './index'
import { iconMap } from './iconMap'

const allIconNames = Object.keys(iconMap) || []

const sampleTabs = [
    { label: 'Home', value: 'home', icon: 'home'},
    { label: 'Help', value: 'help', icon: 'support'},
    { label: 'Settings', value: 'settings', icon: 'settings'},
    { label: 'Balances', value: 'balances', icon: 'chart-up'},
];

export default function TabGroup(props) {
    const {
        tabs: externalTabs,
        value: externalValue,
        selectColor = 'accent',
        size = 'medium',
        underlineAll=true,
        style='default',
        onChange,
        attributes,
        listeners
    } = props;
    

    const [internalTabs, setInternalTabs] = useState(externalTabs || sampleTabs);
    const [selectedTab, setSelectedTab] = useState(externalValue || internalTabs[0].value);
    const isControlled = externalTabs !== undefined && onChange !== undefined;
    const tabs = isControlled ? externalTabs : internalTabs;

    useEffect(() => {if (externalTabs) {setInternalTabs(externalTabs);}}, [externalTabs]);
    useEffect(() => {if (externalValue) {setSelectedTab(externalValue);}}, [externalValue]);     
    
    function handleTabClick(value) {
        if (isControlled && onChange) {
            onChange(value);
        } else {
            setSelectedTab(value);
        }
    }
    
    let buttonsSizeStyles = size === 'small' ? `text-xs gap-1.5` : size === 'large' ? `text-md gap-3` : `text-sm gap-2`;
    let defaultSizeStyles = size === 'small' ? `py-1 text-xs gap-1.5 -ml-2` :  
        size === 'large' ? `py-3 gap-3 text-md -ml-2` : `py-1.5 gap-2 text-sm -ml-2`;

    const sizeStyles = style === 'buttons' ? buttonsSizeStyles : defaultSizeStyles;
    let wrapperClasses = `flex flex-row items-center w-full relative`;

    const bgStylesMap = {
        'buttons': 'opacity-100 hover:bg-current-10 opacity-80 hover:opacity-100',
        'default': 'hover:bg-current-10 opacity-70 hover:opacity-100'
    }
    
    const tabStyles = `px-2 py-0.5 cursor-pointer ${bgStylesMap[style]}
    
     rounded-md transition-all duration-150 font-medium
      items-center select-none`;

    // !bg-current-10 !hover:bg-base-100
    const activeStyles = style == 'buttons' ? `bg-current-10 !opacity-100` : `text-${selectColor} !opacity-100` 
    
    const tabRefs = useRef([]);
    
    const [underlineStyle, setUnderlineStyle] = useState({});
    useLayoutEffect(() => {
        const activeTab = tabs.findIndex(tab => tab.value === selectedTab);
        if (tabRefs.current[activeTab]) {
            const { offsetLeft, clientWidth } = tabRefs.current[activeTab];
            setUnderlineStyle({
                left: offsetLeft + 'px',
                width: clientWidth + 'px',
                height: size === 'small' ? '2px' : size === 'large' ? '3px' : '2.5px',
            });
        }
    }, [tabs, size, selectedTab]); 

    return (
        <div {...attributes} {...listeners} className={wrapperClasses}
        >
            <div className={`w-full flex flex-row items-center ${sizeStyles} `}>
            {tabs.map((tab, index) => (
                <div key={index}
                onClick={(e) => handleTabClick(tab.value)}
                className={`${tabStyles} ${tab.value == selectedTab ? activeStyles : ''}`}
                >   
                    <span className='flex flex-row gap-1 whitespace-nowrap items-center'
                    ref={el => tabRefs.current[index] = el}
                    >   
                    {tab.icon && <Icon icon={tab.icon} className='scale-75 -ml-1 stroke-[2px]' />}
                    {tab.label}</span>
                </div>
            ))}
            </div>

            {/* Underline Area */}
            {style === 'default' && 
            <>
            <div 
                className={`absolute bottom-0 left-0 h-px w-full rounded-full
                ${ underlineAll ? 'bg-base-200' : 'bg-transparent'} `}
            ></div>
            <div 
                className={`absolute bottom-0 bg-${selectColor} transition-all rounded-sm`}
                style={underlineStyle}
            ></div>
            </>
            }
        </div>
    );
}

TabGroup.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
        icon: PropTypes.oneOf(allIconNames),
    })),
    selectColor: PropTypes.oneOf(['primary', 'accent', 'base-content', 'base-700', 'base-500', 'base-300', 'base-100']),
    onSelect: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    style: PropTypes.oneOf(['buttons', 'default']),
    underlineAll: PropTypes.bool,
};

