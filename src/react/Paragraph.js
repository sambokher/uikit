import PropTypes from 'prop-types';

const dummyText = `This medium-length paragraph provides more detail, suitable for sections that require a bit more explanation. It's perfect for content areas where you need to elaborate on a topic without overwhelming the reader with text.`

export default function Paragraph(props) {
   
    const {
        text = dummyText,
        textSize = 'auto',
        textColor = 'auto',
        marginBottom = 'none',
        marginTop = 'none',
        lineHeight = 'auto',
        textAlign = 'left',
        fontWeight,
        attributes,
        listeners
      } = props;

    const textSizeStyles = textSize !== 'auto' && `text-${textSize}`
    const textColorStyles = textColor !== 'auto' &&  `text-${textColor}`
    const marginBottomStyles = marginBottom ? `mb-${marginBottom}` : '';
    const marginTopStyles = marginTop ? `mt-${marginTop}` : '';
    const lineHeightStyles = lineHeight !== 'auto' && `leading-${lineHeight}`
    const fontWeightStyles = fontWeight !== 'auto' && `font-${fontWeight}`
    const textAlignStyles = textAlign ? `text-${textAlign}` : ''; 

    let classes = `whitespace-pre-wrap ${textSizeStyles} ${textColorStyles} ${marginBottomStyles} ${marginTopStyles} ${lineHeightStyles} ${fontWeightStyles} ${textAlignStyles}`

    return (
        <span
        className={classes}
        {...attributes} {...listeners} 
        >
        { 
        text}
        </span>
    );
}
Paragraph.propTypes = {
    text: PropTypes.string,
    textSize: PropTypes.oneOf(['auto', 'xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
    marginTop: PropTypes.oneOf(['none', 'xs', 'sm', 'base', 'lg', 'xl']),
    marginBottom: PropTypes.oneOf(['none', 'xs', 'sm', 'base', 'md', 'lg', 'xl']),
    lineHeight: PropTypes.oneOf(['auto', 'none', 'tight', 'normal', 'relaxed', 'loose']),
    textAlign: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),
    textColor: PropTypes.oneOfType([
        PropTypes.oneOf(['auto', 'primary', 'primary-content', 'accent', 'accent-content', 'base-content', 'base-500', 'base-700', 'base-900', 'success-content', 'warning-content', 'error-content', 'info-content']),
        PropTypes.string]),
    children: PropTypes.node
};

