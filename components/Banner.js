import PropTypes from 'prop-types'
import * as IconoirIcons from 'iconoir-react';
import Button from './Button';

const allIconNames = Object.keys(IconoirIcons);

// needs mobile behavior
export default function Banner(props) {
    
    const {
        title = 'Banner Title',
        text = 'Banner message',
        width = '640px',
        type = 'info',
        primaryAction = 'Learn more',
        secondaryAction = 'Discard',
        icon = 'auto',
        backdrop = 'none',
        attributes,
        listeners
      } = props;

    
    // OVERLAY STYLES
    const darkBackground = `color-mix(in srgb, var(--base-content) 24%, transparent)`
    const lightBackground = `color-mix(in srgb, var(--base-content) 12%, transparent)`
    const overlayClasses = `absolute top-0 flex flex-col w-full h-full`

    // BANNER STYLES
    const alertStyles = 'flex flex-row items-start justify-between font-normal transition duration-100';
    const typeStyleMap = {
        info: `text-info-content border border-info-content`,
        error: `text-error-content border border-error-focus bg-error`,
        base: `text-base-content border border-base-300`,
        warning: `text-warning-content border border-warning-content`,
        success: `text-success-content border border-success-content`,
    };    
    const typeStyles = typeStyleMap[type] || typeStyleMap['base']

    let wrapperClasses = `bg-base-0 text-base px-base py-sm pb-base rounded-lg gap-sm flex flex-row items-start justify-start shadow-md mx-auto ${alertStyles} ${typeStyles}`

    // ICON Styles
    const iconStyleMap = {
        info: IconoirIcons['InfoCircle'],
        error: IconoirIcons['WarningTriangle'],
        base: IconoirIcons['InfoCircle'],
        warning: IconoirIcons['WarningTriangle'],
        success: IconoirIcons['CheckCircle'],
    }; 

    const IconComponent = icon == 'none' ? null : icon == 'auto' ? iconStyleMap[type] : IconoirIcons[icon];
    
    return (
        /* Overlay */
        <div  className={overlayClasses} 
        {...attributes} {...listeners} 
        style={{
            backgroundColor: backdrop == 'none' ? 'transparent' : backdrop == 'dark' ? darkBackground : lightBackground,
            zIndex: 50, 
            backdropFilter: backdrop == 'blurred' && 'blur(2px)',
            WebkitBackdropFilter: backdrop == 'blurred' && 'blur(2px)', /* For Safari compatibility */
        }}>

        {/* Modal */}
            <div className={wrapperClasses} 
            style={{width: '100%', width: '100%', maxWidth: width, marginTop: 60 }}>
            {IconComponent && <IconComponent className='flex-shrink-0 mt-[2px]' />}
            <div className='flex flex-col gap-xs flex-grow-1 w-full items-start'>
                {title && <h2 className='font-semibold text-lg'>
{title}
                </h2>}
{text}
                <div className={`flex flex-row flex-shrink-0 items-center gap-sm`}>
            {primaryAction && 
                <Button 
                    text={primaryAction} 
                    size={'small'}
                    type={type == 'base' ? 'primary' : type}
                    marginTop={'sm'}
                />}
            {secondaryAction && 
                <Button 
                    text={secondaryAction} 
                    size={'small'}
                    type={type == 'base' ? 'secondary' : type}
                    style={'outlined'}
                    marginTop={'sm'}
                />}
            </div>
            </div>
            <IconoirIcons.Xmark className='flex-shrink-0 hover:scale-110 cursor-pointer transition-all' />
            </div>
        </div>
    );
}



Banner.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['base', 'error', 'warning', 'success', 'info']),
    width: PropTypes.oneOf(['480px', '640px', '780px', '960px', '1200px', '100%']),
    primaryAction: PropTypes.string,
    secondaryAction: PropTypes.string,
    icon: PropTypes.oneOf(['none', 'auto', ...allIconNames]),
    backdrop: PropTypes.oneOf(['dark', 'blurred', 'none']),
};

