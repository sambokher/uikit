import PropTypes from 'prop-types';

export default function IconBar(props) {

    const {
        paddingX = null,
        paddingY = null,
        background = 'base-0',
        gap = 'md',
        alignItems = 'stretch',
        justifyContent = 'start',
        position = 'left',
        width = '64px',
        display = true,
        hasOutline = true,
        textSize = 'base',
        children,
        attributes,
        listeners
      } = props;
    
    const paddingStyles = `${paddingX ? `px-${paddingX}` : ''} ${paddingY ? `py-${paddingY}` : ''}`;
    const bgStyles = `bg-${background}`;
    // const borderStyles = !hasOutline ? '' : position == 'left' ? 'border-r border-base-300' : 'border-l border-base-300';
    const gapStyles = gap === 'none' ? '' : `gap-${gap}`;
    const fontSize = `text-`+textSize
    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';
    const fontColor = background != 'none' ? background == 'base-900' || background == 'base-700' ? `text-base-0` : background?.startsWith('base') ? 'text-base-content' : `text-${background}-content` : ''

    let classes = `flex flex-col flex-shrink-0 flex-grow-0 z-50 relative ${fontColor} ${fontSize} ${paddingStyles} ${bgStyles} ${gapStyles} ${alignItemsStyles} ${justifyContentStyles} transition-all`

    if (display) return (
        <div 
        {...attributes} {...listeners} 
        style={{
            order: position == 'left' ? '-2' : 2,
            minWidth: width, 
            minHeight: '100%', 
        }}
        className={classes}
        >
        {children}
        </div>
    );
}

IconBar.propTypes = {
    background: PropTypes.oneOfType([
        PropTypes.oneOf(['base-0', 'base-50',  'base-100', 'base-200', 'base-700', 'none', 'base-content', 'primary', 'accent']),
        PropTypes.string]),
    position: PropTypes.oneOf(['left', 'right']),
    width: PropTypes.oneOf(['48px', '64px', '80px', '96px']),
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

