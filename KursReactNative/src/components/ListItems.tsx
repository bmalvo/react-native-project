import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../themes/colors'
import { Condition } from '../types/api';

interface ListItemProps {

    isLast: boolean;
    title: string;
    value: string | number;
    condition: Condition;
    onPress?: () => void;
};

const ListItems = ({ isLast, title, value, condition, onPress }: ListItemProps) => {
  
    return (
        <>
            <TouchableOpacity disabled={!onPress} style={[styles.container]} onPress={onPress}>
                <Text style={styles.content}>{title} </Text>
                <Text style={[styles.content, styles.value]}>{value} </Text>
                <View style={styles.conditon}>
                    <Image source={{ uri: `https://${condition.icon}` }} width={40} height={40} resizeMode="contain" />
                </View>
            </TouchableOpacity>
            <View style={!isLast && styles.separator} />
        </>
    )
};

export default ListItems

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
    separator: {
        borderBottomWidth: 1,
        borderColor: COLORS.background
    },
    conditon: {
        flex: 1,
        alignItems: 'flex-end'
    }
});