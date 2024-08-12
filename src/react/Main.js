import PropTypes from 'prop-types';

export default function Main(props) {
        
    const {
        paddingX = null,
        paddingY = null,
        background = 'base-0',
        direction = 'flex-col',
        gap = 'base',
        alignItems = 'start',
        justifyContent = 'start',
        textSize = 'base',
        width = '960',
        selfAlign = 'center',
        marginX = null,
        marginY = null,
        corners = 'none',
        children,
        attributes,
        listeners
      } = props;
    
    const bgStyles = `bg-${background}`;
    const gapStyles = gap === 'none' ? '' : `gap-${gap}`;
    const fontSize = `text-`+textSize
    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';
    const paddingStyles = `${paddingX ? `px-${paddingX}` : ''} ${paddingY ? `py-${paddingY}` : ''}`;    
    const fontColor = background != 'none' ? background == 'base-900' ? `text-base-0` : background?.startsWith('base') ? 'text-base-content' : `text-${background}-content` : ''
    const alignMain = `items-${selfAlign}`
    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const marginStyles = `${marginX ? `px-${marginX}` : ''} ${marginY ? `py-${marginY}` : ''}`
    
    let outerClasses = `flex flex-col flex-grow w-full relative ${alignMain} ${fontColor} ${fontSize} ${marginStyles}`

    let innerClasses = `flex ${direction} flex-grow w-full z-0 relative  ${bgStyles} ${paddingStyles} ${gapStyles} ${alignItemsStyles} ${justifyContentStyles} ${cornerStyles}`
    
    return (
        <div 
        {...attributes} {...listeners} 
        style={{
            minHeight: '100%', 
overflow: 'scroll'
        }}
        className={outerClasses}
        >
        <div 
        className={innerClasses} style={{width: '100%', maxWidth: width != 'stretch' ? `${width}px` : '100%'}}>
        {children}
        </div>
        </div>
    );
}

Main.propTypes = {
    background: PropTypes.oneOfType([
        PropTypes.oneOf(['base-0',  'base-50', 'base-100', 'base-200', 'primary', 'accent', 'base-900', 'none']),
        PropTypes.string]),
    width: PropTypes.oneOf(['stretch', '780', '960', '1200', '1440']),
    direction: PropTypes.oneOf(["flex-col", "flex-row"]),
    paddingX: PropTypes.oneOf(["none", "sm", "base", "md", "lg", 'xl', '2xl']),
    paddingY: PropTypes.oneOf(["none", "sm", "base", "md", "lg", 'xl', '2xl']),
    marginX: PropTypes.oneOf(["none", "sm", "base", "md", "lg", 'xl', '2xl']),
    marginY: PropTypes.oneOf(["none", "sm", "base", "md", "lg", 'xl', '2xl']),
    corners: PropTypes.oneOf(['none', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl']),
    gap: PropTypes.oneOf(['none', 'xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl']),
    selfAlign: PropTypes.oneOf(['start', 'center', 'end']),
    alignItems: PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
    justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'evenly']),
    textSize: PropTypes.oneOf(['sm', 'base', 'md']),
    children: PropTypes.node
};

