import React from 'react'
import dayjs from 'dayjs';
import ListItems from './ListItems';
import { ForcastDay } from '../types/api';


type ItemsProps = {
    day: ForcastDay,
    isLast: boolean;
};

export const FollowingDays = ({ day, isLast }: ItemsProps) => {
    
    const date = dayjs(day.date).isToday() ? 'Dzisiaj' : dayjs(day.date).format("dddd")

    return (

        <ListItems
            isLast={isLast}
            title={date}
            value={`${Math.floor(day.day.mintemp_c)}° max-${Math.ceil(day.day.maxtemp_c)}°`}
            condition={day.day.condition}
        />
    )
}