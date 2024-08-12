import PropTypes from 'prop-types'
import React, { useState } from 'react';
import * as UIKit from './index';
import { Pagination } from './index';
import { ArrowDown, ArrowUp, Square } from 'iconoir-react';

const sampleColumns = [
  {
      accessor: 'name', 
      header: 'Person',
      width: '40%',
      type: 'text',
      direction: 'flex-row',
      alignItems: 'center',
      justifyContent: 'start',
      isSortable: true, 
      hideOnMobile: false
  },
  { 
      accessor: 'role', 
      header: 'Role',
      width: '30%', 
      type: 'object',
      direction: 'flex-row',
      alignItems: 'center', 
      justifyContent: 'start',
      isSortable: true,
      hideOnMobile: true
  },
  { 
      accessor: 'tags', 
      header: 'Status',
      width: '20%', 
      direction: 'flex-col',
      type: 'arrayOfObjects',
      alignItems: 'center', 
      justifyContent: 'start',
      isSortable: false, 
      hideOnMobile: true
  },
  {
      accessor: 'actions', 
      header: '',
      width: '10%',
      type: 'arrayOfObjects', 
      direction: 'flex-row',
      alignItems: 'center',
      justifyContent: 'end',
      displayOnHoverOnly: true,
      isSortable: false, 
  }
]

const dummyData = [
  {
    id: 1,
    name: 'John Doe', 
    role: { component: "Select", props: { size: "small", currentOption: "Manager", } },
    tags: { component: "Status", props: { text: "Online", color: "success", size: "small", showIndicator: true } },
    actions: [
      { component: "IcoNoirIcon", props: { name: "EditPencil", size: "20" } },
      { component: "IcoNoirIcon", props: { name: "Trash", size: "20" } }
    ],
  },
  {
    id: 2, 
    name: 'Apple Doe',
    role: { component: "Select", props: { size: "small", currentOption: "Engineer", } },
    tags: { component: "Status", props: { text: "Offline", color: "error", size: "small", showIndicator: true } },
    actions: [
      { component: "IcoNoirIcon", props: { name: "EditPencil", size: "20" } },
      { component: "IcoNoirIcon", props: { name: "Trash", size: "20" } }
    ],
  },
  {
    id: 3,
    name: 'Jane Doe',
    role: { component: "Select", props: { size: "small", currentOption: "Analyst", } },
    tags: { component: "Status", props: { text: "Busy", color: "warning", size: "small", showIndicator: true } },
    actions: [
      { component: "IcoNoirIcon", props: { name: "EditPencil", size: "20" } },
      { component: "IcoNoirIcon", props: { name: "Trash", size: "20" } }
    ],
  },
  {
    id: 4,
    name: 'John Doe',
    role: { component: "Select", props: { size: "small", currentOption: "Consultant" } },
    tags: { component: "Status", props: { text: "Away", color: "info", size: "small", showIndicator: true } },
    actions: [
      { component: "IcoNoirIcon", props: { name: "EditPencil", size: "20" } },
      { component: "IcoNoirIcon", props: { name: "Trash", size: "20" } }
    ],
  }
]

