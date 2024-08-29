import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
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
import './MiniSnippet.js';
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
import { iconMap } from './iconMap.js';

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
const allIconNames = Object.keys(iconMap) || [];

function FileUpload(props) {

    const {
        size = 'small',
        corners = "none",
        fileName = "file-name.txt",
        width = "auto",
        label = null,
        icon = 'cloud-upload',
        dropAreaText = 'Drag your file here or browse files',
        secondaryText = null,
        state = 'placeholder',
        fileStatus = 'uploading',
        onChange = () => console.log('File uploaded'),
        accept = '',
        hasOutline,
        attributes,
        listeners
      } = props;
    
    const [file, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadStatus, setUploadStatus] = useState('idle'); // 'uploading', 'success', 'error'
    const [isDragOver, setIsDragOver] = useState(false); // Track if drag is over the drop area

    const widthStyle = width != 'auto' ? `w-${width}` : 'w-auto';
    const borderStyles = hasOutline ?`border border-base-200` : '';
    const sizeStyles = size == 'small' ? 'gap-0.5 text-xs' : size == 'large' ? 'gap-1.5 text-base' : 'gap-1 text-sm';
    let wrapperClasses = `flex flex-col items-stretch justify-start ${sizeStyles} ${widthStyle} ${borderStyles}`;

    const labelTextSize = size == 'small' ? `text-xs` :  size == 'large' ? `text-lg`: `text-sm`;
    const labelClasses = `text-base-content ${labelTextSize} font-medium`;

    const iconSize = size == 'small' ? '20px' : size == 'large' ? '32px' : '24px';
    const IconComponent = icon !== 'none' ? React.createElement(Icon, { icon: icon,  className: "flex-shrink-0", size: iconSize,}  ) : null;

    const stateStyles = state === 'focused' || isDragOver ? 'bg-base-100 border-accent' : 'bg-base-0 border-base-400';
    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const dropAreaSizeClasses = size === 'small' ? 'p-2 gap-0.5' : size === 'large' ? 'p-3 gap-1.5' : 'p-2 gap-1';
    const dropAreaClasses = `w-full h-full relative border-dashed flex flex-col items-center justify-center ${cornerStyles} ${stateStyles} ${dropAreaSizeClasses}`;

    
    const barColor = (fileStatus === 'uploading' || fileStatus == 'idle') ? 'info-content' : fileStatus === 'uploaded' ? 'success-content' : 'error-content';
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'};
    
    const fileInputRef = useRef(null);
    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragOver(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragOver(false);
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            setFile(files[0]);
            handleFileUpload(files[0]);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFile(file);
            handleFileUpload(file);
        }
        if (onChange) {
            onChange(event.target.files);
        }
    };

    const handleFileUpload = (file) => {
        setUploadStatus('uploading');
        const formData = new FormData();
        formData.append('file', file);
    
        // Simulate an API call
        fetch('/upload-endpoint', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                setUploadStatus('success');
            } else {
                throw new Error('Failed to upload');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setUploadStatus('error');
        });
    }; 

    return (
        React.createElement('div', { 
        className: wrapperClasses,}


            , label && React.createElement('label', { className: labelClasses,}
, label
            )

            , React.createElement('div', { className: dropAreaClasses,
                style: {
                    borderWidth: size == 'small' ? '1px' : size == 'large' ? '2px' : '1.5px', 
                    minWidth: size == 'small' ? '120px' : size == 'large' ? '200px' : '160px',
                },
                onDragOver: handleDragOver,
                onDragLeave: handleDragLeave,
                onDrop: handleDrop,}

                , React.createElement('input', {
                    ref: fileInputRef,
                    type: "file",
                    style: { 
                        opacity: '0', 
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        cursor: 'pointer',
                    },
                    onChange: handleFileChange,
                    accept: accept,}
                )
                , IconComponent

                , dropAreaText ? React.createElement('div', { className: 'font-medium',}
, dropAreaText
                ) : null

                , secondaryText ? React.createElement('div', { className: 'font-light',}
, secondaryText
                ) : null
                


            )
            , file && 
            React.createElement('div', { className: `flex flex-col items-center gap-1.5 p-2 bg-base-100 ${cornerStyles}`,}
                , React.createElement('div', { className: "flex flex-row gap-2 w-full justify-between"    ,}
                , React.createElement(Icon, { icon: "page",  size: '16px',  className: "flex-shrink-0 w-4 h-4"  ,} )
                , React.createElement('div', { className: "text-base-content text-sm flex-grow"  , style: truncateStyle,}
                    , _optionalChain([file, 'optionalAccess', _ => _.name])
                )
                    , React.createElement(Icon, { icon: "close", size: '16px', className: "flex-shrink-0 w-4 h-4"  , 
onClick: () => setFile(null),}
                    )
                )
                , uploadStatus === 'uploading' && 
                React.createElement('div', { className: `flex flex-row h-1 w-full rounded-full justify-start bg-base-0`,}
                  , React.createElement('div', { className: `rounded-full h-full`, style: { 
                    minWidth: '5px',
                    width: `${uploadProgress}%`, 
                    backgroundColor: `var(--${barColor})` 
                    },} )
                )
            )

        )
    );
}

FileUpload.propTypes = {
    width: PropTypes.oneOf(["auto", "1/2", "full"]),
    label: PropTypes.string,
    state: PropTypes.oneOf(['placeholder', 'focused']),
    dropAreaText: PropTypes.string,
    secondaryText: PropTypes.string,
    corners: PropTypes.oneOf(["none", "sm", "md", "lg", 'xl', '2xl']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    showFile: PropTypes.bool,
    fileName: PropTypes.string,
    icon: PropTypes.oneOf(['none', ...allIconNames]),
    fileStatus: PropTypes.oneOf(['uploading', 'uploaded', 'error']), 
    onChange: PropTypes.func,
    accept: PropTypes.string,
};

export { FileUpload as default };
//# sourceMappingURL=FileUpload.js.map
