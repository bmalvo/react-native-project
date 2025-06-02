import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { COLORS } from '../themes/colors';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import isToday from 'dayjs/plugin/isToday';

dayjs.extend(isToday);
dayjs.locale('pl');


type ItemsProps = {
    day: {
        date: string;
        day: {
            mintemp_c: number;
            maxtemp_c: number;
            condition: {
                icon: string;
            }
        }
    },
    isLast: boolean;
};

export const FollowingDays = ({ day, isLast }: ItemsProps) => {
    
    const date = dayjs(day.date).isToday() ? 'Dzisiaj' : dayjs(day.date).format("dddd")

    return (
        <View style={[styles.container, !isLast && styles.separator]}>
            <Text style={styles.content}>{date} </Text>
            <Text style={[styles.content, styles.value]}>min-{Math.floor(day.day.mintemp_c)}° max-{Math.ceil(day.day.maxtemp_c)}°</Text>
            <Image source={{ uri: `https://${day.day.condition.icon}` }} width={40} height={40} resizeMode="contain" />
        </View>
    )
};


const styles = StyleSheet.create({

    sun: {
        backgroundColor: COLORS.background
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 40
    },
    content: {
        flex: 1,
        color: COLORS.text
    },
    value: {
        textAlign: 'left',
        fontWeight: '600',
    },
    type: {
        textAlign: 'right'
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: COLORS.background
    }
});