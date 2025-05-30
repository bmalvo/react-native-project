import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from '../themes/colors';


type ItemsProps = {
    item: {
        name: string;
        value: number;
        type: string;
    },
    index: number;
}

export const FollowingDays = ({item: day, index}: ItemsProps) => {
    return (
        <View style={styles.container}>
            <Text key={index} style={ styles.content}>{day.name} </Text>
            <Text key={index} style={ styles.content}>{day.value}</Text>
            <Feather name="sun" size={40} color={COLORS.sun} style={(styles.sun, styles.content)} />
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
        flex: 1
    }
})