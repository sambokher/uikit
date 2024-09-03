import React, { useEffect, useRef } from 'react';import PropTypes from 'prop-types'
import { Icon } from './index'
import { useState } from 'react';

export default function MiniSnippet(props) {

    const {
        bgColor = 'base-50',
        size = 'small',
        text = 'npm install juno-components',
        width = 'full',
        whiteSpace = 'pre',
        highlightSyntax = false,
        copyButton = true,
        hasOutline = false,
        maxHeight=null,
        attributes,
        listeners
      } = props;
    
    const widthStyle = width == 'auto' ? `w-auto` : `w-${width} max-w-${width}`
    const sizeStyles =  size == 'small' ? `py-1.5 px-3 gap-2 text-xs` : `py-2.5 px-4 gap-3 text-sm`;
    const cornerStyles = size == "small" ? "rounded" :  "rounded-md"
    const bgStyles = `bg-${bgColor}`
    const borderStyles = hasOutline ? `border border-base-300` : `border border-transparent`

    let wrapperClasses = `flex flex-col ${widthStyle} ${borderStyles} ${cornerStyles} ${bgStyles} relative group`

    let contentClasses = `flex flex-row justify-between font-medium items-start overflow-y-scroll relative group flex-shrink-0 font-mono select-text  ${sizeStyles} w-full`


    const [copied, setCopied] = useState(false)

    const copyToClipboard = () => {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); 
      })
      .catch(err => {
        console.log('Something went wrong', err);
      });
    }
    const buttonOffsets = size == 'small' ? 'top-1 right-1.5' : 'top-2 right-2.5'

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
        <div
            className={wrapperClasses}
            {...attributes} {...listeners} 
        >
            <pre 
                style={{ whiteSpace, maxHeight: expanded ? 'none' : maxHeight, overflowX: 'scroll', overflowY: 'hidden', minHeight: '1.5em'}} className={contentClasses}
                ref={contentRef}>
                    <code>
{text || `Hello, world!`}
                </code>
            </pre>

            {/* COPY BUTTON */}
            {copyButton && <div 
                className={`absolute ${buttonOffsets} ${bgStyles} transition-all rounded z-10 flex items-center justify-center cursor-pointer group p-0.5`}
                onClick={copyToClipboard}
            >
                <Icon icon={copied ? 'check' : 'copy'} className={`hover:scale-110 transition-all duration-150 ${size == "small" ? "w-4 h-4" : "w-5 h-5"}`} size={size =='small' ? '16px' : '20px'} />
            </div>}

             {/* SHOW MORE BUTTON */}
            {maxHeight && isOverflowing &&  (
                <button 
                    className={`py-2 self-center mx-auto text-xs text-primary opacity-50 hover:opacity-100 transition-all duration-150`} 
                    onClick={() => setExpanded(!expanded)}
                >
                    {!expanded ? 'Expand' : 'Collapse'}
                </button>
            )}
        </div>
    );
}

MiniSnippet.propTypes = {
    size: PropTypes.oneOf(['small', 'medium']),
    width: PropTypes.oneOf(['auto', '1/2', 'full']),
    bgColor: PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200']),
    hasOutline: PropTypes.bool,
    maxHeight: PropTypes.number,
    copyButton: PropTypes.bool,
    text: PropTypes.string,
    textWrap: PropTypes.oneOf(['wrap', 'nowrap', 'pre-wrap']),
};

