import React, { useMemo } from 'react';
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

function MediaCard(props) {

    const {
        imageSrc = null,
        imageAspectRatio = '2 / 1',
        textSize = 'small',
        title = "Title",
        description = "Short description of media",
        type = "oneMedia",
        corners = "md",
        width = '100%',
        defaultIconSet,
        attributes,
        listeners
      } = props;

    // Determine background styles
    const sizeStyles = `w-full h-auto ${textSize == 'small' ? 'text-sm' : 'text-base'}`;
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'};

    let wrapperClasses = `flex flex-col items-stretch justify-start gap-3 ${sizeStyles}`;

    const noImage = !imageSrc;
    
    const imageStyles = useMemo(() => ({
        background: !noImage && `linear-gradient(rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.12)), url(${imageSrc}) no-repeat center center / cover`,
        backgroundSize: 'cover',
        backgroundColor: `color-mix(in srgb, var(--base-content) 20%, transparent)`,
        aspectRatio: imageAspectRatio
    }), [imageSrc, noImage, imageAspectRatio]);

    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const titleFont = textSize == 'small' ? 'text-base' : 'text-lg';
    const smallerFont = textSize == 'small' ? 'text-xs' : 'text-sm';
    
    const dotStyle = `w-[6px] h-[6px] rounded-full`;
    
    return (
        React.createElement('div', { 
        ...attributes, ...listeners, 
        className: wrapperClasses, style: {maxWidth: width},}

        /* THUMBNAIL */
        , React.createElement('div', { className: `group relative w-full flex items-center justify-center ${cornerStyles}`, style: imageStyles,}

            , type == 'mediaGallery' && React.createElement(React.Fragment, null
            /* ARROWS */
            , React.createElement('div', { className: "absolute top-1/2 -translate-y-1/2 left-0 text-base-0 w-full px-sm justify-between items-center flex flex-row gap-2"           ,}
                    , React.createElement('div', { style: {backgroundColor: `color-mix(in srgb, var(--base-0) 20%, transparent)`}, className: `rounded-full p-1 transition-all cursor-pointer hover:scale-110 opacity-0 group-hover:opacity-100`,}, React.createElement(Icon, { icon: "chevron-left",}  ))
                    , React.createElement('div', { style: {backgroundColor: `color-mix(in srgb, var(--base-0) 20%, transparent)`}, className: `rounded-full p-1 transition-all cursor-pointer hover:scale-110 opacity-0 group-hover:opacity-100`,}, React.createElement(Icon, { icon: "chevron-right",}  ))
            )

            /* DOTS */
            , React.createElement('div', { className: "absolute bottom-2 -translate-x-1/2 left-1/2 flex flex-row gap-1 cursor-pointer"       ,}
                , React.createElement('div', { className: dotStyle, style: {backgroundColor: `color-mix(in srgb, var(--base-0) 40%, transparent)`},})
                , React.createElement('div', { className: dotStyle, style: {backgroundColor: `color-mix(in srgb, var(--base-0) 40%, transparent)`},})
                , React.createElement('div', { className: dotStyle, style: {backgroundColor: `color-mix(in srgb, var(--base-0) 80%, transparent)`},})
                , React.createElement('div', { className: dotStyle, style: {backgroundColor: `color-mix(in srgb, var(--base-0) 40%, transparent)`},})
            )
            )
            , noImage && React.createElement(Icon, { icon: 'image', defaultIconSet: defaultIconSet, className: "flex-shrink-0",} )
        )

        /* CONTENT BLOCK */
        , (title || description) &&
        React.createElement('div', { className: "flex flex-row gap-2 justify-between items-start group relative"      ,}
            /* TITLE & DESCRIPTION */
            , React.createElement('div', { className: "flex-grow flex flex-col gap-1.5"   , style: truncateStyle,}
                , React.createElement('h3', { className: `${titleFont} font-semibold`,}
, title
                )
                , description && React.createElement('span', { className: `${smallerFont} truncate overflow-ellipsis`, style: truncateStyle,}
, description
                )
            )
            /* ICON */
            , React.createElement('div', { className: `rounded transition-all cursor-pointer hover:scale-110 opacity-0 group-hover:opacity-100`,}
                , React.createElement(Icon, { icon: "heart",} )
            )
        )

        )
    );
}


MediaCard.propTypes = {
    imageSrc: PropTypes.string,
    imageAspectRatio: PropTypes.oneOf(['2 / 1', '1 / 1', '3 / 2', '4 / 3']),
    textSize: PropTypes.oneOf(['small', 'medium']),
    title: PropTypes.string.isRequired,
    icon: PropTypes.oneOf(['none', 'Star', 'MoreVert', 'MoreHoriz', 'Link']),
    description: PropTypes.string,
    type: PropTypes.oneOf(['mediaGallery', 'oneMedia']),
    corners: PropTypes.oneOf(["none", "sm", "md", "lg", 'xl']),
    width: PropTypes.oneOf(['100%', '200px', '320px', '400px']),
    
};

export { MediaCard as default };
//# sourceMappingURL=MediaCard.js.map
