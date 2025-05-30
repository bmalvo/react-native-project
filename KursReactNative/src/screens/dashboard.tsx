import { ThemedText } from "@/components/ThemedText"
import { Text, View, StyleSheet } from "react-native"
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from "../themes/colors";
import {FollowingDays} from "../components/FollowingDays";

const FOLLOWING_DAYS = [{
    name: 'dzisiaj',
    value: 22,
    type: 'sun'
},
{
    name: 'wtorek',
    value: 17,
    type: 'sun'
},{
    name: 'środa',
    value: 14,
    type: 'sun'
}
]

export const Dashboard = () => {

    return <>
        {/* <ThemedText>Dashboard</ThemedText> */}
        <View style={styles.container}>
            <Text style={styles.cityName}>Warszawa</Text>
            <Text style={styles.temperature}>22°</Text>
            <View style={styles.weatherContainer}>
            <Feather name="sun" size={100} color={COLORS.sun} style={styles.sun} />
            <Text style={styles.weather}>Słonecznie</Text>
            </View>
            {FOLLOWING_DAYS.map((day, index) => (
                <>
                    <FollowingDays item={day} index={ index} />
                </>
            )
            )}
        </View>
    </>
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        backgroundColor: COLORS.background
    },
    weatherContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    cityName: {
        fontSize: 30,
        color: COLORS.text,
        backgroundColor: COLORS.background,
        marginTop: 20
    },
    temperature: {
        fontSize: 50,
        fontWeight: 600,
        color: COLORS.text,
        backgroundColor: COLORS.background,
        marginTop: 20
    },
    sun: {
        backgroundColor: COLORS.background
    },
    weather: {
        fontSize: 26,
        color: COLORS.text,
        backgroundColor: COLORS.background
    }
})