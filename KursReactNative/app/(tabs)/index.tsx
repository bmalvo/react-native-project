import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider} from 'react-native-safe-area-context';


import dayjs from 'dayjs';
// import 'dayjs/locale/pl';
import isToday from 'dayjs/plugin/isToday';
import { NavigationContainer , DefaultTheme, Theme} from '@react-navigation/native';
import Root from '@/src/navigation/Root';
import { COLORS } from '@/src/themes/colors';
// import { Stack } from 'expo-router';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();


dayjs.extend(isToday);
dayjs.locale('pl');

const myTheme: Theme = {

  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.background,
    card: COLORS.background
  }
};

export default function HomeScreen() {

  return <>
     <Stack.Navigator>
      <View>test</View>
       <SafeAreaProvider> 
       <StatusBar style='light' /> 
     <Root /> 
      </SafeAreaProvider> 
     </Stack.Navigator>
  </> 
};