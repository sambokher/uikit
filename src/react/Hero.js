import PropTypes from 'prop-types';

export default function Hero(props) {
    
    const {
        background = 'none',
        hasBorder = false,
        gap = 'lg',
        alignItems = 'center',
        flexDirection = 'flex-col',
        fontSize = 'base',
        bgImageSrc = null,
        bgOverlay = 'darker',
        height = 320,
        justifyContent = 'between',
        paddingX = null,
        paddingY = null,
        width = 'stretch',
        children,
        attributes,
        listeners
      } = props;
    
    const heightStyles = height ? `h-[${height}px]` : ''
    const bgStyles = `bg-${background}`;
    const borderStyles = hasBorder ? 'border-b border-base-300' : '';
    const gapStyles = gap === 'none' ? '' : `gap-${gap}`;
    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const fontSizeStyles = `text-${fontSize}`;
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';
    const fontColor = background != 'none' ?  (background == 'base-900' || background == 'base-700') ? `text-base-0` : background?.startsWith('base') ? 'text-base-content' : `text-${background}-content` : ''
    const paddingStyles = `${paddingX ? `px-${paddingX}` : ''} ${paddingY ? `py-${paddingY}` : ''}`;    
    

    let classes = `flex w-full border-box flex-grow flex-shrink-0
        ${flexDirection}
        ${fontSizeStyles}
        ${fontColor}
        ${paddingStyles}
        ${heightStyles}
        ${gapStyles} 
        ${alignItemsStyles}
        ${justifyContentStyles}
        `


    let outerClasses = `w-full flex flex-col items-center ${bgStyles} ${borderStyles} relative`

    const noImage = !bgImageSrc;

    return (
        <div 
        {...attributes} {...listeners} 
        className={outerClasses} style={noImage ? {} : getImageStyles(bgOverlay, bgImageSrc)}>
            <div className={classes} style={{maxWidth: width != 'stretch' ? width : '100%'}}>
                {children}
            </div>
        </div>
    );
}

function getImageStyles(bgOverlay, bgImageSrc) {
    switch (bgOverlay) {
        case 'darker':
            return {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${bgImageSrc})`,
                backgroundSize: 'cover'
            };
        case 'white':
            return {
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.5)), url(${bgImageSrc})`,
                backgroundSize: 'cover'
            };
        default:
            return {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${bgImageSrc})`,
                backgroundSize: 'cover'
            };
    }
}

Hero.propTypes = {
    width: PropTypes.oneOf(['stretch', '780px', '960px', '1200px', '1440px']),
    paddingX: PropTypes.oneOf(["none", "sm", "base", "md", "lg", 'xl', '2xl']),
    paddingY: PropTypes.oneOf(["none", "sm", "base", "md", "lg", 'xl', '2xl']),
    background: PropTypes.oneOfType([
        PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'none', 'base-700', 'base-900']),
        PropTypes.string]),
    bottomBorder: PropTypes.bool,
    gap: PropTypes.oneOf(['none', 'sm', 'base', 'md', 'lg']),
    flexDirection: PropTypes.oneOf(["flex-col", "flex-row"]),
    alignItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
    justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'evenly']),
    fontSize: PropTypes.oneOf(['xs', 'sm', 'base', 'md', 'lg', 'xl']),
    height: PropTypes.number,
    bgImageSrc: PropTypes.string,
    bgOverlay: PropTypes.oneOf(['none', 'darker', 'white']),
    children: PropTypes.node
};

