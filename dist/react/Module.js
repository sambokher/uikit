import PropTypes from 'prop-types';

function Module(props) {

    const { module_name, background, corners, hasOutline, flexDirection, gap, alignItems, justifyContent, width, height, paddingX, paddingY, maxWidth, minWidth, maxHeight, minHeight, children, attributes, listeners} = props;

    
    const bgStyles = background && background != 'none' ? `bg-${background} ` : ' ';
    const paddingStyles = `${paddingX ? `px-${paddingX}` : ''} ${paddingY ? `py-${paddingY}` : ''}`;
    const widthStyles = `w-${width}`;
    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const heightStyles = `${height}`;
    const gapStyles = gap === 'none' ? '' : `gap-${gap}`;
    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';
    const borderStyles = hasOutline ? 'border border-base-300 ' : ' ';

    let classes = `flex ${bgStyles}${flexDirection} ${borderStyles} ${cornerStyles} ${paddingStyles} ${widthStyles} ${gapStyles} ${alignItemsStyles} ${justifyContentStyles} ${heightStyles}`;

    const inLineStyles = {
        maxWidth: maxWidth, 
        minWidth: minWidth,
        maxHeight: maxHeight,
        minHeight: minHeight
    };

    return (
        React.createElement('div', { 
        ...attributes, ...listeners, 
        className: classes, style: inLineStyles,}
        , children
        )
    );
}


Module.propTypes = {
    background: PropTypes.oneOfType([
        PropTypes.oneOf(["base-0", 'base-50', "base-100", "base-200", "primary", "accent", "base-900", "none"]),
        PropTypes.string]),
    paddingX: PropTypes.oneOf(["0", "sm", "base", "md", "lg", 'xl', '2xl']),
    paddingY: PropTypes.oneOf(["0", "sm", "base", "md", "lg", 'xl', '2xl']),
    flexDirection: PropTypes.oneOf(["flex-col", "flex-row"]),
    gap: PropTypes.oneOf(["none", "xs", "sm", "base", "md", "lg", "xl", '2xl']),
    alignItems: PropTypes.oneOf(["start", "center", "end", "stretch"]),
    justifyContent: PropTypes.oneOf(["start", "center", "end", "between", "around", "evenly"]),
    width: PropTypes.oneOf(["full", "auto", "1/2", "1/3", "1/4", "2/3", '3/4']),
    height: PropTypes.oneOf(['h-full', 'h-auto', 'h-1/2', 'h-1/3', 'h-1/4', 'h-2/3', 'h-[integer]px']),
    maxWidth: PropTypes.number,
    minWidth: PropTypes.number,
    maxHeight: PropTypes.number,
    minHeight: PropTypes.number,
    corners: PropTypes.oneOf(["none", "sm", "md", "lg", 'xl', '2xl', "full"]),
    hasOutline: PropTypes.bool,
    module_name: PropTypes.string,
    module_role: PropTypes.string,
    children: PropTypes.node
};

Module.defaultProps = {
    module_name: 'module name',
    background: 'none',
    module_role: 'module purpose',
    paddingX: 'base',
    paddingY: 'sm',
    flexDirection: 'flex-col',
    gap: 'base',
    alignItems: 'start',
    justifyContent: 'start',
    width: 'full',
    height: 'h-auto',
    maxWidth: null,
    minWidth: null,
    maxHeight: null,
    minHeight: null,
    corners: 'none',
    hasOutline: false
};

export { Module as default };
//# sourceMappingURL=Module.js.map
