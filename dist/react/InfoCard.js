import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { iconMap } from './iconMap.js';
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
import Button from './Button.js';
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
import './FolderCard.js';
import './FileCard.js';
import './MiniCardHorizontal.js';
import './DataCard.js';
import './StatusCard.js';
import './AvatarCard.js';
import './BlogPostCard.js';
import './MediaCard.js';

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
const allIconNames = Object.keys(iconMap) || [];

function InfoCard(props) {

    const {
        title = "Card Title",
        width = '100%',
        imageSrc = null,
        imageAspectRatio = '2 / 1',
        textSize = 'small',
        icon = 'calendar',
        secondaryText = "Jun 2, 2023",
        description = "Short description that should be about 80-100 characters long.",
        primaryAction = null,
        secondaryAction = null,
        corners = 'md',
        attributes,
        listeners
      } = props;

    const sizeStyles = `w-full h-auto ${textSize == 'small' ? 'text-sm' : 'text-base'}`;
    const truncateStyle = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'};

    let wrapperClasses = `flex flex-col items-stretch justify-start gap-3 ${sizeStyles}`;

    const IconComponent = icon !== 'none' ? React.createElement(Icon, { icon: _optionalChain([icon, 'optionalAccess', _ => _.toLowerCase, 'call', _2 => _2()]),  className: "flex-shrink-0",} ) : null;

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
            , noImage && React.createElement(Icon, { icon: "image",} )
        )

        /* Content Block */
        , React.createElement('div', { style: truncateStyle, className: `flex flex-col flex-grow`,}

            /* Title */
            , React.createElement('div', { className: `mb-sm flex flex-col justify-between gap-2 items-start ${titleFont}`,}
                , React.createElement('h3', { className: `font-semibold`, style: truncateStyle,}
, title
                )

                , (secondaryText || icon) && 
                React.createElement('div', { className: `flex-shrink-0 flex flex-row items-center gap-1.5 ${smallerFont}`,}
                    , IconComponent
, secondaryText
                )
            )

            /* Card Description */
            , description && 
            React.createElement('div', { className: `${smallerFont} font-normal`, style: {minHeight: '2rem'},}
, description
            )
        )

        /* Actions */
        , (primaryAction || secondaryAction) && 
        React.createElement('div', { className: `flex flex-row items-center flex-grow-0 flex-shrink-0 justify-start text-base gap-2 pointer-events-none`,}
            , primaryAction && React.createElement(Button, { size: "small", type: "primary", text: primaryAction, onClick: ()=>{}, marginTop: 'sm',})
            , secondaryAction && React.createElement(Button, { size: "small", type: "secondary", text: secondaryAction, onClick: ()=>{}, marginTop: 'sm',})
        )
        )
    );
}


InfoCard.propTypes = {
    width: PropTypes.oneOf(['100%', '200px', '320px']),
    imageSrc: PropTypes.string,
    imageAspectRatio: PropTypes.oneOf(['2 / 1', '1 / 1', '3 / 2', '4 / 3']),
    textSize: PropTypes.oneOf(['small', 'medium']),
    title: PropTypes.string.isRequired,
    icon: PropTypes.oneOf(['none', ...allIconNames]),
    secondaryText: PropTypes.string,
    description: PropTypes.string,
    primaryAction: PropTypes.string,
    secondaryAction: PropTypes.string,
    corners: PropTypes.oneOf(["none", "sm", "md", "lg", 'xl']),
    
};

export { InfoCard as default };
//# sourceMappingURL=InfoCard.js.map
