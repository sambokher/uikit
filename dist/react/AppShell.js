import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import { spacingMap } from './helpers.js';

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
function AppShell(props) {
    const { 
        pageBackground='base-0', 
        maxWidth='stretch',
        justifyContent='center',
        paddingX=null,
        paddingY=null,
        children, attributes, listeners } = props;
    

    const paddingStyles = `${paddingX ? ` px-${spacingMap[paddingX]}` : ''}${paddingY ? ` py-${spacingMap[paddingY]}` : ''}`;
    const fontColor = _optionalChain([pageBackground, 'optionalAccess', _ => _.startsWith, 'call', _2 => _2('base')]) ? 'base-content' : `${pageBackground}-content`;
    const pageBgColor = `bg-${pageBackground}`;
    const fontColorValue = `text-${fontColor}`;
    

    // Ensure that parent has h-screen or replace h-full to h-screen in the classes below
    let outerClasses = `relative flex flex-col w-full h-full flex-grow ${pageBgColor} ${fontColorValue}`;

    let innerClasses = `relative flex flex-row w-full items-stretch flex-grow min-h-full self-${justifyContent} ${paddingStyles}`;

    let mainClasses = `relative flex flex-col w-full items-stretch flex-grow min-h-full`;

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
            let typeName = _optionalChain([type, 'optionalAccess', _3 => _3.displayName]) || _optionalChain([type, 'optionalAccess', _4 => _4.name]);
            typeName = _optionalChain([child, 'optionalAccess', _5 => _5.props, 'optionalAccess', _6 => _6.self, 'optionalAccess', _7 => _7.componentAPIName]); // comment out
            if (groupedChildren[typeName]) {
                groupedChildren[typeName].push(child);
            } else {
                groupedChildren.MainArea.push(child);
            }
        }
    });

    const { Header, Hero, Footer, MainArea, IconBar, Sidebar, FeaturePanel } = groupedChildren;
    
    return (
        React.createElement('div', {
        ...attributes, ...listeners,
        className: outerClasses,}

        , React.createElement('div', { 
        className: innerClasses, 
        style: { width: '100%', maxWidth: maxWidth != 'stretch' ? `${maxWidth}px` : '100%'},}

            , IconBar
            , Sidebar
            , FeaturePanel

            /* Main Block */
            , React.createElement('div', { className: mainClasses, 
            style: {minHeight: '100%'},}

                , Header
                , Hero
                , React.createElement('div', { className: `flex flex-row flex-grow w-full h-full  justify-${justifyContent}`,}
                    , MainArea
                )
                , Footer
            )
        )
        )
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

export { AppShell as default };
//# sourceMappingURL=AppShell.js.map
