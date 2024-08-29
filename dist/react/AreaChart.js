import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area, LabelList } from 'recharts';
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

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// Run 'npm install recharts' to install the recharts library


const dummyDataData = {
    keyPairs: ['week', 'sales'],
    valuePairs: [
        ['Aug 12', 150],
        ['Aug 19', 190],
        ['Aug 26', 180],
        ['Sep 2', 210],
        ['Sep 9', 205],
        ['Sep 16', 220],
        ['Sep 23', 240]
    ]
};

function AreaChartComponent(props) {
    
    const {
        backgroundColor = null, 
        width = 'full',
        height = '120px',
        lineColor = 'primary',
        lineWidth = '2',
        lineType = 'wavy',
        showDots = true,
        showLabels = true,
        showYAxis = true,
        showXAxis = true,
        showGrid = true,
        data = dummyDataData,
        title = 'Sales',
        emptyState = false,
        emptyMessage = 'Data may take up to 24 hrs to show',
        attributes,
        listeners
      } = props;

    const widthStyles = `w-${width}`;
    // const paddingStyles = padding === 'none' ? 'p-0' : `p-${padding}`;
    // const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;

    const bgStyles = backgroundColor && backgroundColor != 'none' ? `bg-${backgroundColor}` : '';
    const fontColorStyles = backgroundColor && backgroundColor != 'none' ? `text-base-content` : 'text-inherit';

    let wrapperClasses = `flex flex-col items-stretch relative ${widthStyles} ${bgStyles} ${fontColorStyles}`;

    // ${paddingStyles} ${cornerStyles}
    
    const emptyStyles = `flex flex-col justify-center items-center px-sm text-sm font-medium gap-2 rounded-md`;
    
    function transformData(keyPairs, valuePairs) {
        return valuePairs.map(values => {
            return values.reduce((obj, val, index) => {
                obj[keyPairs[index]] = val;
                return obj;
            }, {});
        });
    }
    
    const sampleData = data ? transformData(_optionalChain([data, 'optionalAccess', _ => _.keyPairs]), _optionalChain([data, 'optionalAccess', _2 => _2.valuePairs])) : [];
    const totalValue = sampleData.reduce((acc, curr) => acc + curr[_optionalChain([data, 'optionalAccess', _3 => _3.keyPairs, 'access', _4 => _4[1]])], 0);
    
    const sideMargins = (!showYAxis && !showLabels && !showDots && !showXAxis) ? 0 : 20;

    return (
        React.createElement('div', {
            ...attributes, ...listeners, 
            className: wrapperClasses,}


            /* Title Block & Menu */
            , React.createElement('div', { className: "flex flex-row items-start justify-between mb-md"    ,}
                , React.createElement('div', { className: "flex flex-col text-sm font-medium gap-2 items-start relative justify-between"       ,}
, title
                    , React.createElement('span', { className: "text-xl font-semibold" ,}, totalValue)
                )
                /* implement Kebab here
                <KebabMenu>
                     
                </KebabMenu> 
                */
            )

            /* CHART */
            , !emptyState ?
            React.createElement('div', { className: "flex flex-row" , style: { 
                    width: '100%', 
                    height: height,  },}
                , React.createElement(ResponsiveContainer, { width: '100%', height: "100%",}
                    , React.createElement(AreaChart, { data: sampleData, margin: { top: 20, right: sideMargins, bottom: 0, left: sideMargins },}
                    , showGrid && React.createElement(CartesianGrid, { strokeDasharray: "1 3" ,} )
                    , showXAxis && React.createElement(XAxis, { dataKey: _optionalChain([data, 'optionalAccess', _5 => _5.keyPairs, 'access', _6 => _6[0]]), tick: { fontSize: '12px'},})
                    , showYAxis && React.createElement(YAxis, { width: 20, tick: { fontSize: '12px'},})
                    , React.createElement(Tooltip, null )
                    , React.createElement(Area, { 
                        type: lineType === 'wavy' || lineType === 'monotone' ? 'monotone' : 'linear',
                        dataKey: _optionalChain([data, 'optionalAccess', _7 => _7.keyPairs, 'access', _8 => _8[1]]),
                        stroke: `var(--${lineColor})`, 
                        fill: `var(--${lineColor})`, 
                        strokeWidth: lineWidth,
                        dot: showDots, 
                        activeDot: { r: 4 },}

                        , showLabels && (
                            React.createElement(LabelList, { 
                                dataKey: _optionalChain([data, 'optionalAccess', _9 => _9.keyPairs, 'access', _10 => _10[1]]), 
                                position: "top", 
                                style: { fill: `var(--${lineColor})`, fontSize: 10 },} 
                            )
                        )
                    )
                )
            )
            )
        :
        React.createElement(React.Fragment, null
        , React.createElement('div', { className: emptyStyles, style: { height: height, backgroundColor: `color-mix(in srgb, currentColor 8%, transparent)`},}
            , React.createElement(Icon, { icon: "chart-up",} )
            , React.createElement('span', { className: "font-normal text-sm" ,}
                , emptyMessage
            )
        )
        )
        
        )
    );
}

AreaChartComponent.propTypes = {
    title: PropTypes.string,
    width: PropTypes.oneOf(['auto', 'full', '1/2']),
    height: PropTypes.oneOf(['92px', '120px', '240px', '360px']),
    lineColor: PropTypes.oneOf(['primary', 'accent', 'base-content', 'base-0']),
    lineWidth: PropTypes.oneOf(['1', '2', '3', '4']),
    lineType: PropTypes.oneOf(['wavy', 'linear']),
    showGrid: PropTypes.bool,
    showDots: PropTypes.bool,
    showLabels: PropTypes.bool,
    showYAxis: PropTypes.bool,
    showXAxis: PropTypes.bool,
    backgroundColor: PropTypes.oneOf(['base-0', 'base-100', 'base-200']),
    corners: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
    emptyState: PropTypes.bool,
    emptyMessage: PropTypes.string,
    data: PropTypes.shape({
        keyPairs: PropTypes.arrayOf(PropTypes.string),
        valuePairs: PropTypes.arrayOf(PropTypes.array)
    }),
};

export { AreaChartComponent as default };
//# sourceMappingURL=AreaChart.js.map
