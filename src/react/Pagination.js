import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Button, ButtonIcon } from './index';
import { spacingMap } from './helpers.js';

export default function Pagination(props) {
    
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

    const selectedIndex = currentPage
    // local state to imitate page selection, move this state up to the parent and adjust local functions

    const paddingStyles = `${paddingX ? `px-${spacingMap[paddingX]}` : ''} ${paddingY ? `py-${spacingMap[paddingY]}` : ''}`;    
    const justifyStyle = type == 'mini' ? 'justify-end' : 'justify-between'
    const textStyles = textSize != 'auto' ? `text-${textSize}` : ''
    let wrapperClasses = `w-full flex flex-row ${justifyStyle} items-center gap-2 ${paddingStyles} ${textStyles}`

    function handlePageChange(page) {
        if (page < 1 || page > totalPages) return
        onChange(page)
    }
    
    const LeftButton =
      type == "standard" ? (
        <Button
          text="Back"
          size="small"
          type={"ghost"}
          isDisabled={selectedIndex == 1}
          leftIcon="chevron-left"
          onClick={() => handlePageChange(selectedIndex - 1)}
        />
      ) : (
        <ButtonIcon
          icon='chevron-left'
          size="small"
          type={"ghost"}
          isDisabled={selectedIndex == 1}
          onClick={() => handlePageChange(selectedIndex - 1)}
        />
      );

    const RightButton =
      type == "standard" ? (
        <Button
          text="Next"
          size="small"
          type={"ghost"}
          isDisabled={selectedIndex >= totalPages}
          rightIcon="chevron-right"
          onClick={() => handlePageChange(selectedIndex + 1)}
        />
      ) : (
        <ButtonIcon
          icon='chevron-right'
          size="small"
          type={"ghost"}
          isDisabled={selectedIndex >= totalPages}
          onClick={() => handlePageChange(selectedIndex + 1)}
        />
      );
    
    return (
        <div
        {...attributes} {...listeners} 
            className={wrapperClasses} 
        >
                        {LeftButton}
                        {type == 'standard' ? 
                        <PaginationArray
                            totalPages={totalPages}
                            currentPage={selectedIndex}
                            handlePageChange={handlePageChange}
                        /> : 
                        <div className='flex flex-row gap-2'>
                            {currentPage} of {totalPages}
                        </div>}
                        {RightButton}
        </div>
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
        <div className='flex flex-row gap-2'>
            {paginationArray.map((page, index) => {
                if (page === '...') {
                    return (
                        <span key={`ellipsis-${index}`}>
                            ...
                        </span>
                    );
                }
                return (
                    <Button
                        key={page}
                        text={`${page}`}
                        size="small"
                        type={currentPage === page  ? 'secondary' : 'ghost'}
                        onClick={() => handlePageChange(page)}
                    />
                );
            })}
        </div>
    );
};

Pagination.propTypes = {
    type: PropTypes.oneOf(['mini', 'standard']),
    textSize: PropTypes.oneOf(['auto', 'xs', 'sm', 'base', 'md']),
    paddingX: PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px', '24px', '32px']),
    paddingY: PropTypes.oneOf(['4px', '6px', '8px', '12px', '16px', '24px', '32px']),
    currentPage: PropTypes.number, // starts at 1
    totalPages: PropTypes.number,
    onChange: PropTypes.func

};

