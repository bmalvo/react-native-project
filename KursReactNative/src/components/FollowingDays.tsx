import React from 'react'
import dayjs from 'dayjs';
import ListItems from './ListItems';
import { ForcastDay } from '../types/api';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Root';


type ItemsProps = {
    day: ForcastDay,
    isLast: boolean;
    locationName: string; 
};

export const FollowingDays = ({ day, isLast = false, locationName }: ItemsProps) => {

    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const date = dayjs(day.date).isToday() ? 'Dzisiaj' : dayjs(day.date).format("dddd")

    return (

        <ListItems
            isLast={isLast}
            title={date}
            value={`${Math.floor(day.day.mintemp_c)}° max-${Math.ceil(day.day.maxtemp_c)}°`}
            condition={day.day.condition}
            onPress={() => navigate('DayDetails', { day, locationName })}
        />
    )
};