export default function TableWidget(props) {

  const {
    bgColor = 'none',
    textSize = 'sm',
    cellPaddingX = 'sm',
    cellPaddingY = 'xs',
    pagination = 'none',
    showHeader = true,
    corners = 'md',
    borders = 'horiz',
    hasRowSelect = false,
    columnData = sampleColumns, 
    rowData = dummyData,        
    hasOutline = false,
    onRowClick= () => {},
    attributes,
    listeners
  } = props;
    
    const isMobile = false
    const [selectedRows, setSelectedRows] = useState([])
    const [ sortState, setSortState ] = useState({ accessor: 'name', direction: 'asc' })
    
    function handleAllRowsSelect () {
      const rowIds = rowData.map((item) => item.id) || []
      const newSelectedRows = selectedRows.length < rowIds.length ? rowIds : [] 
      setSelectedRows(newSelectedRows)
    }
    function handleRowSelect (rowId) {
      let newRows = [...selectedRows]
      if (selectedRows.includes(rowId)) {
        newRows = selectedRows.filter((row) => row !== rowId)
      } else {
        newRows = [...selectedRows, rowId]
      }
      setSelectedRows(newRows)
    }
    // Pre-process data
    let columns = columnData
    let data = [...rowData].sort((a, b) => {
    if (a[sortState.accessor] < b[sortState.accessor]) {
      return sortState.direction === 'asc' ? -1 : 1;
    }
    if (a[sortState.accessor] > b[sortState.accessor]) {
      return sortState.direction === 'asc' ? 1 : -1;
    }})

    
    const addSelection = hasRowSelect
    if (addSelection) {
        const newColumn = {
            accessor: 'checkbox',
            header: null,
            width: '6%',
            type: 'checkbox',
            direction: 'flex-row',
            alignItems: 'center',
            justifyContent: 'start',
            isSortable: false,
            hideOnMobile: false
        }
        columns = [newColumn, ...columns]
        
        data = data.map((row) => {
            return { checkbox: { 
              component: "Checkbox", 
              props: { 
                isChecked: selectedRows.includes(row?.id),
                size: "small", 
                label: null, 
                onChange: () => handleRowSelect(row?.id)
                } 
              }, 
              ...row,
            }
        })
    }

    // STYLING 
    const textColor = bgColor == 'none' ? '' : `text-base-content`
    const cornerStyles = corners != 'none' ? `rounded-${corners}` : ''
    const textSizeStyles = textSize != 'auto' ? `text-${textSize}` : ''
    
    let tableContainerClasses = `w-full table-auto border-collapse ${textSizeStyles} ${textColor} ${cornerStyles}`
    
    const lighterBorder = borders == 'none' ? 'none' : `1px solid var(--base-100)`
    const darkerBorder = borders == 'none' ? 'none' : `1px solid var(--base-200)`
    const borderRadius = corners == 'none' ? '0' : `var(--border-radius-${corners})` || '4px'
    
    // Background color for the table rows
    function getRowStyles(index, rowId) {
      const rowSelected = selectedRows.includes(rowId)
      let rowStyles = ``
      if (bgColor == 'none') {
        rowStyles = rowSelected ? 'bg-base-50' : 'hover:bg-base-50' // transparent bg only highlights on hover or when selected
      } else if (bgColor == 'zebra') {
        rowStyles = index % 2 === 0 ? 'bg-base-50' : 'bg-base-0 hover:bg-base-50' // zebra stripes
      } else {
        rowStyles = bgColor == 'base-0' ? 
        rowSelected ? `bg-base-50` : `bg-base-0 hover:bg-base-50` : 
        bgColor == 'base-50' ? rowSelected ? `bg-base-100` : `bg-base-50 hover:bg-base-100` : ''
      }
      return rowStyles
    }

    const vertPadding = `var(--spacing-${cellPaddingY})`
    const horizPadding = `var(--spacing-${cellPaddingX})`
    
    const padding = {
      paddingLeft: horizPadding,
      paddingRight: horizPadding,
      paddingTop: vertPadding,
      paddingBottom: vertPadding
    }
    
    // This function helps style the cells based on the column configuration
    const styleFromColumn = (column, isHeader=false) => ({
        ...(isHeader && !showHeader ? {} : padding),
        display: isHeader && !showHeader && 'none',
        height: isHeader ? showHeader ? 'auto' : 0 : '100%',
        textAlign: column?.textAlign,
        whiteSpace: column?.nowrap ? 'nowrap' : 'normal', 
        alignItems: column?.alignItems,
        justifyContent: column?.justifyContent,
        flexDirection: column?.direction,
      });
    
    // This function ensures that the total width of the columns is 100%
    const totalVisibleWidth = columns?.reduce((total, column) => {
      if (!isMobile || !column.hideOnMobile) {
        const widthValue = parseFloat(column.width);
        return total + widthValue;
      }
      return total;
    }, 0);

    // This function renders the content of each cell
    function renderCell({ content, columnType='text' }){
      if (columnType === 'object' || columnType === 'arrayOfObjects' || columnType === 'checkbox') {
        if (!Array.isArray(content)) {
          content = [content]; // Convert non-array content to an array
        }
    
        return (
          <>
            {content.map((item, idx) => {
              if (item && typeof item === 'object' && item.component && item.props) {
                const Component = UIKit[item.component]
                if (Component) return (
                  <React.Fragment key={idx}>
                    {React.createElement(Component, item.props)}
                  </React.Fragment>
                );
              } else {
                return <span key={idx}>{String(item)}</span>;
              }
            })}
          </>
        );
      } else {
        // For 'text', 'number', 'datetime', render the content directly
        return <span>{String(content)}</span>;
      }
    };    

    return (
      <div 
      {...attributes} {...listeners} 
      className='relative w-full flex-shrink-0 border-spacing-0'>
        <table className={tableContainerClasses}
         style={{
          // tableLayout: 'fixed',  
          borderCollapse: 'separate',  
          borderSpacing: 0,
          border: darkerBorder,
          borderRadius
        }}
        
        >
        
          {/* TABLE HEADER */}
          <thead >
          <tr>
            {columns?.map((column, index) => {
              if (isMobile && column.hideOnMobile) {
                return null; // Don't render this column on mobile
              }
              const originalWidthPercent = parseFloat(column.width);
              const adjustedWidth = (originalWidthPercent / totalVisibleWidth) * 100;
              const isSortable = column.isSortable && column.type !== 'object' && column.type !== 'arrayOfObjects';
              const isSorted = sortState.accessor == column.accessor;

              return (<th key={index} 
                className={`${column?.hideOnMobile ? 'hidden md:table-cell' : 'table-cell'} relative`}
                style={{ 
                width: `${adjustedWidth.toFixed(2)}%`,
                backgroundColor: bgColor == 'none' ? '' : bgColor == 'base-100' ? 'var(--base-100)' : 'var(--base-0)',
                borderRight: (borders == 'vert' || borders == 'all') ? lighterBorder : 'none',
                borderBottom: showHeader && borders !== 'none' && borders != 'vert' ? darkerBorder : 'none',
                
                ...(showHeader && index == 0 ? { borderTopLeftRadius: borderRadius } : {}),
                ...(showHeader && index === columns.length - 1 ? { borderTopRightRadius: borderRadius } : {}),
                // Ensure that the right border is not applied to the last header cell
                ...(index === columns.length - 1 ?  { borderRight: 'none'} : {}),
                }}>
                  <div 
                    className='flex gap-xs h-full relative group items-center select-auto'  
                    style={styleFromColumn(column, true)} >
                  {column.type === 'checkbox' ? 
                    <UIKit.Checkbox 
                      size='small' 
                      isChecked={selectedRows.length > 0}
                      label={null} 
                      isPartial={selectedRows.length != rowData.length}
                      onChange={handleAllRowsSelect}
                    /> : 
                  column.header}
                  {isSorted ?
                  <div className={`rounded-full hover:bg-base-200 cursor-pointer`} 
                  onClick={(e) => 
                      {e.stopPropagation();
                      setSortState({ 
                      accessor: column.accessor, 
                      direction: sortState.direction === 'asc' ? 'desc' : 'asc' })}}>
                  
                  {sortState.direction == 'asc' ? 
                    <ArrowUp className='scale-75 select-none' style={{strokeWidth: 2}}/> : 
                    <ArrowDown className='scale-75 select-none' style={{strokeWidth: 2}} />
                  }
                  </div> : isSortable && 
                  <div className={`rounded-full hover:bg-base-200 cursor-pointer opacity-0 group-hover:opacity-100`} 
                  onClick={(e) => 
                    {e.stopPropagation();
                    setSortState({ 
                      accessor: column.accessor, 
                      direction: 'asc' })}}>
                  <ArrowDown className='scale-75 select-none'  />
                  </div>
                  }
                  </div>
              </th>
            )
            })}
          </tr>
        </thead>

      {/* TABLE BODY */}
      <tbody>
        {data?.map((item, rowIndex) => (
          <tr key={item.id} 
          // onClick={() => onRowClick(item.id)} 
          className={`${getRowStyles(rowIndex, item.id)} relative group`} >
            {columns.map((column, colIndex) => { 
              
              if (isMobile && column.hideOnMobile) {
                return null; 
              }

              const originalWidthPercent = parseFloat(column.width);
              const adjustedWidth = (originalWidthPercent / totalVisibleWidth) * 100;
              return (<td 
                key={colIndex} 
                
                className={`${column?.hideOnMobile ? 'hidden md:table-cell' : 'table-cell'} relative`}
                style={{   
                  borderRight: (borders == 'all' || borders == 'vert') ? lighterBorder : 'none',
                  borderBottom: (borders == 'horiz' || borders == 'all') ? rowIndex < data.length - 1 ? lighterBorder : pagination == 'none' ? 'none' : darkerBorder : 'none',
                  width: `${adjustedWidth.toFixed(2)}%`,
                  alignContent: column.alignItems || 'start',
                  justifyContent: column.justifyContent || 'start',
                  height: '100%',
                    ...(colIndex === 0 && rowIndex === data.length - 1 ? { borderBottomLeftRadius: pagination == 'none' &&  borderRadius } : {}),
                    ...(colIndex === columns.length - 1 && rowIndex === data.length - 1 ? { borderBottomRightRadius: pagination == 'none' && borderRadius } : {}),
                    ...(colIndex === columns.length - 1 ? { borderRight: 'none' } : {}),
                }}>
              <div className={`flex gap-2xs h-full w-full ${column.displayOnHoverOnly ? 'opacity-0 group-hover:opacity-100' : ''}`} style={styleFromColumn(column)} >
              {renderCell({
                content: item[column?.accessor], 
                columnType: column?.type})}
              </div>
            </td>)}
            )}
          </tr>
        ))}
      </tbody>
      {
        pagination !== 'none' && 
        <tfoot><tr>
        <td colSpan={columns.length} style={{overflow: 'hidden'}}>

        <Pagination 
          type={pagination}  
          bgColor={bgColor}
          paddingX={cellPaddingX} 
          paddingY={cellPaddingY} 
          onChange={() => console.log('Change page')} // change to your function
          currentPage={1} // add a variable
          totalPages={8} // add a variable          
          />

      </td>
      </tr>
      </tfoot>
      }

        </table>
        </div>
    );
}


TableWidget.propTypes = {
  bgColor: PropTypes.oneOf(['base-0', 'base-100', 'zebra', 'none']),
  textSize: PropTypes.oneOf(['auto', 'xs', 'sm', 'base', 'md']),
  cellPaddingX: PropTypes.oneOf(['none', '2xs', 'xs', 'sm', 'base', 'md', 'lg']),
  cellPaddingY: PropTypes.oneOf(['none', '2xs', 'xs', 'sm', 'base', 'md', 'lg']),
  pagination: PropTypes.oneOf(['none', 'mini', 'standard']),
  showHeader: PropTypes.bool,
  corners: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  borders: PropTypes.oneOf(['none', 'all', 'horiz', 'vert', 'onlyHeader']),
  hasRowSelect: PropTypes.bool,
  columnData: PropTypes.arrayOf(PropTypes.shape({
    accessor: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'datetime', 'object', 'arrayOfObjects']),
    header: PropTypes.string,
    width: PropTypes.string.isRequired,
    direction: PropTypes.string,
    alignItems: PropTypes.string,
    justifyContent: PropTypes.string,
    isSortable: PropTypes.bool,
    hideOnMobile: PropTypes.bool, 
  })),
  rowData: PropTypes.arrayOf(PropTypes.object)
};

