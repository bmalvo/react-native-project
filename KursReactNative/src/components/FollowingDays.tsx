import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from '../themes/colors';


type ItemsProps = {
    day: {
        name: string;
        value: number;
        type: string;
    },
    isLast: boolean
}

export const FollowingDays = ({day, isLast}: ItemsProps) => {
    return (
        <View style={[styles.container, !isLast && styles.separator]}>
            <Text  style={ styles.content}>{day.name} </Text>
            <Text style={ [styles.content, styles.value]}>{day.value}</Text>
            <Feather name="sun" size={40} color={COLORS.sun} style={(styles.sun, styles.content, styles.type)} />
        </View>
    )
}


const styles = StyleSheet.create({

    sun: {
        backgroundColor: COLORS.background
    },
    container: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
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