import { Text, View, StyleSheet, ScrollView, ActivityIndicator, Image } from "react-native"
import { COLORS } from "../themes/colors";
import {FollowingDays} from "../components/FollowingDays";
import { useEffect, useState } from "react";
import { fetchCityData, fetchFollowingDays } from "../services/api";
import Footer from "../components/Footer";
import { FollowingDay } from "../types/api";


type CurrentWeather = {

    location: {
        name: string;
    };
    current: {
        temp_c: number;
        condition: {
            text: string;
            icon: string;
        }
    },
};

export const LocationDetails = () => {

    const [weatherData, setWeatherData] = useState<CurrentWeather | null>(null);
    const [nextDays, setNextDays] = useState<FollowingDay | null>(null);

    useEffect(() => {

        const init = async () => {

            const response = await fetchCityData()
            setWeatherData(response)

            const resNextDays = await fetchFollowingDays()
            setNextDays(resNextDays)
        };

        init()
    }, []);

    if (!weatherData || !nextDays) {
        
        return <ActivityIndicator color={COLORS.sun} size='large' style={{
            height: '100%',
            backgroundColor: COLORS.background
        }} />
    };

    return <>
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.cityName}>{weatherData.location.name}</Text>
                <Text style={styles.temperature}>{weatherData.current.temp_c}°</Text>
                <View style={styles.weatherContainer}>
                    <Image source={{ uri: `https://${weatherData.current.condition.icon}` }} width={130} height={130} resizeMode="contain" />
                    <Text style={styles.weather}>{weatherData.current.condition.text}</Text>
                </View>
                <View style={styles.followingDaysContainer}>

                    {nextDays.forecast.forecastday.map((day, index, allDays) => (
                        <>
                            <FollowingDays
                                day={day}
                                key={day.date}
                                isLast={index === allDays.length - 1}
                                locationName={weatherData.location.name} />
                        </>
                    ))}
                </View>
            </View>
            <Footer />
        </ScrollView>
    </>
};

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
});