import { Text, View, StyleSheet, ScrollView, ActivityIndicator } from "react-native"
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from "../themes/colors";
import {FollowingDays} from "../components/FollowingDays";
import { useEffect, useState } from "react";
import { fetchCityData } from "../services/api";

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

type CurrentWeather = {
    location: {
        name: string;
        // add other properties if needed
    };
    current: {
        temp_c: number;
    }
    // add other properties if needed
}

export const Dashboard = () => {

    const [current, setCurrent] = useState<CurrentWeather | null>(null);

    useEffect(() => {

        const init = async () => {

            const response = await fetchCityData()
            setCurrent(response)
        }

        init()
    }, []);

    if (!current) {
        
        return <ActivityIndicator color={COLORS.sun} size='large' style={{
            height: '100%',
            backgroundColor: COLORS.background
        }} />
    }

    return <>
        <ScrollView>

            <View style={styles.container}>
                <Text style={styles.cityName}>{ current.location.name}</Text>
                <Text style={styles.temperature}>{ current.current.temp_c}°</Text>
                <View style={styles.weatherContainer}>
                    <Feather name="sun" size={100} color={COLORS.sun} style={styles.sun} />
                    <Text style={styles.weather}>Słonecznie</Text>
                </View>
                <View style={styles.followingDaysContainer}>

                    {FOLLOWING_DAYS.map((day, index) => (
                        <>
                            <FollowingDays day={day} key={index} isLast={ index === FOLLOWING_DAYS.length - 1} />
                        </>
                    )
                    )}
                </View>
            </View>
        </ScrollView>
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
    },
    followingDaysContainer: {
        margin: 20,
        marginTop: 40,
        backgroundColor: COLORS.lightBlue,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    }
})