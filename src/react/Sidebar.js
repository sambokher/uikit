import PropTypes from 'prop-types'

export default function Sidebar(props) {
    
    const {
        paddingX = null,
        paddingY = null,
        background = 'base-0',
        position = 'left',
        hasOutline = true,
        gap = 'base',
        alignItems = 'stretch',
        justifyContent = 'start',
        display = true,
        width = '280px',
        textSize = 'base',
        children,
        attributes,
        listeners
      } = props;
    
    // STYLES
    const paddingStyles = `${paddingX ? `px-${paddingX}` : ''} ${paddingY ? `py-${paddingY}` : ''}`;
    const fontSize = `text-`+textSize
    const bgStyles = `bg-${background}`;
    const borderStyles = !hasOutline ? '' : position == 'left' ? 'border-r' : 'border-l';
    
    const borderColor = `color-mix(in srgb, var(--base-content) 12%, transparent)`

    const gapStyles = gap === 'none' ? '' : `gap-${gap}`;
    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';
    const fontColor = background != 'none' ? (background == 'base-900' || background == 'base-700' || background == 'base-content') ? `text-base-0` : background?.startsWith('base') ? 'text-base-content' : `text-${background}-content` : ''
    
    let classes = `flex flex-col relative flex-grow-0 z-40 flex-shrink-0 ${paddingStyles} ${fontColor} ${fontSize} ${bgStyles} ${gapStyles} ${alignItemsStyles} ${justifyContentStyles} 
    ${borderStyles}
    transition-all`

    if (display) return (
        <div 
        {...attributes} {...listeners} 
        className={classes}
        style={{
            order: position == 'left' ? '-2' : 2, 
            width: width,
            maxWidth: width,
            minWidth: width,
            borderColor: borderColor,
            minHeight: '100%',
        }}>
        {children}
        </div>
    );
}


Sidebar.propTypes = {
    background: PropTypes.oneOfType([    
        PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'base-700', 'none', 'base-content', 'primary', 'accent']),
        PropTypes.string]),
    width: PropTypes.oneOf(['auto', '64px', '240px', '280px', '320px', '360px', '480px', '100%']),
    paddingX: PropTypes.oneOf(["0", "sm", "base", "md", "lg", 'xl', '2xl']),
    paddingY: PropTypes.oneOf(["0", "sm", "base", "md", "lg", 'xl', '2xl']),
    gap: PropTypes.oneOf(['none', 'xs', 'sm', 'base', 'md', 'lg', 'xl']),
    alignItems: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
    justifyContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'evenly']),
    hasOutline: PropTypes.bool,
    textSize: PropTypes.oneOf(['sm', 'base', 'md']),
    display: PropTypes.bool,    
    children: PropTypes.node
};

