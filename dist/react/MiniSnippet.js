import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './AppShell.js';
import './Email.js';
import './Header.js';
import './IconBar.js';
import './Main.js';
import './FeaturePanel.js';
import './Footer.js';
import './Hero.js';
import './SidePanel.js';
import './CollapsibleSidebar.js';
import './Sidebar.js';
import './SidebarLink.js';
import './UserMenu.js';
import './FlexBox.js';
import './Grid.js';
import './Module.js';
import './Heading.js';
import './Text.js';
import './Paragraph.js';
import './Link.js';
import './Button.js';
import './ButtonIcon.js';
import './KebabMenu.js';
import './Tooltip.js';
import './Form.js';
import './InputText.js';
import './TextArea.js';
import './Checkbox.js';
import './RadioButton.js';
import './RadioButtons.js';
import './ToggleSwitch.js';
import './SegmentedSwitch.js';
import './SegmentedSwitchIcons.js';
import './Select.js';
import './Search.js';
import './InputFile.js';
import './InputPIN.js';
import './FileUpload.js';
import './Slider.js';
import './MiniCalendar.js';
import './Avatar.js';
import './Image.js';
import Icon from './Icon.js';
import './Logo.js';
import './CountryFlag.js';
import './FintechLogo.js';
import './Alert.js';
import './Status.js';
import './Loader.js';
import './Badge.js';
import './Tag.js';
import './StarRatings.js';
import './ProgressBar.js';
import './ProgressCircle.js';
import './ProgressSemiCircle.js';
import './LineChart.js';
import './BarChart.js';
import './AreaChart.js';
import './CodeSnippet.js';
import './TableWidget.js';
import './Divider.js';
import './Dot.js';
import './HeaderLink.js';
import './Tab.js';
import './TabGroup.js';
import './Pagination.js';
import './Modal.js';
import './Popover.js';
import './Banner.js';
import './Toast.js';
import './Drawer.js';
import './ProductCard.js';
import './InfoCard.js';
import './FolderCard.js';
import './FileCard.js';
import './MiniCardHorizontal.js';
import './DataCard.js';
import './StatusCard.js';
import './AvatarCard.js';
import './BlogPostCard.js';
import './MediaCard.js';

function MiniSnippet(props) {

    const {
        bgColor = 'base-100',
        size = 'small',
        text = 'npm install juno-components',
        width = 'auto',
        maxHeight = null,
        copyButton = true,
        hasOutline = true,
        attributes,
        listeners
      } = props;
    
    const widthStyle = width == 'auto' ? `w-auto` : `w-${width}`;
    const sizeStyles =  size == 'small' ? `py-1.5 px-3 gap-2 text-xs` : `py-2.5 px-4 gap-3 text-sm`;
    const cornerStyles = size == "small" ? "rounded" :  "rounded-md";
    const bgStyles = `bg-${bgColor}`;
    const borderStyles = hasOutline ? `border border-base-300` : `border border-transparent`;

    let wrapperClasses = `flex flex-col ${widthStyle} ${borderStyles} ${cornerStyles} ${bgStyles} relative group`;

    const contentClasses = `flex flex-row justify-between font-medium items-start overflow-y-scroll relative group flex-shrink-0 font-mono ${sizeStyles} w-full`;

    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); 
      })
      .catch(err => {
        console.log('Something went wrong', err);
      });
    };
    const buttonOffsets = size == 'small' ? 'top-1.5 right-3' : 'top-2.5 right-4';

    const [expanded, setExpanded] = useState(false); 
    const [isOverflowing, setIsOverflowing] = useState(false);

    const contentRef = useRef(null);

    useEffect(() => {  
       if (!maxHeight || maxHeight == null) return;
        if (contentRef.current) {
            setIsOverflowing(contentRef.current.scrollHeight > maxHeight);
        }
    }, [maxHeight, text]);

    return (
        React.createElement('div', {
            className: wrapperClasses,
            ...attributes, ...listeners,}

            , React.createElement('pre', { 
                style: { whiteSpace: 'pre-wrap', maxHeight: expanded ? 'none' : maxHeight, overflow: 'hidden'}, className: contentClasses,
                ref: contentRef,}
, text
            )

            /* COPY BUTTON */
            , copyButton && React.createElement('div', { 
                className: `absolute ${buttonOffsets} ${bgStyles} transition-all rounded z-10 flex items-center justify-center cursor-pointer group`,
                onClick: copyToClipboard,}

                , React.createElement(Icon, { icon: copied ? 'check' : 'copy', className: `hover:scale-110 transition-all duration-150 ${size == "small" ? "w-4 h-4" : "w-5 h-5"}`, size: size =='small' ? '16px' : '20px',} )
            )

             /* SHOW MORE BUTTON */
            , maxHeight && isOverflowing &&  (
                React.createElement('button', { 
                    className: `py-2 self-center mx-auto text-xs text-primary opacity-50 hover:opacity-100 transition-all duration-150`, 
                    onClick: () => setExpanded(!expanded),}

                    , !expanded ? 'Expand' : 'Collapse'
                )
            )
        )
    );
}

MiniSnippet.propTypes = {
    size: PropTypes.oneOf(['small', 'medium']),
    width: PropTypes.oneOf(['auto', '1/2', 'full']),
    bgColor: PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200']),
    hasOutline: PropTypes.bool,
    copyButton: PropTypes.bool,
    text: PropTypes.string,
};

export { MiniSnippet as default };
//# sourceMappingURL=MiniSnippet.js.map
