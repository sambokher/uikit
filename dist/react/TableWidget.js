import PropTypes from 'prop-types';
import React, { useState } from 'react';
import * as index from './index.js';
import Pagination from './Pagination.js';
import Checkbox from './Checkbox.js';
import Icon from './Icon.js';

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
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
];

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
];

function TableWidget(props) {

  const {
    bgColor = null,
    textSize = 'sm',
    cellPaddingX = '8px',
    cellPaddingY = '6px',
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
    const [selectedRows, setSelectedRows] = useState([]);
    const [ sortState, setSortState ] = useState({ accessor: 'name', direction: 'asc' });
    
    function handleAllRowsSelect () {
      const rowIds = rowData.map((item) => item.id) || [];
      const newSelectedRows = selectedRows.length < rowIds.length ? rowIds : []; 
      setSelectedRows(newSelectedRows);
    }
    function handleRowSelect (rowId) {
      let newRows = [...selectedRows];
      if (selectedRows.includes(rowId)) {
        newRows = selectedRows.filter((row) => row !== rowId);
      } else {
        newRows = [...selectedRows, rowId];
      }
      setSelectedRows(newRows);
    }
    // Pre-process data
    let columns = columnData;
    let data = [...rowData].sort((a, b) => {
    if (a[sortState.accessor] < b[sortState.accessor]) {
      return sortState.direction === 'asc' ? -1 : 1;
    }
    if (a[sortState.accessor] > b[sortState.accessor]) {
      return sortState.direction === 'asc' ? 1 : -1;
    }});

    
    const addSelection = hasRowSelect;
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
        };
        columns = [newColumn, ...columns];
        
        data = data.map((row) => {
            return { checkbox: { 
              component: "Checkbox", 
              props: { 
                isChecked: selectedRows.includes(_optionalChain([row, 'optionalAccess', _ => _.id])),
                size: "small", 
                label: null, 
                onChange: () => handleRowSelect(_optionalChain([row, 'optionalAccess', _2 => _2.id]))
                } 
              }, 
              ...row,
            }
        });
    }

    // STYLING 
    const textColor = (!bgColor || bgColor == 'none') ? '' : `text-base-content`;
    const cornerStyles = corners != 'none' ? `rounded-${corners}` : '';
    const textSizeStyles = textSize != 'auto' ? `text-${textSize}` : '';
    
    let tableContainerClasses = `w-full table-auto border-collapse ${textSizeStyles} ${textColor} ${cornerStyles}`;
    
    const lighterBorder = borders == 'none' ? 'none' : `1px solid var(--base-100)`;
    const darkerBorder = borders == 'none' ? 'none' : `1px solid var(--base-200)`;
    const borderRadius = corners == 'none' ? '0' : `var(--border-radius-${corners})` || '4px';
    
    // Background color for the table rows
    function getRowStyles(index, rowId) {
      const rowSelected = selectedRows.includes(rowId);
      let rowStyles = ``;
      if (!bgColor || bgColor == 'none') {
        rowStyles = rowSelected ? 'bg-base-50' : 'hover:bg-base-50'; // transparent bg only highlights on hover or when selected
      } else if (bgColor == 'zebra') {
        rowStyles = index % 2 === 0 ? 'bg-base-50' : 'bg-base-0 hover:bg-base-50'; // zebra stripes
      } else {
        rowStyles = bgColor == 'base-0' ? 
        rowSelected ? `bg-base-50` : `bg-base-0 hover:bg-base-50` : 
        bgColor == 'base-50' ? rowSelected ? `bg-base-100` : `bg-base-50 hover:bg-base-100` : '';
      }
      return rowStyles
    }

    const padding = {
      paddingLeft: cellPaddingX,
      paddingRight: cellPaddingX,
      paddingTop: cellPaddingY,
      paddingBottom: cellPaddingY
    };
    
    // This function helps style the cells based on the column configuration
    const styleFromColumn = (column, isHeader=false) => ({
        ...(isHeader && !showHeader ? {} : padding),
        display: isHeader && !showHeader && 'none',
        height: isHeader ? showHeader ? 'auto' : 0 : '100%',
        textAlign: _optionalChain([column, 'optionalAccess', _3 => _3.textAlign]),
        whiteSpace: _optionalChain([column, 'optionalAccess', _4 => _4.nowrap]) ? 'nowrap' : 'normal', 
        alignItems: _optionalChain([column, 'optionalAccess', _5 => _5.alignItems]),
        justifyContent: _optionalChain([column, 'optionalAccess', _6 => _6.justifyContent]),
        flexDirection: _optionalChain([column, 'optionalAccess', _7 => _7.direction]),
      });
    
    // This function ensures that the total width of the columns is 100%
    const totalVisibleWidth = _optionalChain([columns, 'optionalAccess', _8 => _8.reduce, 'call', _9 => _9((total, column) => {
      {
        const widthValue = parseFloat(column.width);
        return total + widthValue;
      }
    }, 0)]);

    // This function renders the content of each cell
    function renderCell({ content, columnType='text' }){
      if (columnType === 'object' || columnType === 'arrayOfObjects' || columnType === 'checkbox') {
        if (!Array.isArray(content)) {
          content = [content]; // Convert non-array content to an array
        }
    
        return (
          React.createElement(React.Fragment, null
            , content.map((item, idx) => {
              if (item && typeof item === 'object' && item.component && item.props) {
                const Component = index[item.component];
                if (Component) return (
                  React.createElement(React.Fragment, { key: idx,}
                    , React.createElement(Component, item.props)
                  )
                );
              } else {
                return React.createElement('span', { key: idx,}, String(item));
              }
            })
          )
        );
      } else {
        // For 'text', 'number', 'datetime', render the content directly
        return React.createElement('span', null, String(content));
      }
    }
    return (
      React.createElement('div', { 
      ...attributes, ...listeners, 
      className: "relative w-full flex-shrink-0 border-spacing-0"   ,}
        , React.createElement('table', { className: tableContainerClasses,
         style: {
          // tableLayout: 'fixed',  
          borderCollapse: 'separate',  
          borderSpacing: 0,
          border: darkerBorder,
          borderRadius
        },}



          /* TABLE HEADER */
          , React.createElement('thead', null
          , React.createElement('tr', null
            , _optionalChain([columns, 'optionalAccess', _10 => _10.map, 'call', _11 => _11((column, index$1) => {
              const originalWidthPercent = parseFloat(column.width);
              const adjustedWidth = (originalWidthPercent / totalVisibleWidth) * 100;
              const isSortable = column.isSortable && column.type !== 'object' && column.type !== 'arrayOfObjects';
              const isSorted = sortState.accessor == column.accessor;

              return (React.createElement('th', { key: index$1, 
                className: `${_optionalChain([column, 'optionalAccess', _12 => _12.hideOnMobile]) ? 'hidden md:table-cell' : 'table-cell'} relative`,
                style: { 
                width: `${adjustedWidth.toFixed(2)}%`,
                backgroundColor: (!bgColor || bgColor == 'none') ? '' : bgColor == 'base-100' ? 'var(--base-100)' : 'var(--base-0)',
                borderRight: (borders == 'vert' || borders == 'all') ? lighterBorder : 'none',
                borderBottom: showHeader && borders !== 'none' && borders != 'vert' ? darkerBorder : 'none',
                
                ...(showHeader && index$1 == 0 ? { borderTopLeftRadius: borderRadius } : {}),
                ...(showHeader && index$1 === columns.length - 1 ? { borderTopRightRadius: borderRadius } : {}),
                // Ensure that the right border is not applied to the last header cell
                ...(index$1 === columns.length - 1 ?  { borderRight: 'none'} : {}),
                },}
                  , React.createElement('div', { 
                    className: "flex gap-1.5 h-full relative group items-center select-auto"      ,  
                    style: styleFromColumn(column, true),}
                  , column.type === 'checkbox' ? 
                    React.createElement(Checkbox, { 
                      size: "small", 
                      isChecked: selectedRows.length > 0,
                      label: null, 
                      isPartial: selectedRows.length != rowData.length,
                      onChange: handleAllRowsSelect,}
                    ) : 
                  column.header
                  , isSorted ?
                  React.createElement('div', { className: `rounded-full hover:bg-base-200 cursor-pointer`, 
                  onClick: (e) => 
                      {e.stopPropagation();
                      setSortState({ 
                      accessor: column.accessor, 
                      direction: sortState.direction === 'asc' ? 'desc' : 'asc' });},}

                  , sortState.direction == 'asc' ? 
                    React.createElement(Icon, { icon: "arrow-up", className: "scale-75 select-none" ,} ) : 
                    React.createElement(Icon, { icon: "arrow-down", className: "scale-75 select-none" ,}  )
                  
                  ) : isSortable && 
                  React.createElement('div', { className: `rounded-full hover:bg-base-200 cursor-pointer opacity-0 group-hover:opacity-100`, 
                  onClick: (e) => 
                    {e.stopPropagation();
                    setSortState({ 
                      accessor: column.accessor, 
                      direction: 'asc' });},}
                  , React.createElement(Icon, { icon: "arrow-down", className: "scale-75 select-none" ,}  )
                  )
                  
                  )
              )
            )
            })])
          )
        )

      /* TABLE BODY */
      , React.createElement('tbody', null
        , _optionalChain([data, 'optionalAccess', _13 => _13.map, 'call', _14 => _14((item, rowIndex) => (
          React.createElement('tr', { key: item.id, 
          // onClick={() => onRowClick(item.id)} 
          className: `${getRowStyles(rowIndex, item.id)} relative group`,}
            , columns.map((column, colIndex) => { 

              const originalWidthPercent = parseFloat(column.width);
              const adjustedWidth = (originalWidthPercent / totalVisibleWidth) * 100;
              return (React.createElement('td', { 
                key: colIndex, 
                
                className: `${_optionalChain([column, 'optionalAccess', _15 => _15.hideOnMobile]) ? 'hidden md:table-cell' : 'table-cell'} relative`,
                style: {   
                  borderRight: (borders == 'all' || borders == 'vert') ? lighterBorder : 'none',
                  borderBottom: (borders == 'horiz' || borders == 'all') ? rowIndex < data.length - 1 ? lighterBorder : pagination == 'none' ? 'none' : darkerBorder : 'none',
                  width: `${adjustedWidth.toFixed(2)}%`,
                  alignContent: column.alignItems || 'start',
                  justifyContent: column.justifyContent || 'start',
                  height: '100%',
                    ...(colIndex === 0 && rowIndex === data.length - 1 ? { borderBottomLeftRadius: pagination == 'none' &&  borderRadius } : {}),
                    ...(colIndex === columns.length - 1 && rowIndex === data.length - 1 ? { borderBottomRightRadius: pagination == 'none' && borderRadius } : {}),
                    ...(colIndex === columns.length - 1 ? { borderRight: 'none' } : {}),
                },}
              , React.createElement('div', { className: `flex gap-1 h-full w-full ${column.displayOnHoverOnly ? 'opacity-0 group-hover:opacity-100' : ''}`, style: styleFromColumn(column),}
              , renderCell({
                content: item[_optionalChain([column, 'optionalAccess', _16 => _16.accessor])], 
                columnType: _optionalChain([column, 'optionalAccess', _17 => _17.type])})
              )
            ))}
            )
          )
        ))])
      )
      , 
        pagination !== 'none' && 
        React.createElement('tfoot', null, React.createElement('tr', null
        , React.createElement('td', { colSpan: columns.length, style: {overflow: 'hidden'},}

        , React.createElement(Pagination, { 
          type: pagination,  
          bgColor: bgColor,
          paddingX: cellPaddingX, 
          paddingY: cellPaddingY, 
          onChange: () => console.log('Change page'), // change to your function
          currentPage: 1, // add a variable
          totalPages: 8,} // add a variable          
          )

      )
      )
      )
      

        )
        )
    );
}


TableWidget.propTypes = {
  bgColor: PropTypes.oneOf(['base-0', 'base-100', 'zebra']),
  textSize: PropTypes.oneOf(['auto', 'xs', 'sm', 'base', 'md']),
  cellPaddingX: PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px', '24px']),
  cellPaddingY: PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px', '24px']),
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

export { TableWidget as default };
//# sourceMappingURL=TableWidget.js.map
