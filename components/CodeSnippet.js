import PropTypes from 'prop-types'
import { useState } from 'react';
import { Button, Select } from './index';

const sample = `function greet(name) {
    const greeting = "Hello, " + name + "!";
    console.log(greeting);
}

greet("Alice");
greet("Bob");`

export default function CodeSnippet(props) {

    const {
        size = 'medium',
        width = 'auto',
        hasOutline = true,
        text = sample,
        attributes,
        listeners
      } = props;


    const widthStyle = width == 'auto' ? `w-auto` : `w-${width}`
    const sizeStyles =  size == 'small' ? `py-2xs px-xs gap-xs text-xs` : `py-xs px-sm gap-base text-sm`;
    const cornerStyles = size == "small" ? "rounded" :  "rounded-md"
    const headerCorners = size == "small" ? "rounded-t" :  "rounded-t-md"
    const bgStyles = `bg-base-0 text-base-content`
    const borderStyles = hasOutline ? `border border-base-300` : `border border-transparent`
    let wrapperClasses = `flex flex-col ${widthStyle} ${borderStyles} ${cornerStyles} ${bgStyles} relative group`

    const snippetClasses = `w-full ${sizeStyles}`

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
            <div className={`flex flex-row items-center justify-between w-full ${sizeStyles} bg-base-100 ${headerCorners}`}>
                <Select size='small' options={['javascript', 'python', 'sql']} defaultValue='Javascript' bgColor='none'/>
                <Button 
                    size={'small'}
                    text={'copy'} 
                    type={'secondary'} 
                    style='outlined' 
                    leftIcon={copied ? 'check' : 'copy'}
                    onClick={copyToClipboard}/>
            </div>
            <pre className={snippetClasses} style={{ whiteSpace: 'pre-wrap' }}>
{text}
            </pre>
        </div>
    );
}

CodeSnippet.propTypes = {
    width: PropTypes.oneOf(['auto', '1/2', 'full']),
    size: PropTypes.oneOf(['small', 'medium']),
    theme: PropTypes.oneOf(['dark', 'light']),
    hasOutline: PropTypes.bool,
    text: PropTypes.string,
};

