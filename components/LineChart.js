import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { Icon } from './index'
// Run 'npm install recharts' to install the recharts library

const dummyData = {
    keyPairs: ['week', 'visitors'],
    valuePairs: [
        ['Aug 12', 1200],
        ['Aug 19', 1340],
        ['Aug 26', 1280],
        ['Sep 2', 1400],
        ['Sep 9', 1450],
        ['Sep 16', 1500],
        ['Sep 23', 1550]
    ]
}

export default function LineChartComponent(props) {

    const {
        padding = 'base',
        backgroundColor = 'base-0',
        width = 'full',
        height = '120px',
        corners = 'md',
        lineColor = 'primary',
        lineWidth = '2',
        lineType = 'wavy',
        showDots = true,
        showLabels = true,
        showYAxis = true,
        showXAxis = true,
        showGrid = true,
        data = dummyData,  
        title = 'Visitors',
        emptyState = false,
        emptyMessage = 'Data may take up to 24 hrs to show',
        attributes,
        listeners
      } = props;

    const widthStyles = `w-${width}`;
    const paddingStyles = padding === 'none' ? 'p-0' : `p-${padding}`;
    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const bgStyles = `flex bg-${backgroundColor} ${backgroundColor != 'none' ? 'text-base-content' : ''}`;

    let wrapperClasses = `flex flex-col items-stretch ${widthStyles} ${bgStyles} ${paddingStyles} ${cornerStyles} relative`
    
    const emptyStyles = `flex flex-col justify-center items-center px-sm text-sm font-medium gap-sm ${cornerStyles}`

    function transformData(keyPairs, valuePairs) {
        return valuePairs.map(values => {
            return values.reduce((obj, val, index) => {
                obj[keyPairs[index]] = val;
                return obj;
            }, {});
        });
    }
    const sampleData = data ? transformData(data?.keyPairs, data?.valuePairs) : []
    const totalValue = sampleData.reduce((acc, curr) => acc + curr[data?.keyPairs[1]], 0)
    
    const sideMargins = (!showYAxis && !showLabels && !showDots && !showXAxis) ? 0 : 20

    return (
        <div
            {...attributes} {...listeners} 
            className={wrapperClasses}
        >
            
            {/* Title Block & Menu */}
            <div className="flex flex-row items-start justify-between mb-md">
                <div className="flex flex-col text-sm font-medium gap-sm items-start relative justify-between">
{title}
                    <span className='text-xl font-semibold'>{totalValue}</span>
                </div>
                {/* implement Kebab here
                <KebabMenu>
                     
                </KebabMenu> 
                */}
            </div>

            {/* CHART */}
            {!emptyState ?
            <div className='flex flex-row' style={{ 
                    width: '100%', 
                    height: height,  }}>
                <ResponsiveContainer width={'100%'} height="100%" >
                <LineChart data={sampleData} margin={{ top: 20, right: sideMargins, bottom: 0, left: sideMargins }}>
                    {showGrid && <CartesianGrid strokeDasharray="1 3" />}
                    {showXAxis && <XAxis dataKey={data?.keyPairs[0]} tick={{ fontSize: '12px'}}/>}
                    {showYAxis && <YAxis width={20} tick={{ fontSize: '12px'}}/>}
                    <Tooltip />
                    <Line 
                        type={lineType === 'wavy' || lineType === 'monotone' ? 'monotone' : 'linear'} 
                        dataKey={data?.keyPairs[1]}
                        stroke={`var(--${lineColor})`} // Configurable line color
                        strokeWidth={lineWidth} // Configurable line width
                        dot={showDots} // Configurable dots visibility
                        activeDot={{ r: 4 }}
                    >
                    {showLabels && <LabelList dataKey={data?.keyPairs[1]} position="top" style={{ fill: `var(--${lineColor})`, fontSize: 10 }} />}
                    </Line>
                </LineChart>
            </ResponsiveContainer>
            </div>
            
            
        :
        <>
        <div className={emptyStyles} style={{ height: height, backgroundColor: `color-mix(in srgb, currentColor 8%, transparent)`}}>
            <Icon icon='chart-up' />
            <span className='font-normal text-sm'>
                {emptyMessage}
            </span>
        </div>
        </>
        }
        </div>
    );
}

LineChartComponent.propTypes = {
    title: PropTypes.string,
    width: PropTypes.oneOf(['auto', 'full', '1/2']),
    height: PropTypes.oneOf(['92px', '120px', '240px', '360px']),
    lineColor: PropTypes.oneOf(['primary', 'accent', 'base-content']),
    lineWidth: PropTypes.oneOf(['1', '2', '3', '4']),
    lineType: PropTypes.oneOf(['wavy', 'linear']),
    showGrid: PropTypes.bool,
    showDots: PropTypes.bool,
    showLabels: PropTypes.bool,
    showYAxis: PropTypes.bool,
    showXAxis: PropTypes.bool,
    backgroundColor: PropTypes.oneOf(['base-0', 'base-100', 'base-200', 'none']),
    padding: PropTypes.oneOf(['none', 'sm', 'base', 'md', 'lg']),
    corners: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
    emptyState: PropTypes.bool,
    emptyMessage: PropTypes.string,
    data: PropTypes.shape({
        keyPairs: PropTypes.arrayOf(PropTypes.string),
        valuePairs: PropTypes.arrayOf(PropTypes.array)
    }),
};


