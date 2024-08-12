import PropTypes from 'prop-types';

export default function FlexBox(props) {
        
    const {
        direction = "flex-col",
        width = "full",
        height = "h-auto",
        paddingX = 'base',
        paddingY = 'base',
        background = "none",
        bgOpacity = null, 
        hasOutline = false,
        flexWrap = "nowrap",
        corners = "none",
        gap = "base",
        alignItems = "start",
        justifyContent = "start",
        textSize = "auto",
        maxWidth = null,
        minWidth = null,
        maxHeight = null,
        minHeight = null,
        selfAlign = "auto",
        display = true,
        bgImageSrc = null,
        fontColor = "auto",
        children,
        attributes,
        listeners
      } = props;

    const bgStyles = `bg-${background}`;
    const paddingStyles = `${paddingX ? ` px-${paddingX}` : 'px-0'} ${paddingY ? `py-${paddingY}` : 'py-0'}`;
    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const widthStyles = `w-${width} max-w-full ${maxWidth ? `max-w-[${maxWidth}px]` : ''} ${minWidth ? `min-w-[${minWidth}px]` : ''}`;
    const heightStyles = `${height} ${maxHeight ? `max-h-[${maxHeight}px]` : ''} ${minHeight ? `min-h-[${minHeight}px]` : ''}`;
    const fontSize = textSize != 'auto' ? 'text-'+textSize : '';
    const borderStyles = hasOutline ? 'border border-base-300' : '';
    const gapStyles = gap === 'none' ? '' : `gap-${gap}`;
    const wrapStyles = `flex-${flexWrap}`;
    const alignItemsStyles = alignItems ? `items-${alignItems}` : '';
    const justifyContentStyles = justifyContent ? `justify-${justifyContent}` : '';
    const inheritFontStyle = background == 'none' ? 'text-inherit' : background == 'base-900' ? `text-base-0` : background?.startsWith('base') ? 'text-base-content' : `text-${background}-content`
    const fontStyles = fontColor == 'auto' ? inheritFontStyle : `text-${fontColor}`

    let classes = `flex ${direction} ${wrapStyles} ${paddingStyles} ${widthStyles} self-${selfAlign} ${fontStyles} ${fontSize} ${bgStyles} ${borderStyles} ${gapStyles} ${cornerStyles} ${alignItemsStyles} ${justifyContentStyles} ${heightStyles}`
    
    const inLineStyles = {
        background: bgImageSrc && `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${bgImageSrc}) no-repeat center center / cover`, 
        backgroundColor: bgOpacity ? `color-mix(in srgb, var(--${background}) ${bgOpacity}%, transparent)` : null, 
        maxWidth: maxWidth, 
        minWidth: minWidth,
        maxHeight: maxHeight,
        minHeight: minHeight
    };

    if (display) return (
        <div 
        {...attributes} {...listeners} 
        className={classes}
        style={inLineStyles}>
        {children}
        </div>
    );
}


FlexBox.propTypes = {
    background: PropTypes.oneOfType([
        PropTypes.oneOf(["base-0", 'base-50', "base-100", "base-200", "primary", "accent", "base-900", "none"]),
        PropTypes.string]),
    bgOpacity: PropTypes.oneOf(["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]),
    direction: PropTypes.oneOf(["flex-col", "flex-row"]),
    width: PropTypes.oneOf(["full", "auto", "1/2", "1/3", "1/4", "2/3", '3/4']),
    height: PropTypes.oneOf(['h-full', 'h-1/2', 'h-1/3', 'h-1/4', 'h-2/3', 'h-[integer]px', 'h-auto']),
    paddingX: PropTypes.oneOf(["none", "xs", "2xs", "sm", "base", "md", "lg", 'xl', '2xl']),
    paddingY: PropTypes.oneOf(["none", "xs", "2xs", "sm", "base", "md", "lg", 'xl', '2xl']),
    hasOutline: PropTypes.bool,
    flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
    corners: PropTypes.oneOf(["none", "sm", 'base', "md", "lg", 'xl', '2xl', "full"]),
    gap: PropTypes.oneOf(["none", "xs", "sm", "base", "md", "lg", "xl", '2xl']),
    alignItems: PropTypes.oneOf(["start", "center", "end", "stretch"]),
    justifyContent: PropTypes.oneOf(["start", "center", "end", "between"]),
    textSize: PropTypes.oneOf(["auto", 'xs', "sm", "base", "md"]),
    maxWidth: PropTypes.number,
    minWidth: PropTypes.number,
    maxHeight: PropTypes.number,
    minHeight: PropTypes.number,
    selfAlign: PropTypes.oneOf(['auto', 'start', 'center', 'end']),
    display: PropTypes.bool,
    hide_from_ai: PropTypes.bool,
    bgImageSrc: PropTypes.string,
    fontColor: PropTypes.oneOf(['base-0', 'base-100', 'base-200', 'primary', 'accent', 'base-900', 'base-content', 'auto', 'success-content', 'error-content', 'warning-content', 'info-content']),
    children: PropTypes.node
};

