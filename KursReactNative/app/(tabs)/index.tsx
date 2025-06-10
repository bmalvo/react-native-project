import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider} from 'react-native-safe-area-context';


import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import isToday from 'dayjs/plugin/isToday';
import { NavigationContainer , DefaultTheme, Theme} from '@react-navigation/native';
import Root from '@/src/navigation/Root';
import { COLORS } from '@/src/themes/colors';

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

  return <NavigationContainer theme={myTheme}>
      <View>test</View>
       <SafeAreaProvider> 
       <StatusBar style='light' /> 
     <Root /> 
      </SafeAreaProvider> 
      </NavigationContainer> 
};