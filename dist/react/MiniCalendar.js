import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as IconoirIcons from 'iconoir-react';
import { subMonths, format, addMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, isToday } from 'date-fns';

// run 'npm install date-fns' to install date-fns

function MiniCalendar(props) {

    const {
        bgColor = 'base-50',
        selectColor = 'accent',
        corners = 'sm',
        weekStart = 'Monday',
        hasOutline = false,
        attributes,
        listeners
      } = props;
    
    const cornerStyles = corners == 'none' ? '' : 'rounded-'+corners;
    const outlineColor = (bgColor === 'base-50' || bgColor == 'base-0') ? 'base-100' : bgColor == 'base-100' ? 'base-200' : 'base-300';
    const outlineStyles = hasOutline ? 'ring-[0.5px] ring-inset ring-'+outlineColor : '';
    let wrapperClasses = `flex w-full max-w-[240px] p-sm flex-col items-stretch relative text-sm select-none bg-${bgColor} ${cornerStyles} ${outlineStyles}`;

    const weekdayStyle = `flex-grow-1 w-full text-center font-normal pt-2xs text-gray-500`;
    const days = weekStart === 'Sunday' ? ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] : ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    const [currentMonth, setCurrentMonth] = useState(new Date()); // YOU CAN CHANGE THIS TO A PROP
    const [selectedDate, setSelectedDate] = useState(new Date()); 

    return (
        React.createElement('div', {
        ...attributes, ...listeners, 
            className: wrapperClasses,}

            /* Month Row */
            , React.createElement('div', { className: "flex flex-row justify-between items-center w-full p-1"     ,}
                , React.createElement(IconoirIcons.NavArrowLeft, { 
                    className: "transition-all hover:scale-110 cursor-pointer"  ,
onClick: () => setCurrentMonth(subMonths(currentMonth, 1)),}
                )
                , format(currentMonth, 'MMMM yyyy')
                , React.createElement(IconoirIcons.NavArrowRight, { 
                    className: "transition-all hover:scale-110 cursor-pointer"  ,
onClick: () => setCurrentMonth(addMonths(currentMonth, 1)),}
                )
            )

            /* Weekdays Row */
                , React.createElement('ul', { className: "flex flex-row gap-1 w-full p-1 font-normal"     ,}
                    , days.map((day, index) => (
                        React.createElement('li', { key: index, className: weekdayStyle,}, day)
                    ))
                )

            /* Days Grid */
            , React.createElement('div', { className: "flex flex-col gap-1 w-full font-medium"    ,}
                , React.createElement(DaysGrid, { 
                    currentMonth: currentMonth,  
                    selectedDate: selectedDate, 
                    selectColor: selectColor,
                    weekStart: weekStart,
                    setSelectedDate: setSelectedDate, 
                    cornerStyles: cornerStyles,} )
            )
        )
    );
}

function DaysGrid({ currentMonth, selectedDate, setSelectedDate, selectColor, cornerStyles, weekStart = 'Monday' }) {
    const weekStartOptions = weekStart === 'Sunday' ? { weekStartsOn: 0 } : { weekStartsOn: 1 };

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, weekStartOptions);
    let endDate = endOfWeek(monthEnd, weekStartOptions);

    const nextMonthStart = addDays(monthEnd, 1);

    const weeks = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate || weeks.length < 6) {
        let isCurrentWeek = false;
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, 'd');
            const isInCurrentMonth = isSameMonth(day, monthStart);
            const isSelected = isSameDay(day, selectedDate);
            const isCurrentDay = isToday(day);
            
            if (isCurrentDay) { isCurrentWeek = true; }

            const dayClasses = `aspect-square h-8 w-8 ${cornerStyles} flex items-center justify-center ${isSelected ? 'text-base-0' : !isInCurrentMonth ? 'text-base-400' : 'text-base-content'}`;
            const currentDay = day;

            days.push(
                React.createElement('div', { style: { width: '14.28%' }, key: currentDay.toISOString(),}
                    , React.createElement('span', { className: `${dayClasses}`,
onClick: (e) => { e.stopPropagation(); setSelectedDate(currentDay); },
                        style: {
                            backgroundColor:
                                isSelected ? `var(--${selectColor})` :
                                isCurrentDay ? 'color-mix(in srgb, var(--base-content) 12%, transparent)' : 'transparent',
                        },}

                        , formattedDate
                    )
                )
            );
            day = addDays(day, 1);
        }
        weeks.push(
            React.createElement('div', {
                className: `flex w-full gap-0 rounded`,
                style: {backgroundColor: isCurrentWeek ? 'color-mix(in srgb, var(--base-content) 8%, transparent)' : 'transparent'},
                key: day.getTime(),}

                , days
            )
        );
        days = [];
    }

    /* CONDITIONAL extra week to ensure calendar has consistent height */
    if (weeks.length < 6) {
        let extraDays = [];
        let nextDay = nextMonthStart;
        for (let i = 0; i < 7; i++) {
            formattedDate = format(nextDay, 'd');
            const isSelected = isSameDay(nextDay, selectedDate);
            const isCurrentDay = isToday(nextDay);

            const dayClasses = `aspect-square h-8 w-8 rounded-full flex items-center justify-center ${isSelected ? 'text-base-content' : 'text-base-300'}`;

            extraDays.push(
                React.createElement('div', { style: { width: '14.28%' }, key: nextDay.toISOString(),}
                    , React.createElement('span', { className: `${dayClasses}`,
onClick: (e) => { e.stopPropagation(); setSelectedDate(nextDay); },
                        style: {
                            backgroundColor: isSelected ? `var(--${selectColor})` : isCurrentDay ? 'color-mix(in srgb, var(--base-content) 12%, transparent)' : 'transparent',
                            color: isSelected ? 'white' : 'var(--base-content)'
                        },}
                        , formattedDate
                    )
                )
            );
            nextDay = addDays(nextDay, 1);
        }
        weeks.push(
            React.createElement('div', { className: "flex w-full gap-0"  , key: nextDay.getTime(),}
                , extraDays
            )
        );
    }

    return React.createElement('div', { className: "w-full",}, weeks);
}

MiniCalendar.propTypes = {
    bgColor: PropTypes.oneOf(['base-0', 'base-50', 'base-100', 'base-200']),
    selectColor: PropTypes.oneOf(['accent', 'primary', 'base-content']),
    corners: PropTypes.oneOf(['none', 'sm', 'base', 'md', 'lg']),
    weekStart: PropTypes.oneOf(['Monday', 'Sunday']),
    hasOutline: PropTypes.bool,
};

export { MiniCalendar as default };
//# sourceMappingURL=MiniCalendar.js.map
