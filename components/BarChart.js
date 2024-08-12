import PropTypes from 'prop-types'
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, BarChart, LabelList } from 'recharts';
import { Icon } from './index'
// Run 'npm install recharts' to install the recharts library


const dummyDataData = {
    keyPairs: ['name', 'temperature'],
    valuePairs: [
        ['Aug 12', 45],
        ['Aug 19', 34],
        ['Aug 26', 52],
        ['Sep 2', 51],
        ['Sep 9', 52],
        ['Sep 16', 60],
        ['Sep 23', 80]
    ]
}

export default function BarChartComponent(props) {

    const {
        padding = 'base',
        backgroundColor = 'base-0',
        width = 'full',
        height = '120px',
        corners = 'md',
        barColor = 'primary',
        showDots = true,
        showLabels = true,
        showYAxis = true,
        showXAxis = true,
        showGrid = true,
        data = dummyDataData,
        title = 'Metric Name',
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
                <BarChart data={sampleData} margin={{ top: 20, right: sideMargins, bottom: 0, left: sideMargins }}>
                    {showGrid && <CartesianGrid strokeDasharray="1 3" />}
                    {showXAxis && <XAxis dataKey={data?.keyPairs[0]} tick={{ fontSize: '12px'}}/>}
                    {showYAxis && <YAxis width={20} tick={{ fontSize: '12px'}}/>}
                    <Tooltip />
                    <Bar dataKey={data?.keyPairs[1]} fill={`var(--${barColor})`}>
                        {showLabels && (<LabelList 
                            dataKey={data?.keyPairs[1]} 
                            position="top" 
                            style={{ fontSize: 10 }} 
                        />
                        )}
                    </Bar>
                </BarChart>
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

BarChartComponent.propTypes = {
    title: PropTypes.string,
    width: PropTypes.oneOf(['auto', 'full', '1/2']),
    height: PropTypes.oneOf(['92px', '120px', '240px', '360px']),
    barColor: PropTypes.oneOf(['primary', 'accent', 'base-content']),
    backgroundColor: PropTypes.oneOf(['base-0', 'base-100', 'base-200', 'none']),
    padding: PropTypes.oneOf(['none', 'sm', 'base', 'md', 'lg']),
    corners: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
    emptyState: PropTypes.bool,
    emptyMessage: PropTypes.string,
    showGrid: PropTypes.bool,
    showDots: PropTypes.bool,
    showLabels: PropTypes.bool,
    showYAxis: PropTypes.bool,
    showXAxis: PropTypes.bool,
    data: PropTypes.shape({
        keyPairs: PropTypes.arrayOf(PropTypes.string),
        valuePairs: PropTypes.arrayOf(PropTypes.array)
    })
};

