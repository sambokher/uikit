import React from 'react';
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
import Button from './Button.js';
import ButtonIcon from './ButtonIcon.js';
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
import './Icon.js';
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
import './MediaCard.js';
import { spacingMap } from './helpers.js';

function Pagination(props) {
    
    const {
        type = 'standard',
        textSize = 'base',
        paddingX = null, 
        paddingY = null,
        currentPage = 1,
        totalPages = 3,
        onChange = () => {},
        attributes,
        listeners
      } = props;

    const selectedIndex = currentPage;
    // local state to imitate page selection, move this state up to the parent and adjust local functions

    const paddingStyles = `${paddingX ? `px-${spacingMap[paddingX]}` : ''} ${paddingY ? `py-${spacingMap[paddingY]}` : ''}`;    
    const justifyStyle = type == 'mini' ? 'justify-end' : 'justify-between';
    const textStyles = textSize != 'auto' ? `text-${textSize}` : '';
    let wrapperClasses = `w-full flex flex-row ${justifyStyle} items-center gap-2 ${paddingStyles} ${textStyles}`;

    function handlePageChange(page) {
        if (page < 1 || page > totalPages) return
        onChange(page);
    }
    
    const LeftButton =
      type == "standard" ? (
        React.createElement(Button, {
          text: "Back",
          size: "small",
          type: "ghost",
          isDisabled: selectedIndex == 1,
          leftIcon: "chevron-left",
          onClick: () => handlePageChange(selectedIndex - 1),}
        )
      ) : (
        React.createElement(ButtonIcon, {
          icon: "chevron-left",
          size: "small",
          type: "ghost",
          isDisabled: selectedIndex == 1,
          onClick: () => handlePageChange(selectedIndex - 1),}
        )
      );

    const RightButton =
      type == "standard" ? (
        React.createElement(Button, {
          text: "Next",
          size: "small",
          type: "ghost",
          isDisabled: selectedIndex >= totalPages,
          rightIcon: "chevron-right",
          onClick: () => handlePageChange(selectedIndex + 1),}
        )
      ) : (
        React.createElement(ButtonIcon, {
          icon: "chevron-right",
          size: "small",
          type: "ghost",
          isDisabled: selectedIndex >= totalPages,
          onClick: () => handlePageChange(selectedIndex + 1),}
        )
      );
    
    return (
        React.createElement('div', {
        ...attributes, ...listeners, 
            className: wrapperClasses,}

                        , LeftButton
                        , type == 'standard' ? 
                        React.createElement(PaginationArray, {
                            totalPages: totalPages,
                            currentPage: selectedIndex,
                            handlePageChange: handlePageChange,}
                        ) : 
                        React.createElement('div', { className: "flex flex-row gap-2"  ,}
                            , currentPage, " of "  , totalPages
                        )
                        , RightButton
        )
    );
}
function PaginationArray ({ totalPages, currentPage, handlePageChange }){
    const createPaginationArray = (totalPages, currentPage) => {
        let paginationArray = [];

        if (totalPages <= 5) {
            // If the total number of pages is less than or equal to 5, show all pages
            for (let i = 1; i <= totalPages; i++) {
                paginationArray.push(i);
            }
        } else {
            
            // needs to be refactored into a more elegant solution
            if (currentPage < 4) {
                paginationArray =[1, 2, 3, 4, '...', totalPages];
            } else if (currentPage == 4) {
                paginationArray =[1, '...', 3, 4, 5, '...', totalPages];
            } else if (totalPages - currentPage < 3) {
                paginationArray = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
            } else if (totalPages - currentPage == 3) {
                paginationArray = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, '...', totalPages];
            } else {
                paginationArray = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
            }
        }

        return paginationArray;
    };

    const paginationArray = createPaginationArray(totalPages, currentPage);

    return (
        React.createElement('div', { className: "flex flex-row gap-2"  ,}
            , paginationArray.map((page, index) => {
                if (page === '...') {
                    return (
                        React.createElement('span', { key: `ellipsis-${index}`,}, "..."

                        )
                    );
                }
                return (
                    React.createElement(Button, {
                        key: page,
                        text: `${page}`,
                        size: "small",
                        type: currentPage === page  ? 'secondary' : 'ghost',
                        onClick: () => handlePageChange(page),}
                    )
                );
            })
        )
    );
}
Pagination.propTypes = {
    type: PropTypes.oneOf(['mini', 'standard']),
    textSize: PropTypes.oneOf(['auto', 'xs', 'sm', 'base', 'md']),
    paddingX: PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px', '24px', '32px']),
    paddingY: PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px', '24px', '32px']),
    currentPage: PropTypes.number, // starts at 1
    totalPages: PropTypes.number,
    onChange: PropTypes.func

};

export { Pagination as default };
//# sourceMappingURL=Pagination.js.map
