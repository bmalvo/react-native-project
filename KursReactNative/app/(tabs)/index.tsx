import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider} from 'react-native-safe-area-context';


import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import Root from '@/src/navigation/Root';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();


dayjs.extend(isToday);
dayjs.locale('pl');


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