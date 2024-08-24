import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import { spacingMap } from './helpers.js';

export default function AppShell(props) {
    const { 
        pageBackground='base-0', 
        maxWidth='stretch',
        justifyContent='center',
        paddingX=null,
        paddingY=null,
        children, attributes, listeners } = props
    

    const paddingStyles = `${paddingX ? ` px-${spacingMap[paddingX]}` : ''}${paddingY ? ` py-${spacingMap[paddingY]}` : ''}`;
    const fontColor = pageBackground?.startsWith('base') ? 'base-content' : `${pageBackground}-content`;
    const pageBgColor = `bg-${pageBackground}`;
    const fontColorValue = `text-${fontColor}`;
    

    // Ensure that parent has h-screen or replace h-full to h-screen in the classes below
    let outerClasses = `relative flex flex-col w-full h-full flex-grow ${pageBgColor} ${fontColorValue}`;

    let innerClasses = `relative flex flex-row w-full items-stretch flex-grow min-h-full self-${justifyContent} ${paddingStyles}`

    let mainClasses = `relative flex flex-col w-full items-stretch flex-grow min-h-full`

    const groupedChildren = {
        Header: [],
        Hero: [],
        IconBar: [],
        Sidebar: [],
        FeaturePanel: [],
        MainArea: [], // sidepanel + main
        Footer: []
    };

    React.Children.forEach(children, child => {
        if (isValidElement(child)) {
            const { type } = child;
            let typeName = type?.displayName || type?.name;
            typeName = child?.props?.self?.componentAPIName; // comment out
            if (groupedChildren[typeName]) {
                groupedChildren[typeName].push(child);
            } else {
                groupedChildren.MainArea.push(child);
            }
        }
    });

    const { Header, Hero, Footer, MainArea, IconBar, Sidebar, FeaturePanel } = groupedChildren;
    
    return (
        <div
        {...attributes} {...listeners}
        className={outerClasses} 
        >
        <div 
        className={innerClasses} 
        style={{ width: '100%', maxWidth: maxWidth != 'stretch' ? `${maxWidth}px` : '100%'}}
        >
            {IconBar}
            {Sidebar}
            {FeaturePanel}
            
            {/* Main Block */}
            <div className={mainClasses} 
            style={{minHeight: '100%'}}
                >
                {Header}
                {Hero}
                <div className={`flex flex-row flex-grow w-full h-full  justify-${justifyContent}`}>
                    {MainArea}
                </div>
                {Footer}
            </div>
        </div>
        </div>
    );
}

AppShell.propTypes = {
    pageBackground: PropTypes.oneOfType([
        PropTypes.oneOf(['base-0',  'base-50', 'base-100', 'base-200', 'base-300', 'primary', 'secondary', 'accent']),
        PropTypes.string]),
    maxWidth: PropTypes.oneOf(['stretch', '960', '1200', '1440', '1920']),
    justifyContent: PropTypes.oneOf(['center', 'start', 'end']), 
    paddingX: PropTypes.oneOf(["2px", "4px", "6px", "8px", "10px", "12px", "16px", "24px", "32px", "48px"]),
    paddingY: PropTypes.oneOf(["2px", "4px", "6px", "8px", "10px", "12px", "16px", "24px", "32px", "48px"]),
    children: PropTypes.node
};

