import PropTypes from 'prop-types'
import * as IconoirIcons from 'iconoir-react';
import { useState } from 'react';

export default function MiniSnippet(props) {

    const {
        bgColor = 'base-100',
        size = 'small',
        text = 'npm install juno-components',
        width = 'auto',
        hasOutline = true,
        attributes,
        listeners
      } = props;
    
    const widthStyle = width == 'auto' ? `w-auto` : `w-${width}`
    const sizeStyles =  size == 'small' ? `py-2xs px-xs gap-xs text-xs` : `py-xs px-base gap-base text-sm`;
    const cornerStyles = size == "small" ? "rounded" :  "rounded-md"
    const bgStyles = `bg-${bgColor}`
    const borderStyles = hasOutline ? `border border-base-300` : `border border-transparent`

    let wrapperClasses = `flex flex-col ${widthStyle} ${borderStyles} ${cornerStyles} ${bgStyles} relative group`

    const contentClasses = `flex flex-row justify-between font-medium items-start overflow-y-scroll relative group flex-shrink-0 font-mono ${sizeStyles} w-full`

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

    return (
        <div
            className={wrapperClasses}
            {...attributes} {...listeners} 
        >
            <pre style={{ whiteSpace: 'pre-wrap' }} className={contentClasses}>
{text}
            
            {/* COPY BUTTON */}
            <div 
                className={`sticky top-0 right-0 ${bgStyles} transition-all p-3xs hover:brightness-95 rounded h-5 w-5 flex items-center justify-center cursor-pointer`}
                onClick={copyToClipboard}
            >
                {copied ? <IconoirIcons.Check /> :  <IconoirIcons.Copy />}
            </div>
            </pre>
        </div>
    );
}

MiniSnippet.propTypes = {
    size: PropTypes.oneOf(['small', 'medium']),
    width: PropTypes.oneOf(['auto', '1/2', 'full']),
    bgColor: PropTypes.oneOf(['base-0', 'base-100', 'base-200', 'none']),
    hasOutline: PropTypes.bool,
    text: PropTypes.string,
};

