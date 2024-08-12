import React from 'react';
import PropTypes from 'prop-types';
import * as FeatherIcons from 'react-icons/fi';
import * as Ionicons from 'react-icons/io5'; 
import * as MaterialIcons from 'react-icons/md';
import * as HeroIcons from 'react-icons/hi';
import * as IconoirIcons from 'iconoir-react';

import { getIconName, iconMap } from './iconMap'

const allIconNames = Object.keys(iconMap)

export default function Icon(props) {

    const {
        icon = 'add',
        library = 'auto',
        color = 'auto',
        size = 'auto',
        defaultIconSet = 'iconoir',
        className = '',
        attributes,
        listeners
      } = props;


    const colorStyles = (color == 'auto' || color == 'none') ? '' : `text-${color}`
    let wrapperClasses = `${colorStyles}`
    
    const libraryMap = {
        feather: FeatherIcons,
        ionic: Ionicons,
        material: MaterialIcons,
        heroicons: HeroIcons,
        iconoir: IconoirIcons,
    };
    
    const useLibrary = (library == 'auto' || !library || libraryMap[library] === undefined) ? defaultIconSet : library;
    const mappedIconName = getIconName(icon, useLibrary);
    
    
    const IconLibrary = libraryMap[useLibrary];
    
    const IconComponent = IconLibrary[mappedIconName] || null

    const sizeInt = parseInt(size, 10);
    
    if (!IconComponent) return null;
    const iconSize = size == 'auto' ? `1.5em` : parseInt(sizeInt)
    return (
        <div
        className={wrapperClasses}
        {...attributes} {...listeners} 
        >
        
        <IconComponent size={iconSize} color={color} className={className} />
        </div>
    );
}

Icon.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(allIconNames)]),
    color: PropTypes.oneOf(['auto', 'none', 'primary', 'accent', 'base-content', 'info-content', 'warning-content', 'success-content', 'error-content', 'base-100', 'base-200', 'base-300']),
    size: PropTypes.oneOf(['auto', '12px', '16px', '20px', '24px', '32px']),
    library: PropTypes.oneOf(['feather', 'ionic', 'material', 'heroicons', 'iconoir', 'auto'])
};

