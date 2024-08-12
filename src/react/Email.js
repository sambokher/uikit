import PropTypes from 'prop-types'

export default function Email(props) {
    
    const { 
        pageBackground='base-100', 
        emailBackground='base-0',
        corners='sm',
        padding='lg',
        alignItems='start', 
        gap='base',
        topMargin='2xl',
        hasOutline=false,
        width='560',
        children, attributes, listeners } = props
    
    const gapStyles = gap === 'none' ? '' : `gap-${gap}`;
    const fontColor = emailBackground.startsWith('base') ? 'text-base-content' : `text-${emailBackground}-content`
    const cornerStyles = corners != 'none' && `rounded-${corners}`
    const paddingStyles = padding != 'none' && `p-${padding} `
    const topMarginStyles = topMargin != 'none' ? `py-${topMargin}` : '';
    let borderStyles = hasOutline ? 'ring-[0.5px] ring-base-300' : '';

    let wrapperClasses = `flex flex-col flex-grow w-full h-auto bg-${pageBackground} ${fontColor} ${topMarginStyles}`
    
    let innerClasses = `flex flex-col w-full h-auto mx-auto ${gapStyles} ${borderStyles} bg-${emailBackground} ${cornerStyles} ${paddingStyles} items-${alignItems}`

    return (
        <div className={wrapperClasses} >
            <div 
            className={innerClasses} style={{maxWidth: width != 'stretch' ? `${width}px` : '100%'}} 
            {...attributes} {...listeners} 
            >
                {children}
            </div>
        </div>
    );
}



Email.propTypes = {
    width: PropTypes.oneOf(['stretch', '560', '640', '780', '960']),
    pageBackground: PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'base-300', 'primary', 'secondary', 'accent']),
    emailBackground: PropTypes.oneOf(['none', 'base-50', 'base-0', 'base-100', 'base-200', 'base-300', 'primary', 'secondary', 'accent']),
    hasOutline: PropTypes.bool,
    corners: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
    padding: PropTypes.oneOf(['none', 'sm', 'base', 'md', 'lg']),
    alignItems: PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
    gap: PropTypes.oneOf(['none', 'base', 'md', 'lg', 'xl', '2xl']),
    topMargin: PropTypes.oneOf(['none', 'lg', 'xl', '2xl']),
};

