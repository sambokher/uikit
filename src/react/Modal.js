import PropTypes from 'prop-types'
import ButtonIcon from './ButtonIcon';
import React from 'react';

export default function Modal(props) {
    
    const {
        paddingX = 'md',
        paddingY = 'md',
        modalBackground = 'base-100',
        width = '640px',
        corners = 'base',
        gap = 'base',
        backdrop = 'dark',
        children,
        onClose,
        closeButton,
        attributes,
        listeners
      } = props;
    
    // OVERLAY STYLES
    const darkBackground = `color-mix(in srgb, var(--base-content) 24%, transparent)`
    const lightBackground = `color-mix(in srgb, var(--base-content) 12%, transparent)`
    const overlayClasses = `absolute top-0 left-0 flex flex-col w-full h-full`


    // MODAL STYLES
    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const paddingStyles = `${paddingX ? `px-${paddingX}` : ''} ${paddingY ? `py-${paddingY}` : ''}`;
    const modalBg = `bg-${modalBackground} mx-auto`;
    const borderStyles = `border border-base-200`;
    const gapStyles = gap === 'none' ? '' : `${gap == 'sm' ? 'gap-xs' : gap == 'base' ? 'gap-sm' : gap == 'lg' ? 'gap-md' : 'gap-base' }`;
    const shadowStyle = {
        '480px': 'shadow-md',
        '640px': 'shadow-md', 
        '780px': 'shadow-lg',
        '960px': 'shadow-lg',
        '1200px': 'shadow-xl',
        '1440px': 'shadow-xl',
    }[width]
    let modalClasses = `flex flex-col min-h-[120px] relative items-stretch justify-start mx-auto ${shadowStyle} ${modalBg} ${gapStyles} ${borderStyles} ${paddingStyles} ${cornerStyles}`

    return (
        /* Overlay */
        <div  className={overlayClasses} 
        {...attributes} {...listeners} 
        style={{
            backgroundColor: backdrop == 'none' ? 'transparent' : backdrop == 'dark' ? darkBackground : lightBackground,
            zIndex: 100, 
            backdropFilter: backdrop == 'blurred' && 'blur(2px)',
            WebkitBackdropFilter: backdrop == 'blurred' && 'blur(2px)', /* For Safari compatibility */
        }}>
            {/* Modal */}
            <div className={modalClasses}
            style={{width: '100%', maxWidth: width, marginTop: 80, 
            animation: 'fadeInUp 100ms ease-in-out',
             }}>
            
            {closeButton && <div className='absolute right-1 top-1 transition-all rounded-lg'><ButtonIcon icon='close'
            size="small"
            type={"ghost"}
onClick={onClose}
          /></div>}
            {children}
            </div>
        </div>
    );
}


Modal.propTypes = {
    modalBackground: PropTypes.oneOf(['base-100', 'base-0', 'none']),
    backdrop: PropTypes.oneOf(['dark', 'blurred', 'none']),
    width: PropTypes.oneOf(['480px', '640px', '780px', '960px', '1200px']),
    paddingX: PropTypes.oneOf(["none", "sm", "base", "md", "lg", 'xl', '2xl']),
    paddingY: PropTypes.oneOf(["none", "sm", "base", "md", "lg", 'xl', '2xl']),
    gap: PropTypes.oneOf(['none', 'sm', 'base', 'md', 'lg']),
    corners: PropTypes.oneOf(['none', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl']),
    closeButton: PropTypes.bool,
    children: PropTypes.node
};

