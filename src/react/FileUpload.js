import PropTypes from 'prop-types';
import * as IconoirIcons from 'iconoir-react';
import React, { useRef, useState } from 'react';

const allIconNames = Object.keys(IconoirIcons);

export default function FileUpload(props) {

    const {
        size = 'small',
        corners = "none",
        fileName = "file-name.txt",
        width = "auto",
        label = null,
        icon = 'CloudUpload',
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

    const widthStyle = width != 'auto' ? `w-${width}` : 'w-auto'
    const borderStyles = hasOutline ?`border border-base-200` : '';
    const sizeStyles = size == 'small' ? 'gap-3xs text-xs' : size == 'large' ? 'gap-xs text-base' : 'gap-2xs text-sm'
    let wrapperClasses = `flex flex-col items-stretch justify-start ${sizeStyles} ${widthStyle} ${borderStyles}`

    const labelTextSize = size == 'small' ? `text-xs` :  size == 'large' ? `text-lg`: `text-sm`;
    const labelClasses = `text-base-content ${labelTextSize} font-medium`

    const iconSize = size == 'small' ? 20 : size == 'large' ? 32 : 24;
    const IconComponent = icon !== 'none' && IconoirIcons[icon] ? IconoirIcons[icon] : null;

    const stateStyles = state === 'focused' || isDragOver ? 'bg-base-100 border-accent' : 'bg-base-0 border-base-400';
    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const dropAreaSizeClasses = size === 'small' ? 'p-sm gap-3xs' : size === 'large' ? 'p-base gap-xs' : 'p-sm gap-2xs';
    const dropAreaClasses = `w-full h-full relative border-dashed flex flex-col items-center justify-center ${cornerStyles} ${stateStyles} ${dropAreaSizeClasses}`

    
    const barColor = (fileStatus === 'uploading' || fileStatus == 'idle') ? 'info-content' : fileStatus === 'uploaded' ? 'success-content' : 'error-content';
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}
    
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
        <div 
        className={wrapperClasses}
        >

            {label && <label className={labelClasses}>
{label}
            </label>}

            <div className={dropAreaClasses}
                style={{
                    borderWidth: size == 'small' ? '1px' : size == 'large' ? '2px' : '1.5px', 
                    minWidth: size == 'small' ? '120px' : size == 'large' ? '200px' : '160px',
                }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    style={{ 
                        opacity: '0', 
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        cursor: 'pointer',
                    }}
                    onChange={handleFileChange}
                    accept={accept}
                />
                {IconComponent && <IconComponent className='flex-shrink-0' width={iconSize} height={iconSize} />}
                
                {dropAreaText ? <div className={'font-medium'}>
{dropAreaText}
                </div> : null}

                {secondaryText ? <div className={'font-light'}>
{secondaryText}
                </div> : null
                }
            

            </div>
            {file && 
            <div className={`flex flex-col items-center gap-xs p-sm bg-base-100 ${cornerStyles}`}>
                <div className='flex flex-row gap-sm w-full justify-between'>
                <IconoirIcons.Page width={16} className='flex-shrink-0' />
                <div className='text-base-content text-sm flex-grow' style={truncateStyle}>
                    {file?.name}
                </div>
                    <IconoirIcons.Xmark width={16} className='flex-shrink-0' 
onClick={() => setFile(null)}
                    />
                </div>
                {uploadStatus === 'uploading' && 
                <div className={`flex flex-row h-1 w-full rounded-full justify-start bg-base-0`}>
                  <div className={`rounded-full h-full`} style={{ 
                    minWidth: '5px',
                    width: `${uploadProgress}%`, 
                    backgroundColor: `var(--${barColor})` 
                    }} />
                </div>}
            </div>}
        
        </div>
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

