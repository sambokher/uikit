import PropTypes from 'prop-types';

export default function Grid(props) {
    
    const {
        paddingX = 'base',
        paddingY = 'base',
        background = 'none',
        gap = 'base',
        display = true,
        columnCount = 3,
        alignItems = 'start',
        corners = 'none',
        hasOutline = false,
        width = 'full',
        height = 'auto',
        fontColor = 'auto',
        children,
        attributes,
        listeners
    } = props;


    const bgStyles = `bg-${background}`;
    const gapStyles = gap === 'none' ? '' : `gap-${gap}`;
    const paddingStyles = `${paddingX ? ` px-${paddingX}` : 'px-0'} ${paddingY ? `py-${paddingY}` : 'py-0'}`;
    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const widthStyles = `w-${width}`;
    const heightStyles = `h-${height}`;
    const autoFontStyle = background == 'none' ? 'text-inherit' : background == 'base-900' ? `text-base-0` : background?.startsWith('base') ? 'text-base-content' : `text-${background}-content`
    const fontStyles = fontColor == 'auto' ? autoFontStyle : `text-${fontColor}`
    
    let borderStyles = hasOutline ? 'border border-base-300' : '';
    let classes = `grid ${borderStyles} ${widthStyles} ${bgStyles} ${cornerStyles} ${gapStyles} ${paddingStyles} ${heightStyles} ${fontStyles}`;
    
    if (display) return (
        <div 
        {...attributes} {...listeners} 
        className={classes} style={{ alignItems: alignItems, gridTemplateColumns: columnCount ? `repeat(${columnCount}, minmax(0, 1fr))` : undefined }}
        >
        {children}
        </div>
    );
}

Grid.propTypes = {
    columnCount: PropTypes.number,
    background: PropTypes.oneOf(['none', 'base-0', 'base-50', 'base-100', 'base-200', 'primary', 'accent', 'base-900']),
    fontColor: PropTypes.oneOf(['base-0', 'base-100', 'base-200', 'primary', 'accent', 'base-content', 'auto', 'success-content', 'error-content', 'warning-content', 'info-content']),
    gap: PropTypes.oneOf(['none', 'xs', 'sm', 'base', 'md', 'lg', 'xl']),
    padding: PropTypes.oneOf(['none', 'sm', 'base', 'md', 'lg']),
    display: PropTypes.bool,
    corners: PropTypes.oneOf(["none", "sm", "md", "lg", "full"]),
    hasOutline: PropTypes.bool,
    width: PropTypes.oneOf(["full", "auto", "1/2", "1/3", "1/4", "2/3", '3/4']),
    height: PropTypes.oneOf(["full", "auto", "1/2", "1/3", "1/4", "2/3"]),
    alignItems: PropTypes.oneOf(["start", "center", "end", "stretch"]),
    children: PropTypes.node
};

