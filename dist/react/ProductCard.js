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
import './InfoCard.js';
import './FolderCard.js';
import './FileCard.js';
import './MiniCardHorizontal.js';
import './DataCard.js';
import './StatusCard.js';
import './AvatarCard.js';
import './BlogPostCard.js';
import './MediaCard.js';
import { MediaImage } from 'iconoir-react';

function ProductCard(props) {

    const {
        title = "Product Name",
        descriptionFirstLine = "Description line 1",
        descriptionSecondLine = null,
        width = '100%',
        corners = 'md',
        textSize = 'small',
        
        price = "$50",
        imageSrc = null,
        rating = "4.5",
        tag = null,
        priceNote = "total",
        attributes,
        listeners
      } = props;

    const sizeStyles = `w-full h-auto ${textSize == 'small' ? 'text-sm' : 'text-base'}`;
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'};

    let wrapperClasses = `flex flex-col items-stretch justify-start gap-3 ${sizeStyles}`;
    
    const contentClasses = `flex flex-col flex-grow`;
    
    const noImage = !imageSrc;
    const imageStyles = useMemo(() => ({
        background: !noImage && `linear-gradient(rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.12)), url(${imageSrc}) no-repeat center center / cover`, 
        backgroundSize: 'cover', 
        backgroundColor: `color-mix(in srgb, var(--base-content) 20%, transparent)`
    }), [imageSrc, noImage]);

    
    const cornerStyles = corners === 'none' ? '' : `rounded-${corners}`;
    const titleFont = textSize == 'small' ? 'text-base' : 'text-lg';
    const smallerFont = textSize == 'small' ? 'text-xs' : 'text-sm';


    return (
        React.createElement('div', { 
        ...attributes, ...listeners, 
        className: wrapperClasses, style: {maxWidth: width},}

        /* IMAGE */
        , React.createElement('div', { className: `relative w-full aspect-square flex items-center justify-center ${cornerStyles}`, style: imageStyles,}

            /* TAG */
            , tag && 
                React.createElement('div', { className: "absolute top-1.5 left-2 rounded-full px-3 py-1.5 bg-base-0 shadow font-medium max-w-[160px] truncate overflow-ellipsis whitespace-nowrap"            ,}
, tag
            )

            /* ICON */
            , React.createElement('div', { className: "absolute top-1.5 right-2 rounded-full transition-all cursor-pointer p-2 hover:bg-base-0"       ,}
                , React.createElement(Icon, { icon: 'heart',} )
            )
        , noImage && React.createElement(MediaImage, { width: 60, height: 60, style: {opacity: '0.3'},} )
        )

        /* Description */
        , React.createElement('div', { className: contentClasses,}

        /* Title */
        , React.createElement('div', { className: `mb-sm flex flex-row gap-2 justify-between items-center ${titleFont}`,}
            , React.createElement('h3', { className: `font-semibold`, style: truncateStyle,}
, title
            )
            , rating && React.createElement('div', { className: "flex-shrink-0 flex flex-row items-center gap-0.5"    ,}
                , React.createElement(Icon, { icon: "star", className: "flex-shrink-0 scale-75" ,})
, rating
            )
        )

        /* Description Lines */
        , descriptionFirstLine && React.createElement('span', { className: `${smallerFont} font-normal truncate overflow-ellipsis`, style: truncateStyle,}
, descriptionFirstLine
        )
        , descriptionSecondLine && React.createElement('span', { className: `${smallerFont} font-light`, style: truncateStyle,}
, descriptionSecondLine
        )

        /* Price and Price Note */
        , price && 
            React.createElement('div', { className: `mt-2 flex flex-row gap-1 items-end items-baseline ${smallerFont}`,}
                , React.createElement('span', { style: truncateStyle, className: `font-semibold ${titleFont}`,}
, price
                )
                , React.createElement('span', { style: truncateStyle,}
, priceNote
                )
            )
        
        )
        )
    );
}

ProductCard.propTypes = {
    imageSrc: PropTypes.string,
    textSize: PropTypes.oneOf(['small', 'medium']),
    width: PropTypes.oneOf(['100%', '200px', '320px']),
    title: PropTypes.string.isRequired,
    tag: PropTypes.string,
    rating: PropTypes.string,
    descriptionFirstLine: PropTypes.string,
    descriptionSecondLine: PropTypes.string,
    price: PropTypes.string,
    priceNote: PropTypes.string,
    corners: PropTypes.oneOf(["none", "sm", "md", "lg", 'xl']),
};

export { ProductCard as default };
//# sourceMappingURL=ProductCard.js.map
