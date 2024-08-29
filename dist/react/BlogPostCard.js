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
import './MediaCard.js';
import { iconMap } from './iconMap.js';

const allIconNames = Object.keys(iconMap) || [];

function BlogPostCard(props) {

    const {
        imageSrc = null,
        width = '200px',
        corners = 'md',
        imageAspectRatio = '2 / 1',
        textSize = 'small',
        title = "Post Title",
        posted_date = "Jun 2, 2023",
        author_name = "Author Name",
        description = "Short description that should be about 80-100 characters long.",
        defaultIconSet,
        attributes,
        listeners
      } = props;

    
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

    return (
        React.createElement('div', { 
        ...attributes, ...listeners, 
        className: wrapperClasses, style: {maxWidth: width},}


        /* IMAGE / THUMBNAIL */
        , React.createElement('div', { className: `relative w-full aspect-square flex items-center justify-center ${cornerStyles}`, style: imageStyles,}
            , noImage && React.createElement(Icon, { icon: 'post', defaultIconSet: defaultIconSet, className: "flex-shrink-0",} )
        )

        /* CONTENT BLOCK */
        , React.createElement('div', { className: `flex flex-col flex-grow gap-1.5`, style: truncateStyle,}

            /* Title */
            , React.createElement('h3', { className: `${titleFont} font-semibold `, style: truncateStyle,}
, title
            )

            /* post info */
            , (author_name || posted_date ) && 
            React.createElement('div', { className: `flex flex-row justify-between w-full gap-2 items-end ${smallerFont}`, style: {maxWidth: '100%'},}
            , React.createElement('span', { className: "font-medium truncate" , style: truncateStyle,}
, author_name
            )
            , posted_date && React.createElement('div', { className: "flex-shrink-0 flex flex-row items-center gap-1.5"    ,}
, posted_date
                , React.createElement(Icon, { icon: "calendar", className: "flex-shrink-0 scale-75" ,} )
            )
            )
            /* Description Lines */
            , description && React.createElement('div', { className: `${smallerFont} text-justify `,}
, description
            )
        )
        )
    );
}


BlogPostCard.propTypes = {
    imageSrc: PropTypes.string,
    imageAspectRatio: PropTypes.oneOf(['1 / 1', '2 / 1', '3 / 1', '4 / 1']),
    textSize: PropTypes.oneOf(['small', 'medium']),
    title: PropTypes.string,
    icon: PropTypes.oneOf(['none', ...allIconNames]),
    posted_date: PropTypes.string,
    author_name: PropTypes.string,
    description: PropTypes.string,
    width: PropTypes.oneOf(['100%', '200px', '320px']),
    corners: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl'])
};

export { BlogPostCard as default };
//# sourceMappingURL=BlogPostCard.js.map
