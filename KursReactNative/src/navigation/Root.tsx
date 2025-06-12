import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LocationDetails } from '../screens/locationDetails';
import DayDetails from '../screens/dayDetails';
import SelectLocation from '../screens/selectLocation';
import { ForcastDay } from '../types/api';
import { COLORS } from '../themes/colors';


export type RootStackParamList = {

    SelectLocation: undefined;
    LocationDetails: undefined;
    DayDetails: {

        day: ForcastDay;
        locationName: string;
    }
};

const Stack = createNativeStackNavigator();

const Root = () => {
    return <Stack.Navigator
        screenOptions={{
            title: '',
            headerBackTitle: '',
            headerShadowVisible: false,
            headerTintColor: COLORS.text,
        }}
        initialRouteName='LocationDetails'
    >
        <Stack.Screen name='LocationDetails' component={LocationDetails} />
        <Stack.Screen name='dayDetails' component={DayDetails} />
        <Stack.Screen name='selectLocation' component={SelectLocation} />
    </Stack.Navigator>
    
};

export default Root