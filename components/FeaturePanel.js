import PropTypes from 'prop-types';

export default function FeaturePanel(props) {
    
    const {
        padding = 'md',
        background = 'base-0',
        gap = 'base',
        alignItems = 'stretch',
        justifyContent = 'start',
        display = true,
        textSize = 'base',
        backgroundImageSrc = null,
        children,
        attributes,
        listeners
      } = props;
    
    const paddingStyles = padding == 'none' ? `p-0` : `p-${padding}`
    const fontSize = `text-`+textSize
    const bgStyles = `bg-${background}`;
    const fontColor = background != 'none' ? background == 'base-content' ? `text-base-0` : background?.startsWith('base') ? 'text-base-content' : `text-${background}-content` : ''
    const gapStyles = gap === 'none' ? '' : `gap-${gap}`
    const alignItemsStyles = `items-${alignItems}`
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';

    let classes = `flex flex-col flex-grow w-full ${bgStyles} ${justifyContentStyles} ${paddingStyles} ${gapStyles} ${fontColor} ${fontSize} ${alignItemsStyles}`

    const noImage = !backgroundImageSrc;
    const imageStyles = { 
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${backgroundImageSrc}) no-repeat center center / cover`
    };
    
    if (display) return (
        <div className={classes} style={noImage ? {} :  imageStyles} 
        {...attributes} {...listeners} 
        >
        {children}
        </div>
    );
}

FeaturePanel.propTypes = {
    background: PropTypes.oneOfType([
        PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'primary', 'accent', 'base-content', 'none']),
        PropTypes.string]),
    backgroundImageSrc: PropTypes.string,
    padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl']),
    gap: PropTypes.oneOf(['none', 'xs', 'sm', 'base', 'md', 'lg', 'xl']),
    alignItems: PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
    justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'evenly']),
    display: PropTypes.bool,
    textSize: PropTypes.oneOf(['sm', 'base', 'md', 'lg', 'xl']),
    children: PropTypes.node
    
};

